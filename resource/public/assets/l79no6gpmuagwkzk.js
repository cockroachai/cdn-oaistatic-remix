import{O as C,r as l,j as e,K as t,N as y}from"./otyn7m3v4o5hjv1m.js";import{bD as g,n as j}from"./g98o1hu13svzcy4j.js";import{W as M,r as h}from"./elwr36cpw46qn2l2.js";const u=y({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function k({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:d}){const[o,n]=l.useState(!1),r=g(),x=l.useCallback(c=>{c.stopPropagation(),p(c),n(!0),setTimeout(()=>{r()&&n(!1)},2e3)},[r,p]);let s=a;return m&&o?s=e.jsx(t,{...u.copied}):a===!0&&(s=e.jsx(t,{...u.copy})),e.jsxs(e.Fragment,{children:[!o&&e.jsx(j,{label:e.jsx(t,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:d,children:[e.jsx(M,{className:i}),s]})}),o&&e.jsxs(f,{className:d,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center`;export{k as C};
//# sourceMappingURL=l79no6gpmuagwkzk.js.map
