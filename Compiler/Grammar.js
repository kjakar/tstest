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
        this.addComments = false;
        this.nullable = new Set();
        this.File = File;
        console.log("===============GRAMMAR================");
        //console.log(File);
        //console.log("=====================================");
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
                    if (sides[0] == "COMMENT") {
                        this.addComments = true;
                    }
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
                    0;
                    //remove the whitespace around RHS //
                    sides[0] = sides[0].trim();
                    sides[1] = sides[1].trim();
                    //build the terminal and the node
                    let t = new Terminal(sides[0], sides[1]);
                    this.nonTerminals.push(t);
                    //console.log("Non-terminal:   LHS : " + sides[0] + " RHS : " + sides[1]);
                    let n = new Node(t);
                    if (this.startingNode == null) {
                        //console.log("Starting node : " + n.label);
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
        if (this.nonTerminals.length > 0)
            this.CheckNonTerminals();
    }
    CheckNonTerminals() {
        //add the neighbors to the nodes
        this.nodes.forEach((n) => {
            n.AddNeighbor(this.nodes);
        });
        this.DepthFirstSearch(this.startingNode, this.visitedNodes);
        this.nodes.forEach((n) => {
            if (!this.visitedNodes.has(n.label) && n.label != "COMMENT") {
                throw new Error("There is no way to reach the non-terminal : " + n.label);
            }
        });
    }
    DepthFirstSearch(node, visited) {
        visited.add(node.label);
        //console.log("Visited node : " + node.label);
        if (node.neighbors != undefined) {
            node.neighbors.forEach((w) => {
                if (!visited.has(w.label)) {
                    this.DepthFirstSearch(w, visited);
                }
            });
        }
        else {
            //console.log("There are no neighbors");
        }
    }
    getNullable() {
        this.nullable.add("lambda");
        while (true) {
            let updated = false; //we use this to find out if the nullable set is stable
            this.nonTerminals.forEach((nt) => {
                //console.log("Checking : " + nt.LHS + " : RHS ='s : " + nt.RHS);
                if (!this.nullable.has(nt.LHS)) //it's not nullable (yet)
                 {
                    let splits = nt.RHS.split('|'); //all of the productions of the non-terminal 
                    for (let i = 0; i < splits.length; i++) {
                        //console.log(splits[i].trim());
                        let dubSplits = splits[i].trim().split(" "); // the production broken up into parts
                        let allNullable = true; //used as a flag
                        for (let i = 0; i < dubSplits.length; i++) {
                            //console.log("\t" + dubSplits[i].trim());
                            if (!this.nullable.has(dubSplits[i].trim())) { //we found somthing that isn't nullable
                                allNullable = false;
                            }
                        }
                        if (allNullable) {
                            //we add the non-terminal to the nullable set
                            if (!this.nullable.has(nt.LHS))
                                this.nullable.add(nt.LHS);
                            updated = true;
                        }
                    }
                }
            });
            if (!updated) //we made no changes to the nullable set so it is stable.
                break;
        }
        this.nullable.delete("lambda");
        return this.nullable;
    }
    getFirst() {
        //console.log("@@@@@@@@@ nullables @@@@@@@@");
        this.getNullable();
        //this.nullable.forEach((value: string) => { console.log(value); });
        //init the map
        var first = new Map();
        //init terminals
        //console.log("@@@@@@@@@ terminals @@@@@@@@");
        for (let h = 0; h < Grammar.terminals.length; h++) {
            var used = false;
            for (let i = 0; i < this.nonTerminals.length; i++) //for all nonterminals N:
             {
                var p = this.nonTerminals[i].RHS.split('|'); //this breaks all the productions up
                for (let j = 0; j < p.length; j++) //for all productions P
                 {
                    p[j] = p[j].trim();
                    var x = p[j].split(' ');
                    for (let k = 0; k < x.length; k++) //for x in P
                     {
                        if (x[k] == Grammar.terminals[h].LHS) {
                            used = true;
                            j = p.length;
                        }
                    }
                }
            }
            if (used) {
                //console.log(Grammar.terminals[h].toString());
                var set = new Set();
                set.add(Grammar.terminals[h].LHS);
                first.set(Grammar.terminals[h].LHS, set);
            }
            else if (Grammar.terminals[h].LHS == "COMMENT") {
                if (this.addComments) {
                    var set = new Set();
                    set.add(Grammar.terminals[h].LHS);
                    first.set(Grammar.terminals[h].LHS, set);
                }
            }
            else {
                //console.log(Grammar.terminals[h].toString() + " : UNUSED");
            }
        }
        //init nonterminals with an empty set
        //console.log("@@@@@@@@@ non-terminals @@@@@@@@");
        for (let i = 0; i < this.nonTerminals.length; i++) //for all nonterminals N:
         {
            //console.log(this.nonTerminals[i].toString());
            var N = this.nonTerminals[i].LHS;
            var S = new Set();
            first.set(N, S);
        }
        var updated = false; //how we check if the first set is stable
        while (true) {
            updated = false;
            for (let i = 0; i < this.nonTerminals.length; i++) //for all nonterminals N:
             {
                var N = this.nonTerminals[i].LHS;
                var p = this.nonTerminals[i].RHS.split('|'); //this breaks all the productions up
                for (let j = 0; j < p.length; j++) //for all productions P
                 {
                    p[j] = p[j].trim();
                    var x = p[j].split(' ');
                    for (let k = 0; k < x.length; k++) //for x in P
                     {
                        var term = false; //is x a terminal
                        var set = new Set();
                        //check if the first object in the production is a terminal
                        for (let k = 0; k < Grammar.terminals.length; k++) {
                            if (Grammar.terminals[k].LHS == x[k])
                                term = true;
                        }
                        if (term) //the first object in the production is a terminal so we add it to first
                         {
                            set.add(x[k]);
                            var uSet = this.Union(first.get(N), set);
                            if (this.SetCompare(first.get(N), first.get(x[k]))) //if there isn't anything to add we don't add it
                             {
                                updated = true;
                                first.set(N, uSet);
                            }
                        }
                        else {
                            var uSet = this.Union(first.get(N), first.get(x[k]));
                            if (this.SetCompare(first.get(N), first.get(x[k])))
                                updated = true;
                            first.set(N, uSet);
                        }
                        if (!this.nullable.has(x[k]))
                            break;
                    }
                }
            }
            if (updated == false)
                break; //we are stable if we hit this
        }
        //console.log("@@@@@@@@@ first final @@@@@@@@@@@");
        //first.forEach((value: Set<string>, key: string) => { console.log(key, value); });
        //console.log("@@@@@@@@@ first end @@@@@@@@@@@");
        return first;
    }
    Union(setA, setB) {
        let _union = new Set(setA);
        try {
            for (let elem of setB) {
                _union.add(elem);
            }
        }
        catch (error) { }
        return _union;
    }
    SetCompare(setA, setB) {
        var val = false; //false means they don't have anything the first doesn't have
        let _union = new Set(setA);
        try {
            for (let elem of setB) {
                if (!_union.has(elem)) {
                    val = true;
                    break;
                }
            }
        }
        catch (error) { }
        return val;
    }
}
exports.Grammar = Grammar;
Grammar.terminals = new Array();
class Node {
    constructor(terminal, IsTerm = false) {
        this.label = terminal.LHS;
        //console.log("Added node : " + this.label);
        this.neighbors = new Array();
        this.RHS = terminal.RHS;
        this.isTerm = IsTerm;
    }
    AddNeighbor(nodes) {
        if (!this.isTerm) {
            let splits = this.RHS.split(' ');
            splits.forEach((s) => {
                s = s.trim();
                if (s != "|" && s != "lambda") {
                    let missing = true;
                    nodes.forEach((n) => {
                        if (n.label == s) {
                            this.neighbors.push(n);
                            missing = false;
                            //console.log(this.label + " : Gained neighbor : " + s);
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