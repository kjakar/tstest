"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grammar {
    constructor(File) {
        this.leftHandSides = new Set();
        this.rightHandSides = new Set();
        this.nonTerminals = new Array();
        this.nodes = new Array();
        this.startingNode = null;
        this.visitedNodes = new Set();
        this.File = File;
        console.log("=====================================\n");
        console.log(File);
        console.log("\n=====================================");
        let splits = this.File.split('\n');
        let parsingNonTerminals = false;
        splits.forEach((value) => {
            if (value.length != 0) {
                if (!parsingNonTerminals) {
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
                        let t = new Terminal(sides[0], sides[1]);
                        Grammar.terminals.push(t);
                        //console.log("Terminal:  LHS : " + sides[0] + " RHS : " + sides[1]);
                        let n = new Node(t, true);
                        //loop through the nodes to see if we already have the node
                        let alreadyExists = false;
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
                else {
                    let sides = value.split("->");
                    //make sure we have the left and right hand sides
                    if (sides.length != 2) {
                        //console.log("sides count ='s : " + sides.length);
                        //sides.forEach((value) => { console.log(value); });
                        throw new Error("Invalid grammar structure : " + sides[0]);
                    }
                    //remove the whitespace around RHS //
                    sides[0] = sides[0].trim();
                    sides[1] = sides[1].trim();
                    //build the terminal and the node
                    let t = new Terminal(sides[0], sides[1]);
                    this.nonTerminals.push(t);
                    //console.log("Non-terminal:   LHS : " + sides[0] + " RHS : " + sides[1]);
                    let n = new Node(t);
                    if (this.startingNode == null) {
                        console.log("Starting node : " + n.label);
                        this.startingNode = n;
                    }
                    let alreadyExists = false;
                    for (let i = 0; i < this.nodes.length; i++) {
                        if (this.nodes[i].label == n.label) {
                            alreadyExists = true;
                            this.nodes[i].RHS += (" | " + n.RHS);
                            break;
                        }
                    }
                    if (!alreadyExists) {
                        this.nodes.push(n);
                    }
                }
            }
            else {
                //if we see an empty line we start parsing nonterminals
                parsingNonTerminals = true;
                //console.log("parsing non-terminals...");
            }
        });
        this.CheckNonTerminals();
    }
    CheckNonTerminals() {
        //add the neighbors to the nodes
        this.nodes.forEach((n) => {
            n.AddNeighbor(this.nodes);
        });
        this.DepthFirstSearch(this.startingNode, this.visitedNodes);
        this.nodes.forEach((n) => {
            if (!this.visitedNodes.has(n.label)) {
                throw new Error("There is no way to reach the non-terminal : " + n.label);
            }
        });
    }
    DepthFirstSearch(node, visited) {
        visited.add(node.label);
        console.log("Visited node : " + node.label);
        if (node.neighbors != undefined) {
            node.neighbors.forEach((w) => {
                if (!visited.has(w.label)) {
                    this.DepthFirstSearch(w, visited);
                }
            });
        }
        else {
            console.log("There are no neighbors");
        }
    }
}
exports.Grammar = Grammar;
Grammar.terminals = new Array();
class Node {
    constructor(terminal, IsTerm = false) {
        this.label = terminal.LHS;
        console.log("Added node : " + this.label);
        this.neighbors = new Array();
        this.RHS = terminal.RHS;
        this.isTerm = IsTerm;
    }
    AddNeighbor(nodes) {
        if (!this.isTerm) {
            let splits = this.RHS.split(' ');
            splits.forEach((s) => {
                s = s.trim();
                if (s != "|") {
                    let missing = true;
                    nodes.forEach((n) => {
                        if (n.label == s) {
                            this.neighbors.push(n);
                            missing = false;
                            console.log(this.label + " : Gained neighbor : " + s);
                        }
                    });
                    if (missing) {
                        throw new Error(this.label + " : " + s + " : is not a terminal or non-terminal");
                    }
                }
            });
        }
    }
}
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