(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),a=n.n(c),i=(n(15),n(5)),s=n(2),u=n(0),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[].concat(Object(i.a)(e),[a])})),o(""),console.log("submit hecho"))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)}})})})},j=n(10),l=n(7),d=n.n(l),b=n(9),f=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=sEkISyHwBEjeQrW48LV7iiKG4r1vISyq"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"animate__animated animate__bounce ",children:[Object(u.jsx)("li",{children:t}),Object(u.jsx)("img",{src:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){return setTimeout((function(){console.log(e),a({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,a=n.loading;return console.log(a),Object(u.jsxs)("div",{children:[Object(u.jsx)("li",{children:t}),a?"Cargando...":"Data cargada",c.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))]})},g=function(){var e=Object(r.useState)(["Aries","Tauro","Geminis","Cancer"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpert"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:c}),n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))]})};a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2c58371a.chunk.js.map