// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\rD\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0006\u0002\u001b\n\u0002\r\u0002\u000e\u0002\u001c\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\fA",
    "\n\f\r\f\u000e\fB\u0002\u0002\r\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0003\u0002\u0004\u0005\u0002\u000b\f\u000f\u000f\"\"\u0003\u00022",
    ";\u0002E\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u001a\u0003\u0002",
    "\u0002\u0002\u0005 \u0003\u0002\u0002\u0002\u0007\"\u0003\u0002\u0002",
    "\u0002\t(\u0003\u0002\u0002\u0002\u000b*\u0003\u0002\u0002\u0002\r,",
    "\u0003\u0002\u0002\u0002\u000f/\u0003\u0002\u0002\u0002\u00114\u0003",
    "\u0002\u0002\u0002\u0013;\u0003\u0002\u0002\u0002\u0015=\u0003\u0002",
    "\u0002\u0002\u0017@\u0003\u0002\u0002\u0002\u0019\u001b\t\u0002\u0002",
    "\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002",
    "\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\b\u0002\u0002",
    "\u0002\u001f\u0004\u0003\u0002\u0002\u0002 !\u0007=\u0002\u0002!\u0006",
    "\u0003\u0002\u0002\u0002\"#\u0007y\u0002\u0002#$\u0007j\u0002\u0002",
    "$%\u0007k\u0002\u0002%&\u0007n\u0002\u0002&\'\u0007g\u0002\u0002\'\b",
    "\u0003\u0002\u0002\u0002()\u0007*\u0002\u0002)\n\u0003\u0002\u0002\u0002",
    "*+\u0007+\u0002\u0002+\f\u0003\u0002\u0002\u0002,-\u0007k\u0002\u0002",
    "-.\u0007h\u0002\u0002.\u000e\u0003\u0002\u0002\u0002/0\u0007g\u0002",
    "\u000201\u0007n\u0002\u000212\u0007u\u0002\u000223\u0007g\u0002\u0002",
    "3\u0010\u0003\u0002\u0002\u000245\u0007t\u0002\u000256\u0007g\u0002",
    "\u000267\u0007v\u0002\u000278\u0007w\u0002\u000289\u0007t\u0002\u0002",
    "9:\u0007p\u0002\u0002:\u0012\u0003\u0002\u0002\u0002;<\u0007}\u0002",
    "\u0002<\u0014\u0003\u0002\u0002\u0002=>\u0007\u007f\u0002\u0002>\u0016",
    "\u0003\u0002\u0002\u0002?A\t\u0003\u0002\u0002@?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002C\u0018\u0003\u0002\u0002\u0002\u0005\u0002\u001cB\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function gramLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

gramLexer.prototype = Object.create(antlr4.Lexer.prototype);
gramLexer.prototype.constructor = gramLexer;

Object.defineProperty(gramLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

gramLexer.EOF = antlr4.Token.EOF;
gramLexer.WHITESPACE = 1;
gramLexer.SEMI = 2;
gramLexer.WHILE = 3;
gramLexer.LP = 4;
gramLexer.RP = 5;
gramLexer.IF = 6;
gramLexer.ELSE = 7;
gramLexer.RETURN = 8;
gramLexer.LBR = 9;
gramLexer.RBR = 10;
gramLexer.NUM = 11;

gramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

gramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

gramLexer.prototype.literalNames = [ null, null, "';'", "'while'", "'('", 
                                     "')'", "'if'", "'else'", "'return'", 
                                     "'{'", "'}'" ];

gramLexer.prototype.symbolicNames = [ null, "WHITESPACE", "SEMI", "WHILE", 
                                      "LP", "RP", "IF", "ELSE", "RETURN", 
                                      "LBR", "RBR", "NUM" ];

gramLexer.prototype.ruleNames = [ "WHITESPACE", "SEMI", "WHILE", "LP", "RP", 
                                  "IF", "ELSE", "RETURN", "LBR", "RBR", 
                                  "NUM" ];

gramLexer.prototype.grammarFileName = "gram.txt";


exports.gramLexer = gramLexer;
