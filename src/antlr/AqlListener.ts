// Generated from src/antlr/Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { QueryContext } from "./AqlParser";
import { QueryExprContext } from "./AqlParser";
import { SelectContext } from "./AqlParser";
import { TopExprContext } from "./AqlParser";
import { FunctionContext } from "./AqlParser";
import { ExtensionContext } from "./AqlParser";
import { WhereContext } from "./AqlParser";
import { OrderByContext } from "./AqlParser";
import { LimitContext } from "./AqlParser";
import { OffsetContext } from "./AqlParser";
import { OrderBySeqContext } from "./AqlParser";
import { OrderByExprContext } from "./AqlParser";
import { SelectExprContext } from "./AqlParser";
import { StdExpressionContext } from "./AqlParser";
import { FromContext } from "./AqlParser";
import { FromEHRContext } from "./AqlParser";
import { FromForeignDataContext } from "./AqlParser";
import { FromExprContext } from "./AqlParser";
import { ContainsExpressionContext } from "./AqlParser";
import { ContainExpressionBoolContext } from "./AqlParser";
import { ContainsContext } from "./AqlParser";
import { IdentifiedExprContext } from "./AqlParser";
import { IdentifiedEqualityContext } from "./AqlParser";
import { IdentifiedOperandContext } from "./AqlParser";
import { IdentifiedPathContext } from "./AqlParser";
import { PredicateContext } from "./AqlParser";
import { NodePredicateOrContext } from "./AqlParser";
import { NodePredicateAndContext } from "./AqlParser";
import { NodePredicateComparableContext } from "./AqlParser";
import { NodePredicateRegExContext } from "./AqlParser";
import { MatchesOperandContext } from "./AqlParser";
import { ValueListItemsContext } from "./AqlParser";
import { VersionpredicateContext } from "./AqlParser";
import { VersionpredicateOptionsContext } from "./AqlParser";
import { StandardPredicateContext } from "./AqlParser";
import { JoinPredicateContext } from "./AqlParser";
import { PredicateExprContext } from "./AqlParser";
import { PredicateAndContext } from "./AqlParser";
import { PredicateEqualityContext } from "./AqlParser";
import { PredicateOperandContext } from "./AqlParser";
import { OperandContext } from "./AqlParser";
import { InvokeOperandContext } from "./AqlParser";
import { InvokeExprContext } from "./AqlParser";
import { ObjectPathContext } from "./AqlParser";
import { PathPartContext } from "./AqlParser";
import { ClassExprContext } from "./AqlParser";
import { SimpleClassExprContext } from "./AqlParser";
import { ArchetypedClassExprContext } from "./AqlParser";
import { VersionedClassExprContext } from "./AqlParser";
import { VersionClassExprContext } from "./AqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AqlParser`.
 */
