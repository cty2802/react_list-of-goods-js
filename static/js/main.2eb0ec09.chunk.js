(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),o=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b="length",d="name",j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var h=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(),a=Object(r.a)(c,2),h=a[0],f=a[1],p=function(t,e){var n=e.sortField,s=e.reverseField,c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case b:return t[n]-e[n];case d:return t.localeCompare(e);default:return 0}})),s&&c.reverse(),c}(j,{sortField:n,reverseField:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{className:l()("button is-info",{"is-light":n!==d}),onClick:function(){return s(d)},type:"button",children:"Sort alphabetically"}),Object(u.jsx)("button",{className:l()("button is-info",{"is-light":n!==b}),onClick:function(){return s(b)},type:"button",children:"Sort by length"}),Object(u.jsx)("button",{className:l()("button is-info",{"is-light":!h}),onClick:function(){return f(!h)},type:"button",children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),f(void 0)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},crypto.randomUUID())}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2eb0ec09.chunk.js.map