declare var require: any;
let antlr4 = require('./antlr4')
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser;
let asmCode: string[] = [];

enum VarType {
    INTEGER
}

export function parse(txt: string) : string
{
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);  
    parser.buildParseTrees = true;

    //change ANTLR's error handling
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners()
    parser.addErrorListener(handler);
    
    //this assumes your start symbol is 'start'
    let antlrroot = parser.program();

    let root: TreeNode = walk(parser, antlrroot);

    return makeAsm(root);
}

function walk(parser: any, node: any)
{
    let p: any = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line: number = p.line;
        let lexeme: string = p.text;
        let ty: number = p.type;
        let sym: string = parser.symbolicNames[ty]
        if (sym === null)
            sym = lexeme.toUpperCase();
        let T = new Token(sym, line, lexeme)
        return new TreeNode(sym, T)
    } else {
        let idx: number = p.ruleIndex;
        let sym: string = parser.ruleNames[idx]
        let N = new TreeNode(sym, undefined)
        for (let i = 0; i < node.getChildCount(); ++i) {
            let child: any = node.getChild(i)
            N.children.push(walk(parser, child));
        }
        return N;
    }
}

class ErrorHandler {
    syntaxError(rec: any, sym: any, line: number,
        column: number, msg: string, e: any) {
        console.log("Syntax error:", msg, "on line", line,
            "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}

class Token
{
    sym: string;
    line: number;
    lexeme: string;
    constructor(sym: string, line: number, lexeme: string) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`
    }
}

class TreeNode
{
    sym: string;
    token: Token;
    children: TreeNode[];
    constructor(sym: string, token: Token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    //toString function as given in other notes
}

//==============================================
//              ASSEMBLY STUFF
//==============================================

function emit(instr: string) {
    console.log("Wrote : "+ instr);
    asmCode.push(instr);
}

function programNodeCode(n: TreeNode) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}

function braceblockNodeCode(n: TreeNode) {
    console.log("entered brace");
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
    console.log("exit brace");
}

function stmtsNodeCode(n: TreeNode)
{
    console.log("entered stmts");
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
    console.log("exit stmts");
}

function stmtNodeCode(n: TreeNode) {
    //stmt -> cond | loop | return-stmt SEMI
    console.log("entered stmt");
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c); break;
        case "returnstmt":
            returnstmtNodeCode(c); break;
        default:
            ICE();
    }
    console.log("exit stmt");
}

function returnstmtNodeCode(n: TreeNode)
{
    console.log("entered return");
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]);
    //...move result from expr to rax...
    emit("pop rax ; retrun node");
    emit("ret ; retrun node");
    console.log("exit return");
}

function exprNodeCode(n: TreeNode): VarType
{
    console.log("entered expr");
    return orexpNodeCode(n.children[0]);
    console.log("exit expr");
}

function orexpNodeCode(n: TreeNode): VarType
{
    console.log("entered orex");
    //orexp -> orexp OR andexp | andexp
    if (n.children.length == 1) {
        console.log("exit orexp : 1");
        return andexpNodeCode(n.children[0]);
    }
    else
    {
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        if (orexpType != VarType.INTEGER)
            ICE();
        let lbl = label();
        emit("cmp qword [rsp], 0 ; or node");
        emit(`jne ${lbl} ; or node`);
        emit("add rsp,8 ; or node");      //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        console.log(andexpType);
        convertStackTopToZeroOrOneInteger(andexpType);
        if (andexpType != VarType.INTEGER)
            ICE();
        emit(`${lbl}: ; or node`);
        console.log("exit orexp :  2");
        return VarType.INTEGER;   //always integer, even if float operands
    }
    
}

function andexpNodeCode(n: TreeNode): VarType {
    console.log("entered andexp");
    // andexp -> andexp AND notexp | notexp
    if (n.children.length == 1) {
        console.log("exit andexp : 1");
        return notexpNodeCode(n.children[0]);
    }
    let andexpType = andexpNodeCode(n.children[0]);
    convertStackTopToZeroOrOneInteger(andexpType); 
    if (andexpType != VarType.INTEGER)
        ICE();
    let lbl = label();
    emit("cmp qword [rsp], 0 ; and node");
    emit(`je ${lbl} ; and node`);
    emit("add rsp, 8 ; and node");
    let notexpType = notexpNodeCode(n.children[2]);
    convertStackTopToZeroOrOneInteger(notexpType);
    if (notexpType != VarType.INTEGER)
        ICE();
    emit(`${lbl}: ; and node`);
    console.log("exit andexp : 2");
    return VarType.INTEGER;
}

function notexpNodeCode(n: TreeNode): VarType
{
    console.log("entered notexp");
    // notexp -> NOT notexp | rel
    if (n.children.length == 1) {
        console.log("exit notexp");
        return relNodeCode(n.children[0]);
       
        
    }
    let type = notexpNodeCode(n.children[1]);
    if (type != VarType.INTEGER)
        ICE();
    let lbl = label();
    let lbl2 = label();
    emit("mov rax, [rsp] ; not node");
    emit("cmp rax, 0 ; not node");
    emit(`je ${lbl} ; not node`);
    emit("mov rax, 0 ; not node");
    emit(`jmp ${lbl2} ; not node`);
    emit(`${lbl}: ; not node`);
    emit("mov rax, 1 ; not node");
    emit(`${lbl2}: ; not node`);
    emit("add rsp, 8 ; not node");
    emit("push rax ; not node");
    console.log("exit notexp");
    return VarType.INTEGER;
}

function sumNodeCode(n: TreeNode): VarType {
    console.log("entered sum");
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1)
        return termNodeCode(n.children[0]);
    else {
        let sumtype = sumNodeCode(n.children[0]);
        let termtype = termNodeCode(n.children[2]);
        if (sumtype !== VarType.INTEGER || termtype != VarType.INTEGER)
           ICE();
        emit("pop rbx ; sum node");    //second operand
        emit("pop rax ; sum node");    //first operand

        switch (n.children[1].sym) {
            case "PLUS":
                emit("add rax, rbx ; sum node");
                break;
            case "MINUS":
                emit("sub rax, rbx ; sum node");
                break;
            default:
                ICE
        }
        emit("push rax ; sum node");
        console.log("exit sum");
        return VarType.INTEGER;
    }
}

function relNodeCode(n: TreeNode): VarType {
    console.log("entered rel");
    //rel |rarr| sum RELOP sum | sum
    if (n.children.length === 1)
    {
        console.log("exit rel : 1");
        return sumNodeCode(n.children[0]);
    }
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type != VarType.INTEGER)
            ICE();
        emit("pop rax ; rel node"); //second operand
        //first operand still on stack
        emit("cmp [rsp],rax ; rel node");    //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=": emit("setge al ; rel node"); break;
            case "<=": emit("setle al ; rel node"); break;
            case ">": emit("setg  al ; rel node"); break;
            case "<": emit("setl  al ; rel node"); break;
            case "==": emit("sete  al ; rel node"); break;
            case "!=": emit("setne al ; rel node"); break;
            default: ICE()
        }
        emit("movzx qword rax, al ; rel node");   //move with zero extend
        emit("mov [rsp], rax ; rel node");
        console.log("exit rel : 2");
        return VarType.INTEGER;
    }
}

function termNodeCode(n: TreeNode): VarType {
    console.log("entered term");

    if (n.children.length == 1) {
        return negNodeCode(n.children[0]);
    }

    let t0 = termNodeCode(n.children[0]);
    let t1 = negNodeCode(n.children[2]);
    if (t0 != VarType.INTEGER || t1 != VarType.INTEGER)
        ICE();
    emit("pop rax ; term node");
    emit("pop rbx ; term node");

    switch (n.children[1].token.lexeme)
    {
        case "*":
            emit("imul rax, rbx ; term node");
            break;
        case "/":
            emit("idiv rax, rbx ; term node");
            break;
        default:
            ICE();
    }
    emit("push rax ; term node");

    console.log("exit term");
    return VarType.INTEGER;
}

function negNodeCode(n: TreeNode): VarType {
    console.log("entered neg");

    if (n.children.length == 1) {
        return factorNodeCode(n.children[0]);
    }

    let type = negNodeCode(n.children[1]);
    if (type != VarType.INTEGER)
        ICE();
    emit("pop rax ; neg node");
    emit("movq xmm0, rax ; neg node");
    emit("mov rax, -1 ; neg node");
    emit("movq xmm1, rax ; neg node");
    emit("mulsd xmm0, xmm1 ; neg node");
    emit("movq rax, xmm0 ; neg node");
    emit("push rax ; neg node");
    console.log("exit neg");
    return VarType.INTEGER;
}

function convertStackTopToZeroOrOneInteger(t: VarType) {
    if (t == VarType.INTEGER) {
        console.log("CONVERTING TO ZERO OR ONE : " + t);
        emit("cmp qword [rsp], 0 ; convert 1/0");
        emit("setne al ; convert 1/0");
        emit("movzx rax, al ; convert 1/0");
        emit("mov [rsp], rax ; convert 1/0");
    } else {
        ICE();
    }
}

function factorNodeCode(n: TreeNode): VarType {
    console.log("entered factor");
    //factor -> NUM | LP expr RP
    let child = n.children[0];
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v} ; factor node`)
            console.log("exit factor");
            return VarType.INTEGER;
        case "LP":
            console.log("exit factor");
            return exprNodeCode(n.children[1]);
        default:
            ICE();
    }
}

function condNodeCode(n: TreeNode) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock

