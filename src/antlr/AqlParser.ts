// Generated from src/antlr/Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AqlListener } from "./AqlListener";
import { AqlVisitor } from "./AqlVisitor";


export class AqlParser extends Parser {
	public static readonly EHR = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly XOR = 4;
	public static readonly NOT = 5;
	public static readonly IN = 6;
	public static readonly MATCHES = 7;
	public static readonly TERMINOLOGY = 8;
	public static readonly LIKE = 9;
	public static readonly ILIKE = 10;
	public static readonly SIMILARTO = 11;
	public static readonly SELECT = 12;
	public static readonly TOP = 13;
	public static readonly FORWARD = 14;
	public static readonly BACKWARD = 15;
	public static readonly AS = 16;
	public static readonly CONTAINS = 17;
	public static readonly WHERE = 18;
	public static readonly ORDERBY = 19;
	public static readonly OFFSET = 20;
	public static readonly LIMIT = 21;
	public static readonly FROM = 22;
	public static readonly DESCENDING = 23;
	public static readonly ASCENDING = 24;
	public static readonly DESC = 25;
	public static readonly ASC = 26;
	public static readonly EXISTS = 27;
	public static readonly VERSION = 28;
	public static readonly VERSIONED_OBJECT = 29;
	public static readonly ALL_VERSIONS = 30;
	public static readonly LATEST_VERSION = 31;
	public static readonly DISTINCT = 32;
	public static readonly JOINON = 33;
	public static readonly PERSON = 34;
	public static readonly AGENT = 35;
	public static readonly ORGANISATION = 36;
	public static readonly GROUP = 37;
	public static readonly FUNCTION_IDENTIFIER = 38;
	public static readonly EXTENSION_IDENTIFIER = 39;
	public static readonly BOOLEAN = 40;
	public static readonly NODEID = 41;
	public static readonly ARCHETYPEID = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly DEMOGRAPHIC = 44;
	public static readonly INTEGER = 45;
	public static readonly FLOAT = 46;
	public static readonly DATE = 47;
	public static readonly PARAMETER = 48;
	public static readonly UNIQUEID = 49;
	public static readonly COMPARABLEOPERATOR = 50;
	public static readonly URIVALUE = 51;
	public static readonly REGEXPATTERN = 52;
	public static readonly STRING = 53;
	public static readonly EXP_STRING = 54;
	public static readonly SLASH = 55;
	public static readonly COMMA = 56;
	public static readonly SEMICOLON = 57;
	public static readonly OPEN_BRACKET = 58;
	public static readonly CLOSE_BRACKET = 59;
	public static readonly OPEN_PAR = 60;
	public static readonly CLOSE_PAR = 61;
	public static readonly OPEN_CURLY = 62;
	public static readonly CLOSE_CURLY = 63;
	public static readonly ARITHMETIC_BINOP = 64;
	public static readonly COUNT = 65;
	public static readonly AVG = 66;
	public static readonly BOOL_AND = 67;
	public static readonly BOOL_OR = 68;
	public static readonly EVERY = 69;
	public static readonly MAX = 70;
	public static readonly MIN = 71;
	public static readonly SUM = 72;
	public static readonly SUBSTR = 73;
	public static readonly STRPOS = 74;
	public static readonly SPLIT_PART = 75;
	public static readonly BTRIM = 76;
	public static readonly CONCAT = 77;
	public static readonly CONCAT_WS = 78;
	public static readonly DECODE = 79;
	public static readonly ENCODE = 80;
	public static readonly FORMAT = 81;
	public static readonly INITCAP = 82;
	public static readonly LEFT = 83;
	public static readonly LENGTH = 84;
	public static readonly LPAD = 85;
	public static readonly LTRIM = 86;
	public static readonly REGEXP_MATCH = 87;
	public static readonly REGEXP_REPLACE = 88;
	public static readonly REGEXP_SPLIT_TO_ARRAY = 89;
	public static readonly REGEXP_SPLIT_TO_TABLE = 90;
	public static readonly REPEAT = 91;
	public static readonly REPLACE = 92;
	public static readonly REVERSE = 93;
	public static readonly RIGHT = 94;
	public static readonly RPAD = 95;
	public static readonly RTRIM = 96;
	public static readonly TRANSLATE = 97;
	public static readonly CORR = 98;
	public static readonly COVAR_POP = 99;
	public static readonly COVAR_SAMP = 100;
	public static readonly REGR_AVGX = 101;
	public static readonly REGR_AVGY = 102;
	public static readonly REGR_COUNT = 103;
	public static readonly REGR_INTERCEPT = 104;
	public static readonly REGR_R2 = 105;
	public static readonly REGR_SLOPE = 106;
	public static readonly REGR_SXX = 107;
	public static readonly REGR_SXY = 108;
	public static readonly REGR_SYY = 109;
	public static readonly STDDEV = 110;
	public static readonly STDDEV_POP = 111;
	public static readonly STDDEV_SAMP = 112;
	public static readonly VARIANCE = 113;
	public static readonly VAR_POP = 114;
	public static readonly VAR_SAMP = 115;
	public static readonly RAW_COMPOSITION_ENCODE = 116;
	public static readonly WS = 117;
	public static readonly RULE_query = 0;
	public static readonly RULE_queryExpr = 1;
	public static readonly RULE_select = 2;
	public static readonly RULE_topExpr = 3;
	public static readonly RULE_function = 4;
	public static readonly RULE_extension = 5;
	public static readonly RULE_where = 6;
	public static readonly RULE_orderBy = 7;
	public static readonly RULE_limit = 8;
	public static readonly RULE_offset = 9;
	public static readonly RULE_orderBySeq = 10;
	public static readonly RULE_orderByExpr = 11;
	public static readonly RULE_selectExpr = 12;
	public static readonly RULE_stdExpression = 13;
	public static readonly RULE_from = 14;
	public static readonly RULE_fromEHR = 15;
	public static readonly RULE_fromForeignData = 16;
	public static readonly RULE_fromExpr = 17;
	public static readonly RULE_containsExpression = 18;
	public static readonly RULE_containExpressionBool = 19;
	public static readonly RULE_contains = 20;
	public static readonly RULE_identifiedExpr = 21;
	public static readonly RULE_identifiedEquality = 22;
	public static readonly RULE_identifiedOperand = 23;
	public static readonly RULE_identifiedPath = 24;
	public static readonly RULE_predicate = 25;
	public static readonly RULE_nodePredicateOr = 26;
	public static readonly RULE_nodePredicateAnd = 27;
	public static readonly RULE_nodePredicateComparable = 28;
	public static readonly RULE_nodePredicateRegEx = 29;
	public static readonly RULE_matchesOperand = 30;
	public static readonly RULE_valueListItems = 31;
	public static readonly RULE_versionpredicate = 32;
	public static readonly RULE_versionpredicateOptions = 33;
	public static readonly RULE_standardPredicate = 34;
	public static readonly RULE_joinPredicate = 35;
	public static readonly RULE_predicateExpr = 36;
	public static readonly RULE_predicateAnd = 37;
	public static readonly RULE_predicateEquality = 38;
	public static readonly RULE_predicateOperand = 39;
	public static readonly RULE_operand = 40;
	public static readonly RULE_invokeOperand = 41;
	public static readonly RULE_invokeExpr = 42;
	public static readonly RULE_objectPath = 43;
	public static readonly RULE_pathPart = 44;
	public static readonly RULE_classExpr = 45;
	public static readonly RULE_simpleClassExpr = 46;
	public static readonly RULE_archetypedClassExpr = 47;
	public static readonly RULE_versionedClassExpr = 48;
	public static readonly RULE_versionClassExpr = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"query", "queryExpr", "select", "topExpr", "function", "extension", "where", 
		"orderBy", "limit", "offset", "orderBySeq", "orderByExpr", "selectExpr", 
		"stdExpression", "from", "fromEHR", "fromForeignData", "fromExpr", "containsExpression", 
		"containExpressionBool", "contains", "identifiedExpr", "identifiedEquality", 
		"identifiedOperand", "identifiedPath", "predicate", "nodePredicateOr", 
		"nodePredicateAnd", "nodePredicateComparable", "nodePredicateRegEx", "matchesOperand", 
		"valueListItems", "versionpredicate", "versionpredicateOptions", "standardPredicate", 
		"joinPredicate", "predicateExpr", "predicateAnd", "predicateEquality", 
		"predicateOperand", "operand", "invokeOperand", "invokeExpr", "objectPath", 
		"pathPart", "classExpr", "simpleClassExpr", "archetypedClassExpr", "versionedClassExpr", 
		"versionClassExpr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'/'", 
		"','", "';'", "'['", "']'", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EHR", "AND", "OR", "XOR", "NOT", "IN", "MATCHES", "TERMINOLOGY", 
		"LIKE", "ILIKE", "SIMILARTO", "SELECT", "TOP", "FORWARD", "BACKWARD", 
		"AS", "CONTAINS", "WHERE", "ORDERBY", "OFFSET", "LIMIT", "FROM", "DESCENDING", 
		"ASCENDING", "DESC", "ASC", "EXISTS", "VERSION", "VERSIONED_OBJECT", "ALL_VERSIONS", 
		"LATEST_VERSION", "DISTINCT", "JOINON", "PERSON", "AGENT", "ORGANISATION", 
		"GROUP", "FUNCTION_IDENTIFIER", "EXTENSION_IDENTIFIER", "BOOLEAN", "NODEID", 
		"ARCHETYPEID", "IDENTIFIER", "DEMOGRAPHIC", "INTEGER", "FLOAT", "DATE", 
		"PARAMETER", "UNIQUEID", "COMPARABLEOPERATOR", "URIVALUE", "REGEXPATTERN", 
		"STRING", "EXP_STRING", "SLASH", "COMMA", "SEMICOLON", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "OPEN_PAR", "CLOSE_PAR", "OPEN_CURLY", "CLOSE_CURLY", 
		"ARITHMETIC_BINOP", "COUNT", "AVG", "BOOL_AND", "BOOL_OR", "EVERY", "MAX", 
		"MIN", "SUM", "SUBSTR", "STRPOS", "SPLIT_PART", "BTRIM", "CONCAT", "CONCAT_WS", 
		"DECODE", "ENCODE", "FORMAT", "INITCAP", "LEFT", "LENGTH", "LPAD", "LTRIM", 
		"REGEXP_MATCH", "REGEXP_REPLACE", "REGEXP_SPLIT_TO_ARRAY", "REGEXP_SPLIT_TO_TABLE", 
		"REPEAT", "REPLACE", "REVERSE", "RIGHT", "RPAD", "RTRIM", "TRANSLATE", 
		"CORR", "COVAR_POP", "COVAR_SAMP", "REGR_AVGX", "REGR_AVGY", "REGR_COUNT", 
		"REGR_INTERCEPT", "REGR_R2", "REGR_SLOPE", "REGR_SXX", "REGR_SXY", "REGR_SYY", 
		"STDDEV", "STDDEV_POP", "STDDEV_SAMP", "VARIANCE", "VAR_POP", "VAR_SAMP", 
		"RAW_COMPOSITION_ENCODE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AqlParser._LITERAL_NAMES, AqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Aql.g4"; }

	// @Override
	public get ruleNames(): string[] { return AqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AqlParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.queryExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryExpr(): QueryExprContext {
		let _localctx: QueryExprContext = new QueryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AqlParser.RULE_queryExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.select();
			this.state = 103;
			this.from();
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.WHERE) {
				{
				this.state = 104;
				this.where();
				}
			}

			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.LIMIT) {
				{
				this.state = 107;
				this.limit();
				}
			}

			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.OFFSET) {
				{
				this.state = 110;
				this.offset();
				}
			}

			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.ORDERBY) {
				{
				this.state = 113;
				this.orderBy();
				}
			}

			this.state = 116;
			this.match(AqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public select(): SelectContext {
		let _localctx: SelectContext = new SelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AqlParser.RULE_select);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.match(AqlParser.SELECT);
				this.state = 119;
				this.selectExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(AqlParser.SELECT);
				this.state = 121;
				this.topExpr();
				this.state = 122;
				this.selectExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topExpr(): TopExprContext {
		let _localctx: TopExprContext = new TopExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AqlParser.RULE_topExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(AqlParser.TOP);
			this.state = 127;
			this.match(AqlParser.INTEGER);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.FORWARD || _la === AqlParser.BACKWARD) {
				{
				this.state = 128;
				_la = this._input.LA(1);
				if (!(_la === AqlParser.FORWARD || _la === AqlParser.BACKWARD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AqlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(AqlParser.FUNCTION_IDENTIFIER);
			this.state = 132;
			this.match(AqlParser.OPEN_PAR);
			this.state = 136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 133;
				this.match(AqlParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 134;
				this.identifiedPath();
				}
				break;

			case 3:
				{
				this.state = 135;
				this.operand();
				}
				break;
			}
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.COMMA) {
				{
				{
				this.state = 138;
				this.match(AqlParser.COMMA);
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 139;
					this.match(AqlParser.IDENTIFIER);
					}
					break;

				case 2:
					{
					this.state = 140;
					this.identifiedPath();
					}
					break;

				case 3:
					{
					this.state = 141;
					this.operand();
					}
					break;
				}
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
			this.match(AqlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extension(): ExtensionContext {
		let _localctx: ExtensionContext = new ExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AqlParser.RULE_extension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(AqlParser.EXTENSION_IDENTIFIER);
			this.state = 152;
			this.match(AqlParser.OPEN_PAR);
			this.state = 153;
			this.match(AqlParser.STRING);
			this.state = 154;
			this.match(AqlParser.COMMA);
			this.state = 155;
			this.match(AqlParser.STRING);
			this.state = 156;
			this.match(AqlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public where(): WhereContext {
		let _localctx: WhereContext = new WhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AqlParser.RULE_where);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(AqlParser.WHERE);
			this.state = 159;
			this.identifiedExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderBy(): OrderByContext {
		let _localctx: OrderByContext = new OrderByContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AqlParser.RULE_orderBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(AqlParser.ORDERBY);
			this.state = 162;
			this.orderBySeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limit(): LimitContext {
		let _localctx: LimitContext = new LimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AqlParser.RULE_limit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(AqlParser.LIMIT);
			this.state = 165;
			this.match(AqlParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AqlParser.RULE_offset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(AqlParser.OFFSET);
			this.state = 168;
			this.match(AqlParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderBySeq(): OrderBySeqContext {
		let _localctx: OrderBySeqContext = new OrderBySeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AqlParser.RULE_orderBySeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.orderByExpr();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.COMMA) {
				{
				this.state = 171;
				this.match(AqlParser.COMMA);
				this.state = 172;
				this.orderBySeq();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByExpr(): OrderByExprContext {
		let _localctx: OrderByExprContext = new OrderByExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AqlParser.RULE_orderByExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.identifiedPath();
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.DESCENDING) | (1 << AqlParser.ASCENDING) | (1 << AqlParser.DESC) | (1 << AqlParser.ASC))) !== 0)) {
				{
				this.state = 176;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.DESCENDING) | (1 << AqlParser.ASCENDING) | (1 << AqlParser.DESC) | (1 << AqlParser.ASC))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectExpr(): SelectExprContext {
		let _localctx: SelectExprContext = new SelectExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AqlParser.RULE_selectExpr);
		let _la: number;
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.DISTINCT) {
					{
					this.state = 179;
					this.match(AqlParser.DISTINCT);
					}
				}

				this.state = 182;
				this.identifiedPath();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.AS) {
					{
					this.state = 183;
					this.match(AqlParser.AS);
					this.state = 184;
					this.match(AqlParser.IDENTIFIER);
					}
				}

				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 187;
					this.match(AqlParser.COMMA);
					this.state = 188;
					this.selectExpr();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.DISTINCT) {
					{
					this.state = 191;
					this.match(AqlParser.DISTINCT);
					}
				}

				this.state = 194;
				this.stdExpression();
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.AS) {
					{
					this.state = 195;
					this.match(AqlParser.AS);
					this.state = 196;
					this.match(AqlParser.IDENTIFIER);
					}
				}

				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 199;
					this.match(AqlParser.COMMA);
					this.state = 200;
					this.selectExpr();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdExpression(): StdExpressionContext {
		let _localctx: StdExpressionContext = new StdExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AqlParser.RULE_stdExpression);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.FUNCTION_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.function();
				}
				break;
			case AqlParser.EXTENSION_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.extension();
				}
				break;
			case AqlParser.INTEGER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.match(AqlParser.INTEGER);
				}
				break;
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 208;
				this.match(AqlParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from(): FromContext {
		let _localctx: FromContext = new FromContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AqlParser.RULE_from);
		let _la: number;
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this.match(AqlParser.FROM);
				this.state = 212;
				this.fromExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.match(AqlParser.FROM);
				this.state = 214;
				this.fromEHR();
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.CONTAINS) {
					{
					this.state = 215;
					this.match(AqlParser.CONTAINS);
					this.state = 216;
					this.containsExpression();
					}
				}

				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 219;
					this.match(AqlParser.COMMA);
					this.state = 220;
					this.fromForeignData();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 223;
				this.match(AqlParser.FROM);
				this.state = 224;
				this.fromForeignData();
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 225;
					this.match(AqlParser.COMMA);
					this.state = 226;
					this.fromForeignData();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromEHR(): FromEHRContext {
		let _localctx: FromEHRContext = new FromEHRContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AqlParser.RULE_fromEHR);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.match(AqlParser.EHR);
				this.state = 232;
				this.standardPredicate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 233;
				this.match(AqlParser.EHR);
				this.state = 234;
				this.match(AqlParser.IDENTIFIER);
				this.state = 235;
				this.standardPredicate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(AqlParser.EHR);
				this.state = 237;
				this.match(AqlParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromForeignData(): FromForeignDataContext {
		let _localctx: FromForeignDataContext = new FromForeignDataContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AqlParser.RULE_fromForeignData);
		let _la: number;
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (AqlParser.PERSON - 34)) | (1 << (AqlParser.AGENT - 34)) | (1 << (AqlParser.ORGANISATION - 34)) | (1 << (AqlParser.GROUP - 34)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 241;
				this.match(AqlParser.IDENTIFIER);
				this.state = 242;
				this.joinPredicate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (AqlParser.PERSON - 34)) | (1 << (AqlParser.AGENT - 34)) | (1 << (AqlParser.ORGANISATION - 34)) | (1 << (AqlParser.GROUP - 34)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 244;
				this.match(AqlParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromExpr(): FromExprContext {
		let _localctx: FromExprContext = new FromExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AqlParser.RULE_fromExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.containsExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public containsExpression(): ContainsExpressionContext {
		let _localctx: ContainsExpressionContext = new ContainsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AqlParser.RULE_containsExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.containExpressionBool();
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 250;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.AND) | (1 << AqlParser.OR) | (1 << AqlParser.XOR))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 251;
				this.containsExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public containExpressionBool(): ContainExpressionBoolContext {
		let _localctx: ContainExpressionBoolContext = new ContainExpressionBoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AqlParser.RULE_containExpressionBool);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.VERSION:
			case AqlParser.VERSIONED_OBJECT:
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.contains();
				}
				break;
			case AqlParser.OPEN_PAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.match(AqlParser.OPEN_PAR);
				this.state = 256;
				this.containsExpression();
				this.state = 257;
				this.match(AqlParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contains(): ContainsContext {
		let _localctx: ContainsContext = new ContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AqlParser.RULE_contains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.simpleClassExpr();
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.CONTAINS) {
				{
				this.state = 262;
				this.match(AqlParser.CONTAINS);
				this.state = 263;
				this.containsExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiedExpr(): IdentifiedExprContext {
		let _localctx: IdentifiedExprContext = new IdentifiedExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AqlParser.RULE_identifiedExpr);
		let _la: number;
		try {
			let _alt: number;
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.identifiedEquality();
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 267;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.AND) | (1 << AqlParser.OR) | (1 << AqlParser.XOR))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 268;
						this.identifiedEquality();
						}
						}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.match(AqlParser.OPEN_PAR);
				this.state = 275;
				this.identifiedEquality();
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.AND) | (1 << AqlParser.OR) | (1 << AqlParser.XOR))) !== 0)) {
					{
					{
					this.state = 276;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AqlParser.AND) | (1 << AqlParser.OR) | (1 << AqlParser.XOR))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 277;
					this.identifiedEquality();
					}
					}
					this.state = 282;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 283;
				this.match(AqlParser.CLOSE_PAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiedEquality(): IdentifiedEqualityContext {
		let _localctx: IdentifiedEqualityContext = new IdentifiedEqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AqlParser.RULE_identifiedEquality);
		let _la: number;
		try {
			let _alt: number;
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 287;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 293;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 296;
				this.identifiedOperand();
				this.state = 297;
				this.match(AqlParser.COMPARABLEOPERATOR);
				this.state = 298;
				this.identifiedOperand();
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 299;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 305;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 311;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 314;
				this.identifiedOperand();
				this.state = 315;
				this.match(AqlParser.MATCHES);
				this.state = 316;
				this.match(AqlParser.OPEN_CURLY);
				this.state = 317;
				this.matchesOperand();
				this.state = 318;
				this.match(AqlParser.CLOSE_CURLY);
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 319;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 325;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 331;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 334;
				this.identifiedOperand();
				this.state = 335;
				this.match(AqlParser.MATCHES);
				this.state = 336;
				this.match(AqlParser.REGEXPATTERN);
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 337;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 343;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 348;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 349;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 352;
				this.identifiedOperand();
				this.state = 353;
				this.match(AqlParser.LIKE);
				this.state = 354;
				this.match(AqlParser.STRING);
				this.state = 358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 355;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 360;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 361;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 367;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 370;
				this.identifiedOperand();
				this.state = 371;
				this.match(AqlParser.ILIKE);
				this.state = 372;
				this.match(AqlParser.STRING);
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 373;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 379;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 384;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 385;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 388;
				this.identifiedOperand();
				this.state = 389;
				this.match(AqlParser.SIMILARTO);
				this.state = 390;
				this.match(AqlParser.STRING);
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 391;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 397;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 403;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 406;
				this.match(AqlParser.IN);
				this.state = 407;
				this.match(AqlParser.OPEN_PAR);
				this.state = 408;
				this.queryExpr();
				this.state = 409;
				this.match(AqlParser.CLOSE_PAR);
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 410;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 416;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 421;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 422;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 425;
				this.match(AqlParser.EXISTS);
				this.state = 426;
				this.identifiedPath();
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 427;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AqlParser.OPEN_PAR) {
					{
					{
					this.state = 433;
					this.match(AqlParser.OPEN_PAR);
					}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.NOT) {
					{
					this.state = 439;
					this.match(AqlParser.NOT);
					}
				}

				this.state = 442;
				this.match(AqlParser.EXISTS);
				this.state = 443;
				this.identifiedExpr();
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 444;
						this.match(AqlParser.CLOSE_PAR);
						}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiedOperand(): IdentifiedOperandContext {
		let _localctx: IdentifiedOperandContext = new IdentifiedOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AqlParser.RULE_identifiedOperand);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.TERMINOLOGY:
			case AqlParser.BOOLEAN:
			case AqlParser.INTEGER:
			case AqlParser.FLOAT:
			case AqlParser.DATE:
			case AqlParser.PARAMETER:
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this.operand();
				}
				break;
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 453;
				this.identifiedPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifiedPath(): IdentifiedPathContext {
		let _localctx: IdentifiedPathContext = new IdentifiedPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AqlParser.RULE_identifiedPath);
		let _la: number;
		try {
			this.state = 467;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.match(AqlParser.IDENTIFIER);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.SLASH) {
					{
					this.state = 457;
					this.match(AqlParser.SLASH);
					this.state = 458;
					this.objectPath();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.match(AqlParser.IDENTIFIER);
				this.state = 462;
				this.predicate();
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.SLASH) {
					{
					this.state = 463;
					this.match(AqlParser.SLASH);
					this.state = 464;
					this.objectPath();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AqlParser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(AqlParser.OPEN_BRACKET);
			this.state = 470;
			this.nodePredicateOr();
			this.state = 471;
			this.match(AqlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodePredicateOr(): NodePredicateOrContext {
		let _localctx: NodePredicateOrContext = new NodePredicateOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AqlParser.RULE_nodePredicateOr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.nodePredicateAnd();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.OR) {
				{
				{
				this.state = 474;
				this.match(AqlParser.OR);
				this.state = 475;
				this.nodePredicateAnd();
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodePredicateAnd(): NodePredicateAndContext {
		let _localctx: NodePredicateAndContext = new NodePredicateAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AqlParser.RULE_nodePredicateAnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.nodePredicateComparable();
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.AND) {
				{
				{
				this.state = 482;
				this.match(AqlParser.AND);
				this.state = 483;
				this.nodePredicateComparable();
				}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodePredicateComparable(): NodePredicateComparableContext {
		let _localctx: NodePredicateComparableContext = new NodePredicateComparableContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AqlParser.RULE_nodePredicateComparable);
		let _la: number;
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.match(AqlParser.NODEID);
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 490;
					this.match(AqlParser.COMMA);
					this.state = 491;
					_la = this._input.LA(1);
					if (!(_la === AqlParser.PARAMETER || _la === AqlParser.STRING)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.match(AqlParser.ARCHETYPEID);
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 495;
					this.match(AqlParser.COMMA);
					this.state = 496;
					_la = this._input.LA(1);
					if (!(_la === AqlParser.PARAMETER || _la === AqlParser.STRING)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.predicateOperand();
				this.state = 504;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AqlParser.COMPARABLEOPERATOR:
					{
					{
					this.state = 500;
					this.match(AqlParser.COMPARABLEOPERATOR);
					this.state = 501;
					this.predicateOperand();
					}
					}
					break;
				case AqlParser.MATCHES:
					{
					{
					this.state = 502;
					this.match(AqlParser.MATCHES);
					this.state = 503;
					this.match(AqlParser.REGEXPATTERN);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 506;
				this.match(AqlParser.REGEXPATTERN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 507;
				this.match(AqlParser.PARAMETER);
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.COMMA) {
					{
					this.state = 508;
					this.match(AqlParser.COMMA);
					this.state = 509;
					_la = this._input.LA(1);
					if (!(_la === AqlParser.PARAMETER || _la === AqlParser.STRING)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodePredicateRegEx(): NodePredicateRegExContext {
		let _localctx: NodePredicateRegExContext = new NodePredicateRegExContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AqlParser.RULE_nodePredicateRegEx);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.REGEXPATTERN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.match(AqlParser.REGEXPATTERN);
				}
				break;
			case AqlParser.TERMINOLOGY:
			case AqlParser.BOOLEAN:
			case AqlParser.IDENTIFIER:
			case AqlParser.INTEGER:
			case AqlParser.FLOAT:
			case AqlParser.DATE:
			case AqlParser.PARAMETER:
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 515;
				this.predicateOperand();
				this.state = 516;
				this.match(AqlParser.MATCHES);
				this.state = 517;
				this.match(AqlParser.REGEXPATTERN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchesOperand(): MatchesOperandContext {
		let _localctx: MatchesOperandContext = new MatchesOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AqlParser.RULE_matchesOperand);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.TERMINOLOGY:
			case AqlParser.BOOLEAN:
			case AqlParser.INTEGER:
			case AqlParser.FLOAT:
			case AqlParser.DATE:
			case AqlParser.PARAMETER:
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.valueListItems();
				}
				break;
			case AqlParser.URIVALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.match(AqlParser.URIVALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueListItems(): ValueListItemsContext {
		let _localctx: ValueListItemsContext = new ValueListItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AqlParser.RULE_valueListItems);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.operand();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.COMMA) {
				{
				this.state = 526;
				this.match(AqlParser.COMMA);
				this.state = 527;
				this.valueListItems();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionpredicate(): VersionpredicateContext {
		let _localctx: VersionpredicateContext = new VersionpredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AqlParser.RULE_versionpredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(AqlParser.OPEN_BRACKET);
			this.state = 531;
			this.versionpredicateOptions();
			this.state = 532;
			this.match(AqlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionpredicateOptions(): VersionpredicateOptionsContext {
		let _localctx: VersionpredicateOptionsContext = new VersionpredicateOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AqlParser.RULE_versionpredicateOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			_la = this._input.LA(1);
			if (!(_la === AqlParser.ALL_VERSIONS || _la === AqlParser.LATEST_VERSION)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public standardPredicate(): StandardPredicateContext {
		let _localctx: StandardPredicateContext = new StandardPredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AqlParser.RULE_standardPredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(AqlParser.OPEN_BRACKET);
			this.state = 537;
			this.predicateExpr();
			this.state = 538;
			this.match(AqlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinPredicate(): JoinPredicateContext {
		let _localctx: JoinPredicateContext = new JoinPredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AqlParser.RULE_joinPredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(AqlParser.OPEN_BRACKET);
			this.state = 541;
			this.match(AqlParser.JOINON);
			this.state = 542;
			this.predicateEquality();
			this.state = 543;
			this.match(AqlParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateExpr(): PredicateExprContext {
		let _localctx: PredicateExprContext = new PredicateExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, AqlParser.RULE_predicateExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.predicateAnd();
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.OR) {
				{
				{
				this.state = 546;
				this.match(AqlParser.OR);
				this.state = 547;
				this.predicateAnd();
				}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateAnd(): PredicateAndContext {
		let _localctx: PredicateAndContext = new PredicateAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AqlParser.RULE_predicateAnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.predicateEquality();
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.AND) {
				{
				{
				this.state = 554;
				this.match(AqlParser.AND);
				this.state = 555;
				this.predicateEquality();
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateEquality(): PredicateEqualityContext {
		let _localctx: PredicateEqualityContext = new PredicateEqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AqlParser.RULE_predicateEquality);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.predicateOperand();
			this.state = 562;
			this.match(AqlParser.COMPARABLEOPERATOR);
			this.state = 563;
			this.predicateOperand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateOperand(): PredicateOperandContext {
		let _localctx: PredicateOperandContext = new PredicateOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AqlParser.RULE_predicateOperand);
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.objectPath();
				}
				break;
			case AqlParser.TERMINOLOGY:
			case AqlParser.BOOLEAN:
			case AqlParser.INTEGER:
			case AqlParser.FLOAT:
			case AqlParser.DATE:
			case AqlParser.PARAMETER:
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 566;
				this.operand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AqlParser.RULE_operand);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this.match(AqlParser.STRING);
				}
				break;
			case AqlParser.INTEGER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.match(AqlParser.INTEGER);
				}
				break;
			case AqlParser.FLOAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 571;
				this.match(AqlParser.FLOAT);
				}
				break;
			case AqlParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 572;
				this.match(AqlParser.DATE);
				}
				break;
			case AqlParser.PARAMETER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 573;
				this.match(AqlParser.PARAMETER);
				}
				break;
			case AqlParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 574;
				this.match(AqlParser.BOOLEAN);
				}
				break;
			case AqlParser.TERMINOLOGY:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 575;
				this.invokeOperand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invokeOperand(): InvokeOperandContext {
		let _localctx: InvokeOperandContext = new InvokeOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AqlParser.RULE_invokeOperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.invokeExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invokeExpr(): InvokeExprContext {
		let _localctx: InvokeExprContext = new InvokeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, AqlParser.RULE_invokeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(AqlParser.TERMINOLOGY);
			this.state = 581;
			this.match(AqlParser.OPEN_PAR);
			this.state = 582;
			this.match(AqlParser.STRING);
			this.state = 583;
			this.match(AqlParser.COMMA);
			this.state = 584;
			this.match(AqlParser.STRING);
			this.state = 585;
			this.match(AqlParser.COMMA);
			this.state = 586;
			this.match(AqlParser.STRING);
			this.state = 587;
			this.match(AqlParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectPath(): ObjectPathContext {
		let _localctx: ObjectPathContext = new ObjectPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AqlParser.RULE_objectPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.pathPart();
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AqlParser.SLASH) {
				{
				{
				this.state = 590;
				this.match(AqlParser.SLASH);
				this.state = 591;
				this.pathPart();
				}
				}
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathPart(): PathPartContext {
		let _localctx: PathPartContext = new PathPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AqlParser.RULE_pathPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(AqlParser.IDENTIFIER);
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.OPEN_BRACKET) {
				{
				this.state = 598;
				this.predicate();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExpr(): ClassExprContext {
		let _localctx: ClassExprContext = new ClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AqlParser.RULE_classExpr);
		try {
			this.state = 606;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AqlParser.OPEN_PAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 601;
				this.match(AqlParser.OPEN_PAR);
				this.state = 602;
				this.simpleClassExpr();
				this.state = 603;
				this.match(AqlParser.CLOSE_PAR);
				}
				break;
			case AqlParser.VERSION:
			case AqlParser.VERSIONED_OBJECT:
			case AqlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
				this.simpleClassExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleClassExpr(): SimpleClassExprContext {
		let _localctx: SimpleClassExprContext = new SimpleClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AqlParser.RULE_simpleClassExpr);
		let _la: number;
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this.match(AqlParser.IDENTIFIER);
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AqlParser.IDENTIFIER) {
					{
					this.state = 609;
					this.match(AqlParser.IDENTIFIER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
				this.archetypedClassExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 613;
				this.versionedClassExpr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 614;
				this.versionClassExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public archetypedClassExpr(): ArchetypedClassExprContext {
		let _localctx: ArchetypedClassExprContext = new ArchetypedClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AqlParser.RULE_archetypedClassExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(AqlParser.IDENTIFIER);
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.IDENTIFIER) {
				{
				this.state = 618;
				this.match(AqlParser.IDENTIFIER);
				}
			}

			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.OPEN_BRACKET) {
				{
				this.state = 621;
				this.match(AqlParser.OPEN_BRACKET);
				this.state = 622;
				this.match(AqlParser.ARCHETYPEID);
				this.state = 623;
				this.match(AqlParser.CLOSE_BRACKET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionedClassExpr(): VersionedClassExprContext {
		let _localctx: VersionedClassExprContext = new VersionedClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AqlParser.RULE_versionedClassExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(AqlParser.VERSIONED_OBJECT);
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.IDENTIFIER) {
				{
				this.state = 627;
				this.match(AqlParser.IDENTIFIER);
				}
			}

			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.OPEN_BRACKET) {
				{
				this.state = 630;
				this.standardPredicate();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionClassExpr(): VersionClassExprContext {
		let _localctx: VersionClassExprContext = new VersionClassExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AqlParser.RULE_versionClassExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.match(AqlParser.VERSION);
			this.state = 635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AqlParser.IDENTIFIER) {
				{
				this.state = 634;
				this.match(AqlParser.IDENTIFIER);
				}
			}

			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.standardPredicate();
				}
				break;

			case 2:
				{
				this.state = 638;
				this.versionpredicate();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03w\u0284\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03\x05\x03o\n\x03" +
		"\x03\x03\x05\x03r\n\x03\x03\x03\x05\x03u\n\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x7F\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\x84\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\x8B\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x91\n\x06\x07" +
		"\x06\x93\n\x06\f\x06\x0E\x06\x96\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\xB0" +
		"\n\f\x03\r\x03\r\x05\r\xB4\n\r\x03\x0E\x05\x0E\xB7\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\xBC\n\x0E\x03\x0E\x03\x0E\x05\x0E\xC0\n\x0E\x03\x0E\x05" +
		"\x0E\xC3\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC8\n\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xCC\n\x0E\x05\x0E\xCE\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\xD4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xDC\n\x10\x03\x10\x03\x10\x05\x10\xE0\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\xE6\n\x10\x05\x10\xE8\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\xF1\n\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\xF8\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\xFF\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0106" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u010B\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u0110\n\x17\f\x17\x0E\x17\u0113\v\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u0119\n\x17\f\x17\x0E\x17\u011C\v\x17\x03\x17\x03" +
		"\x17\x05\x17\u0120\n\x17\x03\x18\x07\x18\u0123\n\x18\f\x18\x0E\x18\u0126" +
		"\v\x18\x03\x18\x05\x18\u0129\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u012F\n\x18\f\x18\x0E\x18\u0132\v\x18\x03\x18\x07\x18\u0135\n\x18" +
		"\f\x18\x0E\x18\u0138\v\x18\x03\x18\x05\x18\u013B\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0143\n\x18\f\x18\x0E\x18\u0146" +
		"\v\x18\x03\x18\x07\x18\u0149\n\x18\f\x18\x0E\x18\u014C\v\x18\x03\x18\x05" +
		"\x18\u014F\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0155\n\x18\f" +
		"\x18\x0E\x18\u0158\v\x18\x03\x18\x07\x18\u015B\n\x18\f\x18\x0E\x18\u015E" +
		"\v\x18\x03\x18\x05\x18\u0161\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u0167\n\x18\f\x18\x0E\x18\u016A\v\x18\x03\x18\x07\x18\u016D\n\x18" +
		"\f\x18\x0E\x18\u0170\v\x18\x03\x18\x05\x18\u0173\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u0179\n\x18\f\x18\x0E\x18\u017C\v\x18\x03\x18" +
		"\x07\x18\u017F\n\x18\f\x18\x0E\x18\u0182\v\x18\x03\x18\x05\x18\u0185\n" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u018B\n\x18\f\x18\x0E\x18" +
		"\u018E\v\x18\x03\x18\x07\x18\u0191\n\x18\f\x18\x0E\x18\u0194\v\x18\x03" +
		"\x18\x05\x18\u0197\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\u019E\n\x18\f\x18\x0E\x18\u01A1\v\x18\x03\x18\x07\x18\u01A4\n\x18\f\x18" +
		"\x0E\x18\u01A7\v\x18\x03\x18\x05\x18\u01AA\n\x18\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u01AF\n\x18\f\x18\x0E\x18\u01B2\v\x18\x03\x18\x07\x18\u01B5\n" +
		"\x18\f\x18\x0E\x18\u01B8\v\x18\x03\x18\x05\x18\u01BB\n\x18\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\u01C0\n\x18\f\x18\x0E\x18\u01C3\v\x18\x05\x18\u01C5" +
		"\n\x18\x03\x19\x03\x19\x05\x19\u01C9\n\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u01CE\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01D4\n\x1A\x05" +
		"\x1A\u01D6\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x07\x1C\u01DF\n\x1C\f\x1C\x0E\x1C\u01E2\v\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\u01E7\n\x1D\f\x1D\x0E\x1D\u01EA\v\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u01EF\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01F4\n\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01FB\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u0201\n\x1E\x05\x1E\u0203\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u020A\n\x1F\x03 \x03 \x05 \u020E\n \x03!" +
		"\x03!\x03!\x05!\u0213\n!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u0227\n&\f&\x0E&\u022A" +
		"\v&\x03\'\x03\'\x03\'\x07\'\u022F\n\'\f\'\x0E\'\u0232\v\'\x03(\x03(\x03" +
		"(\x03(\x03)\x03)\x05)\u023A\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05" +
		"*\u0243\n*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		"-\x03-\x03-\x07-\u0253\n-\f-\x0E-\u0256\v-\x03.\x03.\x05.\u025A\n.\x03" +
		"/\x03/\x03/\x03/\x03/\x05/\u0261\n/\x030\x030\x050\u0265\n0\x030\x030" +
		"\x030\x050\u026A\n0\x031\x031\x051\u026E\n1\x031\x031\x031\x051\u0273" +
		"\n1\x032\x032\x052\u0277\n2\x032\x052\u027A\n2\x033\x033\x053\u027E\n" +
		"3\x033\x033\x053\u0282\n3\x033\x02\x02\x024\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02\x02\b\x03\x02\x10" +
		"\x11\x03\x02\x19\x1C\x03\x02$\'\x03\x02\x04\x06\x04\x022277\x03\x02 !" +
		"\x02\u02C1\x02f\x03\x02\x02\x02\x04h\x03\x02\x02\x02\x06~\x03\x02\x02" +
		"\x02\b\x80\x03\x02\x02\x02\n\x85\x03\x02\x02\x02\f\x99\x03\x02\x02\x02" +
		"\x0E\xA0\x03\x02\x02\x02\x10\xA3\x03\x02\x02\x02\x12\xA6\x03\x02\x02\x02" +
		"\x14\xA9\x03\x02\x02\x02\x16\xAC\x03\x02\x02\x02\x18\xB1\x03\x02\x02\x02" +
		"\x1A\xCD\x03\x02\x02\x02\x1C\xD3\x03\x02\x02\x02\x1E\xE7\x03\x02\x02\x02" +
		" \xF0\x03\x02\x02\x02\"\xF7\x03\x02\x02\x02$\xF9\x03\x02\x02\x02&\xFB" +
		"\x03\x02\x02\x02(\u0105\x03\x02\x02\x02*\u0107\x03\x02\x02\x02,\u011F" +
		"\x03\x02\x02\x02.\u01C4\x03\x02\x02\x020\u01C8\x03\x02\x02\x022\u01D5" +
		"\x03\x02\x02\x024\u01D7\x03\x02\x02\x026\u01DB\x03\x02\x02\x028\u01E3" +
		"\x03\x02\x02\x02:\u0202\x03\x02\x02\x02<\u0209\x03\x02\x02\x02>\u020D" +
		"\x03\x02\x02\x02@\u020F\x03\x02\x02\x02B\u0214\x03\x02\x02\x02D\u0218" +
		"\x03\x02\x02\x02F\u021A\x03\x02\x02\x02H\u021E\x03\x02\x02\x02J\u0223" +
		"\x03\x02\x02\x02L\u022B\x03\x02\x02\x02N\u0233\x03\x02\x02\x02P\u0239" +
		"\x03\x02\x02\x02R\u0242\x03\x02\x02\x02T\u0244\x03\x02\x02\x02V\u0246" +
		"\x03\x02\x02\x02X\u024F\x03\x02\x02\x02Z\u0257\x03\x02\x02\x02\\\u0260" +
		"\x03\x02\x02\x02^\u0269\x03\x02\x02\x02`\u026B\x03\x02\x02\x02b\u0274" +
		"\x03\x02\x02\x02d\u027B\x03\x02\x02\x02fg\x05\x04\x03\x02g\x03\x03\x02" +
		"\x02\x02hi\x05\x06\x04\x02ik\x05\x1E\x10\x02jl\x05\x0E\b\x02kj\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mo\x05\x12\n\x02nm\x03\x02" +
		"\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pr\x05\x14\v\x02qp\x03\x02" +
		"\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02su\x05\x10\t\x02ts\x03\x02" +
		"\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07\x02\x02\x03w\x05\x03" +
		"\x02\x02\x02xy\x07\x0E\x02\x02y\x7F\x05\x1A\x0E\x02z{\x07\x0E\x02\x02" +
		"{|\x05\b\x05\x02|}\x05\x1A\x0E\x02}\x7F\x03\x02\x02\x02~x\x03\x02\x02" +
		"\x02~z\x03\x02\x02\x02\x7F\x07\x03\x02\x02\x02\x80\x81\x07\x0F\x02\x02" +
		"\x81\x83\x07/\x02\x02\x82\x84\t\x02\x02\x02\x83\x82\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\t\x03\x02\x02\x02\x85\x86\x07(\x02\x02\x86\x8A" +
		"\x07>\x02\x02\x87\x8B\x07-\x02\x02\x88\x8B\x052\x1A\x02\x89\x8B\x05R*" +
		"\x02\x8A\x87\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02" +
		"\x02\x8B\x94\x03\x02\x02\x02\x8C\x90\x07:\x02\x02\x8D\x91\x07-\x02\x02" +
		"\x8E\x91\x052\x1A\x02\x8F\x91\x05R*\x02\x90\x8D\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x8C" +
		"\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95" +
		"\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98" +
		"\x07?\x02\x02\x98\v\x03\x02\x02\x02\x99\x9A\x07)\x02\x02\x9A\x9B\x07>" +
		"\x02\x02\x9B\x9C\x077\x02\x02\x9C\x9D\x07:\x02\x02\x9D\x9E\x077\x02\x02" +
		"\x9E\x9F\x07?\x02\x02\x9F\r\x03\x02\x02\x02\xA0\xA1\x07\x14\x02\x02\xA1" +
		"\xA2\x05,\x17\x02\xA2\x0F\x03\x02\x02\x02\xA3\xA4\x07\x15\x02\x02\xA4" +
		"\xA5\x05\x16\f\x02\xA5\x11\x03\x02\x02\x02\xA6\xA7\x07\x17\x02\x02\xA7" +
		"\xA8\x07/\x02\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA\x07\x16\x02\x02\xAA" +
		"\xAB\x07/\x02\x02\xAB\x15\x03\x02\x02\x02\xAC\xAF\x05\x18\r\x02\xAD\xAE" +
		"\x07:\x02\x02\xAE\xB0\x05\x16\f\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xB3\x052\x1A\x02\xB2\xB4\t\x03" +
		"\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\x19\x03\x02" +
		"\x02\x02\xB5\xB7\x07\"\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02" +
		"\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x052\x1A\x02\xB9\xBA\x07\x12" +
		"\x02\x02\xBA\xBC\x07-\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02" +
		"\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBE\x07:\x02\x02\xBE\xC0\x05\x1A" +
		"\x0E\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xCE\x03\x02" +
		"\x02\x02\xC1\xC3\x07\"\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x05\x1C\x0F\x02\xC5\xC6\x07\x12" +
		"\x02\x02\xC6\xC8\x07-\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02" +
		"\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xCA\x07:\x02\x02\xCA\xCC\x05\x1A" +
		"\x0E\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02" +
		"\x02\x02\xCD\xB6\x03\x02\x02\x02\xCD\xC2\x03\x02\x02\x02\xCE\x1B\x03\x02" +
		"\x02\x02\xCF\xD4\x05\n\x06\x02\xD0\xD4\x05\f\x07\x02\xD1\xD4\x07/\x02" +
		"\x02\xD2\xD4\x077\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02" +
		"\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x1D\x03\x02\x02" +
		"\x02\xD5\xD6\x07\x18\x02\x02\xD6\xE8\x05$\x13\x02\xD7\xD8\x07\x18\x02" +
		"\x02\xD8\xDB\x05 \x11\x02\xD9\xDA\x07\x13\x02\x02\xDA\xDC\x05&\x14\x02" +
		"\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02" +
		"\xDD\xDE\x07:\x02\x02\xDE\xE0\x05\"\x12\x02\xDF\xDD\x03\x02\x02\x02\xDF" +
		"\xE0\x03\x02\x02\x02\xE0\xE8\x03\x02\x02\x02\xE1\xE2\x07\x18\x02\x02\xE2" +
		"\xE5\x05\"\x12\x02\xE3\xE4\x07:\x02\x02\xE4\xE6\x05\"\x12\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xD5" +
		"\x03\x02\x02\x02\xE7\xD7\x03\x02\x02\x02\xE7\xE1\x03\x02\x02\x02\xE8\x1F" +
		"\x03\x02\x02\x02\xE9\xEA\x07\x03\x02\x02\xEA\xF1\x05F$\x02\xEB\xEC\x07" +
		"\x03\x02\x02\xEC\xED\x07-\x02\x02\xED\xF1\x05F$\x02\xEE\xEF\x07\x03\x02" +
		"\x02\xEF\xF1\x07-\x02\x02\xF0\xE9\x03\x02\x02\x02\xF0\xEB\x03\x02\x02" +
		"\x02\xF0\xEE\x03\x02\x02\x02\xF1!\x03\x02\x02\x02\xF2\xF3\t\x04\x02\x02" +
		"\xF3\xF4\x07-\x02\x02\xF4\xF8\x05H%\x02\xF5\xF6\t\x04\x02\x02\xF6\xF8" +
		"\x07-\x02\x02\xF7\xF2\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8#\x03" +
		"\x02\x02\x02\xF9\xFA\x05&\x14\x02\xFA%\x03\x02\x02\x02\xFB\xFE\x05(\x15" +
		"\x02\xFC\xFD\t\x05\x02\x02\xFD\xFF\x05&\x14\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\'\x03\x02\x02\x02\u0100\u0106\x05*\x16\x02" +
		"\u0101\u0102\x07>\x02\x02\u0102\u0103\x05&\x14\x02\u0103\u0104\x07?\x02" +
		"\x02\u0104\u0106\x03\x02\x02\x02\u0105\u0100\x03\x02\x02\x02\u0105\u0101" +
		"\x03\x02\x02\x02\u0106)\x03\x02\x02\x02\u0107\u010A\x05^0\x02\u0108\u0109" +
		"\x07\x13\x02\x02\u0109\u010B\x05&\x14\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010B+\x03\x02\x02\x02\u010C\u0111\x05.\x18" +
		"\x02\u010D\u010E\t\x05\x02\x02\u010E\u0110\x05.\x18\x02\u010F\u010D\x03" +
		"\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111" +
		"\u0112\x03\x02\x02\x02\u0112\u0120\x03\x02\x02\x02\u0113\u0111\x03\x02" +
		"\x02\x02\u0114\u0115\x07>\x02\x02\u0115\u011A\x05.\x18\x02\u0116\u0117" +
		"\t\x05\x02\x02\u0117\u0119\x05.\x18\x02\u0118\u0116\x03\x02\x02\x02\u0119" +
		"\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D" +
		"\u011E\x07?\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u010C\x03\x02\x02" +
		"\x02\u011F\u0114\x03\x02\x02\x02\u0120-\x03\x02\x02\x02\u0121\u0123\x07" +
		">\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124" +
		"\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0128\x03\x02" +
		"\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u0129\x07\x07\x02\x02\u0128" +
		"\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02" +
		"\x02\x02\u012A\u012B\x050\x19\x02\u012B\u012C\x074\x02\x02\u012C\u0130" +
		"\x050\x19\x02\u012D\u012F\x07?\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
		"\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02" +
		"\x02\x02\u0131\u01C5\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
		"\u0135\x07>\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0138\x03\x02\x02" +
		"\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A" +
		"\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013B\x07\x07\x02\x02" +
		"\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03" +
		"\x02\x02\x02\u013C\u013D\x050\x19\x02\u013D\u013E\x07\t\x02\x02\u013E" +
		"\u013F\x07@\x02\x02\u013F\u0140\x05> \x02\u0140\u0144\x07A\x02\x02\u0141" +
		"\u0143\x07?\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02" +
		"\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u01C5" +
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0149\x07>\x02\x02" +
		"\u0148\u0147\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03" +
		"\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014D\u014F\x07\x07\x02\x02\u014E\u014D\x03\x02" +
		"\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0151\x050\x19\x02\u0151\u0152\x07\t\x02\x02\u0152\u0156\x076\x02\x02" +
		"\u0153\u0155\x07?\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03" +
		"\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u01C5\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015B\x07>\x02" +
		"\x02\u015A\u0159\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A" +
		"\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02" +
		"\u015E\u015C\x03\x02\x02\x02\u015F\u0161\x07\x07\x02\x02\u0160\u015F\x03" +
		"\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
		"\u0163\x050\x19\x02\u0163\u0164\x07\v\x02\x02\u0164\u0168\x077\x02\x02" +
		"\u0165\u0167\x07?\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A\x03" +
		"\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"\u01C5\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x07>\x02" +
		"\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016C" +
		"\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02" +
		"\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x07\x07\x02\x02\u0172\u0171\x03" +
		"\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174" +
		"\u0175\x050\x19\x02\u0175\u0176\x07\f\x02\x02\u0176\u017A\x077\x02\x02" +
		"\u0177\u0179\x07?\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179\u017C\x03" +
		"\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B" +
		"\u01C5\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D\u017F\x07>\x02" +
		"\x02\u017E\u017D\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E" +
		"\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02" +
		"\u0182\u0180\x03\x02\x02\x02\u0183\u0185\x07\x07\x02\x02\u0184\u0183\x03" +
		"\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0187\x050\x19\x02\u0187\u0188\x07\r\x02\x02\u0188\u018C\x077\x02\x02" +
		"\u0189\u018B\x07?\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03" +
		"\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
		"\u01C5\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0191\x07>\x02" +
		"\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
		"\u0194\u0192\x03\x02\x02\x02\u0195\u0197\x07\x07\x02\x02\u0196\u0195\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u0199\x07\b\x02\x02\u0199\u019A\x07>\x02\x02\u019A\u019B\x05\x04\x03" +
		"\x02\u019B\u019F\x07?\x02\x02\u019C\u019E\x07?\x02\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01C5\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A2\u01A4\x07>\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A7" +
		"\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02" +
		"\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AA\x07" +
		"\x07\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01AC\x07\x1D\x02\x02\u01AC\u01B0\x052\x1A" +
		"\x02\u01AD\u01AF\x07?\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\u01B2" +
		"\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02" +
		"\u01B1\u01C5\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B5\x07" +
		">\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6" +
		"\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02" +
		"\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BB\x07\x07\x02\x02\u01BA" +
		"\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02" +
		"\x02\x02\u01BC\u01BD\x07\x1D\x02\x02\u01BD\u01C1\x05,\x17\x02\u01BE\u01C0" +
		"\x07?\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02" +
		"\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C5\x03" +
		"\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u0124\x03\x02\x02\x02\u01C4" +
		"\u0136\x03\x02\x02\x02\u01C4\u014A\x03\x02\x02\x02\u01C4\u015C\x03\x02" +
		"\x02\x02\u01C4\u016E\x03\x02\x02\x02\u01C4\u0180\x03\x02\x02\x02\u01C4" +
		"\u0192\x03\x02\x02\x02\u01C4\u01A5\x03\x02\x02\x02\u01C4\u01B6\x03\x02" +
		"\x02\x02\u01C5/\x03\x02\x02\x02\u01C6\u01C9\x05R*\x02\u01C7\u01C9\x05" +
		"2\x1A\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9" +
		"1\x03\x02\x02\x02\u01CA\u01CD\x07-\x02\x02\u01CB\u01CC\x079\x02\x02\u01CC" +
		"\u01CE\x05X-\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02" +
		"\u01CE\u01D6\x03\x02\x02\x02\u01CF\u01D0\x07-\x02\x02\u01D0\u01D3\x05" +
		"4\x1B\x02\u01D1\u01D2\x079\x02\x02\u01D2\u01D4\x05X-\x02\u01D3\u01D1\x03" +
		"\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02\u01D5" +
		"\u01CA\x03\x02\x02\x02\u01D5\u01CF\x03\x02\x02\x02\u01D63\x03\x02\x02" +
		"\x02\u01D7\u01D8\x07<\x02\x02\u01D8\u01D9\x056\x1C\x02\u01D9\u01DA\x07" +
		"=\x02\x02\u01DA5\x03\x02\x02\x02\u01DB\u01E0\x058\x1D\x02\u01DC\u01DD" +
		"\x07\x05\x02\x02\u01DD\u01DF\x058\x1D\x02\u01DE\u01DC\x03\x02\x02\x02" +
		"\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03" +
		"\x02\x02\x02\u01E17\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3" +
		"\u01E8\x05:\x1E\x02\u01E4\u01E5\x07\x04\x02\x02\u01E5\u01E7\x05:\x1E\x02" +
		"\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03" +
		"\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E99\x03\x02\x02\x02\u01EA" +
		"\u01E8\x03\x02\x02\x02\u01EB\u01EE\x07+\x02\x02\u01EC\u01ED\x07:\x02\x02" +
		"\u01ED\u01EF\t\x06\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03" +
		"\x02\x02\x02\u01EF\u0203\x03\x02\x02\x02\u01F0\u01F3\x07,\x02\x02\u01F1" +
		"\u01F2\x07:\x02\x02\u01F2\u01F4\t\x06\x02\x02\u01F3\u01F1\x03\x02\x02" +
		"\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u0203\x03\x02\x02\x02\u01F5\u01FA" +
		"\x05P)\x02\u01F6\u01F7\x074\x02\x02\u01F7\u01FB\x05P)\x02\u01F8\u01F9" +
		"\x07\t\x02\x02\u01F9\u01FB\x076\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FB\u0203\x03\x02\x02\x02\u01FC\u0203\x076\x02" +
		"\x02\u01FD\u0200\x072\x02\x02\u01FE\u01FF\x07:\x02\x02\u01FF\u0201\t\x06" +
		"\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201" +
		"\u0203\x03\x02\x02\x02\u0202\u01EB\x03\x02\x02\x02\u0202\u01F0\x03\x02" +
		"\x02\x02\u0202\u01F5\x03\x02\x02\x02\u0202\u01FC\x03\x02\x02\x02\u0202" +
		"\u01FD\x03\x02\x02\x02\u0203;\x03\x02\x02\x02\u0204\u020A\x076\x02\x02" +
		"\u0205\u0206\x05P)\x02\u0206\u0207\x07\t\x02\x02\u0207\u0208\x076\x02" +
		"\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0204\x03\x02\x02\x02\u0209\u0205" +
		"\x03\x02\x02\x02\u020A=\x03\x02\x02\x02\u020B\u020E\x05@!\x02\u020C\u020E" +
		"\x075\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02" +
		"\u020E?\x03\x02\x02\x02\u020F\u0212\x05R*\x02\u0210\u0211\x07:\x02\x02" +
		"\u0211\u0213\x05@!\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02" +
		"\x02\x02\u0213A\x03\x02\x02\x02\u0214\u0215\x07<\x02\x02\u0215\u0216\x05" +
		"D#\x02\u0216\u0217\x07=\x02\x02\u0217C\x03\x02\x02\x02\u0218\u0219\t\x07" +
		"\x02\x02\u0219E\x03\x02\x02\x02\u021A\u021B\x07<\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u021B\u021C\x05J&\x02\u021C\u021D\x07=\x02\x02\u021DG\x03\x02\x02\x02" +
		"\u021E\u021F\x07<\x02\x02\u021F\u0220\x07#\x02\x02\u0220\u0221\x05N(\x02" +
		"\u0221\u0222\x07=\x02\x02\u0222I\x03\x02\x02\x02\u0223\u0228\x05L\'\x02" +
		"\u0224\u0225\x07\x05\x02\x02\u0225\u0227\x05L\'\x02\u0226\u0224\x03\x02" +
		"\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228" +
		"\u0229\x03\x02\x02\x02\u0229K\x03\x02\x02\x02\u022A\u0228\x03\x02\x02" +
		"\x02\u022B\u0230\x05N(\x02\u022C\u022D\x07\x04\x02\x02\u022D\u022F\x05" +
		"N(\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E" +
		"\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231M\x03\x02\x02\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0233\u0234\x05P)\x02\u0234\u0235\x074\x02\x02" +
		"\u0235\u0236\x05P)\x02\u0236O\x03\x02\x02\x02\u0237\u023A\x05X-\x02\u0238" +
		"\u023A\x05R*\x02\u0239\u0237\x03\x02\x02\x02\u0239\u0238\x03\x02\x02\x02" +
		"\u023AQ\x03\x02\x02\x02\u023B\u0243\x077\x02\x02\u023C\u0243\x07/\x02" +
		"\x02\u023D\u0243\x070\x02\x02\u023E\u0243\x071\x02\x02\u023F\u0243\x07" +
		"2\x02\x02\u0240\u0243\x07*\x02\x02\u0241\u0243\x05T+\x02\u0242\u023B\x03" +
		"\x02\x02\x02\u0242\u023C\x03\x02\x02\x02\u0242\u023D\x03\x02\x02\x02\u0242" +
		"\u023E\x03\x02\x02\x02\u0242\u023F\x03\x02\x02\x02\u0242\u0240\x03\x02" +
		"\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243S\x03\x02\x02\x02\u0244\u0245" +
		"\x05V,\x02\u0245U\x03\x02\x02\x02\u0246\u0247\x07\n\x02\x02\u0247\u0248" +
		"\x07>\x02\x02\u0248\u0249\x077\x02\x02\u0249\u024A\x07:\x02\x02\u024A" +
		"\u024B\x077\x02\x02\u024B\u024C\x07:\x02\x02\u024C\u024D\x077\x02\x02" +
		"\u024D\u024E\x07?\x02\x02\u024EW\x03\x02\x02\x02\u024F\u0254\x05Z.\x02" +
		"\u0250\u0251\x079\x02\x02\u0251\u0253\x05Z.\x02\u0252\u0250\x03\x02\x02" +
		"\x02\u0253\u0256\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254\u0255" +
		"\x03\x02\x02\x02\u0255Y\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0257" +
		"\u0259\x07-\x02\x02\u0258\u025A\x054\x1B\x02\u0259\u0258\x03\x02\x02\x02" +
		"\u0259\u025A\x03\x02\x02\x02\u025A[\x03\x02\x02\x02\u025B\u025C\x07>\x02" +
		"\x02\u025C\u025D\x05^0\x02\u025D\u025E\x07?\x02\x02\u025E\u0261\x03\x02" +
		"\x02\x02\u025F\u0261\x05^0\x02\u0260\u025B\x03\x02\x02\x02\u0260\u025F" +
		"\x03\x02\x02\x02\u0261]\x03\x02\x02\x02\u0262\u0264\x07-\x02\x02\u0263" +
		"\u0265\x07-\x02\x02\u0264\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02" +
		"\x02\u0265\u026A\x03\x02\x02\x02\u0266\u026A\x05`1\x02\u0267\u026A\x05" +
		"b2\x02\u0268\u026A\x05d3\x02\u0269\u0262\x03\x02\x02\x02\u0269\u0266\x03" +
		"\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026A" +
		"_\x03\x02\x02\x02\u026B\u026D\x07-\x02\x02\u026C\u026E\x07-\x02\x02\u026D" +
		"\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0272\x03\x02" +
		"\x02\x02\u026F\u0270\x07<\x02\x02\u0270\u0271\x07,\x02\x02\u0271\u0273" +
		"\x07=\x02\x02\u0272\u026F\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
		"\u0273a\x03\x02\x02\x02\u0274\u0276\x07\x1F\x02\x02\u0275\u0277\x07-\x02" +
		"\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0279" +
		"\x03\x02\x02\x02\u0278\u027A\x05F$\x02\u0279\u0278\x03\x02\x02\x02\u0279" +
		"\u027A\x03\x02\x02\x02\u027Ac\x03\x02\x02\x02\u027B\u027D\x07\x1E\x02" +
		"\x02\u027C\u027E\x07-\x02\x02\u027D\u027C\x03\x02\x02\x02\u027D\u027E" +
		"\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u0282\x05F$\x02\u0280" +
		"\u0282\x05B\"\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0280\x03\x02\x02" +
		"\x02\u0281\u0282\x03\x02\x02\x02\u0282e\x03\x02\x02\x02Zknqt~\x83\x8A" +
		"\x90\x94\xAF\xB3\xB6\xBB\xBF\xC2\xC7\xCB\xCD\xD3\xDB\xDF\xE5\xE7\xF0\xF7" +
		"\xFE\u0105\u010A\u0111\u011A\u011F\u0124\u0128\u0130\u0136\u013A\u0144" +
		"\u014A\u014E\u0156\u015C\u0160\u0168\u016E\u0172\u017A\u0180\u0184\u018C" +
		"\u0192\u0196\u019F\u01A5\u01A9\u01B0\u01B6\u01BA\u01C1\u01C4\u01C8\u01CD" +
		"\u01D3\u01D5\u01E0\u01E8\u01EE\u01F3\u01FA\u0200\u0202\u0209\u020D\u0212" +
		"\u0228\u0230\u0239\u0242\u0254\u0259\u0260\u0264\u0269\u026D\u0272\u0276" +
		"\u0279\u027D\u0281";
	public static readonly _serializedATN: string = Utils.join(
		[
			AqlParser._serializedATNSegment0,
			AqlParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AqlParser.__ATN) {
			AqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AqlParser._serializedATN));
		}

		return AqlParser.__ATN;
	}

}

export class QueryContext extends ParserRuleContext {
	public queryExpr(): QueryExprContext {
		return this.getRuleContext(0, QueryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_query; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryExprContext extends ParserRuleContext {
	public select(): SelectContext {
		return this.getRuleContext(0, SelectContext);
	}
	public from(): FromContext {
		return this.getRuleContext(0, FromContext);
	}
	public EOF(): TerminalNode { return this.getToken(AqlParser.EOF, 0); }
	public where(): WhereContext | undefined {
		return this.tryGetRuleContext(0, WhereContext);
	}
	public limit(): LimitContext | undefined {
		return this.tryGetRuleContext(0, LimitContext);
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	public orderBy(): OrderByContext | undefined {
		return this.tryGetRuleContext(0, OrderByContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_queryExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterQueryExpr) {
			listener.enterQueryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitQueryExpr) {
			listener.exitQueryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitQueryExpr) {
			return visitor.visitQueryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(AqlParser.SELECT, 0); }
	public selectExpr(): SelectExprContext {
		return this.getRuleContext(0, SelectExprContext);
	}
	public topExpr(): TopExprContext | undefined {
		return this.tryGetRuleContext(0, TopExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_select; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelect) {
			listener.enterSelect(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelect) {
			listener.exitSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelect) {
			return visitor.visitSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopExprContext extends ParserRuleContext {
	public TOP(): TerminalNode { return this.getToken(AqlParser.TOP, 0); }
	public INTEGER(): TerminalNode { return this.getToken(AqlParser.INTEGER, 0); }
	public BACKWARD(): TerminalNode | undefined { return this.tryGetToken(AqlParser.BACKWARD, 0); }
	public FORWARD(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FORWARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_topExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterTopExpr) {
			listener.enterTopExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitTopExpr) {
			listener.exitTopExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitTopExpr) {
			return visitor.visitTopExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public FUNCTION_IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.FUNCTION_IDENTIFIER, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(AqlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAR, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.IDENTIFIER);
		} else {
			return this.getToken(AqlParser.IDENTIFIER, i);
		}
	}
	public identifiedPath(): IdentifiedPathContext[];
	public identifiedPath(i: number): IdentifiedPathContext;
	public identifiedPath(i?: number): IdentifiedPathContext | IdentifiedPathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifiedPathContext);
		} else {
			return this.getRuleContext(i, IdentifiedPathContext);
		}
	}
	public operand(): OperandContext[];
	public operand(i: number): OperandContext;
	public operand(i?: number): OperandContext | OperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperandContext);
		} else {
			return this.getRuleContext(i, OperandContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.COMMA);
		} else {
			return this.getToken(AqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_function; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionContext extends ParserRuleContext {
	public EXTENSION_IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.EXTENSION_IDENTIFIER, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(AqlParser.OPEN_PAR, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.STRING);
		} else {
			return this.getToken(AqlParser.STRING, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(AqlParser.COMMA, 0); }
	public CLOSE_PAR(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_extension; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterExtension) {
			listener.enterExtension(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitExtension) {
			listener.exitExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitExtension) {
			return visitor.visitExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(AqlParser.WHERE, 0); }
	public identifiedExpr(): IdentifiedExprContext {
		return this.getRuleContext(0, IdentifiedExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_where; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterWhere) {
			listener.enterWhere(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitWhere) {
			listener.exitWhere(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitWhere) {
			return visitor.visitWhere(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByContext extends ParserRuleContext {
	public ORDERBY(): TerminalNode { return this.getToken(AqlParser.ORDERBY, 0); }
	public orderBySeq(): OrderBySeqContext {
		return this.getRuleContext(0, OrderBySeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_orderBy; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterOrderBy) {
			listener.enterOrderBy(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitOrderBy) {
			listener.exitOrderBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitOrderBy) {
			return visitor.visitOrderBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(AqlParser.LIMIT, 0); }
	public INTEGER(): TerminalNode { return this.getToken(AqlParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_limit; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterLimit) {
			listener.enterLimit(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitLimit) {
			listener.exitLimit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitLimit) {
			return visitor.visitLimit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(AqlParser.OFFSET, 0); }
	public INTEGER(): TerminalNode { return this.getToken(AqlParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_offset; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderBySeqContext extends ParserRuleContext {
	public orderByExpr(): OrderByExprContext {
		return this.getRuleContext(0, OrderByExprContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMMA, 0); }
	public orderBySeq(): OrderBySeqContext | undefined {
		return this.tryGetRuleContext(0, OrderBySeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_orderBySeq; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterOrderBySeq) {
			listener.enterOrderBySeq(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitOrderBySeq) {
			listener.exitOrderBySeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitOrderBySeq) {
			return visitor.visitOrderBySeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByExprContext extends ParserRuleContext {
	public identifiedPath(): IdentifiedPathContext {
		return this.getRuleContext(0, IdentifiedPathContext);
	}
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DESCENDING, 0); }
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ASCENDING, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DESC, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ASC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_orderByExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterOrderByExpr) {
			listener.enterOrderByExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitOrderByExpr) {
			listener.exitOrderByExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitOrderByExpr) {
			return visitor.visitOrderByExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectExprContext extends ParserRuleContext {
	public identifiedPath(): IdentifiedPathContext | undefined {
		return this.tryGetRuleContext(0, IdentifiedPathContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DISTINCT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMMA, 0); }
	public selectExpr(): SelectExprContext | undefined {
		return this.tryGetRuleContext(0, SelectExprContext);
	}
	public stdExpression(): StdExpressionContext | undefined {
		return this.tryGetRuleContext(0, StdExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_selectExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSelectExpr) {
			listener.enterSelectExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSelectExpr) {
			listener.exitSelectExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSelectExpr) {
			return visitor.visitSelectExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdExpressionContext extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public extension(): ExtensionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionContext);
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INTEGER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_stdExpression; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterStdExpression) {
			listener.enterStdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitStdExpression) {
			listener.exitStdExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitStdExpression) {
			return visitor.visitStdExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(AqlParser.FROM, 0); }
	public fromExpr(): FromExprContext | undefined {
		return this.tryGetRuleContext(0, FromExprContext);
	}
	public fromEHR(): FromEHRContext | undefined {
		return this.tryGetRuleContext(0, FromEHRContext);
	}
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CONTAINS, 0); }
	public containsExpression(): ContainsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ContainsExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMMA, 0); }
	public fromForeignData(): FromForeignDataContext[];
	public fromForeignData(i: number): FromForeignDataContext;
	public fromForeignData(i?: number): FromForeignDataContext | FromForeignDataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromForeignDataContext);
		} else {
			return this.getRuleContext(i, FromForeignDataContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_from; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFrom) {
			listener.enterFrom(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFrom) {
			listener.exitFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFrom) {
			return visitor.visitFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromEHRContext extends ParserRuleContext {
	public EHR(): TerminalNode { return this.getToken(AqlParser.EHR, 0); }
	public standardPredicate(): StandardPredicateContext | undefined {
		return this.tryGetRuleContext(0, StandardPredicateContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_fromEHR; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFromEHR) {
			listener.enterFromEHR(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFromEHR) {
			listener.exitFromEHR(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFromEHR) {
			return visitor.visitFromEHR(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromForeignDataContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	public joinPredicate(): JoinPredicateContext | undefined {
		return this.tryGetRuleContext(0, JoinPredicateContext);
	}
	public AGENT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AGENT, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(AqlParser.GROUP, 0); }
	public ORGANISATION(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ORGANISATION, 0); }
	public PERSON(): TerminalNode | undefined { return this.tryGetToken(AqlParser.PERSON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_fromForeignData; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFromForeignData) {
			listener.enterFromForeignData(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFromForeignData) {
			listener.exitFromForeignData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFromForeignData) {
			return visitor.visitFromForeignData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromExprContext extends ParserRuleContext {
	public containsExpression(): ContainsExpressionContext {
		return this.getRuleContext(0, ContainsExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_fromExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterFromExpr) {
			listener.enterFromExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitFromExpr) {
			listener.exitFromExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitFromExpr) {
			return visitor.visitFromExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContainsExpressionContext extends ParserRuleContext {
	public containExpressionBool(): ContainExpressionBoolContext {
		return this.getRuleContext(0, ContainExpressionBoolContext);
	}
	public containsExpression(): ContainsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ContainsExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(AqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_containsExpression; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterContainsExpression) {
			listener.enterContainsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitContainsExpression) {
			listener.exitContainsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitContainsExpression) {
			return visitor.visitContainsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContainExpressionBoolContext extends ParserRuleContext {
	public contains(): ContainsContext | undefined {
		return this.tryGetRuleContext(0, ContainsContext);
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_PAR, 0); }
	public containsExpression(): ContainsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ContainsExpressionContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_containExpressionBool; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterContainExpressionBool) {
			listener.enterContainExpressionBool(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitContainExpressionBool) {
			listener.exitContainExpressionBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitContainExpressionBool) {
			return visitor.visitContainExpressionBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContainsContext extends ParserRuleContext {
	public simpleClassExpr(): SimpleClassExprContext {
		return this.getRuleContext(0, SimpleClassExprContext);
	}
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CONTAINS, 0); }
	public containsExpression(): ContainsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ContainsExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_contains; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterContains) {
			listener.enterContains(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitContains) {
			listener.exitContains(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitContains) {
			return visitor.visitContains(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiedExprContext extends ParserRuleContext {
	public identifiedEquality(): IdentifiedEqualityContext[];
	public identifiedEquality(i: number): IdentifiedEqualityContext;
	public identifiedEquality(i?: number): IdentifiedEqualityContext | IdentifiedEqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifiedEqualityContext);
		} else {
			return this.getRuleContext(i, IdentifiedEqualityContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.OR);
		} else {
			return this.getToken(AqlParser.OR, i);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.XOR);
		} else {
			return this.getToken(AqlParser.XOR, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.AND);
		} else {
			return this.getToken(AqlParser.AND, i);
		}
	}
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_PAR, 0); }
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_identifiedExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterIdentifiedExpr) {
			listener.enterIdentifiedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitIdentifiedExpr) {
			listener.exitIdentifiedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitIdentifiedExpr) {
			return visitor.visitIdentifiedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiedEqualityContext extends ParserRuleContext {
	public identifiedOperand(): IdentifiedOperandContext[];
	public identifiedOperand(i: number): IdentifiedOperandContext;
	public identifiedOperand(i?: number): IdentifiedOperandContext | IdentifiedOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifiedOperandContext);
		} else {
			return this.getRuleContext(i, IdentifiedOperandContext);
		}
	}
	public COMPARABLEOPERATOR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMPARABLEOPERATOR, 0); }
	public OPEN_PAR(): TerminalNode[];
	public OPEN_PAR(i: number): TerminalNode;
	public OPEN_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.OPEN_PAR);
		} else {
			return this.getToken(AqlParser.OPEN_PAR, i);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.NOT, 0); }
	public CLOSE_PAR(): TerminalNode[];
	public CLOSE_PAR(i: number): TerminalNode;
	public CLOSE_PAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.CLOSE_PAR);
		} else {
			return this.getToken(AqlParser.CLOSE_PAR, i);
		}
	}
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MATCHES, 0); }
	public OPEN_CURLY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_CURLY, 0); }
	public matchesOperand(): MatchesOperandContext | undefined {
		return this.tryGetRuleContext(0, MatchesOperandContext);
	}
	public CLOSE_CURLY(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_CURLY, 0); }
	public REGEXPATTERN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.REGEXPATTERN, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.LIKE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	public ILIKE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ILIKE, 0); }
	public SIMILARTO(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SIMILARTO, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.IN, 0); }
	public queryExpr(): QueryExprContext | undefined {
		return this.tryGetRuleContext(0, QueryExprContext);
	}
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.EXISTS, 0); }
	public identifiedPath(): IdentifiedPathContext | undefined {
		return this.tryGetRuleContext(0, IdentifiedPathContext);
	}
	public identifiedExpr(): IdentifiedExprContext | undefined {
		return this.tryGetRuleContext(0, IdentifiedExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_identifiedEquality; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterIdentifiedEquality) {
			listener.enterIdentifiedEquality(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitIdentifiedEquality) {
			listener.exitIdentifiedEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitIdentifiedEquality) {
			return visitor.visitIdentifiedEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiedOperandContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public identifiedPath(): IdentifiedPathContext | undefined {
		return this.tryGetRuleContext(0, IdentifiedPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_identifiedOperand; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterIdentifiedOperand) {
			listener.enterIdentifiedOperand(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitIdentifiedOperand) {
			listener.exitIdentifiedOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitIdentifiedOperand) {
			return visitor.visitIdentifiedOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifiedPathContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(AqlParser.SLASH, 0); }
	public objectPath(): ObjectPathContext | undefined {
		return this.tryGetRuleContext(0, ObjectPathContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_identifiedPath; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterIdentifiedPath) {
			listener.enterIdentifiedPath(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitIdentifiedPath) {
			listener.exitIdentifiedPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitIdentifiedPath) {
			return visitor.visitIdentifiedPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(AqlParser.OPEN_BRACKET, 0); }
	public nodePredicateOr(): NodePredicateOrContext {
		return this.getRuleContext(0, NodePredicateOrContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(AqlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicate; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodePredicateOrContext extends ParserRuleContext {
	public nodePredicateAnd(): NodePredicateAndContext[];
	public nodePredicateAnd(i: number): NodePredicateAndContext;
	public nodePredicateAnd(i?: number): NodePredicateAndContext | NodePredicateAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NodePredicateAndContext);
		} else {
			return this.getRuleContext(i, NodePredicateAndContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.OR);
		} else {
			return this.getToken(AqlParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_nodePredicateOr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterNodePredicateOr) {
			listener.enterNodePredicateOr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitNodePredicateOr) {
			listener.exitNodePredicateOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitNodePredicateOr) {
			return visitor.visitNodePredicateOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodePredicateAndContext extends ParserRuleContext {
	public nodePredicateComparable(): NodePredicateComparableContext[];
	public nodePredicateComparable(i: number): NodePredicateComparableContext;
	public nodePredicateComparable(i?: number): NodePredicateComparableContext | NodePredicateComparableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NodePredicateComparableContext);
		} else {
			return this.getRuleContext(i, NodePredicateComparableContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.AND);
		} else {
			return this.getToken(AqlParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_nodePredicateAnd; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterNodePredicateAnd) {
			listener.enterNodePredicateAnd(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitNodePredicateAnd) {
			listener.exitNodePredicateAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitNodePredicateAnd) {
			return visitor.visitNodePredicateAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodePredicateComparableContext extends ParserRuleContext {
	public NODEID(): TerminalNode | undefined { return this.tryGetToken(AqlParser.NODEID, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMMA, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	public PARAMETER(): TerminalNode[];
	public PARAMETER(i: number): TerminalNode;
	public PARAMETER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.PARAMETER);
		} else {
			return this.getToken(AqlParser.PARAMETER, i);
		}
	}
	public ARCHETYPEID(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ARCHETYPEID, 0); }
	public predicateOperand(): PredicateOperandContext[];
	public predicateOperand(i: number): PredicateOperandContext;
	public predicateOperand(i?: number): PredicateOperandContext | PredicateOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateOperandContext);
		} else {
			return this.getRuleContext(i, PredicateOperandContext);
		}
	}
	public COMPARABLEOPERATOR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMPARABLEOPERATOR, 0); }
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MATCHES, 0); }
	public REGEXPATTERN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.REGEXPATTERN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_nodePredicateComparable; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterNodePredicateComparable) {
			listener.enterNodePredicateComparable(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitNodePredicateComparable) {
			listener.exitNodePredicateComparable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitNodePredicateComparable) {
			return visitor.visitNodePredicateComparable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodePredicateRegExContext extends ParserRuleContext {
	public REGEXPATTERN(): TerminalNode { return this.getToken(AqlParser.REGEXPATTERN, 0); }
	public predicateOperand(): PredicateOperandContext | undefined {
		return this.tryGetRuleContext(0, PredicateOperandContext);
	}
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(AqlParser.MATCHES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_nodePredicateRegEx; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterNodePredicateRegEx) {
			listener.enterNodePredicateRegEx(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitNodePredicateRegEx) {
			listener.exitNodePredicateRegEx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitNodePredicateRegEx) {
			return visitor.visitNodePredicateRegEx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchesOperandContext extends ParserRuleContext {
	public valueListItems(): ValueListItemsContext | undefined {
		return this.tryGetRuleContext(0, ValueListItemsContext);
	}
	public URIVALUE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.URIVALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_matchesOperand; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterMatchesOperand) {
			listener.enterMatchesOperand(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitMatchesOperand) {
			listener.exitMatchesOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitMatchesOperand) {
			return visitor.visitMatchesOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueListItemsContext extends ParserRuleContext {
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(AqlParser.COMMA, 0); }
	public valueListItems(): ValueListItemsContext | undefined {
		return this.tryGetRuleContext(0, ValueListItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_valueListItems; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterValueListItems) {
			listener.enterValueListItems(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitValueListItems) {
			listener.exitValueListItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitValueListItems) {
			return visitor.visitValueListItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionpredicateContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(AqlParser.OPEN_BRACKET, 0); }
	public versionpredicateOptions(): VersionpredicateOptionsContext {
		return this.getRuleContext(0, VersionpredicateOptionsContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(AqlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_versionpredicate; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterVersionpredicate) {
			listener.enterVersionpredicate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitVersionpredicate) {
			listener.exitVersionpredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitVersionpredicate) {
			return visitor.visitVersionpredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionpredicateOptionsContext extends ParserRuleContext {
	public LATEST_VERSION(): TerminalNode | undefined { return this.tryGetToken(AqlParser.LATEST_VERSION, 0); }
	public ALL_VERSIONS(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ALL_VERSIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_versionpredicateOptions; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterVersionpredicateOptions) {
			listener.enterVersionpredicateOptions(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitVersionpredicateOptions) {
			listener.exitVersionpredicateOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitVersionpredicateOptions) {
			return visitor.visitVersionpredicateOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StandardPredicateContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(AqlParser.OPEN_BRACKET, 0); }
	public predicateExpr(): PredicateExprContext {
		return this.getRuleContext(0, PredicateExprContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(AqlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_standardPredicate; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterStandardPredicate) {
			listener.enterStandardPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitStandardPredicate) {
			listener.exitStandardPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitStandardPredicate) {
			return visitor.visitStandardPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinPredicateContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(AqlParser.OPEN_BRACKET, 0); }
	public JOINON(): TerminalNode { return this.getToken(AqlParser.JOINON, 0); }
	public predicateEquality(): PredicateEqualityContext {
		return this.getRuleContext(0, PredicateEqualityContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(AqlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_joinPredicate; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterJoinPredicate) {
			listener.enterJoinPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitJoinPredicate) {
			listener.exitJoinPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitJoinPredicate) {
			return visitor.visitJoinPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateExprContext extends ParserRuleContext {
	public predicateAnd(): PredicateAndContext[];
	public predicateAnd(i: number): PredicateAndContext;
	public predicateAnd(i?: number): PredicateAndContext | PredicateAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateAndContext);
		} else {
			return this.getRuleContext(i, PredicateAndContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.OR);
		} else {
			return this.getToken(AqlParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateExpr) {
			listener.enterPredicateExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateExpr) {
			listener.exitPredicateExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateExpr) {
			return visitor.visitPredicateExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateAndContext extends ParserRuleContext {
	public predicateEquality(): PredicateEqualityContext[];
	public predicateEquality(i: number): PredicateEqualityContext;
	public predicateEquality(i?: number): PredicateEqualityContext | PredicateEqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateEqualityContext);
		} else {
			return this.getRuleContext(i, PredicateEqualityContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.AND);
		} else {
			return this.getToken(AqlParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateAnd; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateAnd) {
			listener.enterPredicateAnd(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateAnd) {
			listener.exitPredicateAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateAnd) {
			return visitor.visitPredicateAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateEqualityContext extends ParserRuleContext {
	public predicateOperand(): PredicateOperandContext[];
	public predicateOperand(i: number): PredicateOperandContext;
	public predicateOperand(i?: number): PredicateOperandContext | PredicateOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateOperandContext);
		} else {
			return this.getRuleContext(i, PredicateOperandContext);
		}
	}
	public COMPARABLEOPERATOR(): TerminalNode { return this.getToken(AqlParser.COMPARABLEOPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateEquality; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateEquality) {
			listener.enterPredicateEquality(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateEquality) {
			listener.exitPredicateEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateEquality) {
			return visitor.visitPredicateEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateOperandContext extends ParserRuleContext {
	public objectPath(): ObjectPathContext | undefined {
		return this.tryGetRuleContext(0, ObjectPathContext);
	}
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_predicateOperand; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPredicateOperand) {
			listener.enterPredicateOperand(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPredicateOperand) {
			listener.exitPredicateOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPredicateOperand) {
			return visitor.visitPredicateOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AqlParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(AqlParser.FLOAT, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(AqlParser.DATE, 0); }
	public PARAMETER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.PARAMETER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(AqlParser.BOOLEAN, 0); }
	public invokeOperand(): InvokeOperandContext | undefined {
		return this.tryGetRuleContext(0, InvokeOperandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_operand; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvokeOperandContext extends ParserRuleContext {
	public invokeExpr(): InvokeExprContext {
		return this.getRuleContext(0, InvokeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_invokeOperand; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterInvokeOperand) {
			listener.enterInvokeOperand(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitInvokeOperand) {
			listener.exitInvokeOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitInvokeOperand) {
			return visitor.visitInvokeOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvokeExprContext extends ParserRuleContext {
	public TERMINOLOGY(): TerminalNode { return this.getToken(AqlParser.TERMINOLOGY, 0); }
	public OPEN_PAR(): TerminalNode { return this.getToken(AqlParser.OPEN_PAR, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.STRING);
		} else {
			return this.getToken(AqlParser.STRING, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.COMMA);
		} else {
			return this.getToken(AqlParser.COMMA, i);
		}
	}
	public CLOSE_PAR(): TerminalNode { return this.getToken(AqlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_invokeExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterInvokeExpr) {
			listener.enterInvokeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitInvokeExpr) {
			listener.exitInvokeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitInvokeExpr) {
			return visitor.visitInvokeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPathContext extends ParserRuleContext {
	public pathPart(): PathPartContext[];
	public pathPart(i: number): PathPartContext;
	public pathPart(i?: number): PathPartContext | PathPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathPartContext);
		} else {
			return this.getRuleContext(i, PathPartContext);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.SLASH);
		} else {
			return this.getToken(AqlParser.SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_objectPath; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterObjectPath) {
			listener.enterObjectPath(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitObjectPath) {
			listener.exitObjectPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitObjectPath) {
			return visitor.visitObjectPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathPartContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AqlParser.IDENTIFIER, 0); }
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_pathPart; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterPathPart) {
			listener.enterPathPart(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitPathPart) {
			listener.exitPathPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitPathPart) {
			return visitor.visitPathPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassExprContext extends ParserRuleContext {
	public OPEN_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_PAR, 0); }
	public simpleClassExpr(): SimpleClassExprContext {
		return this.getRuleContext(0, SimpleClassExprContext);
	}
	public CLOSE_PAR(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_PAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_classExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterClassExpr) {
			listener.enterClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitClassExpr) {
			listener.exitClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitClassExpr) {
			return visitor.visitClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleClassExprContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.IDENTIFIER);
		} else {
			return this.getToken(AqlParser.IDENTIFIER, i);
		}
	}
	public archetypedClassExpr(): ArchetypedClassExprContext | undefined {
		return this.tryGetRuleContext(0, ArchetypedClassExprContext);
	}
	public versionedClassExpr(): VersionedClassExprContext | undefined {
		return this.tryGetRuleContext(0, VersionedClassExprContext);
	}
	public versionClassExpr(): VersionClassExprContext | undefined {
		return this.tryGetRuleContext(0, VersionClassExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_simpleClassExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterSimpleClassExpr) {
			listener.enterSimpleClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitSimpleClassExpr) {
			listener.exitSimpleClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitSimpleClassExpr) {
			return visitor.visitSimpleClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArchetypedClassExprContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AqlParser.IDENTIFIER);
		} else {
			return this.getToken(AqlParser.IDENTIFIER, i);
		}
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(AqlParser.OPEN_BRACKET, 0); }
	public ARCHETYPEID(): TerminalNode | undefined { return this.tryGetToken(AqlParser.ARCHETYPEID, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(AqlParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_archetypedClassExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterArchetypedClassExpr) {
			listener.enterArchetypedClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitArchetypedClassExpr) {
			listener.exitArchetypedClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitArchetypedClassExpr) {
			return visitor.visitArchetypedClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionedClassExprContext extends ParserRuleContext {
	public VERSIONED_OBJECT(): TerminalNode { return this.getToken(AqlParser.VERSIONED_OBJECT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.IDENTIFIER, 0); }
	public standardPredicate(): StandardPredicateContext | undefined {
		return this.tryGetRuleContext(0, StandardPredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_versionedClassExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterVersionedClassExpr) {
			listener.enterVersionedClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitVersionedClassExpr) {
			listener.exitVersionedClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitVersionedClassExpr) {
			return visitor.visitVersionedClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionClassExprContext extends ParserRuleContext {
	public VERSION(): TerminalNode { return this.getToken(AqlParser.VERSION, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(AqlParser.IDENTIFIER, 0); }
	public standardPredicate(): StandardPredicateContext | undefined {
		return this.tryGetRuleContext(0, StandardPredicateContext);
	}
	public versionpredicate(): VersionpredicateContext | undefined {
		return this.tryGetRuleContext(0, VersionpredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AqlParser.RULE_versionClassExpr; }
	// @Override
	public enterRule(listener: AqlListener): void {
		if (listener.enterVersionClassExpr) {
			listener.enterVersionClassExpr(this);
		}
	}
	// @Override
	public exitRule(listener: AqlListener): void {
		if (listener.exitVersionClassExpr) {
			listener.exitVersionClassExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AqlVisitor<Result>): Result {
		if (visitor.visitVersionClassExpr) {
			return visitor.visitVersionClassExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


