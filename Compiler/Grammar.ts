import { error } from "util";

export class Grammar {

    File: string;
    leftHandSides: Set<string> = new Set();
    rightHandSides: Set<string> = new Set();
    public static terminals: Array<Terminal> = new Array<Terminal>();
    nonTerminals: Array<Terminal> = new Array<Terminal>();
    nodes: Array<Node> = new Array<Node>();
    startingNode: Node = null;
    visitedNodes: Set<string> = new Set<string>();

    constructor(File: string)
    {
        this.File = File;
        console.log("=====================================\n");
        console.log(File);
        console.log("\n=====================================");

        let splits: string[] = this.File.split('\n');

        let parsingNonTerminals: boolean = false;
        splits.forEach((value) =>
        {
            if (value.length != 0)
            {
                if (!parsingNonTerminals) {
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
                    else
                    { //make sure the regex is vaild
                        try { let rgx = new RegExp(sides[1]); }
                        catch (Exception) { throw new Error("this is not a valid regex : " + sides[1]); }
                        this.leftHandSides.add(sides[0]);
                        this.rightHandSides.add(sides[1]);

                        let t: Terminal = new Terminal(sides[0], sides[1]);
                        Grammar.terminals.push(t);
                        //console.log("Terminal:  LHS : " + sides[0] + " RHS : " + sides[1]);

                        let n: Node = new Node(t, true);
                        //loop through the nodes to see if we already have the node
                        let alreadyExists: boolean = false;
                        /*
                        for (let i = 0; i < this.nodes.length; i++) {
                            if (this.nodes[i].label == n.label) {
                                alreadyExists = true;
                                break;
                            }
                        }
                        */
                        if (!alreadyExists) {
                            this.nodes.push(n);
                        }
                    }
                }
                else
                {
                    let sides: string[] = value.split("->");


                    //make sure we have the left and right hand sides
                    if (sides.length != 2)
                    {
                        //console.log("sides count ='s : " + sides.length);
                        //sides.forEach((value) => { console.log(value); });
                        throw new Error("Invalid grammar structure : " + sides[0]);
                    }

                    //remove the whitespace around RHS //
                    sides[0] = sides[0].trim();
                    sides[1] = sides[1].trim();


                    //build the terminal and the node
                    let t: Terminal = new Terminal(sides[0], sides[1])
                    this.nonTerminals.push(t);
                    //console.log("Non-terminal:   LHS : " + sides[0] + " RHS : " + sides[1]);


                    let n: Node = new Node(t);
                    if (this.startingNode == null)
                    {
                        console.log("Starting node : " + n.label);
                        this.startingNode = n;
                    }

                    let alreadyExists: boolean = false;
                    for (let i = 0; i < this.nodes.length; i++)
                    {
                        if (this.nodes[i].label == n.label)
                        {
                            alreadyExists = true;
                            this.nodes[i].RHS += (" | " + n.RHS);
                            break;
                        }
                    }

                    if (!alreadyExists)
                    {
                        this.nodes.push(n);
                    }
                }
            }
            else
            {
                //if we see an empty line we start parsing nonterminals
                parsingNonTerminals = true;
                //console.log("parsing non-terminals...");
            }
        });

        this.CheckNonTerminals();
        
    }

    CheckNonTerminals()
    {
        //add the neighbors to the nodes
        this.nodes.forEach((n: Node) =>
        {
            n.AddNeighbor(this.nodes);
        });



        this.DepthFirstSearch(this.startingNode, this.visitedNodes);

        this.nodes.forEach((n: Node) =>
        {
            if (!this.visitedNodes.has(n.label))
            {
                throw new Error("There is no way to reach the non-terminal : " + n.label);
            }
        });
    }

    DepthFirstSearch(node: Node, visited: Set<string>)
    {
        visited.add(node.label);
        console.log("Visited node : " + node.label);
        if (node.neighbors != undefined) {
            node.neighbors.forEach((w: Node) => {
                if (!visited.has(w.label)) {
                    this.DepthFirstSearch(w, visited);
                }
            });
        }
        else
        {
            console.log("There are no neighbors");
        }
    }
}

class Node
{
    label: string;
    neighbors: Array<Node>;
    RHS: string;
    isTerm: boolean;
    constructor(terminal: Terminal, IsTerm: boolean = false)
    {
        this.label = terminal.LHS;
        console.log("Added node : " + this.label);
        this.neighbors = new Array<Node>();

        this.RHS = terminal.RHS;

        this.isTerm = IsTerm;
    }

    AddNeighbor(nodes: Array<Node>) {
        if (!this.isTerm)
        {
            let splits: string[] = this.RHS.split(' ');

            splits.forEach((s) =>
            {
                s = s.trim();
                if (s != "|")
                {
                    let missing: boolean = true;
                    nodes.forEach((n: Node) =>
                    {
                        if (n.label == s)
                        {
                            this.neighbors.push(n);
                            missing = false;
                            console.log(this.label + " : Gained neighbor : " + s);
                        }
                    });

                    if (missing)
                    {
                        throw new Error(this.label + " : " + s + " : is not a terminal or non-terminal" );
                    }
                }
            });
        }
        
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