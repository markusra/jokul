(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KYoB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return x})),n.d(t,"default",(function(){return P}));var r=n("+I+c"),a=n("mXGw"),o=n.n(a),i=n("/FXl"),c=n("7XvJ"),l=n("8Jek"),u=n.n(l),d=n("F5Dj"),s=n("hRC1"),f=n("Abof"),p=n("nnXn"),m=n("Sj89"),h=n("9ILF"),v=Object(a.forwardRef)((function(e,t){var n=e.hidden,r=e.extended,a=e.forceCompact,i=e.inverted,c=e.onClickDate,l=e.currentDate,d=e.monthLabel,f=void 0===d?"Måned":d,p=e.yearLabel,v=void 0===p?"År":p,b=e.days,g=e.months,y=e.disableDate,k=u()("jkl-calendar",{"jkl-calendar--hidden":n,"jkl-calendar--extended":r,"jkl-calendar--inverted":i});return o.a.createElement(m.a,{timestamp:l?l.getTime():new Date,months:g,days:b,onDatepickerClickDay:c,disabled:y,forwardRef:t,className:k},o.a.createElement("div",{className:"jkl-calendar__padding"},r&&o.a.createElement("div",{className:"jkl-calendar__navigation"},o.a.createElement(s.c,{inverted:i,label:v,type:"year",className:"jkl-calendar__year-selector",width:"5rem",variant:"small",forceCompact:a}),o.a.createElement(h.a,{inverted:i,className:"jkl-calendar__month-selector",label:f,items:[],variant:"small",forceCompact:a})),!r&&o.a.createElement("fieldset",{className:"jkl-calendar__month-navigation"},o.a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-calendar__month-button",value:"- 1 month"},"←"),o.a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-calendar__month-button jkl-calendar__month-button--right",value:"+ 1 month"},"→")),o.a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))}));v.displayName="Calendar";var b=/^(\d\d)\.(\d\d)\.(\d{4})/;function g(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function y(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function k(e){var t=b.exec(e);if(t){var n=parseInt(t[1],10),r=parseInt(t[2],10)-1,a=parseInt(t[3],10);return new Date(a,r,n,0,0,0)}}function E(e,t){return!e||!g(e,t)}function j(e,t,n){return e?n(e)?void 0:e:t?n(t)?void 0:t:void 0}var w=n("mK0O");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e,t){var n;switch(t.type){case"SET_DATE":return D(D({},e),{},{date:t.payload,dateString:t.payload?y(t.payload):""});case"SET_DATE_STRING":var r=e.date,a=k(null!==(n=t.payload)&&void 0!==n?n:"");return a&&function(e,t){return!e||!g(e,t)}(r,a)?r=a:""===t.payload&&(r=void 0),D(D({},e),{},{dateString:t.payload,date:r});case"SET_CALENDAR_OPEN":return D(D({},e),{},{calendarHidden:t.payload});default:throw new Error}},T=function(e){var t=e.date,n=e.calendarHidden;return{date:t,dateString:t?y(t):"",calendarHidden:n}},C=n("bGYK");function S(e){var t=e.label,n=void 0===t?"Velg dato":t,i=e.placeholder,c=void 0===i?"dd.mm.åååå":i,l=e.calendarButtonTitle,m=e.showCalendarLabel,h=void 0===m?l||"Åpne kalender":m,b=e.hideCalendarLabel,g=void 0===b?l||"Lukk kalender":b,w=e.initialDate,_=e.value,D=e.onChange,S=e.onBlur,A=e.onFocus,M=e.initialShow,x=void 0!==M&&M,L=e.className,N=void 0===L?"":L,H=e.forceCompact,R=e.inverted,F=e.disableBeforeDate,P=e.disableAfterDate,B=e.variant,I=e.helpLabel,V=e.errorLabel,Y=Object(r.a)(e,["label","placeholder","calendarButtonTitle","showCalendarLabel","hideCalendarLabel","initialDate","value","onChange","onBlur","onFocus","initialShow","className","forceCompact","inverted","disableBeforeDate","disableAfterDate","variant","helpLabel","errorLabel"]);var K=function(e,t){return Object(a.useCallback)((function(n){return r=n,a=e,(o=t)&&r>o||a&&r<a;var r,a,o}),[e,t])}(F,P),G=function(){var e=Object(a.useState)("jkl-datepicker-"+Object(C.a)(8))[0];return[e,e+"-label"]}(),U=G[0],X=G[1],J=Object(a.useReducer)(O,{date:j(_,w,K),calendarHidden:!x},T),q=J[0],W=J[1],$=u()("jkl-datepicker",{"jkl-datepicker--open":!q.calendarHidden,"jkl-datepicker--inverted":R},N),Z=u()("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper",{"jkl-text-input--compact":H,"jkl-text-input--inverted":R}),z=Object(a.useRef)(null),Q=Object(a.useRef)(null),ee=Object(f.a)(!q.calendarHidden)[0],te=function(e,t,n){return Object(a.useCallback)((function(r){if(t.calendarHidden&&!r){var a,o=k(null!==(a=t.dateString)&&void 0!==a?a:"");o&&n(o)&&(e({type:"SET_DATE",payload:void 0}),e({type:"SET_DATE_STRING",payload:""}))}e({type:"SET_CALENDAR_OPEN",payload:r})}),[e,t,n])}(W,q,K),ne=function(){var e=q.calendarHidden;if(te(!q.calendarHidden),e){var t=ee.current,n=t&&t.querySelector("[autofocus]");n&&setTimeout((function(){return n.focus()}),100)}},re=function(e){return function(t){var n=z.current&&z.current.contains(t.relatedTarget);e&&!n&&e(q.date,t)}};Object(f.b)(ee,(function(){!q.calendarHidden&&te(!0)})),Object(f.d)(ee,["Escape"],(function(){!q.calendarHidden&&te(!0),Q.current&&Q.current.focus()})),function(e,t,n){Object(a.useEffect)((function(){t&&t.setHours(23,59,59,999);var r=new Date;t&&r>t&&e({type:"SET_DATE",payload:t}),n&&r<n&&e({type:"SET_DATE",payload:n})}),[n,t,e])}(W,P,F),function(e,t){Object(a.useEffect)((function(){void 0!==t&&(e({type:"SET_DATE_STRING",payload:t?y(t):""}),e({type:"SET_DATE",payload:t}))}),[t,e])}(W,_);var ae=function(e,t){return Object(a.useCallback)((function(){return e(!t)}),[t,e])}(ne,q.calendarHidden);return function(e,t){Object(a.useEffect)((function(){var n=e.current;return n&&n.addEventListener("click",t),function(){n&&n.removeEventListener("click",t)}}),[t,e])}(Q,ae),o.a.createElement("div",{className:$,ref:z},o.a.createElement(d.a,{standAlone:!0,htmlFor:U,variant:B},n),o.a.createElement("div",{className:Z},o.a.createElement(s.a,{ref:Q,id:U,describedBy:X,invalid:!!V,className:"jkl-datepicker__input jkl-text-input__input","data-testid":"jkl-datepicker__input",value:q.dateString,onFocus:function(){return re(A)},onBlur:function(){return re(S)},onChange:function(e){var t=e.target.value,n=k(t);n&&E(q.date,n)?(W({type:"SET_DATE",payload:n}),D&&D(n,e)):""===t&&(W({type:"SET_DATE",payload:void 0}),D&&D(void 0,e)),W({type:"SET_DATE_STRING",payload:t})},placeholder:c,width:"11.5rem",type:"text"}),o.a.createElement(p.a,{className:"jkl-text-input__action-button",iconType:"calendar",buttonTitle:q.calendarHidden?h:g,onClick:ne,onFocus:function(){return re(A)},onBlur:function(){return re(S)}}),o.a.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},o.a.createElement(v,Object.assign({currentDate:q.date,onClickDate:function(e){var t=e.target.date;E(q.date,t)&&(W({type:"SET_DATE_STRING",payload:y(t)}),W({type:"SET_DATE",payload:t}),D&&D(t)),te(!0),Q.current&&Q.current.focus()},disableDate:K,hidden:q.calendarHidden,inverted:R,forceCompact:H,ref:ee},Y)))),o.a.createElement(d.d,{inverted:R,id:X,helpLabel:I,errorLabel:V}))}var A=function(e){return 864e5*(30*e-5)},M=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,a=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,c=function(e){return function(t){return console.log(e,t)}};return o.a.createElement(S,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:i,errorLabel:a,helpLabel:r,disableBeforeDate:new Date(Date.now()-A(2)),disableAfterDate:new Date(Date.now()+A(5)),onFocus:c("hello from onFocus"),onBlur:c("hello from onBlur"),onChange:c("hello from onChange")})},x={},L=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},N=L("Ingress"),H=L("ComponentExample"),R={_frontmatter:x},F=c.a;function P(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(F,Object.assign({},R,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(N,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),Object(i.b)(H,{component:M,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(i.b)("h2",null,"Typer og bruk"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),Object(i.b)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),Object(i.b)("h2",null,"Tekst og validering"),Object(i.b)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),Object(i.b)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(i.b)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}P.isMDXComponent=!0},Sj89:function(e,t,n){"use strict";(function(e){var r,a=(r=n("mXGw"))&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e,t,n){return(d=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&l(a,n.prototype),a}).apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p="undefined"!=typeof window;p&&/(android)/i.test(navigator.userAgent),p&&/iPad|iPhone|iPod/.test(String(navigator.platform));p||e.HTMLElement||(e.HTMLElement=function(){return function e(){o(this,e)}}());var m,h,v=(m="undefined"==typeof window?{}:window.Element.prototype,h=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,m.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(h.call(e,t))return e;return null});function b(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var y=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r,a,o;e.exports=(n={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},r=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,a=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,o=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var i=String(e).toLowerCase(),c=new Date(isFinite(t)&&-1===i.indexOf("now")?Number(t):Date.now()),l=i.match(a)||[],u=l[1];void 0===u&&(u="y");var d=l[2];void 0===d&&(d="m");var s=l[3];void 0===s&&(s="d");var f=i.match(o)||[],p=f[1];void 0===p&&(p="h");var m=f[2];void 0===m&&(m="m");var h=f[3];void 0===h&&(h="s");var v={year:u,month:d,day:s,hour:p,minute:m,second:h};Object.keys(v).forEach((function(e){var t="month"===e?1:0,r=String(c["get"+n[e]]()+t);v[e]=v[e].replace(/[^-\d]+/g,(function(e,t,n){return t?r.substr(r.length-n.length+t,e.length):r.substr(0,Math.max(0,r.length-n.length+e.length))}))-t}));var b=new Date(v.year,Math.min(12,v.month+1),0).getDate();for(c.setFullYear(v.year,Math.min(11,v.month),Math.max(1,Math.min(b,v.day))),c.setHours(Math.min(24,v.hour),Math.min(59,v.minute),Math.min(59,v.second));null!==(v=r.exec(i));){var g=v[2],y=String(v[1]).replace(/\s/g,"")*("week"===g?7:1),k=v.slice(2).indexOf(v[0]),E=c.getDate();g?c["set"+n[g]](c["get"+n[g]]()+y):c.setDate(c.getDate()-(c.getDay()||7)+k),"month"!==g&&"year"!==g||E===c.getDate()||c.setDate(0)}return c})})),k={month:function(e,t){return e.disabled(t)&&M(e.parse(t)).filter((function(t){return!e.disabled(t)}))[0]||t},null:function(e,t){return t}},E={month:function(e,t){return M(e.parse(t)).map((function(t){return e.disabled(t)})).reduce((function(e,t){return e&&t}))},null:function(e,t){return e.disabled(t)}},j={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},w={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},_=function(e){function t(){return o(this,t),f(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,a=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],(r=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&b(this,"datepicker.change",this._date=this.date),O("button",this,T),O("select",this,A),O("input",this,C),O("table",this,S)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!w[e.keyCode])&&(this.contains(e.target)||v(e.target,'[for="'.concat(this.id,'"]').concat(', [data-for="'.concat(this.id,'"]')))))if("change"===e.type){var t=j[e.target.getAttribute("data-type")].replace("*",e.target.value);this.date=k[e.target.getAttribute("data-fill")](this,t)}else if("click"===e.type){var n=v(e.target,"button[value]"),r=v(e.target,"table");if(n){t=j[n.getAttribute("data-type")].replace("*",n.value);var a=n.value.match(new RegExp(Object.keys(k).filter((function(e){return"null"!==e})).join("|"))),o=a&&a[0];t=k[o](this,t),this.date=t}n&&r&&b(this,"datepicker.click.day")}else"keydown"===e.type&&v(e.target,"table")&&(this.date=w[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return y(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return D(this._date.getMonth()+1)}},{key:"day",get:function(){return D(this._date.getDate())}},{key:"hour",get:function(){return D(this._date.getHours())}},{key:"minute",get:function(){return D(this._date.getMinutes())}},{key:"second",get:function(){return D(this._date.getSeconds())}},{key:"date",get:function(){return y(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",set:function(e){this.setAttribute("months",[].concat(e).join(","))},get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)}},{key:"days",set:function(e){this.setAttribute("days",[].concat(e).join(","))},get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)}}])&&i(n.prototype,r),a&&i(n,a),t}(s(HTMLElement)),D=function(e){return"0".concat(e).slice(-2)},O=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function T(e,t){if(t.value){t.type="button";var n=t.value.match(new RegExp(Object.keys(E).filter((function(e){return"null"!==e})).join("|"))),r=n&&n[0];t.disabled=E[r](e,t.value)}}function C(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):j[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function S(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),g("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),g("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),c=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(c+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==c),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[c])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function A(e,t){t.firstElementChild||(t._autofill=!0,t.setAttribute("data-fill","month"),t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join(""));var n=E[t.getAttribute("data-fill")];g(t.children).forEach((function(r,a){t._autofill&&(r.textContent=e.months[a]),r.disabled=n(e,r.value),r.selected=!e.diff(r.value)}))}function M(e){var t=new Date(e);t.setDate(1);for(var n=t.getMonth(),r=[];t.getMonth()===n;)r.push(new Date(t)),t.setDate(t.getDate()+1);return r}var x=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();t.a=function(e,t){void 0===t&&(t={});var n=((t.name||e.name||String(e).match(/function ([^(]+)/)[1])+"-"+(Date.now().toString(36)+Math.random().toString(36).slice(2,5))).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),c=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),l=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&x(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(l)||window.customElements.define(l,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return a.createElement(l,Object.keys(this.props).reduce((function(t,n){return-1===c.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(a.Component)}(_,{name:"CoreDatepicker",props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.0.8"})}).call(this,n("pCvA"))}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-465d90710fc49d440c01.js.map