export interface AqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.queryExpr`.
	 * @param ctx the parse tree
	 */
	enterQueryExpr?: (ctx: QueryExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.queryExpr`.
	 * @param ctx the parse tree
	 */
	exitQueryExpr?: (ctx: QueryExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select`.
	 * @param ctx the parse tree
	 */
	enterSelect?: (ctx: SelectContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select`.
	 * @param ctx the parse tree
	 */
	exitSelect?: (ctx: SelectContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.topExpr`.
	 * @param ctx the parse tree
	 */
	enterTopExpr?: (ctx: TopExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.topExpr`.
	 * @param ctx the parse tree
	 */
	exitTopExpr?: (ctx: TopExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.extension`.
	 * @param ctx the parse tree
	 */
	enterExtension?: (ctx: ExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.extension`.
	 * @param ctx the parse tree
	 */
	exitExtension?: (ctx: ExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.where`.
	 * @param ctx the parse tree
	 */
	enterWhere?: (ctx: WhereContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.where`.
	 * @param ctx the parse tree
	 */
	exitWhere?: (ctx: WhereContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.orderBy`.
	 * @param ctx the parse tree
	 */
	enterOrderBy?: (ctx: OrderByContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.orderBy`.
	 * @param ctx the parse tree
	 */
	exitOrderBy?: (ctx: OrderByContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.limit`.
	 * @param ctx the parse tree
	 */
	enterLimit?: (ctx: LimitContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.limit`.
	 * @param ctx the parse tree
	 */
	exitLimit?: (ctx: LimitContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.orderBySeq`.
	 * @param ctx the parse tree
	 */
	enterOrderBySeq?: (ctx: OrderBySeqContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.orderBySeq`.
	 * @param ctx the parse tree
	 */
	exitOrderBySeq?: (ctx: OrderBySeqContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.orderByExpr`.
	 * @param ctx the parse tree
	 */
	enterOrderByExpr?: (ctx: OrderByExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.orderByExpr`.
	 * @param ctx the parse tree
	 */
	exitOrderByExpr?: (ctx: OrderByExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.selectExpr`.
	 * @param ctx the parse tree
	 */
	enterSelectExpr?: (ctx: SelectExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.selectExpr`.
	 * @param ctx the parse tree
	 */
	exitSelectExpr?: (ctx: SelectExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.stdExpression`.
	 * @param ctx the parse tree
	 */
	enterStdExpression?: (ctx: StdExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.stdExpression`.
	 * @param ctx the parse tree
	 */
	exitStdExpression?: (ctx: StdExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.from`.
	 * @param ctx the parse tree
	 */
	enterFrom?: (ctx: FromContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.from`.
	 * @param ctx the parse tree
	 */
	exitFrom?: (ctx: FromContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.fromEHR`.
	 * @param ctx the parse tree
	 */
	enterFromEHR?: (ctx: FromEHRContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.fromEHR`.
	 * @param ctx the parse tree
	 */
	exitFromEHR?: (ctx: FromEHRContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.fromForeignData`.
	 * @param ctx the parse tree
	 */
	enterFromForeignData?: (ctx: FromForeignDataContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.fromForeignData`.
	 * @param ctx the parse tree
	 */
	exitFromForeignData?: (ctx: FromForeignDataContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.fromExpr`.
	 * @param ctx the parse tree
	 */
	enterFromExpr?: (ctx: FromExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.fromExpr`.
	 * @param ctx the parse tree
	 */
	exitFromExpr?: (ctx: FromExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.containsExpression`.
	 * @param ctx the parse tree
	 */
	enterContainsExpression?: (ctx: ContainsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.containsExpression`.
	 * @param ctx the parse tree
	 */
	exitContainsExpression?: (ctx: ContainsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.containExpressionBool`.
	 * @param ctx the parse tree
	 */
	enterContainExpressionBool?: (ctx: ContainExpressionBoolContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.containExpressionBool`.
	 * @param ctx the parse tree
	 */
	exitContainExpressionBool?: (ctx: ContainExpressionBoolContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.contains`.
	 * @param ctx the parse tree
	 */
	enterContains?: (ctx: ContainsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.contains`.
	 * @param ctx the parse tree
	 */
	exitContains?: (ctx: ContainsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.identifiedExpr`.
	 * @param ctx the parse tree
	 */
	enterIdentifiedExpr?: (ctx: IdentifiedExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.identifiedExpr`.
	 * @param ctx the parse tree
	 */
	exitIdentifiedExpr?: (ctx: IdentifiedExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.identifiedEquality`.
	 * @param ctx the parse tree
	 */
	enterIdentifiedEquality?: (ctx: IdentifiedEqualityContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.identifiedEquality`.
	 * @param ctx the parse tree
	 */
	exitIdentifiedEquality?: (ctx: IdentifiedEqualityContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.identifiedOperand`.
	 * @param ctx the parse tree
	 */
	enterIdentifiedOperand?: (ctx: IdentifiedOperandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.identifiedOperand`.
	 * @param ctx the parse tree
	 */
	exitIdentifiedOperand?: (ctx: IdentifiedOperandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.identifiedPath`.
	 * @param ctx the parse tree
	 */
	enterIdentifiedPath?: (ctx: IdentifiedPathContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.identifiedPath`.
	 * @param ctx the parse tree
	 */
	exitIdentifiedPath?: (ctx: IdentifiedPathContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.nodePredicateOr`.
	 * @param ctx the parse tree
	 */
	enterNodePredicateOr?: (ctx: NodePredicateOrContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.nodePredicateOr`.
	 * @param ctx the parse tree
	 */
	exitNodePredicateOr?: (ctx: NodePredicateOrContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.nodePredicateAnd`.
	 * @param ctx the parse tree
	 */
	enterNodePredicateAnd?: (ctx: NodePredicateAndContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.nodePredicateAnd`.
	 * @param ctx the parse tree
	 */
	exitNodePredicateAnd?: (ctx: NodePredicateAndContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.nodePredicateComparable`.
	 * @param ctx the parse tree
	 */
	enterNodePredicateComparable?: (ctx: NodePredicateComparableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.nodePredicateComparable`.
	 * @param ctx the parse tree
	 */
	exitNodePredicateComparable?: (ctx: NodePredicateComparableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.nodePredicateRegEx`.
	 * @param ctx the parse tree
	 */
	enterNodePredicateRegEx?: (ctx: NodePredicateRegExContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.nodePredicateRegEx`.
	 * @param ctx the parse tree
	 */
	exitNodePredicateRegEx?: (ctx: NodePredicateRegExContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.matchesOperand`.
	 * @param ctx the parse tree
	 */
	enterMatchesOperand?: (ctx: MatchesOperandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.matchesOperand`.
	 * @param ctx the parse tree
	 */
	exitMatchesOperand?: (ctx: MatchesOperandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.valueListItems`.
	 * @param ctx the parse tree
	 */
	enterValueListItems?: (ctx: ValueListItemsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.valueListItems`.
	 * @param ctx the parse tree
	 */
	exitValueListItems?: (ctx: ValueListItemsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.versionpredicate`.
	 * @param ctx the parse tree
	 */
	enterVersionpredicate?: (ctx: VersionpredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.versionpredicate`.
	 * @param ctx the parse tree
	 */
	exitVersionpredicate?: (ctx: VersionpredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.versionpredicateOptions`.
	 * @param ctx the parse tree
	 */
	enterVersionpredicateOptions?: (ctx: VersionpredicateOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.versionpredicateOptions`.
	 * @param ctx the parse tree
	 */
	exitVersionpredicateOptions?: (ctx: VersionpredicateOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.standardPredicate`.
	 * @param ctx the parse tree
	 */
	enterStandardPredicate?: (ctx: StandardPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.standardPredicate`.
	 * @param ctx the parse tree
	 */
	exitStandardPredicate?: (ctx: StandardPredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.joinPredicate`.
	 * @param ctx the parse tree
	 */
	enterJoinPredicate?: (ctx: JoinPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.joinPredicate`.
	 * @param ctx the parse tree
	 */
	exitJoinPredicate?: (ctx: JoinPredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	enterPredicateExpr?: (ctx: PredicateExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 */
	exitPredicateExpr?: (ctx: PredicateExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateAnd`.
	 * @param ctx the parse tree
	 */
	enterPredicateAnd?: (ctx: PredicateAndContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateAnd`.
	 * @param ctx the parse tree
	 */
	exitPredicateAnd?: (ctx: PredicateAndContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateEquality`.
	 * @param ctx the parse tree
	 */
	enterPredicateEquality?: (ctx: PredicateEqualityContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateEquality`.
	 * @param ctx the parse tree
	 */
	exitPredicateEquality?: (ctx: PredicateEqualityContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicateOperand`.
	 * @param ctx the parse tree
	 */
	enterPredicateOperand?: (ctx: PredicateOperandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicateOperand`.
	 * @param ctx the parse tree
	 */
	exitPredicateOperand?: (ctx: PredicateOperandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.invokeOperand`.
	 * @param ctx the parse tree
	 */
	enterInvokeOperand?: (ctx: InvokeOperandContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.invokeOperand`.
	 * @param ctx the parse tree
	 */
	exitInvokeOperand?: (ctx: InvokeOperandContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.invokeExpr`.
	 * @param ctx the parse tree
	 */
	enterInvokeExpr?: (ctx: InvokeExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.invokeExpr`.
	 * @param ctx the parse tree
	 */
	exitInvokeExpr?: (ctx: InvokeExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.objectPath`.
	 * @param ctx the parse tree
	 */
	enterObjectPath?: (ctx: ObjectPathContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.objectPath`.
	 * @param ctx the parse tree
	 */
	exitObjectPath?: (ctx: ObjectPathContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.pathPart`.
	 * @param ctx the parse tree
	 */
	enterPathPart?: (ctx: PathPartContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.pathPart`.
	 * @param ctx the parse tree
	 */
	exitPathPart?: (ctx: PathPartContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.classExpr`.
	 * @param ctx the parse tree
	 */
	enterClassExpr?: (ctx: ClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.classExpr`.
	 * @param ctx the parse tree
	 */
	exitClassExpr?: (ctx: ClassExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.simpleClassExpr`.
	 * @param ctx the parse tree
	 */
	enterSimpleClassExpr?: (ctx: SimpleClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.simpleClassExpr`.
	 * @param ctx the parse tree
	 */
	exitSimpleClassExpr?: (ctx: SimpleClassExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.archetypedClassExpr`.
	 * @param ctx the parse tree
	 */
	enterArchetypedClassExpr?: (ctx: ArchetypedClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.archetypedClassExpr`.
	 * @param ctx the parse tree
	 */
	exitArchetypedClassExpr?: (ctx: ArchetypedClassExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.versionedClassExpr`.
	 * @param ctx the parse tree
	 */
	enterVersionedClassExpr?: (ctx: VersionedClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.versionedClassExpr`.
	 * @param ctx the parse tree
	 */
	exitVersionedClassExpr?: (ctx: VersionedClassExprContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.versionClassExpr`.
	 * @param ctx the parse tree
	 */
	enterVersionClassExpr?: (ctx: VersionClassExprContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.versionClassExpr`.
	 * @param ctx the parse tree
	 */
	exitVersionClassExpr?: (ctx: VersionClassExprContext) => void;
}

