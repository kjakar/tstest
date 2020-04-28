"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let antlr4 = require('./antlr4');
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser;
let asmCode = [];
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
})(VarType || (VarType = {}));
function parse(txt) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    //change ANTLR's error handling
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    //this assumes your start symbol is 'start'
    let antlrroot = parser.program();
    let root = walk(parser, antlrroot);
    return makeAsm(root);
}
exports.parse = parse;
function walk(parser, node) {
    let p = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line = p.line;
        let lexeme = p.text;
        let ty = p.type;
        let sym = parser.symbolicNames[ty];
        if (sym === null)
            sym = lexeme.toUpperCase();
        let T = new Token(sym, line, lexeme);
        return new TreeNode(sym, T);
    }
    else {
        let idx = p.ruleIndex;
        let sym = parser.ruleNames[idx];
        let N = new TreeNode(sym, undefined);
        for (let i = 0; i < node.getChildCount(); ++i) {
            let child = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}
class ErrorHandler {
    syntaxError(rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
class Token {
    constructor(sym, line, lexeme) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`;
    }
}
class TreeNode {
    constructor(sym, token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
}
//==============================================
//              ASSEMBLY STUFF
//==============================================
function emit(instr) {
    console.log("Wrote : " + instr);
    asmCode.push(instr);
}
function programNodeCode(n) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    console.log("entered brace");
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
    console.log("exit brace");
}
function stmtsNodeCode(n) {
    console.log("entered stmts");
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
    console.log("exit stmts");
}
function stmtNodeCode(n) {
    //stmt -> cond | loop | return-stmt SEMI
    console.log("entered stmt");
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "returnstmt":
            returnstmtNodeCode(c);
            break;
        default:
            ICE();
    }
    console.log("exit stmt");
}
function returnstmtNodeCode(n) {
    console.log("entered return");
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]);
    //...move result from expr to rax...
    emit("pop rax");
    emit("ret");
    console.log("exit return");
}
function exprNodeCode(n) {
    console.log("entered expr");
    return orexpNodeCode(n.children[0]);
    console.log("exit expr");
}
function orexpNodeCode(n) {
    console.log("entered orex");
    //orexp -> orexp OR andexp | andexp
    if (n.children.length == 1) {
        console.log("exit orexp : 1");
        return andexpNodeCode(n.children[0]);
    }
    else {
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        if (orexpType != VarType.INTEGER)
            ICE();
        let lbl = label();
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp,8"); //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        console.log(andexpType);
        convertStackTopToZeroOrOneInteger(andexpType);
        if (andexpType != VarType.INTEGER)
            ICE();
        emit(`${lbl}:`);
        console.log("exit orexp : 2");
        return VarType.INTEGER; //always integer, even if float operands
    }
}
function andexpNodeCode(n) {
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
    emit("cmp qword [rsp], 0");
    emit(`je ${lbl}`);
    emit("add rsp, 8");
    let notexpType = notexpNodeCode(n.children[2]);
    convertStackTopToZeroOrOneInteger(notexpType);
    if (notexpType != VarType.INTEGER)
        ICE();
    emit(`${lbl}:`);
    console.log("exit andexp : 2");
    return VarType.INTEGER;
}
function notexpNodeCode(n) {
    console.log("entered notexp");
    // notexp -> NOT notexp | rel
    if (n.children.length == 1) {
        relNodeCode(n.children[0]);
        console.log("exit notexp");
        return;
    }
    let type = notexpNodeCode(n.children[1]);
    if (type != VarType.INTEGER)
        ICE();
    let lbl = label();
    let lbl2 = label();
    emit("mov rax, [rsp]");
    emit("cmp rax, 0");
    emit(`je ${lbl}`);
    emit("mov rax, 0");
    emit(`jmp ${lbl2}`);
    emit(`${lbl}:`);
    emit("mov rax, 1");
    emit(`${lbl2}:`);
    emit("add rsp, 8");
    emit("push rax");
    console.log("exit notexp");
    return VarType.INTEGER;
}
function sumNodeCode(n) {
    console.log("entered sum");
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1)
        return termNodeCode(n.children[0]);
    else {
        let sumtype = sumNodeCode(n.children[0]);
        let termtype = termNodeCode(n.children[2]);
        if (sumtype !== VarType.INTEGER || termtype != VarType.INTEGER)
            ICE();
        emit("pop rbx"); //second operand
        emit("pop rax"); //first operand
        switch (n.children[1].sym) {
            case "PLUS":
                emit("add rax, rbx");
                break;
            case "MINUS":
                emit("sub rax, rbx");
                break;
            default:
                ICE;
        }
        emit("push rax");
        console.log("exit sum");
        return VarType.INTEGER;
    }
}
function relNodeCode(n) {
    console.log("entered rel");
    //rel |rarr| sum RELOP sum | sum
    if (n.children.length === 1) {
        console.log("exit rel : 1");
        return sumNodeCode(n.children[0]);
    }
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== VarType.INTEGER || sum2Type != VarType.INTEGER)
            ICE();
        emit("pop rax"); //second operand
        //first operand still on stack
        emit("cmp [rsp],rax"); //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":
                emit("setge al");
                break;
            case "<=":
                emit("setle al");
                break;
            case ">":
                emit("setg  al");
                break;
            case "<":
                emit("setl  al");
                break;
            case "==":
                emit("sete  al");
                break;
            case "!=":
                emit("setne al");
                break;
            default: ICE();
        }
        emit("movzx qword rax, al"); //move with zero extend
        emit("mov [rsp], rax");
        console.log("exit rel : 2");
        return VarType.INTEGER;
    }
}
function termNodeCode(n) {
    console.log("entered term");
    if (n.children.length == 1) {
        return negNodeCode(n.children[0]);
    }
    let t0 = termNodeCode(n.children[0]);
    let t1 = negNodeCode(n.children[2]);
    if (t0 != VarType.INTEGER || t1 != VarType.INTEGER)
        ICE();
    emit("pop rax");
    emit("pop rbx");
    switch (n.children[1].token.lexeme) {
        case "*":
            emit("imul rax, rbx");
            break;
        case "/":
            emit("idiv rax, rbx");
            break;
        default:
            ICE();
    }
    emit("push rax");
    console.log("exit term");
    return VarType.INTEGER;
}
function negNodeCode(n) {
    console.log("entered neg");
    if (n.children.length == 1) {
        return factorNodeCode(n.children[0]);
    }
    let t0 = negNodeCode(n.children[1]);
    if (t0 != VarType.INTEGER)
        ICE();
    emit("pop rax");
    emit("movq xmm0, rax");
    emit("mov rax, -1");
    emit("movq xmm1, rax");
    emit("mulsd xmm0, xmm1");
    emit("movq rax, xmm0");
    emit("push rax");
    console.log("exit neg");
    return VarType.INTEGER;
}
function convertStackTopToZeroOrOneInteger(t) {
    if (t == VarType.INTEGER) {
        console.log("CONVERTING TO ZERO OR ONE : " + t);
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else {
        ICE();
    }
}
function factorNodeCode(n) {
    console.log("entered factor");
    //factor -> NUM | LP expr RP
    let child = n.children[0];
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v}`);
            console.log("exit factor");
            return VarType.INTEGER;
        case "LP":
            console.log("exit factor");
            return exprNodeCode(n.children[1]);
        default:
            ICE();
    }
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        console.log("entered if");
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`); //"je" is jump equal "jne" is jump not equal
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
        console.log("exit if");
    }
    else {
        console.log("entered if else");
        //we do the same thing but jump to a new lable if not equal
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        var endElseLabel = label();
        emit(`jne ${endifLabel}`); // if is true
        emit(`je ${endElseLabel}`); //
        emit(`${endifLabel}:`); //if lable to jump to
        braceblockNodeCode(n.children[4]); //if brace code
        emit(`${endElseLabel}:`); //else lable to jump to
        braceblockNodeCode(n.children[6]); //else brace code
        console.log("exit if else");
    }
}
function loopNodeCode(n) {
    console.log("entered loop");
    var startLbl = label();
    var endLbl = label();
    emit(`${startLbl}:`);
    exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    emit(`je ${endLbl}`);
    braceblockNodeCode(n.children[4]);
    exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    emit(`jne ${startLbl}`);
    emit(`${endLbl}:`);
    console.log("exit loop");
}
let labelCounter = 0;
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function ICE() {
    return asmCode.join("\n");
    throw new Error("ICE error");
}
function makeAsm(root) {
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
//# sourceMappingURL=parser.js.map