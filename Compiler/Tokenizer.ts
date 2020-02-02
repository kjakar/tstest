import { Grammar } from "./Grammar"
import { error } from "util";


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
        this.line = 0;
        console.log("Tokenizer Constructed...");
    }
    setInput(inputData: string)
    {
        this.inputData = inputData;
        this.idx = 0;
        this.line = 1;
        this.eof = inputData.length - 1;
        console.log("setting input...");
        console.log("Input : " + inputData);

    }
    next(): Token
    {
        //console.log("Input Data : " + this.inputData.substr(this.idx, 100) + " : End Input Data ");
        //...return next token...
        //...advance this.idx...
        //...adjust this.currentLine...
        let sym: string;
        let lexeme: string;

        if (this.idx == this.eof) {
            return new Token("$", undefined, this.line)
            //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            //console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        }

        //console.log("Input next char is \"" + this.inputData[this.idx] +"\"");
        while (this.inputData[this.idx] == ' ' || this.inputData[this.idx] == '\t' || this.inputData[this.idx] == '\n')
        {
            if (this.inputData[this.idx] == '\n')
            {
                this.line += 1;
                //console.log("new line : " + this.line);
            }
            this.idx++;
        }

        //console.log("Grammar size :" + this.grammar.rightHandSides.size);

        //for (let t of Grammar.terminals) { console.log("testing : " + t.LHS); }

        for (let t of Grammar.terminals)
        {
            let RHS: string = t.RHS;
            //console.log("checking tokens : " + RHS);
            let rgx: RegExp = new RegExp(RHS, "gy");
            let returnValue = rgx.exec(this.inputData.substr(this.idx));
            //console.log("Return value :" + returnValue);

            if (returnValue != undefined) {
                //console.log("Processing...");

                lexeme = returnValue[0];
                sym = t.LHS;
                this.idx += lexeme.length;

                for (let i = 0; i < lexeme.length; i++) {
                    if (lexeme[i] == '\n') {
                        this.line += 1;
                        //console.log("new line : " + this.line);
                    }
                }

                break;
            }
        }
        {
            /*
            let LHS = 0;
            for (let i = 0; i < this.grammar.rightHandSides.size; i++)
            {
                let RHS : string = this.grammar.rightHandSides[i];
                console.log("checking tokens : " + this.grammar.rightHandSides[i]);
                let rgx: RegExp = new RegExp(RHS, "gs");
                let returnValue = rgx.exec(this.inputData.substr(this.idx))[0];
                console.log("Return value :" + returnValue[0]);
    
                if (returnValue[0] != undefined)
                {
                    console.log("Processing...");
    
                    lexeme = returnValue[0];
                    sym = this.grammar.leftHandSides[LHS];
                    this.idx += lexeme.length;
    
                    for (let i = 0; i < lexeme.length; i++)
                    {
                        if (lexeme[i] == '\n')
                        {
                            line += 1;
                            console.log("new line : " + line);
                        }
                    }
    
                    break;
                }
                LHS++
            }
            */
        }

        if (sym == "COMMENT")
            return this.next();
        else
        return new Token(sym, lexeme, this.line);
    }

    previous(offsetIndex: number = 1): Token
    {
        //console.log("Getting previous token");

        //console.log("Input Data : " + this.inputData.substr(this.idx, 100) + " : End Input Data ");
        //...return next token...
        //...advance this.idx...
        //...adjust this.currentLine...
        let sym: string;
        let lexeme: string;

        let offset: number = 1 + offsetIndex; //this is 2 to offset the idx++ in the "next" method
        let spaces: number = 0;

        if (this.idx - offset == this.eof) {
            return new Token("$", undefined, this.line)
        }

        if (this.idx - offset < 0)
        {
            throw new error("Looked for previous token at beginging of file");
        }

        while (this.inputData[this.idx - offset] == ' ' || this.inputData[this.idx - offset] == '\t' || this.inputData[this.idx - offset] == '\n')
        {
            console.log("backing up");
            offset++;
            spaces++;
        }

        //console.log(this.inputData[this.idx - offset]);

        for (let t of Grammar.terminals)
        {
            let RHS: string = t.RHS;
            //console.log("checking tokens : " + RHS);
            let rgx: RegExp = new RegExp(RHS, "gy");
            let returnValue = rgx.exec(this.inputData.substr(this.idx - offset));
            //console.log("Return value :" + returnValue);

            if (returnValue != undefined)
            {
                lexeme = returnValue[0];
                sym = t.LHS;
                //this.idx += lexeme.length;

                for (let i = 0; i < lexeme.length; i++)
                {
                    if (lexeme[i] == '\n') {
                        this.line += 1;
                        //console.log("new line : " + this.line);
                    }
                }

                break;
            }
        }
        if (lexeme == "*")
        {
            let pp: Token = this.previous(2 + spaces); //we go back one more to see if it is a pow op or a mull op we need to return

            if (pp.lexeme == "*")
                return new Token("POWOP", "**", this.line);
            else
                return new Token(sym, lexeme, this.line);
        }
        if (sym == "COMMENT")
            return this.next();
        else
            return new Token(sym, lexeme, this.line);
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
