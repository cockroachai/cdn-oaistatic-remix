import{O as M,j as e,aY as W,E as I,X as T,aq as b,H as S,ba as B,ar as L,r as j,bb as R,K as n,aO as P,N as k,P as D,A as F,ep as O}from"./otyn7m3v4o5hjv1m.js";import{bn as H,a7 as X}from"./elwr36cpw46qn2l2.js";import{A as w,bu as z,bZ as q,Z as G}from"./g98o1hu13svzcy4j.js";import{m as v}from"./kgyg817qi2bj4184.js";import{A as K}from"./nrjywd3wsbognlo0.js";import{c as Z}from"./iej0cupg2dqkmejt.js";function Q({children:t}){return e.jsxs("div",{className:"flex min-h-screen w-full flex-col",children:[e.jsx("div",{className:"m-4 flex gap-3",children:e.jsx(W,{className:"icon-xl"})}),e.jsx("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}const u=M.h2`mb-2 text-2xl font-semibold`,d=M.p`mb-10 text-sm`,_={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},$={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function N({isTrial:t}){return e.jsx("div",{className:"mb-6 flex items-center justify-center gap-2",children:e.jsx(w,{children:e.jsx(v.div,{variants:_,initial:"hidden",animate:"show",className:"flex",children:e.jsx(v.div,{variants:$,children:t?e.jsx(H,{className:"h-8"}):e.jsx(X,{className:"h-8"})})})})})}var A=(t=>(t.Landing="landing",t.Setup="setup",t.Invite="invite",t.Complete="complete",t))(A||{});const h=["landing","invite","complete"],J={enter:t=>({translateX:t>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:t=>({translateX:t<=0?"50%":"-50%",opacity:0})};function V(){const t=I(),s=T(),{currentPath:a,currentStep:i}=ne(),m=b(),p=z(q.workspaces),E=G(),U=S(),Y=B(),x=p.find(r=>r.structure===L.WORKSPACE&&!r.deactivated),[l,y]=j.useState(1);j.useEffect(()=>{function r(){y(-1)}return window.addEventListener("popstate",r),()=>{window.removeEventListener("popstate",r)}},[]);const g=()=>{y(1);const r=h.indexOf(i),C=r+1;x||s.push("/"),r!==-1&&C<h.length&&s.push(a+"#"+h[C])};return e.jsx("div",{className:"max-w-sm pb-6",children:e.jsxs(w,{mode:"wait",custom:l,children:[i==="landing"&&e.jsx(f,{initial:!1,custom:l,children:e.jsx(ee,{onNext:g,isLoading:m==null})},"landing"),i==="invite"&&e.jsx(f,{custom:l,children:e.jsx(te,{onNext:()=>{g()}})},"invite"),i==="complete"&&e.jsx(f,{custom:l,children:e.jsx(se,{onNext:()=>{g(),x&&R(t,x.id,E,U,Y),s.push("/")}})},"complete")]})})}const f=t=>e.jsx(v.div,{initial:"enter",animate:"center",exit:"exit",variants:J,transition:{translateX:{type:"just"},opacity:{duration:.2}},...t});function ee({onNext:t,isLoading:s=!1}){return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!1}),e.jsx(u,{children:e.jsx(n,{...c.standard})}),e.jsx(d,{children:e.jsx(n,{...c.description})}),e.jsx(P,{onClick:t,size:"large",loading:s,fullWidth:!0,children:e.jsx(n,{...c.continue})})]})}function te({onNext:t}){const s=b(),a=S();return s==null?null:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(n,{...c.inviteTitle,values:{workspaceName:s.data.name}})}),e.jsx(d,{children:e.jsx(n,{...c.completeDescription})}),s!=null&&e.jsx("div",{className:"text-sm",children:e.jsx(K,{fullWidthButtons:!0,workspace:s,canResendInviteEmails:!1,onCancel:t,cancelButtonText:a.formatMessage(c.skipAddMembers),onSuccess:t})})]})}function se({onNext:t}){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(n,{...c.completeTitle})}),e.jsx(d,{children:e.jsx(n,{...c.completeDescription})}),e.jsx(P,{onClick:t,size:"large",fullWidth:!0,children:e.jsx(n,{...c.continueToChatgpt})})]})}function ne(){const a=T().asPath.split("#"),i=a[1];return{currentStep:ae(i)?i:"landing",currentPath:a[0]}}const ae=Z(A),c=k({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function me({isTrial:t,isTeam:s}){const a=S(),i=T(),m=j.useCallback(p=>{p.preventDefault(),D.logEvent(F.clickAccountPaymentSuccessContinue),i.push("/")},[i]);return e.jsxs(Q,{children:[e.jsx(O,{children:e.jsx("title",{children:a.formatMessage(o.pageTitle)})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(V,{}):e.jsx(ie,{isTrial:t,onContinue:m})})]})}function ie({isTrial:t,onContinue:s}){const a=t?o.trial:o.standard;return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!!t}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(u,{children:e.jsx(n,{...a})}),e.jsx(d,{children:e.jsx(n,{...o.paymentReceived})}),e.jsx(P,{onClick:s,size:"large",fullWidth:!0,children:e.jsx(n,{...o.continueButton})})]})]})}const o=k({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}});export{me as P};
//# sourceMappingURL=kaplzz0hvxnsbaqs.js.map
