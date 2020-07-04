// Generated from src/antlr/Aql.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.queryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpr?: (ctx: QueryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.select`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect?: (ctx: SelectContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.topExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopExpr?: (ctx: TopExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtension?: (ctx: ExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.where`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere?: (ctx: WhereContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.orderBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderBy?: (ctx: OrderByContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.limit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimit?: (ctx: LimitContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.orderBySeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderBySeq?: (ctx: OrderBySeqContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.orderByExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByExpr?: (ctx: OrderByExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.selectExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpr?: (ctx: SelectExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.stdExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdExpression?: (ctx: StdExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom?: (ctx: FromContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.fromEHR`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromEHR?: (ctx: FromEHRContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.fromForeignData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromForeignData?: (ctx: FromForeignDataContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.fromExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromExpr?: (ctx: FromExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.containsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainsExpression?: (ctx: ContainsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.containExpressionBool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainExpressionBool?: (ctx: ContainExpressionBoolContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.contains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContains?: (ctx: ContainsContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.identifiedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiedExpr?: (ctx: IdentifiedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.identifiedEquality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiedEquality?: (ctx: IdentifiedEqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.identifiedOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiedOperand?: (ctx: IdentifiedOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.identifiedPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiedPath?: (ctx: IdentifiedPathContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.nodePredicateOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodePredicateOr?: (ctx: NodePredicateOrContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.nodePredicateAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodePredicateAnd?: (ctx: NodePredicateAndContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.nodePredicateComparable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodePredicateComparable?: (ctx: NodePredicateComparableContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.nodePredicateRegEx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodePredicateRegEx?: (ctx: NodePredicateRegExContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.matchesOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchesOperand?: (ctx: MatchesOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.valueListItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueListItems?: (ctx: ValueListItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.versionpredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionpredicate?: (ctx: VersionpredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.versionpredicateOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionpredicateOptions?: (ctx: VersionpredicateOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.standardPredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardPredicate?: (ctx: StandardPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.joinPredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinPredicate?: (ctx: JoinPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateExpr?: (ctx: PredicateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateAnd?: (ctx: PredicateAndContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateEquality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateEquality?: (ctx: PredicateEqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.predicateOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateOperand?: (ctx: PredicateOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.invokeOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvokeOperand?: (ctx: InvokeOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.invokeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvokeExpr?: (ctx: InvokeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.objectPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPath?: (ctx: ObjectPathContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.pathPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathPart?: (ctx: PathPartContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.classExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassExpr?: (ctx: ClassExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.simpleClassExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleClassExpr?: (ctx: SimpleClassExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.archetypedClassExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArchetypedClassExpr?: (ctx: ArchetypedClassExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.versionedClassExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionedClassExpr?: (ctx: VersionedClassExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AqlParser.versionClassExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionClassExpr?: (ctx: VersionClassExprContext) => Result;
}