    if (n.children.length === 5)
    {
        console.log("entered if");
        //no 'else'
        exprNodeCode(n.children[2]);    //leaves result in rax
        emit("pop rax ; cond node");
        emit("cmp rax, 0 ; cond node");
        var endifLabel = label();
        emit(`je ${endifLabel} ; cond node`); //"je" is jump equal "jne" is jump not equal
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}: ; cond node`); 
        console.log("exit if");
    } else
    {
        console.log("entered if else");
        //we do the same thing but jump to a new lable if not equal
        exprNodeCode(n.children[2]);    //leaves result in rax
        emit("pop rax ; cond node");
        emit("cmp rax, 0 ; cond node");
        var endifLabel = label();
        var endElseLabel = label();


        emit(`jne ${endifLabel} ; cond node`); // if is true
        emit(`je ${endElseLabel} ; cond node`); //


        emit(`${endifLabel}: ; cond node`); //if lable to jump to
        braceblockNodeCode(n.children[4]); //if brace code

        emit(`${endElseLabel}: ; cond node`); //else lable to jump to
        braceblockNodeCode(n.children[6]); //else brace code
        console.log("exit if else");
    }
}

function loopNodeCode(n: TreeNode)
{
    console.log("entered loop");
    var startLbl = label()
    var endLbl = label();

    emit(`${startLbl}: ; loop node `);
    exprNodeCode(n.children[2]);
    emit("pop rax ; loop node ");
    emit("cmp rax, 0 ; loop node ");
    emit(`je ${endLbl} ; loop node `);

    braceblockNodeCode(n.children[4]);

    exprNodeCode(n.children[2]);
    emit("pop rax ; loop node ");
    emit("cmp rax, 0 ; loop node ");

    emit(`jne ${startLbl} ; loop node `);
    emit(`${endLbl}: ; loop node `);
    console.log("exit loop");
}

let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}

function ICE()
{
    return asmCode.join("\n");
    throw new Error("ICE error");
}

function makeAsm(root: TreeNode)
{
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode.join("\n");
}