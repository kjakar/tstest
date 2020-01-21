export class Grammar {

    File: string;
    leftHandSides: Set<string> = new Set();
    rightHandSides: Set<string> = new Set();
    terminals: Array<Terminal> = new Array <Terminal>();

    constructor(File: string)
    {
        this.File = File;
        let splits: string[] = this.File.split('\n');
        
        splits.forEach((value) =>
        {
            if (value.length != 0)
            {
                //console.log(" ====> : " + value);
                let sides: string[] = value.split("->");
                

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
                    try { let rgx = new RegExp(sides[1]);}
                    catch (Exception) { throw new Error("this is not a valid regex : " + sides[1]); }
                    this.leftHandSides.add(sides[0]);
                    this.rightHandSides.add(sides[1]);
                    this.terminals.push(new Terminal(sides[0], sides[1]));
                    console.log("Grammar RHS : " + sides[1] + " LHS : " + sides[0] );
                }
            }
        });
    }

}

export class Terminal
{
    LHS: string;
    RHS: string;

    constructor(lhs: string, rhs: string)
    {
        this.LHS = lhs;
        this.RHS = rhs;
    }

    public toString = (): string =>
    {
        return this.LHS + " : " + this.RHS;
    }
}