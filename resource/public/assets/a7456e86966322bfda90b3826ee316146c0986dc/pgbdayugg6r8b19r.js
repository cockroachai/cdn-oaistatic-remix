import{a1 as b,l as e,a5 as l,r as y,b5 as p,e as u,bt as w,aM as K,m as F,a2 as Q,bS as D,aw as E,u as g,d as j,b0 as $}from"./gghzs582a65dvm3m.js";import{g as O,aN as i,ak as z,a4 as S}from"./pd094ob9wacofnvk.js";import{$ as I}from"./hlwo8mj4kkypxx9x.js";import{g as Y,f as q,d as J,e as V}from"./jxi5u24nhvbc2h09.js";import{z as X}from"./e34jsxd5qw5romn0.js";function Z({setEnabled:t,isLoading:n,isEnabled:c}){const r=b();return e.jsxs("div",{className:"flex flex-row content-center items-center justify-items-center",children:[e.jsx(O,{disabled:n,enabled:c,onChange:t,label:r.formatMessage(i.sendInviteEmailsLabel)}),e.jsx(I,{className:"ml-2",children:e.jsx(l,{...i.sendInviteEmailsLabel})})]})}function ee({setEnabled:t,isLoading:n,isEnabled:c}){const r=b(),[a,s]=y.useState(!1),d=()=>{s(!0)},o=v=>{s(!1),v&&t(!1)};return e.jsx("div",{className:"pt-1.5",children:c?e.jsxs(e.Fragment,{children:[e.jsx(p,{disabled:n,color:"danger",onClick:()=>{n||d()},children:e.jsx(l,{...i.deleteDirectorySyncConnectionButton})}),e.jsx(z,{title:r.formatMessage(i.deleteDirectorySyncConnectionModalHeader),description:r.formatMessage(i.deleteDirectorySyncConnectionModalExplanation),confirmText:r.formatMessage(i.deleteDirectorySyncConnectionModalConfirmButton),cancelText:r.formatMessage(i.deleteDirectorySyncConnectionModalCancelButton),isOpen:a,primaryButtonColor:"danger",onClose:()=>o(!1),onConfirm:()=>o(!0)})]}):e.jsx(e.Fragment,{children:e.jsx(p,{disabled:n,color:"primary",onClick:()=>{n||t(!0)},children:e.jsx(l,{...i.enableDirectorySyncButton})})})})}class m{static async getWorkspaceDirectorySyncSettings(n){return u.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:n}}})}static async setWorkspaceDirectorySyncEnabled(n,c){return u.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:n}},requestBody:{enabled:c}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(n,c){return u.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:n}},requestBody:{enabled:c}})}static async getWorkspaceDirectorySyncPortalUrl(n){return u.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:n}}})}static async getWorkspaceDirectorySyncFailedEvents(n){return u.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:n}}})}static async retryWorkspaceDirectorySyncFailedEvent(n,c){return u.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:n,event_id:c}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(n){return u.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:n}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(n,c){return u.delete(`${w}/accounts/${n}/scim/failed_events/${c}`)}static async getWorkspaceDirectorySyncProgressUsers(n){return u.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:n}}})}static async getWorkspaceDirectorySyncProgressGroups(n){return u.safeGet("/accounts/{account_id}/scim/sync_progress_groups",{parameters:{path:{account_id:n}}})}}function te({isLoading:t,workspaceId:n,isDirectoryConnectionConfigured:c}){const[r,a]=y.useState(!1),s=K(),d=async()=>{try{a(!0);const o=await m.getWorkspaceDirectorySyncPortalUrl(n);a(!1),o!=null&&o.portal_link?window.open(o.portal_link,"_blank"):s.danger("Portal link not found.")}catch(o){o instanceof Error?s.danger(o.message):s.danger("An unexpected error occurred.")}};return e.jsxs(p,{disabled:t||r,color:"secondary",className:"mt-3",onClick:d,children:[c?e.jsx(l,{...i.launchDirectorySyncManagementPortalText}):e.jsx(l,{...i.launchDirectorySyncSetupPortalText}),e.jsx(X,{className:"icon-sm ml-1"})]})}function T({percentage:t,height:n=10,className:c,backgroundClassName:r="bg-gray-400",transitionDuration:a,transitionTimingFunction:s,onTransitionEnd:d}){return e.jsxs("div",{className:F("relative w-full",c),style:{height:n},children:[e.jsx("div",{className:F("absolute left-0 top-0 h-full w-full",r)}),e.jsx("div",{className:"absolute left-0 top-0 h-full bg-current transition-[width]",style:{width:`${Math.max(Math.min(t,100),0)}%`,transitionDuration:a,transitionTimingFunction:s},onTransitionEnd:d})]})}function N(t){switch(t){case"dsync.user.created":return i.directorySyncEventTypeUserCreated;case"dsync.user.updated":return i.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return i.directorySyncEventTypeUserDeleted;case"dsync.group.created":return i.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return i.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return i.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return i.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return i.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return i.directorySyncEventTypeActivated;case"dsync.deleted":return i.directorySyncEventTypeDeleted;case"dsync.deactivated":return i.directorySyncEventTypeDeleted}}function ne({isLoading:t,failedEvents:n,retryEventWithId:c,retryAllFailedEvents:r,discardFailedEventWithId:a}){const[s,d]=y.useState(!1),[o,v]=y.useState(),h=b();return e.jsxs(e.Fragment,{children:[o&&e.jsx(Q,{isOpen:s,onClose:d,title:h.formatMessage(N(o.event.event)),description:o.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:e.jsx("pre",{children:JSON.stringify(o.event,null,2)})}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(Y,{className:"flex items-center space-x-4",children:[e.jsx(l,{...i.failedDirectorySyncEventsTableHeader}),e.jsx(p,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{r()},children:e.jsx(l,{...i.retryAllFailedDirectorySyncEventsButton})})]}),e.jsxs(S.Root,{className:"w-full table-auto",children:[e.jsxs(S.Header,{children:[e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...i.directorySyncEventsTableFailureEventTypeColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...i.directorySyncEventsTableFailureReasonColumnHeader})}),e.jsx(S.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...i.directorySyncEventsTableActionsColumnHeader})})]}),e.jsx(S.Body,{children:n.map((f,k)=>e.jsxs("tr",{children:[e.jsx(S.Cell,{children:e.jsx(l,{...N(f.event.event)})}),e.jsx(S.Cell,{children:f.failure_reason}),e.jsxs(S.Cell,{children:[e.jsx("div",{children:e.jsx(p,{disabled:t,color:"secondary",size:"small",onClick:()=>{v(f),d(!0)},children:e.jsx(l,{...i.showEventDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:e.jsx(p,{disabled:t,color:"secondary",size:"small",onClick:()=>{c(f.event.id)},children:e.jsx(l,{...i.retryDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:a&&e.jsx(p,{disabled:t,color:"secondary",size:"small",onClick:()=>{a(f.event.id)},children:e.jsx(l,{...i.discardDirectorySyncEventButton})})})]})]},f.event.id))})]})]})]})}function se({isLoading:t,numUsersSynced:n,numUsersInDirectory:c,numGroupsSynced:r,numGroupsInDirectory:a,failedEvents:s,retryEventWithId:d,retryAllFailedEvents:o,discardFailedEventWithId:v}){const{value:h}=D("2091463435");return e.jsxs(e.Fragment,{children:[e.jsxs(q,{className:"my-2",children:[e.jsxs("div",{children:[e.jsx(l,{...i.directorySyncUserSyncStatus,values:{numUsersSynced:n,numUsersInDirectory:c}}),e.jsx(T,{percentage:n/(c||1)*100})]}),e.jsx("div",{className:"mt-4",children:h&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx(l,{...i.directorySyncGroupSyncStatus,values:{numGroupsSynced:r,numGroupsInDirectory:a}})}),e.jsx(T,{percentage:r/(a||1)*100})]})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(ne,{isLoading:t,failedEvents:s,retryEventWithId:d,retryAllFailedEvents:o,discardFailedEventWithId:v})})]})}const _=2e3;function C(t,n){const[c,r]=y.useState(!1),{data:a,...s}=E({queryKey:["workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncSettings(t)},enabled:!!t,refetchInterval:n&&c?_:!1});return y.useEffect(()=>{a!=null&&a.enabled&&(a==null?void 0:a.directory_connection)==null?r(!0):r(!1)},[a]),{data:a,...s}}function W(t,n){const[c,r]=y.useState(!1),{data:a}=C(t,n),{data:s,...d}=E({queryKey:["workspace/directorySyncStatus/progressUsers","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressUsers(t)},enabled:!!t&&!!(a!=null&&a.directory_connection),refetchInterval:c?_:!1});return y.useEffect(()=>{(s==null?void 0:s.synced_scim_users)===0||(s==null?void 0:s.synced_scim_users)!==(s==null?void 0:s.total_scim_users)?r(!0):r(!1)},[s,a==null?void 0:a.directory_connection]),{isLoadingUsers:c,data:s,...d}}function re(t,n){const[c,r]=y.useState(!1),{data:a}=C(t,n),{data:s,...d}=E({queryKey:["workspace/directorySyncStatus/progressGroups","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncProgressGroups(t)},enabled:!!t&&!!(a!=null&&a.directory_connection),refetchInterval:n&&c?_:!1});return y.useEffect(()=>{(s==null?void 0:s.synced_scim_groups)===0||(s==null?void 0:s.synced_scim_groups)!==(s==null?void 0:s.total_scim_groups)?r(!0):r(!1)},[s,a==null?void 0:a.directory_connection]),{isLoadingGroups:c,data:s,...d}}function ce(t,n){const{isLoadingUsers:c}=W(t,n);return E({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await m.getWorkspaceDirectorySyncFailedEvents(t)},enabled:!!t,refetchInterval:c?_:!1})}function ae(t){const n=g();return j({mutationFn:c=>m.retryWorkspaceDirectorySyncFailedEvent(t,c),onSuccess:()=>{n.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function ie(t){const n=g();return j({mutationFn:()=>m.retryAllWorkspaceDirectorySyncFailedEvents(t),onSuccess:()=>{n.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function oe(t){const n=g();return j({mutationFn:c=>m.discardWorkspaceDirectorySyncFailedEvent(t,c),onSuccess:()=>{n.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents"]})}})}function le(t){const n=g();return j({mutationFn:c=>m.setWorkspaceDirectorySyncEnabled(t,c),onSuccess:()=>{n.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function de(t){const n=g();return j({mutationFn:c=>m.setWorkspaceDirectorySyncEmailInvitesEnabled(t,c),onSuccess:()=>{n.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function ve({workspaceId:t}){const{value:n}=D("2091463435"),{value:c}=D("2494375100"),{data:r,isLoading:a}=C(t,!0),{data:s,isLoading:d}=W(t,!0),{data:o,isLoading:v}=re(t,n),{data:h,isLoading:f}=ce(t,!0),{mutateAsync:k,status:M}=le(t),{mutateAsync:A,status:P}=ae(t),{mutateAsync:B,status:L}=ie(t),{mutateAsync:G,status:R}=oe(t),{mutateAsync:H,status:U}=de(t),x=M==="pending"||P==="pending"||L==="pending"||R==="pending"||U=="pending"||a||d||v||f;return e.jsxs(J,{className:`${x?"text-token-text-secondary":""}`,children:[e.jsx(V,{children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{children:e.jsx(l,{...i.directorySyncTitle})}),e.jsx("div",{className:"ml-2 mt-1",children:x&&e.jsx($,{})})]})}),e.jsx(q,{children:e.jsx(l,{...i.directorySyncInfoText})}),(r==null?void 0:r.directory_connection)&&e.jsx("div",{children:e.jsx(se,{isLoading:x,numUsersSynced:(s==null?void 0:s.synced_scim_users)??0,numUsersInDirectory:(s==null?void 0:s.total_scim_users)??0,numGroupsSynced:(o==null?void 0:o.synced_scim_groups)??0,numGroupsInDirectory:(o==null?void 0:o.total_scim_groups)??0,failedEvents:h??[],retryEventWithId:A,retryAllFailedEvents:B,discardFailedEventWithId:G})}),c&&(r==null?void 0:r.enabled)&&e.jsx("div",{children:e.jsx(Z,{setEnabled:H,isLoading:x,isEnabled:(r==null?void 0:r.send_user_invite_emails)??!1})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(ee,{setEnabled:k,isLoading:x,isEnabled:(r==null?void 0:r.enabled)??!0}),(r==null?void 0:r.enabled)&&e.jsx(e.Fragment,{children:e.jsx(te,{isLoading:x,workspaceId:t,isDirectoryConnectionConfigured:!!(r!=null&&r.directory_connection)})})]})]})}export{ve as DirectorySyncSection};
//# sourceMappingURL=pgbdayugg6r8b19r.js.map
