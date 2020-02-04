"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tokenizer {
    constructor(grammar) {
        this.grammar = grammar;
        this.idx = 0;
        this.line = 1;
        console.log("Tokenizer Constructed...");
    }
    setInput(inputData) {
        this.inputData = inputData;
        this.idx = 0;
        this.line = 1;
        this.eof = inputData.length - 1;
        console.log("setting input...");
    }
    next() {
        console.log("Input Data : " + this.inputData.substr(this.idx, 100) + " : End Input Data : length ='s " + this.inputData.substr(this.idx).length);
        //...return next token...
        //...advance this.idx...
        //...adjust this.currentLine...
        let sym;
        let lexeme;
        if (this.idx == this.eof) {
            return new Token("$", undefined, this.line);
        }
        while (this.inputData[this.idx] == ' ' || this.inputData[this.idx] == '\t' || this.inputData[this.idx] == '\n') {
            if (this.inputData[this.idx] == '\n') {
                this.line += 1;
                console.log("new line : " + this.line);
            }
            this.idx++;
        }
        console.log("[][][][][][][][][][][][][][][][][] " + this.inputData.substr(this.idx).length);
        if (this.inputData.substr(this.idx).length == 0) {
            return new Token("$", undefined, this.line);
        }
        console.log("Grammar size :" + this.grammar.rightHandSides.size);
        for (let t of this.grammar.terminals) {
            console.log("testing : " + t.LHS);
        }
        let lineAdjustment = 0;
        for (let t of this.grammar.terminals) {
            let RHS = t.RHS;
            console.log("checking tokens : " + RHS);
            let rgx = new RegExp(RHS, "gy");
            let returnValue = rgx.exec(this.inputData.substr(this.idx));
            console.log("Return value :" + returnValue);
            if (returnValue != undefined) {
                console.log("Processing...");
                lexeme = returnValue[0];
                sym = t.LHS;
                this.idx += lexeme.length;
                for (let i = 0; i < lexeme.length; i++) {
                    if (lexeme[i] == '\n') {
                        lineAdjustment += 1;
                        console.log("new line in token: " + (this.line + lineAdjustment));
                    }
                }
                break;
            }
        }
        if (sym == "COMMENT")
            return this.next();
        else {
            let t = new Token(sym, lexeme, this.line);
            this.line += lineAdjustment;
            return t;
        }
    }
}
exports.Tokenizer = Tokenizer;
class Token {
    constructor(sym, lexeme, line) {
        this.sym = sym;
        this.lexeme = lexeme;
        this.line = line;
    }
    toString() {
        let sym = this.sym.padStart(20, ' ');
        let line = "" + this.line;
        line = line.padEnd(4, ' ');
        return `[${sym} ${line} ${this.lexeme}]`;
    }
}
exports.Token = Token;
//# sourceMappingURL=Tokenizer.js.map