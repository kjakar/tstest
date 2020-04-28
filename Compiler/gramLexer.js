// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014n\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0006\u0002)\n\u0002\r\u0002\u000e\u0002*\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\fO\n\f\r\f\u000e\f",
    "P\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010g\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012#\u0013%\u0014\u0003\u0002\u0006\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0003\u00022;\u0004\u0002>>@@\u0005\u0002\'\',,11\u0002s\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0003(\u0003",
    "\u0002\u0002\u0002\u0005.\u0003\u0002\u0002\u0002\u00070\u0003\u0002",
    "\u0002\u0002\t6\u0003\u0002\u0002\u0002\u000b8\u0003\u0002\u0002\u0002",
    "\r:\u0003\u0002\u0002\u0002\u000f=\u0003\u0002\u0002\u0002\u0011B\u0003",
    "\u0002\u0002\u0002\u0013I\u0003\u0002\u0002\u0002\u0015K\u0003\u0002",
    "\u0002\u0002\u0017N\u0003\u0002\u0002\u0002\u0019R\u0003\u0002\u0002",
    "\u0002\u001bU\u0003\u0002\u0002\u0002\u001dY\u0003\u0002\u0002\u0002",
    "\u001ff\u0003\u0002\u0002\u0002!h\u0003\u0002\u0002\u0002#j\u0003\u0002",
    "\u0002\u0002%l\u0003\u0002\u0002\u0002\')\t\u0002\u0002\u0002(\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,-\b\u0002\u0002",
    "\u0002-\u0004\u0003\u0002\u0002\u0002./\u0007=\u0002\u0002/\u0006\u0003",
    "\u0002\u0002\u000201\u0007y\u0002\u000212\u0007j\u0002\u000223\u0007",
    "k\u0002\u000234\u0007n\u0002\u000245\u0007g\u0002\u00025\b\u0003\u0002",
    "\u0002\u000267\u0007*\u0002\u00027\n\u0003\u0002\u0002\u000289\u0007",
    "+\u0002\u00029\f\u0003\u0002\u0002\u0002:;\u0007k\u0002\u0002;<\u0007",
    "h\u0002\u0002<\u000e\u0003\u0002\u0002\u0002=>\u0007g\u0002\u0002>?",
    "\u0007n\u0002\u0002?@\u0007u\u0002\u0002@A\u0007g\u0002\u0002A\u0010",
    "\u0003\u0002\u0002\u0002BC\u0007t\u0002\u0002CD\u0007g\u0002\u0002D",
    "E\u0007v\u0002\u0002EF\u0007w\u0002\u0002FG\u0007t\u0002\u0002GH\u0007",
    "p\u0002\u0002H\u0012\u0003\u0002\u0002\u0002IJ\u0007}\u0002\u0002J\u0014",
    "\u0003\u0002\u0002\u0002KL\u0007\u007f\u0002\u0002L\u0016\u0003\u0002",
    "\u0002\u0002MO\t\u0003\u0002\u0002NM\u0003\u0002\u0002\u0002OP\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002",
    "Q\u0018\u0003\u0002\u0002\u0002RS\u0007q\u0002\u0002ST\u0007t\u0002",
    "\u0002T\u001a\u0003\u0002\u0002\u0002UV\u0007c\u0002\u0002VW\u0007p",
    "\u0002\u0002WX\u0007f\u0002\u0002X\u001c\u0003\u0002\u0002\u0002YZ\u0007",
    "p\u0002\u0002Z[\u0007q\u0002\u0002[\\\u0007v\u0002\u0002\\\u001e\u0003",
    "\u0002\u0002\u0002]^\u0007@\u0002\u0002^g\u0007?\u0002\u0002_`\u0007",
    ">\u0002\u0002`g\u0007?\u0002\u0002ag\t\u0004\u0002\u0002bc\u0007#\u0002",
    "\u0002cg\u0007?\u0002\u0002de\u0007?\u0002\u0002eg\u0007?\u0002\u0002",
    "f]\u0003\u0002\u0002\u0002f_\u0003\u0002\u0002\u0002fa\u0003\u0002\u0002",
    "\u0002fb\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002g \u0003\u0002",
    "\u0002\u0002hi\u0007-\u0002\u0002i\"\u0003\u0002\u0002\u0002jk\t\u0005",
    "\u0002\u0002k$\u0003\u0002\u0002\u0002lm\u0007/\u0002\u0002m&\u0003",
    "\u0002\u0002\u0002\u0006\u0002*Pf\u0003\b\u0002\u0002"].join("");


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
gramLexer.OR = 12;
gramLexer.AND = 13;
gramLexer.NOT = 14;
gramLexer.RELOP = 15;
gramLexer.PLUS = 16;
gramLexer.MULOP = 17;
gramLexer.MINUS = 18;

gramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

gramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

gramLexer.prototype.literalNames = [ null, null, "';'", "'while'", "'('", 
                                     "')'", "'if'", "'else'", "'return'", 
                                     "'{'", "'}'", null, "'or'", "'and'", 
                                     "'not'", null, "'+'", null, "'-'" ];

gramLexer.prototype.symbolicNames = [ null, "WHITESPACE", "SEMI", "WHILE", 
                                      "LP", "RP", "IF", "ELSE", "RETURN", 
                                      "LBR", "RBR", "NUM", "OR", "AND", 
                                      "NOT", "RELOP", "PLUS", "MULOP", "MINUS" ];

gramLexer.prototype.ruleNames = [ "WHITESPACE", "SEMI", "WHILE", "LP", "RP", 
                                  "IF", "ELSE", "RETURN", "LBR", "RBR", 
                                  "NUM", "OR", "AND", "NOT", "RELOP", "PLUS", 
                                  "MULOP", "MINUS" ];

gramLexer.prototype.grammarFileName = "gram.txt";


exports.gramLexer = gramLexer;

