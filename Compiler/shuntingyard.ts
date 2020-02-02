
import { Tokenizer, Token } from "./Tokenizer";
import { Grammar } from "./Grammar";



class Stack {
    items: any;
    // Array is used to implement stack 
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
} 



let fs = require("fs");
let precedence =
{
    "func-call": 7,
    "POWOP": 6,
    "BITNOT": 5,
    "NEGATE": 5,
    "MULOP": 4,
    "ADDOP": 3,
    "COMMA": 2,
    "LPAREN": 1,
}

let handedness =
{
    "func-call": "RIGHT",
    "POWOP": "LEFT",
    "NEGATE": "RIGHT",
    "MULOP": "RIGHT",
    "ADDOP": "RIGHT",
    "COMMA": "RIGHT",
    "LPAREN": "RIGHT",
    "BITNOT": "RIGHT",
}

let arity =
{
    "BITNOT": 1,
    "NEGATE": 1,
}
let operatorStack: Stack = new Stack();
let operandStack: Stack = new Stack();

export function parse(input: string): Node
{
    let data: string = fs.readFileSync("SYGrammar.txt", "utf8");
    let G: Grammar = new Grammar(data);
    let T: Tokenizer = new Tokenizer(G);
    T.setInput(input);

    let startingNode: Node;

    while (true)
    {
        let n: Node = new Node(T.next());

        console.log("Found token -> " + n.token.sym + " : " + n.token.lexeme);

        //the token is end of file and breaks out of the loop
        if (startingNode == undefined)
        {
            if (n.sym == "$") {
                throw new Error("Input was empty : " + input);
                break;
            }
            else
                startingNode = n;
        }
        if (n.sym == "$")
            break;

        //handle negation
        if (n.token.lexeme == "-")
        {
            let p: Token = T.previous();
            
            if (p.sym == undefined || p.sym == "LPAREN" || p.sym == "POWOP" || p.sym == "MULOP" || p.sym == "ADDOP")
            {
                n.sym = "NEGATE";
                n.token.sym = "NEGATE";
                console.log("Changed to NEGATE");
            }
                
        }

        if (n.sym == "RPAREN")
        {
            while (operatorStack.peek().sym != "LPAREN")
            {
                DoOperation();
            }

            operatorStack.pop();
        }
        else if (n.sym == "NUM" || n.sym == "ID")
            operandStack.push(n);
        else if (n.sym == "LPAREN")
            operatorStack.push(n);
        else
        {
             while (true)
             {
                if (operatorStack.isEmpty())
                    break;

                let a = operatorStack.peek().sym;
                if (handedness[n.sym] == "LEFT")
                {
                    if (precedence[a] > precedence[n.sym])
                        DoOperation();
                    else
                        break;
                }
                else if (handedness[n.sym] == "RIGHT")
                {
                    if (precedence[a] >= precedence[n.sym])
                        DoOperation();
                    else
                        break;
                 }
             }
            operatorStack.push(n);
        }
    }

    while (!operatorStack.isEmpty())
    {
        DoOperation();
    }

    return operandStack.pop();
}



function DoOperation()
{
    let opNode = operatorStack.pop();
    let c1 = operandStack.pop();
    if (arity[opNode.sym] != 1) {
        let c2 = operandStack.pop();
        opNode.addChild(c2);
    }
    opNode.addChild(c1);
    operandStack.push(opNode);
}

class Node
{
    sym: string;
    children: Node[];
    token: Token;

    constructor(t: Token)
    {
        this.sym = t.sym;
        this.token = t;
        this.children = [];
    }

    addChild(n: Node)
    {
        this.children.push(n);
    }
}
