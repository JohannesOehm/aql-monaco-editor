import {AqlTokensProvider} from "./AqlTokensProvider";
import * as monaco from "monaco-editor";


monaco.languages.register({id: 'aql'});
monaco.languages.setTokensProvider("aql", new AqlTokensProvider());

let literalFg = '#000000';
let idFg = '#344482';
let symbolsFg = '#555555';
let keywordFg = '#7132a8';
let errorFg = '#ff0000';
let parameter = '#ffff22'
let valueSep = '#990000';
monaco.editor.defineTheme('myCoolTheme', {
    base: 'vs',
    inherit: true,
    colors: {},
    rules: [
        {token: 'string', foreground: literalFg},
        {token: 'constant', foreground: errorFg},
        {token: 'identifier', foreground: idFg},
        {token: 'keyword', foreground: keywordFg, fontStyle: 'bold'},

        {token: 'string.regexp', foreground: literalFg, fontStyle: 'italic'},
        {token: 'uniqueid.aql', foreground: errorFg},

        {token: 'parameter.aql', foreground: parameter, fontStyle: 'bold'},
        {token: 'nodeid.aql', foreground: keywordFg}, //at0001

        {token: 'function_identifier.aql', foreground: symbolsFg},
    ]
});

let editor = monaco.editor.create(document.getElementById("editor"), {
    language: "aql",
    // theme: "myCoolTheme"
});

editor.setValue(`select c, e/ehr_status/subject/external_ref/id/value
from EHR e
contains COMPOSITION c
contains EVALUATION c_a[openEHR-EHR-EVALUATION.flag_pathogen.v0]
where
    c/archetype_details/template_id/value='Kennzeichnung Erregernachweis SARS-CoV-2' and
    (c_a/data[at0001]/items[at0005]/value/value=true and
    c_a/data[at0001]/items[at0004]/value/value matches {'123', '456', '789'}) or
    exists c_a/items[at0024,'Virus']/value/defining_code/code_string xor
    c_a/items[{/at0001.*/}]/value < 12.5
order by c_a/data[at0001]/items[at0005]/value/value ASC
offset 0 limit 100
`)

