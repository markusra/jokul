(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"55RO":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return o}));var r=n("mXGw"),i=n.n(r),o=function(){var e=Object(r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia("(prefers-reduced-motion: no-preference)").matches)),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e,t,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia("(prefers-reduced-motion: no-preference)"),t=function(e){return n(!e.matches)},null===(r=e)||void 0===r||r.addListener(t));return function(){var n;null===(n=e)||void 0===n||n.removeListener(t)}}),[]),t};function c(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(null),c=Object(r.useRef)(!0),a=o();function s(){var e=u(i);e&&e.removeAttribute("style")}var f=Object(r.useCallback)((function(){if(!a&&!c.current){var r=u(i);if(r)if(r.style.display="block",r.style.overflow="hidden",e)r.style.height="0",r.style.height=r.scrollHeight+"px";else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",t.current=requestAnimationFrame((function(){n.current=requestAnimationFrame((function(){r.style.height="0px"}))}))}}}),[e]);return Object(r.useLayoutEffect)((function(){f()}),[e,f]),Object(r.useEffect)((function(){var e=u(i);return e&&e.addEventListener("transitionend",s),function(){e&&e.removeEventListener("transitionend",s)}}),[e]),Object(r.useEffect)((function(){var e=t.current,r=n.current;return c.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[t,n]),[i,f]}function u(e){return e.current&&(e.current.el||e.current)}function a(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("click",n),function(){e&&document&&document.removeEventListener("click",n)}}))}n("eOg2"),n("e3wf");var s,f=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},l=function(e,t,n){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(f()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(t),o&&r.observe(o,n)}return function(){f()&&r&&r.disconnect()}}),[e,t,n])},d=(n("qoUV"),n("mK0O")),m=n("F5Dj");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(s||(s={}));var p={resized:s.resized},w=function(e,t){return{isSmallDevice:e<m.e.small,isMediumDevice:e>m.e.small&&e<m.e.medium,isLargeDevice:e>m.e.medium&&e<m.e.large,isXlDevice:e>m.e.large,isPortrait:t>=e,isLandscape:t<e,inner:{height:t,width:e}}},O={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},j=function(){var e="undefined"!=typeof window?window.innerWidth:0,t="undefined"!=typeof window?window.innerHeight:0;return w(e,t)},g=function(e,t){var n=t.type,r=t.width,i=t.height;switch(n){case p.resized:return b(b({},e),w(r,i))}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(){var e=Object(r.useReducer)(g,O,j),t=e[0],n=e[1],i=function(){return requestAnimationFrame((function(){return n({type:p.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)},E=function(e){var t=e.ref,n=e.timeout,i=void 0===n?0:n,o=e.autoScroll,c=void 0===o||o,u=e.options,a=void 0===u?{behavior:"smooth"}:u,s=function(){(null==t?void 0:t.current)&&t.current.scrollIntoView(a)};return Object(r.useEffect)((function(){if(c){var e=setTimeout(s,i);return function(){return clearTimeout(e)}}}),[t,i,c]),[s]}},"95Id":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var r,i=n("+I+c"),o=n("mXGw"),c=n.n(o),u=n("/FXl"),a=n("7XvJ"),s=n("55RO"),f=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],r=Object(o.useState)(0),i=r[0],u=r[1],a=Object(o.useRef)(null),f=Object(s.g)({ref:a,timeout:i,autoScroll:t})[0];return c.a.createElement("section",{className:"hooks-example"},c.a.createElement("section",{style:{height:"100vh"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.a.createElement("div",null,c.a.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing--bottom-2",onClick:function(){return n(!t)}},t?"Skru av":"Skru på"),c.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--left-1",onClick:f},"Scroll")),c.a.createElement("label",{htmlFor:"autoscroll-input",className:"jkl-label--medium"},"Sett ventetid før autoscroll"),c.a.createElement("input",{id:"autoscroll-input",className:"jkl-text-input__input",style:{width:"10ch"},value:i,type:"number",onChange:function(e){n(!1),""!==e.currentTarget.value&&u(parseInt(e.currentTarget.value,10))}}))),c.a.createElement("div",{ref:a},"AutoScroll here"))},l={},d=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",e)}),m={_frontmatter:l},v=a.a;function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(u.b)(v,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(d,{mdxType:"Ingress"},"useScrollIntoView lar deg automatisk scrolle et element til det blir synlig. Hooken returner scrollfunksjonen om du vil trigge den manuelt, og det er mulig å skru av automatisk scrolling om du vil ha full manuell kontroll. Du har også tilgang på alle options tilgjengelig for scrollIntoView"),Object(u.b)(f,{mdxType:"ScrollIntoViewExample"}))}b.isMDXComponent=!0},e3wf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("mXGw");function i(e,t,n){function i(e){t&&!t.includes(e.key)||n(e)}"string"==typeof t&&(t=[t]),Object(r.useEffect)((function(){var t=e&&e.current;return t&&t.addEventListener("keydown",i),function(){t&&t.removeEventListener("keydown",i)}}))}},eOg2:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mXGw"),i=n.n(r);function o(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("focusin",n),function(){e&&document&&document.removeEventListener("focusin",n)}}))}},qoUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mXGw"),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,t,n,o){var c=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=c.current;if(i()){var u=e.current;r&&r.disconnect(),r=new IntersectionObserver(t,o),u&&r.observe(u)}else n();return function(){i()&&r&&r.disconnect()}}),[e,t,n,o])}}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-scroll-into-view-mdx-ef65af6a205d80136494.js.map