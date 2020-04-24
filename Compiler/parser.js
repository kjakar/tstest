"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let antlr4 = require('./antlr4');
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser;
let asmCode = [];
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
    emit("ret");
    console.log("exit return");
}
function exprNodeCode(n) {
    console.log("entered expression");
    //expr -> NUM
    console.log(n);
    let d = parseInt(n.children[0].token.lexeme, 10);
    emit(`mov rax, ${d}`);
    console.log("exit expression");
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        console.log("entered if");
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
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
    emit("cmp rax, 0");
    emit(`je ${endLbl}`);
    braceblockNodeCode(n.children[4]);
    exprNodeCode(n.children[2]);
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