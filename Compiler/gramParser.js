// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014\u0099\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003*\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00041\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005A\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0007\tU\n\t\f\t\u000e\tX\u000b\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n`\n\n\f\n\u000e\nc\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bh\n\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\fo\n\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\rz\n\r\f\r\u000e\r",
    "}\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u0085\n\u000e\f\u000e\u000e\u000e\u0088\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u008d\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0094\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0002",
    "\u0006\u0010\u0012\u0018\u001a\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0002\u0002\u0095",
    "\u0002\"\u0003\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002\u0006",
    "0\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nB\u0003\u0002",
    "\u0002\u0002\fH\u0003\u0002\u0002\u0002\u000eL\u0003\u0002\u0002\u0002",
    "\u0010N\u0003\u0002\u0002\u0002\u0012Y\u0003\u0002\u0002\u0002\u0014",
    "g\u0003\u0002\u0002\u0002\u0016n\u0003\u0002\u0002\u0002\u0018p\u0003",
    "\u0002\u0002\u0002\u001a~\u0003\u0002\u0002\u0002\u001c\u008c\u0003",
    "\u0002\u0002\u0002\u001e\u0093\u0003\u0002\u0002\u0002 \u0095\u0003",
    "\u0002\u0002\u0002\"#\u0005\f\u0007\u0002#$\u0007\u0002\u0002\u0003",
    "$\u0003\u0003\u0002\u0002\u0002%&\u0005\u0006\u0004\u0002&\'\u0005\u0004",
    "\u0003\u0002\'*\u0003\u0002\u0002\u0002(*\u0003\u0002\u0002\u0002)%",
    "\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*\u0005\u0003\u0002",
    "\u0002\u0002+1\u0005\b\u0005\u0002,1\u0005\n\u0006\u0002-.\u0005 \u0011",
    "\u0002./\u0007\u0004\u0002\u0002/1\u0003\u0002\u0002\u00020+\u0003\u0002",
    "\u0002\u00020,\u0003\u0002\u0002\u00020-\u0003\u0002\u0002\u00021\u0007",
    "\u0003\u0002\u0002\u000223\u0007\b\u0002\u000234\u0007\u0006\u0002\u0002",
    "45\u0005\u000e\b\u000256\u0007\u0007\u0002\u000267\u0005\f\u0007\u0002",
    "7A\u0003\u0002\u0002\u000289\u0007\b\u0002\u00029:\u0007\u0006\u0002",
    "\u0002:;\u0005\u000e\b\u0002;<\u0007\u0007\u0002\u0002<=\u0005\f\u0007",
    "\u0002=>\u0007\t\u0002\u0002>?\u0005\f\u0007\u0002?A\u0003\u0002\u0002",
    "\u0002@2\u0003\u0002\u0002\u0002@8\u0003\u0002\u0002\u0002A\t\u0003",
    "\u0002\u0002\u0002BC\u0007\u0005\u0002\u0002CD\u0007\u0006\u0002\u0002",
    "DE\u0005\u000e\b\u0002EF\u0007\u0007\u0002\u0002FG\u0005\f\u0007\u0002",
    "G\u000b\u0003\u0002\u0002\u0002HI\u0007\u000b\u0002\u0002IJ\u0005\u0004",
    "\u0003\u0002JK\u0007\f\u0002\u0002K\r\u0003\u0002\u0002\u0002LM\u0005",
    "\u0010\t\u0002M\u000f\u0003\u0002\u0002\u0002NO\b\t\u0001\u0002OP\u0005",
    "\u0012\n\u0002PV\u0003\u0002\u0002\u0002QR\f\u0004\u0002\u0002RS\u0007",
    "\u000e\u0002\u0002SU\u0005\u0012\n\u0002TQ\u0003\u0002\u0002\u0002U",
    "X\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002",
    "\u0002W\u0011\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\b",
    "\n\u0001\u0002Z[\u0005\u0014\u000b\u0002[a\u0003\u0002\u0002\u0002\\",
    "]\f\u0004\u0002\u0002]^\u0007\u000f\u0002\u0002^`\u0005\u0014\u000b",
    "\u0002_\\\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\u0013\u0003\u0002\u0002",
    "\u0002ca\u0003\u0002\u0002\u0002de\u0007\u0010\u0002\u0002eh\u0005\u0014",
    "\u000b\u0002fh\u0005\u0016\f\u0002gd\u0003\u0002\u0002\u0002gf\u0003",
    "\u0002\u0002\u0002h\u0015\u0003\u0002\u0002\u0002ij\u0005\u0018\r\u0002",
    "jk\u0007\u0011\u0002\u0002kl\u0005\u0018\r\u0002lo\u0003\u0002\u0002",
    "\u0002mo\u0005\u0018\r\u0002ni\u0003\u0002\u0002\u0002nm\u0003\u0002",
    "\u0002\u0002o\u0017\u0003\u0002\u0002\u0002pq\b\r\u0001\u0002qr\u0005",
    "\u001a\u000e\u0002r{\u0003\u0002\u0002\u0002st\f\u0005\u0002\u0002t",
    "u\u0007\u0012\u0002\u0002uz\u0005\u001a\u000e\u0002vw\f\u0004\u0002",
    "\u0002wx\u0007\u0014\u0002\u0002xz\u0005\u001a\u000e\u0002ys\u0003\u0002",
    "\u0002\u0002yv\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0019\u0003\u0002\u0002",
    "\u0002}{\u0003\u0002\u0002\u0002~\u007f\b\u000e\u0001\u0002\u007f\u0080",
    "\u0005\u001c\u000f\u0002\u0080\u0086\u0003\u0002\u0002\u0002\u0081\u0082",
    "\f\u0004\u0002\u0002\u0082\u0083\u0007\u0013\u0002\u0002\u0083\u0085",
    "\u0005\u001c\u000f\u0002\u0084\u0081\u0003\u0002\u0002\u0002\u0085\u0088",
    "\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0003\u0002\u0002\u0002\u0087\u001b\u0003\u0002\u0002\u0002\u0088\u0086",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u0014\u0002\u0002\u008a\u008d",
    "\u0005\u001c\u000f\u0002\u008b\u008d\u0005\u001e\u0010\u0002\u008c\u0089",
    "\u0003\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u001d",
    "\u0003\u0002\u0002\u0002\u008e\u0094\u0007\r\u0002\u0002\u008f\u0090",
    "\u0007\u0006\u0002\u0002\u0090\u0091\u0005\u000e\b\u0002\u0091\u0092",
    "\u0007\u0007\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002\u0093\u008e",
    "\u0003\u0002\u0002\u0002\u0093\u008f\u0003\u0002\u0002\u0002\u0094\u001f",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0007\n\u0002\u0002\u0096\u0097",
    "\u0005\u000e\b\u0002\u0097!\u0003\u0002\u0002\u0002\u000e)0@Vagny{\u0086",
    "\u008c\u0093"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "';'", "'while'", "'('", "')'", "'if'", 
                     "'else'", "'return'", "'{'", "'}'", null, "'or'", "'and'", 
                     "'not'", null, "'+'", null, "'-'" ];

