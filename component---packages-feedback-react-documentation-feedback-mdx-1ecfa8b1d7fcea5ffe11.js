(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{PE3p:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return y})),n.d(t,"default",(function(){return S}));var a=n("+I+c"),r=n("mXGw"),l=n.n(r),o=n("/FXl"),c=n("7XvJ"),i=n("F5Dj"),s=function(e){var t=e.element;return l.a.createElement("svg",{"aria-hidden":!0,className:"jkl-feedback__icon jkl-feedback__icon--"+t,fill:"currentColor",viewBox:"0 0 57 57"},l.a.createElement("circle",{cx:"28.5",cy:"28.5",r:"27.5"}),l.a.createElement("circle",{cx:"19",cy:"24",r:"2",className:"jkl-feedback__icon__eyes"}),l.a.createElement("circle",{cx:"38",cy:"24",r:"2",className:"jkl-feedback__icon__eyes"}),function(e){switch(e){case 1:return l.a.createElement("path",{d:"M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"});case 2:return l.a.createElement("path",{d:"M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"});case 3:return l.a.createElement("line",{x1:"20",y1:"37",x2:"36",y2:"37"});case 4:return l.a.createElement("path",{d:"M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"});case 5:return l.a.createElement("path",{d:"M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"})}}(t))},d=n("8Jek"),u=n.n(d),m=n("hRC1"),b=n("PJJj"),k=n("Iq98"),p=Object(r.createContext)({options:[],setValue:function(){}}),f=function(e){var t=e.label,n=e.onSubmit,a=e.description,o=e.successMessage,c=void 0===o?"Det hjelper oss i arbeidet med å forbedre våre løsninger":o,i=e.successTitle,s=void 0===i?"Takk for tilbakemeldingen!":i,d=e.callToActionText,f=void 0===d?"Send inn tilbakemelding":d,j=e.showTextArea,v=void 0===j||j,g=e.textAreaLabel,E=void 0===g?"Tips oss gjerne om hva vi kan forbedre":g,_=e.textAreaHelpLabel,h=void 0===_?"":_,w=e.className,y=void 0===w?"":w,N=e.feedbackOptions,O=void 0===N?[1,2,3,4,5]:N,x=e.headingLevel,C=void 0===x?"h3":x,T=e.children,S=Object(r.useState)(),F=S[0],L=S[1],D=Object(r.useState)(""),J=D[0],P=D[1],V=Object(r.useState)(!1),X=V[0],I=V[1],M=Object(r.useCallback)((function(){!X&&F&&n({feedbackValue:F,message:J})}),[F,X,J,n]);if(Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("beforeunload",M),function(){window.removeEventListener("beforeunload",M)}}),[M]),X)return l.a.createElement(k.c,{title:s},c);var A=C;return l.a.createElement(p.Provider,{value:{options:O,setValue:L,value:F}},l.a.createElement("form",{className:"jkl-feedback "+y,onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"jkl-feedback__heading"},l.a.createElement(A,{className:"jkl-heading-large"},t),a&&l.a.createElement("p",{className:"jkl-lead"},a)),l.a.createElement("fieldset",{className:"jkl-feedback__fieldset"},T),l.a.createElement("section",{className:u()("jkl-feedback__input-submit",{"jkl-feedback__input-submit--hidden jkl-layout-spacing--medium-top":void 0===F})},v&&l.a.createElement(m.b,{"data-testid":"feedback-text",name:"feedback-text",label:E,variant:"small",rows:3,helpLabel:h,value:J,onChange:function(e){return P(e.currentTarget.value)}}),l.a.createElement(b.b,{"data-testid":"submit-button",className:"jkl-layout-spacing--medium-top",onClick:function(){I(!0),M()}},f))))},j=n("bGYK"),v=function(){var e=Object(r.useContext)(p),t=e.options,n=e.value,a=e.setValue,o=Object(r.useState)(Object(j.a)(8))[0];return l.a.createElement(l.a.Fragment,null,null==t?void 0:t.map((function(e){return l.a.createElement(r.Fragment,{key:e},l.a.createElement("input",{className:"jkl-feedback__answer__input",type:"radio",name:"feedback",id:o+"-feedback--"+e,value:e,onChange:function(){return a(e)},checked:n===e}),l.a.createElement("label",{"data-testid":"feedback-"+e,className:"jkl-feedback__answer",htmlFor:o+"-feedback--"+e},l.a.createElement(s,{element:e}),l.a.createElement(i.c,null,e)))})))},g=function(e){return l.a.createElement(f,e,l.a.createElement(v,null))},E=n("a27F"),_=function(e){var t=e.legend,n=Object(r.useContext)(p),a=n.options,o=n.value,c=n.setValue;return l.a.createElement(E.a,{legend:t,name:"feedback",choices:a.map((function(e,t){return(t+1).toString()})),inline:!0,onChange:function(e){return c(parseInt(e.target.value,10))},selectedValue:null==o?void 0:o.toString()})},h=function(e){var t=e.description,n=Object(a.a)(e,["description"]);return l.a.createElement(f,n,l.a.createElement(_,{legend:t}))},w=function(e){var t=e.boolValues,n=(null==t?void 0:t["Uten smilefjes"])?h:g;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n,{label:"Gi oss tilbakemelding!",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null==t?void 0:t["Uten tekst"])}),l.a.createElement(n,{label:"Bare to valg",description:"Hvor fornøyd er du med denne siden for å følge saken?",onSubmit:console.info,showTextArea:!(null==t?void 0:t["Uten tekst"]),feedbackOptions:[1,5],className:"jkl-layout-spacing--large-top"}))},y={},N=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},O=N("Ingress"),x=N("ComponentExample"),C={_frontmatter:y},T=c.a;function S(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(T,Object.assign({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(O,{mdxType:"Ingress"},"Feedback fra brukere er viktig for å kunne gjøre justering på tjenestene våre der det oppleves vanskelig eller kunne gi oss pekepinn på ønsker om nye tjenester feks. Feedback kommer i to varianter, Simplified og vanlig. Funksjonelt er de like, men simplified bruker enkle radioknapper, mens vanlig bruker smilefjes. Du kan bestemme antallet ved å endre på FeedbackOptions propertien."),Object(o.b)(x,{knobs:{boolProps:["Uten smilefjes","Uten tekst"]},component:w,mdxType:"ComponentExample"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 - Surt fjes"),Object(o.b)("li",{parentName:"ul"},"2 - Litt surt fjes"),Object(o.b)("li",{parentName:"ul"},"3 - Nøytralt fjes"),Object(o.b)("li",{parentName:"ul"},"4 - Smilefjes"),Object(o.b)("li",{parentName:"ul"},"5 - Happy smilefjes")),Object(o.b)("p",null,"Feedback komponenten tar ansvar for å holde på staten og sende inn svaret, du må bare sørge for å sende inn en funksjon som kalles ved innsenning eller lukking av browseren, med andre ord vi bevarer svaret på smilefjeset, selvom man ikke fyller inn tekstsvaret og sender inn selv. Funksjonen får inn et objekt med shapen"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"{ feedbackValue: 1 | 2 | 3 | 4 | 5, message?: string }\n")),Object(o.b)("p",null,", du må i klienten koble det opp mot ditt ønskede feedback endepunkt med eventuelle vasking og, eller transformering av data."))}S.isMDXComponent=!0},PJJj:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return p}));var a=n("8VmE"),r=n.n(a),l=n("RiSW"),o=n.n(l),c=n("mXGw"),i=n.n(c),s=n("8Jek"),d=n.n(s),u=n("kFFI"),m=function(e){return Object(c.forwardRef)((function(t,n){var a=t.children,l=t.className,c=t.forceCompact,s=t.inverted,m=t.onClick,b=t.onTouchStart,k=t.loader,p=o()(t,["children","className","forceCompact","inverted","onClick","onTouchStart","loader"]),f=d()("jkl-button","jkl-button--"+e,{"jkl-button--compact":c,"jkl-button--inverted":s},l),j=function(e){b&&b(e);var t=e.target;if(t&&e.targetTouches.length){var n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((function(){return t.classList.remove("jkl-button--pressed")}),400)}},v=function(){return i.a.createElement("button",r()({className:f,onClick:m,onTouchStart:j,disabled:null==k?void 0:k.showLoader},p,{ref:n}),a)};return k?i.a.createElement("div",{className:d()("jkl-button-wrapper",{"jkl-button-wrapper--compact":c})},i.a.createElement("div",{className:d()("jkl-button-wrapper__slider",{"jkl-button-wrapper__slider--show-loader":!!k.showLoader})},i.a.createElement(v,null),i.a.createElement(u.a,{className:"jkl-button-wrapper__loader jkl-layout-spacing--small-top",textDescription:k.textDescription,negative:s,"aria-hidden":!!k.showLoader,inline:!0}))):i.a.createElement(v,null)}))},b=m("primary"),k=m("secondary"),p=m("tertiary")},kFFI:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("mXGw"),r=n.n(a),l=n("8Jek"),o=n.n(l),c=function(e){var t=e.textDescription,n=e.negative,a=void 0!==n&&n,l=e.inline,c=void 0!==l&&l,i=e.className,s=e.dataTestAutoId,d=void 0===s?"jkl-loader":s,u=o()("jkl-loader",i,{"jkl-loader--negative":a,"jkl-loader--inline":c});return r.a.createElement("span",{className:u,"data-testid":"jkl-loader","data-testautoid":d,title:t,"aria-label":t,role:"alert","aria-busy":"true"},r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),r.a.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}}}]);
//# sourceMappingURL=component---packages-feedback-react-documentation-feedback-mdx-1ecfa8b1d7fcea5ffe11.js.map