"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grammar {
    constructor(File) {
        this.leftHandSides = new Set();
        this.rightHandSides = new Set();
        this.terminals = new Array();
        this.File = File;
        let splits = this.File.split('\n');
        splits.forEach((value) => {
            if (value.length != 0) {
                //console.log(" ====> : " + value);
                let sides = value.split("->");
                //make sure we have the left and right hand sides
                if (sides.length != 2) {
                    //console.log("sides count ='s : " + sides.length);
                    //sides.forEach((value) => { console.log(value); });
                    throw new Error("Invalid grammar structure : " + sides[0]);
                }
                //remove the whitespace around the strings
                sides[0] = sides[0].trim();
                sides[1] = sides[1].trim();
                //make sure we have only seen the left hand side once
                if (this.leftHandSides.has(sides[0])) {
                    throw new Error("This left hand side has been used before : " + sides[0]);
                }
                else { //make sure the regex is vaild
                    try {
                        let rgx = new RegExp(sides[1]);
                    }
                    catch (Exception) {
                        throw new Error("this is not a valid regex : " + sides[1]);
                    }
                    this.leftHandSides.add(sides[0]);
                    this.rightHandSides.add(sides[1]);
                    this.terminals.push(new Terminal(sides[0], sides[1]));
                    console.log("Grammar RHS : " + sides[1] + " LHS : " + sides[0]);
                }
            }
        });
    }
}
exports.Grammar = Grammar;
class Terminal {
    constructor(lhs, rhs) {
        this.toString = () => {
            return this.LHS + " : " + this.RHS;
        };
        this.LHS = lhs;
        this.RHS = rhs;
    }
}
exports.Terminal = Terminal;
//# sourceMappingURL=Grammar.js.map