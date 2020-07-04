import {languages} from "monaco-editor";
import TokensProvider = languages.TokensProvider;
import IState = languages.IState;
import {ANTLRInputStream, ParserErrorListener, RecognitionException, Recognizer, Token} from "antlr4ts";
import {AqlLexer} from "../antlr/AqlLexer";
import EOF = Token.EOF;
import IToken = languages.IToken;


class AqlGrammarState implements IState {
    clone(): IState {
        return new AqlGrammarState();
    }

    equals(other: IState): boolean {
        return true;
    }
}

class AqlToken implements IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: String, startIndex: number) {
        this.scopes = ruleName.toLowerCase()+ ".aql";
        this.startIndex = startIndex;
    }
}

export class AqlTokensProvider implements TokensProvider {
    keywords = new Set(['AND', 'OR', 'XOR', 'NOT', 'IN', 'MATCHES', 'TERMINOLOGY', 'LIKE', 'ILIKE',
    'SIMILARTO', 'SELECT', 'TOP', 'FORWARD', 'BACKWARD', 'AS', 'CONTAINS', 'WHERE', 'ORDERBY', 'OFFSET', 'LIMIT',
    'FROM', 'DESCENDING', 'ASCENDING', 'DESC', 'ASC', 'EXISTS', 'VERSION', 'VERSIONED_OBJECT', 'ALL_VERSION',
        'LATEST_VERSION', 'DISTINCT', 'JOINON']);
    constants = new Set(['INTEGER', 'FLOAT', 'DATE', 'BOOLEAN']);
    entity = new Set(['PARAMETER']);

    getInitialState(): languages.IState {
        return new AqlGrammarState();
    }

    tokenize(line: string, state: languages.IState): languages.ILineTokens {

        let inputStream = new ANTLRInputStream(line);
        let lexer = new AqlLexer(inputStream);
        lexer.removeErrorListeners();
        let myTokens: IToken[] = [];
        let token;
        while ((token = lexer.nextToken()) != null) {
            // We exclude EOF
            if (token.type == EOF) {
                break;
            } else {
                let tokenTypeName = lexer.vocabulary.getSymbolicName(token.type);

                tokenTypeName = this.keywords.has(tokenTypeName) ? "keyword" : tokenTypeName;
                tokenTypeName = this.constants.has(tokenTypeName) ? "constant" : tokenTypeName;
                tokenTypeName = this.entity.has(tokenTypeName) ? "variable" : tokenTypeName;
                tokenTypeName = tokenTypeName === "REGEXPATTERN" ? "string.regexp" : tokenTypeName;

                let myToken = new AqlToken(tokenTypeName, token.charPositionInLine);
                myTokens.push(myToken);
            }
        }

        // console.log(myTokens);
        return {tokens: myTokens, endState: new AqlGrammarState()};
    }

}