var symbolicNames = [ null, "WHITESPACE", "SEMI", "WHILE", "LP", "RP", "IF", 
                      "ELSE", "RETURN", "LBR", "RBR", "NUM", "OR", "AND", 
                      "NOT", "RELOP", "PLUS", "MULOP", "MINUS" ];

var ruleNames =  [ "program", "stmts", "stmt", "cond", "loop", "braceblock", 
                   "expr", "orexp", "andexp", "notexp", "rel", "sum", "term", 
                   "neg", "factor", "returnstmt" ];

function gramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gramParser.prototype = Object.create(antlr4.Parser.prototype);
gramParser.prototype.constructor = gramParser;

Object.defineProperty(gramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gramParser.EOF = antlr4.Token.EOF;
gramParser.WHITESPACE = 1;
gramParser.SEMI = 2;
gramParser.WHILE = 3;
gramParser.LP = 4;
gramParser.RP = 5;
gramParser.IF = 6;
gramParser.ELSE = 7;
gramParser.RETURN = 8;
gramParser.LBR = 9;
gramParser.RBR = 10;
gramParser.NUM = 11;
gramParser.OR = 12;
gramParser.AND = 13;
gramParser.NOT = 14;
gramParser.RELOP = 15;
gramParser.PLUS = 16;
gramParser.MULOP = 17;
gramParser.MINUS = 18;

gramParser.RULE_program = 0;
gramParser.RULE_stmts = 1;
gramParser.RULE_stmt = 2;
gramParser.RULE_cond = 3;
gramParser.RULE_loop = 4;
gramParser.RULE_braceblock = 5;
gramParser.RULE_expr = 6;
gramParser.RULE_orexp = 7;
gramParser.RULE_andexp = 8;
gramParser.RULE_notexp = 9;
gramParser.RULE_rel = 10;
gramParser.RULE_sum = 11;
gramParser.RULE_term = 12;
gramParser.RULE_neg = 13;
gramParser.RULE_factor = 14;
gramParser.RULE_returnstmt = 15;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(gramParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitProgram(this);
	}
};




gramParser.ProgramContext = ProgramContext;

gramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.braceblock();
        this.state = 33;
        this.match(gramParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmts(this);
	}
};




gramParser.StmtsContext = StmtsContext;

gramParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gramParser.RULE_stmts);
    try {
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.WHILE:
        case gramParser.IF:
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.stmt();
            this.state = 36;
            this.stmts();
            break;
        case gramParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.returnstmt = function() {
    return this.getTypedRuleContext(ReturnstmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmt(this);
	}
};




gramParser.StmtContext = StmtContext;

gramParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gramParser.RULE_stmt);
    try {
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.cond();
            break;
        case gramParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.loop();
            break;
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.returnstmt();
            this.state = 44;
            this.match(gramParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(gramParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(gramParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitCond(this);
	}
};




gramParser.CondContext = CondContext;

gramParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gramParser.RULE_cond);
    try {
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.match(gramParser.IF);
            this.state = 49;
            this.match(gramParser.LP);
            this.state = 50;
            this.expr();
            this.state = 51;
            this.match(gramParser.RP);
            this.state = 52;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.match(gramParser.IF);
            this.state = 55;
            this.match(gramParser.LP);
            this.state = 56;
            this.expr();
            this.state = 57;
            this.match(gramParser.RP);
            this.state = 58;
            this.braceblock();
            this.state = 59;
            this.match(gramParser.ELSE);
            this.state = 60;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(gramParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLoop(this);
	}
};




gramParser.LoopContext = LoopContext;

gramParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(gramParser.WHILE);
        this.state = 65;
        this.match(gramParser.LP);
        this.state = 66;
        this.expr();
        this.state = 67;
        this.match(gramParser.RP);
        this.state = 68;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(gramParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(gramParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBraceblock(this);
	}
};




gramParser.BraceblockContext = BraceblockContext;

gramParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(gramParser.LBR);
        this.state = 71;
        this.stmts();
        this.state = 72;
        this.match(gramParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExpr(this);
	}
};




gramParser.ExprContext = ExprContext;

gramParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.orexp(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(gramParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOrexp(this);
	}
};



gramParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, gramParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 84;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_orexp);
                this.state = 79;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 80;
                this.match(gramParser.OR);
                this.state = 81;
                this.andexp(0); 
            }
            this.state = 86;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(gramParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAndexp(this);
	}
};



gramParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, gramParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 95;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_andexp);
                this.state = 90;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 91;
                this.match(gramParser.AND);
                this.state = 92;
                this.notexp(); 
            }
            this.state = 97;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(gramParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNotexp(this);
	}
};




gramParser.NotexpContext = NotexpContext;

gramParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, gramParser.RULE_notexp);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 98;
            this.match(gramParser.NOT);
            this.state = 99;
            this.notexp();
            break;
        case gramParser.LP:
        case gramParser.NUM:
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.rel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(gramParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitRel(this);
	}
};




gramParser.RelContext = RelContext;

gramParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gramParser.RULE_rel);
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.sum(0);
            this.state = 104;
            this.match(gramParser.RELOP);
            this.state = 105;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(gramParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitSum(this);
	}
};



gramParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, gramParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 119;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 113;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 114;
                    this.match(gramParser.PLUS);
                    this.state = 115;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 116;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 117;
                    this.match(gramParser.MINUS);
                    this.state = 118;
                    this.term(0);
                    break;

                } 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(gramParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTerm(this);
	}
};



gramParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, gramParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 132;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_term);
                this.state = 127;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 128;
                this.match(gramParser.MULOP);
                this.state = 129;
                this.neg(); 
            }
            this.state = 134;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNeg(this);
	}
};




gramParser.NegContext = NegContext;

gramParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gramParser.RULE_neg);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 135;
            this.match(gramParser.MINUS);
            this.state = 136;
            this.neg();
            break;
        case gramParser.LP:
        case gramParser.NUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFactor(this);
	}
};




gramParser.FactorContext = FactorContext;

gramParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gramParser.RULE_factor);
    try {
        this.state = 145;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 140;
            this.match(gramParser.NUM);
            break;
        case gramParser.LP:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
            this.match(gramParser.LP);
            this.state = 142;
            this.expr();
            this.state = 143;
            this.match(gramParser.RP);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnstmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_returnstmt;
    return this;
}

ReturnstmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnstmtContext.prototype.constructor = ReturnstmtContext;

ReturnstmtContext.prototype.RETURN = function() {
    return this.getToken(gramParser.RETURN, 0);
};

ReturnstmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnstmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterReturnstmt(this);
	}
};

ReturnstmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitReturnstmt(this);
	}
};




gramParser.ReturnstmtContext = ReturnstmtContext;

gramParser.prototype.returnstmt = function() {

    var localctx = new ReturnstmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gramParser.RULE_returnstmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(gramParser.RETURN);
        this.state = 148;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.orexp_sempred(localctx, predIndex);
	case 8:
			return this.andexp_sempred(localctx, predIndex);
	case 11:
			return this.sum_sempred(localctx, predIndex);
	case 12:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gramParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gramParser = gramParser;
