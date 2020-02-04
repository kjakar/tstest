import { Grammar } from "./Grammar"


export class Tokenizer
{
    grammar: Grammar;
    inputData: string;
    currentLine: number;
    idx: number;    //index of next unparsed char in inputData
    eof: number;
    line: number;

    constructor(grammar: Grammar)
    {
        this.grammar = grammar;
        this.idx = 0;
        this.line = 1;
        console.log("Tokenizer Constructed...");
    }
    setInput(inputData: string)
    {
        this.inputData = inputData;
        this.idx = 0;
        this.line = 1;
        this.eof = inputData.length - 1;
        console.log("setting input...");

    }
    next(): Token
    {
        console.log("Input Data : " + this.inputData.substr(this.idx, 100) + " : End Input Data : length ='s " + this.inputData.substr(this.idx).length);
        //...return next token...
        //...advance this.idx...
        //...adjust this.currentLine...
        let sym: string;
        let lexeme: string;

        if (this.idx == this.eof) {
            return new Token("$", undefined, this.line)
        }

        while (this.inputData[this.idx] == ' ' || this.inputData[this.idx] == '\t' || this.inputData[this.idx] == '\n')
        {
            if (this.inputData[this.idx] == '\n')
            {
                this.line += 1;
                console.log("new line : " + this.line);
            }
            this.idx++;
            
        }
        if (this.inputData.substr(this.idx).length == 0)
        {
            return new Token("$", undefined, this.line)
        }

        console.log("Grammar size :" + this.grammar.rightHandSides.size);

        for (let t of this.grammar.terminals) { console.log("testing : " + t.LHS); }

        let lineAdjustment: number = 0;

        for (let t of this.grammar.terminals)
        {
            let RHS: string = t.RHS;
            console.log("checking tokens : " + RHS);
            let rgx: RegExp = new RegExp(RHS, "gy");
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
        else
        {
            let t: Token = new Token(sym, lexeme, this.line);
            this.line += lineAdjustment;
            return t;
        }
    }
}

export class Token
{
    sym: string;
    lexeme: string;
    line: number;

    constructor(sym: string, lexeme: string, line: number)
    {
        this.sym = sym;
        this.lexeme = lexeme;
        this.line = line;
    }

    toString()
    {
        let sym = this.sym.padStart(20, ' ');
        let line = "" + this.line;
        line = line.padEnd(4, ' ');
        return `[${sym} ${line} ${this.lexeme}]`;
    }
}
