"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grammar {
    constructor(File) {
        this.leftHandSides = new Set();
        this.rightHandSides = new Set();
        this.File = File;
        let splits = this.File.split('\n');
        splits.forEach((value) => {
            if (value.length != 0) {
                console.log(" ====> : " + value);
                let sides = value.split("->");
                //make sure we have the left and right hand sides
                if (sides.length != 2) {
                    console.log("1");
                    console.log("sides count ='s : " + sides.length);
                    sides.forEach((value) => { console.log(value); });
                    throw new Error("Invalid grammar structure : " + sides[0]);
                }
                //remove the whitespace around the strings
                sides[0] = sides[0].trim();
                sides[1] = sides[1].trim();
                //make sure we have only seen the left hand side once
                if (this.leftHandSides.has(sides[0])) {
                    console.log("2");
                    throw new Error("This left hand side has been used before : " + sides[0]);
                }
                else { //make sure the regex is vaild
                    try {
                        let rgx = new RegExp(sides[1]);
                        console.log("===" + sides[1]);
                    }
                    catch (Exception) {
                        console.log("3");
                        throw new Error("this is not a valid regex : " + sides[1]);
                    }
                    this.leftHandSides.add(sides[0]);
                    this.rightHandSides.add(sides[1]);
                }
            }
        });
    }
}
exports.Grammar = Grammar;
//# sourceMappingURL=Grammar.js.map