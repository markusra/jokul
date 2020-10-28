(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{bxeP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return C}));var r=n("+I+c"),a=n("mXGw"),l=n.n(a),i=n("/FXl"),o=n("7XvJ"),s=n("8Jek"),d=n.n(s),p=n("bGYK"),v=function(e){var t=e.value,n=e.label,r=e.onChange,i=e.name,o=void 0===i?"":i,s=e.inline,v=void 0!==s&&s,u=e.checked,k=e.invalid,m=void 0!==k&&k,b=e.forceCompact,c=e.inverted,g=Object(a.useState)("jkl-radio-button-"+Object(p.a)(8))[0],f=d()("jkl-radio-button",{"jkl-radio-button--compact":b,"jkl-radio-button--inline":v,"jkl-radio-button--error":m,"jkl-radio-button--inverted":c});return l.a.createElement("div",{className:f},l.a.createElement("input",{id:g,className:"jkl-radio-button__input",type:"radio",name:o,value:t,onChange:r,checked:u}),l.a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",htmlFor:g,className:"jkl-radio-button__label"},l.a.createElement("span",{"aria-hidden":!0,className:"jkl-radio-button__dot"}),l.a.createElement("span",{className:"jkl-radio-button__text"},n)))},u=n("XySe"),k=n("F5Dj"),m=function(e){var t=e.name,n=e.legend,r=e.choices,a=e.selectedValue,i=e.onChange,o=e.inline,s=void 0!==o&&o,d=e.helpLabel,p=e.errorLabel,m=e.variant,b=e.forceCompact,c=e.className,g=e.inverted;return l.a.createElement(u.a,{legend:n,helpLabel:d,errorLabel:p,variant:m,forceCompact:b,className:c,inverted:g},r.map(k.f).map((function(e){var n=e.label,r=e.value;return l.a.createElement(v,{key:r,name:t,value:r,label:n,inline:s,checked:r===a,onChange:i,invalid:!!p,forceCompact:b,inverted:g})})))},b=function(e){var t=e.boolValues,n=e.choiceValues,r=l.a.useState("Yes"),a=r[0],i=r[1],o=t&&t["Med feil"]?"Her er det noe feil":void 0,s=n&&n.Variant?n.Variant:"medium";return l.a.createElement(m,{legend:"Hvordan vil du bli kontaktet?",name:"likesradiobuttons",choices:["Jeg vil at dere skal ringe meg","Nei","Jeg vil at dere sender et brev til meg til min registrerte adresse fra folkeregisteret","Jeg vil at dere skal sende en e-post"],inline:t&&t.Inline,forceCompact:t&&t.Kompakt,selectedValue:a,onChange:function(e){return i(e.target.value)},helpLabel:"Hvis du trenger hjelp, kan du kontakte supporten vår",errorLabel:o,variant:s,inverted:t&&t.Invertert})},c={},g=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},f=g("Ingress"),h=g("ComponentExample"),j={_frontmatter:c},O=o.a;function C(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(O,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(f,{mdxType:"Ingress"},"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste."),Object(i.b)(h,{component:b,knobs:{boolProps:["Kompakt","Inline","Med feil","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(i.b)("p",null,"Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),Object(i.b)("h2",null,"Bruk"),Object(i.b)("p",null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),Object(i.b)("p",null,"En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. ",Object(i.b)("strong",{parentName:"p"},"Vis eksempler på det")),Object(i.b)("h2",null,"Tekst og validering"),Object(i.b)("p",null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),Object(i.b)("p",null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),Object(i.b)("p",null,"Eksempel fra helsevurdering:\n",Object(i.b)("strong",{parentName:"p"},"Hjelpetekst"),": ",Object(i.b)("em",{parentName:"p"},"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),". ",Object(i.b)("strong",{parentName:"p"},"Feilmelding"),": ",Object(i.b)("em",{parentName:"p"},"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-radio-button-react-documentation-radio-button-mdx-b38137274bc9c96b9afa.js.map