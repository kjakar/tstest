// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f;\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006\u000b8\n\u000b\r",
    "\u000b\u000e\u000b9\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002",
    "\u0003\u0003\u00022;\u0002;\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005",
    "\u0019\u0003\u0002\u0002\u0002\u0007\u001f\u0003\u0002\u0002\u0002\t",
    "!\u0003\u0002\u0002\u0002\u000b#\u0003\u0002\u0002\u0002\r&\u0003\u0002",
    "\u0002\u0002\u000f+\u0003\u0002\u0002\u0002\u00112\u0003\u0002\u0002",
    "\u0002\u00134\u0003\u0002\u0002\u0002\u00157\u0003\u0002\u0002\u0002",
    "\u0017\u0018\u0007=\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0007y\u0002\u0002\u001a\u001b\u0007j\u0002\u0002\u001b",
    "\u001c\u0007k\u0002\u0002\u001c\u001d\u0007n\u0002\u0002\u001d\u001e",
    "\u0007g\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002\u001f \u0007",
    "*\u0002\u0002 \b\u0003\u0002\u0002\u0002!\"\u0007+\u0002\u0002\"\n\u0003",
    "\u0002\u0002\u0002#$\u0007k\u0002\u0002$%\u0007h\u0002\u0002%\f\u0003",
    "\u0002\u0002\u0002&\'\u0007g\u0002\u0002\'(\u0007n\u0002\u0002()\u0007",
    "u\u0002\u0002)*\u0007g\u0002\u0002*\u000e\u0003\u0002\u0002\u0002+,",
    "\u0007t\u0002\u0002,-\u0007g\u0002\u0002-.\u0007v\u0002\u0002./\u0007",
    "w\u0002\u0002/0\u0007t\u0002\u000201\u0007p\u0002\u00021\u0010\u0003",
    "\u0002\u0002\u000223\u0007}\u0002\u00023\u0012\u0003\u0002\u0002\u0002",
    "45\u0007\u007f\u0002\u00025\u0014\u0003\u0002\u0002\u000268\t\u0002",
    "\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u000297\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\u0016\u0003\u0002\u0002",
    "\u0002\u0004\u00029\u0002"].join("");


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
gramLexer.SEMI = 1;
gramLexer.WHILE = 2;
gramLexer.LP = 3;
gramLexer.RP = 4;
gramLexer.IF = 5;
gramLexer.ELSE = 6;
gramLexer.RETURN = 7;
gramLexer.LBR = 8;
gramLexer.RBR = 9;
gramLexer.NUM = 10;

gramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

gramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

gramLexer.prototype.literalNames = [ null, "';'", "'while'", "'('", "')'", 
                                     "'if'", "'else'", "'return'", "'{'", 
                                     "'}'" ];

gramLexer.prototype.symbolicNames = [ null, "SEMI", "WHILE", "LP", "RP", 
                                      "IF", "ELSE", "RETURN", "LBR", "RBR", 
                                      "NUM" ];

gramLexer.prototype.ruleNames = [ "SEMI", "WHILE", "LP", "RP", "IF", "ELSE", 
                                  "RETURN", "LBR", "RBR", "NUM" ];

gramLexer.prototype.grammarFileName = "gram.txt";


exports.gramLexer = gramLexer;

