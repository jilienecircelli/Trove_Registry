(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/016-lifebuoy.c13ca329.png"},114:function(e,a,t){e.exports=t(142)},142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=t(7),i=t(222),s=t(103),m=Object(s.a)({palette:{primary:{light:"#00d2b4",main:"#c93146",dark:"#FC6C4D"},secondary:{light:"#a8f4e6",main:"#00d2b4",dark:"#1a8a98"}},typography:{fontFamily:"Montserrat, Helvetica, Sans-Serif",h1:{fontFamily:"Lato, Lucida-Grande, Tahoma, Sans-Serif",fontStyle:"italic"},h2:"Lato Lucida-Grande, Tahoma, Sans-Serif",h3:"Lato Lucida-Grande, Tahoma, Sans-Serif",h4:"Lato Lucida-Grande, Tahoma, Sans-Serif",h5:"Lato Lucida-Grande, Tahoma, Sans-Serif",h6:"Lato Lucida-Grande, Tahoma, Sans-Serif"},overrides:{MuiButton:{root:{borderRadius:"25px"}}}}),u=t(90),d=t(91),g=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(),p=function(e){return g.deauthenticateUser(),e.history.push("/"),r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Logging out..."))},E=t(14),f=t(33),h=t(25),b=t(55),v=t(196),w=t(200),x=t(198),j=t(202),y=t(201),O=t(56),S=t.n(O),k=Object(v.a)(function(e){return{logo:{width:"100px",height:"50px"}}}),N=function(){var e=k();return r.a.createElement("img",{className:e.logo,src:S.a,alt:"Trove"})},C=Object(v.a)(function(e){return{root:{display:"inline-block"},appBar:{zIndex:e.zIndex.drawer+1},toolbarRoot:{justifyContent:"space-between"}}}),I=function(e){console.log(e);var a=C();return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,null),r.a.createElement(w.a,{position:"fixed",className:a.appBar},r.a.createElement(y.a,{classes:{root:a.toolbarRoot}},r.a.createElement(N,null),r.a.createElement(E.b,{to:"/logout"},r.a.createElement(j.a,{color:"inherit"},"Logout")))))},L=t(206),T=t(203),A=t(205),F=t(223),R=t(3),P=Object(v.a)(function(e){return{alignItemsAndJustifyContent:{display:"flex",alignItems:"center",justifyContent:"center",border:"0",boxShadow:"none"},root:{backgroundColor:"white",color:"white"}}}),M=function(e){var a=e.successMessage,t=e.errors,n=e.onSubmit,l=e.onChange,c=e.user;console.log(a);var o=P();return r.a.createElement(T.a,{className:Object(R.a)(o.alignItemsAndJustifyContent,o.root)},r.a.createElement("form",{action:"/",onSubmit:n},r.a.createElement("h2",{className:"card-heading"},"Login"),a&&r.a.createElement("p",{className:"success-message"},a),t.summary&&r.a.createElement("p",{className:"error-message"},t.summary),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{placeholder:"Username",name:"username",error:""===c.username,helperText:""===c.username?t.username:" ",onChange:l,value:c.username})),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{placeholder:"Password",type:"password",name:"password",onChange:l,error:""===c.password,helperText:""===c.password?t.name:" ",value:c.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(j.a,{type:"submit",label:"Log in",primary:"true"},"Login")),r.a.createElement(A.a,null,"Don't have an account? ",r.a.createElement(E.b,{to:"/signup"},"Create one"),".")))},U=t(43),D=t.n(U),W=function(e){return D.a.post("/auth/login",e)},z=function(e){return D.a.post("/auth/signup",e)},B=function(e){return D.a.get("/api/profile",{headers:{Authorization:"bearer ".concat(e)}})},G=function(e,a){return D.a.get("/api/friends/"+e,{headers:{Authorization:"bearer ".concat(a)}})},J=function(e){console.log(e);var a=Object(n.useState)({}),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)({username:"",password:""}),p=Object(o.a)(d,2),E=p[0],f=p[1];Object(n.useEffect)(function(){var e=localStorage.getItem("successMessage"),a="";e&&(a=e,localStorage.removeItem("successMessage")),u(a),console.log(a)},[]);Object(n.useEffect)(function(){return function(){c({errors:{}})}},[]);return r.a.createElement(n.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(I,null),r.a.createElement("br",null),r.a.createElement(M,{onSubmit:function(a){a.preventDefault();var t=E.username,n=E.password;W({username:t,password:n}).then(function(a){console.log(a),g.authenticateUser(a.data.token),e.checkAuthenticateStatus(),e.history.push("/profile")}).catch(function(e){console.log(e);var a=e.data.errors?e.data.errors:{};a.summary=e.data.message,c(a)})},onChange:function(e){return f(Object(b.a)({},E,Object(h.a)({},e.target.name,e.target.value)))},errors:l,successMessage:m,user:E})))},V=Object(v.a)(function(e){return{content:{flexGrow:1,layout:{marginTop:"100px"}}}}),H=function(e){var a=e.children,t=V();return r.a.createElement("main",{className:t.content},a)},Y=function(e){return console.log(e),r.a.createElement(H,null,r.a.createElement(L.a,{item:!0,alignContent:"center"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:S.a,alt:"Trove Logo",width:"350px"}),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/signup"},r.a.createElement(j.a,null,"Sign Up")),r.a.createElement(E.b,{to:"/login"},r.a.createElement(j.a,null,"Login")))))},$=Object(v.a)(function(e){return{alignItemsAndJustifyContent:{display:"flex",alignItems:"center",justifyContent:"center",border:"0",boxShadow:"none"},root:{backgroundColor:"white",color:"white"}}}),_=function(e){var a=e.errors,t=e.user,n=e.onChange,l=e.onSubmit;console.log(t);var c=$();return r.a.createElement(T.a,{className:Object(R.a)(c.alignItemsAndJustifyContent,c.root)},r.a.createElement("form",{action:"/",onSubmit:l},r.a.createElement("h2",{className:"card-heading"},"Sign Up"),console.log(a.summary),a.summary&&r.a.createElement("p",{className:"error-message"},a.summary),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{label:"Username",type:"text",name:"username",error:""===t.username,helperText:""===t.username?a.username:" ",onChange:n,value:t.username})),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{type:"text",label:"Name",name:"name",error:""===t.name,helperText:""===t.name?a.name:" ",onChange:n,value:t.name})),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{type:"text",label:"Email",name:"email",error:""===t.email,helperText:""===t.email?a.email:" ",onChange:n,value:t.email})),r.a.createElement("div",{className:"field-line"},r.a.createElement(F.a,{label:"Password",type:"password",name:"password",onChange:n,error:""===t.password,helperText:""===t.password?a.name:" ",value:t.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(j.a,{variant:"outlined",type:"submit",label:"Create New Account",primary:"true"},"Create User")),r.a.createElement(A.a,null,"Already have an account? ",r.a.createElement(E.b,{to:"/login"},"Log in"))))},q=function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)({username:"",name:"",email:"",password:""}),s=Object(o.a)(i,2),m=s[0],u=s[1];Object(n.useEffect)(function(){return function(){c({errors:{}})}},[]);return r.a.createElement(n.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(I,null),r.a.createElement(_,{onSubmit:function(a){a.preventDefault();var t=m.username,n=m.name,r=m.email,l=m.password;z({username:t,name:n,email:r,password:l}).then(function(a){localStorage.setItem("successMessage",a.data.message),e.history.push("/login"),c({errors:{}})}).catch(function(e){var a=e.response;console.log(a);var t=a.data.errors?a.data.errors:{};t.summary=a.data.message,c(t)})},onChange:function(e){return u(Object(b.a)({},m,Object(h.a)({},e.target.name,e.target.value)))},errors:l,user:m})))},K=t(63),Q=t.n(K),X=Object(v.a)(function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}),Z=function(){var e=X();return r.a.createElement("div",{className:e.root},r.a.createElement(j.a,{variant:"contained",color:"Primary",className:e.button,startIcon:r.a.createElement(Q.a,null)},"Edit"))},ee=Object(v.a)(function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}),ae=function(){var e=ee();return r.a.createElement("div",{className:e.root},r.a.createElement(j.a,{variant:"contained",color:"Primary",className:e.button,startIcon:r.a.createElement(Q.a,null)},"Save"))},te=Object(v.a)(function(e){return{background:{backgroundColor:e.palette.secondary.light,borderRadius:"10px",margin:"50px auto",maxWidth:"600px",padding:"20px"}}}),ne=function(e){var a=te(),t=r.a.useState("Controlled"),n=Object(o.a)(t,2);n[0],n[1];return r.a.createElement("form",{className:a.background,noValidate:!0,autoComplete:"off"},r.a.createElement(L.a,{container:!0,alignItems:"center",justify:"center",spacing:2},r.a.createElement(L.a,{item:!0,xs:6,md:6},r.a.createElement(F.a,{id:"filled-full-width",label:"Name",value:e.user.username,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"})),r.a.createElement(L.a,{item:!0,xs:6,md:6},r.a.createElement(F.a,{id:"filled-full-width",label:"Password",type:"password",value:e.user.name,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"})),r.a.createElement(L.a,{item:!0,xs:12,md:12},r.a.createElement(F.a,{id:"filled-full-width",label:"Name",value:e.user.name,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"})),r.a.createElement(L.a,{item:!0,xs:12,md:12},r.a.createElement(F.a,{id:"filled-full-width",label:"About Me",rows:"8",placeholder:"Tell us about yourself...",fullWidth:!0,multiline:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled"})),r.a.createElement(L.a,{item:!0,xs:12,md:12},r.a.createElement(Z,null),r.a.createElement(ae,null))))},re=t(224),le=t(204),ce=t(50),oe=t(209),ie=t(207),se=t(208),me=t(96),ue=t.n(me),de=t(97),ge=t.n(de),pe=t(98),Ee=t.n(pe),fe=t(99),he=t.n(fe),be=Object(v.a)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:"15%",flexShrink:0},drawerPaper:{width:"15%"},content:{width:"100%",flexGrow:1,padding:e.spacing(2)},toolbar:e.mixins.toolbar,icon:{width:"24px",height:"24px"}}}),ve=function(){var e=be();return r.a.createElement(re.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(le.a,null,r.a.createElement(ie.a,{button:!0,key:"MyProfile"},r.a.createElement(se.a,null,r.a.createElement("img",{className:e.icon,src:ue.a,alt:"Profile"})),r.a.createElement(E.b,{to:"/profile"},r.a.createElement(ce.a,null,"My Profile"))),r.a.createElement(oe.a,null),r.a.createElement(ie.a,{button:!0,key:"MyTrove"},r.a.createElement(se.a,null,r.a.createElement("img",{className:e.icon,src:ge.a,alt:"Trove"})),r.a.createElement(E.b,{to:"/mytrove"},r.a.createElement(ce.a,null,"My Trove"))),r.a.createElement(oe.a,null),r.a.createElement(ie.a,{button:!0,key:"Friends"},r.a.createElement(se.a,null,r.a.createElement("img",{className:e.icon,src:Ee.a,alt:"Friends"})),r.a.createElement(E.b,{to:"/friends"},r.a.createElement(ce.a,null,"My Friends"))),r.a.createElement(oe.a,null),r.a.createElement(ie.a,{button:!0,key:"Discover"},r.a.createElement(se.a,null,r.a.createElement("img",{className:e.icon,src:he.a,alt:"Discover"})),r.a.createElement(E.b,{to:"/discover"},r.a.createElement(ce.a,null,"Discover")))),r.a.createElement(oe.a,null))},we=t(225),xe=t(226),je=t(100),ye=t.n(je),Oe=Object(v.a)(function(e){return{search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:"white",marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}}),Se=function(e){var a=Oe();return r.a.createElement("div",null,r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(ye.a,null)),r.a.createElement(xe.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:e.onChange}),r.a.createElement(j.a,{color:"inherit",onClick:e.onSearch},"Search")))},ke=Object(v.a)(function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(30),height:e.spacing(30)},teal:{color:"white",backgroundColor:e.palette.secondary.dark},spacing:{marginTop:"-150px",marginLeft:"55px"}}});function Ne(e){var a=ke();return r.a.createElement("div",{className:a.root},r.a.createElement(we.a,{alt:e.user.username,src:"/static/images/avatar/1.jpg",className:Object(R.a)(a.large,a.teal,a.spacing)}))}var Ce=Object(v.a)(function(e){return{teal:{color:"white",marginTop:"90px",marginRight:"15px",backgroundColor:e.palette.secondary.light,height:"250px",borderRadius:"10px",padding:"10px"}}}),Ie=function(){var e=Ce();return r.a.createElement(L.a,{className:e.teal})},Le=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=(t[0],t[1]),c=Object(n.useState)({}),i=Object(o.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)(function(){e.checkAuthenticateStatus()},[]),Object(n.useEffect)(function(){B(g.getToken()).then(function(e){l(e.data.message),m(e.data.user)})},[]),r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:12},r.a.createElement(I,null))),r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:2,sm:2},r.a.createElement(ve,null)),r.a.createElement(L.a,{item:!0,md:10,sm:10},r.a.createElement(L.a,{item:!0,xs:12,alignItems:"center",justify:"center"},r.a.createElement(Ie,null),r.a.createElement(Ne,{user:s}),r.a.createElement(ne,{user:s})))))},Te=t(211),Ae=t(212),Fe=t(213),Re=t(214),Pe=t(65),Me=t(210),Ue=t(101),De=t.n(Ue),We=Object(v.a)(function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}),ze=function(){var e=We();return r.a.createElement("div",{className:e.root},r.a.createElement(Me.a,{color:"secondary","aria-label":"edit"},r.a.createElement(De.a,null)))},Be=t(102),Ge=t.n(Be),Je=Object(v.a)(function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%",backgroundSize:"contain"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Pe.a[500]}}}),Ve=function(){var e=Je(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(T.a,{className:e.root},r.a.createElement(Te.a,null),r.a.createElement(Ae.a,{className:e.media,image:Ge.a,title:"Default Image"}),r.a.createElement(A.a,null,r.a.createElement(ce.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("h4",null,"Description:"),"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(Fe.a,{disableSpacing:!0},r.a.createElement(Re.a,{"aria-label":"add to favorites"},r.a.createElement(Z,null)),r.a.createElement(Re.a,{"aria-label":"share"},r.a.createElement(ze,null)),r.a.createElement(Re.a,{className:Object(R.a)(e.expand,Object(h.a)({},e.expandOpen,n)),onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"show more"})))},He=function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)(function(){B(g.getToken()).then(function(e){c(e.data.user)})},[]),r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:12},r.a.createElement(I,null))),r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:2,sm:2},r.a.createElement(ve,null)),r.a.createElement(L.a,{item:!0,md:10,sm:10},r.a.createElement(Ie,null),r.a.createElement(Ne,{user:l}),r.a.createElement(Ve,null))))},Ye=t(216),$e=t(217),_e=t(219),qe=t(215),Ke=t(218),Qe=t(74),Xe=Object(v.a)({table:{minWidth:600},HeaderDiv:{backgroundColor:m.palette.secondary.light,fontSize:"20px",textAlign:"center",padding:"10px",borderRadius:"5px",marginBottom:"15px"},layout:{marginTop:"50px",marginBottom:"50px",marginRight:"50px"},avatar:{height:"5px",width:"5px"}}),Ze=function(e){var a=Xe();return r.a.createElement(L.a,{className:a.layout},r.a.createElement(Qe.a,{elevation:1,className:a.HeaderDiv},r.a.createElement("div",null,r.a.createElement("span",{className:a.span},"Your Friends"))),e.friends?r.a.createElement(qe.a,{component:Qe.a},r.a.createElement(Ye.a,{className:a.table,"aria-label":"simple table"},r.a.createElement($e.a,null,e.friends.map(function(e){return r.a.createElement(Ke.a,{key:e.name},r.a.createElement(_e.a,{align:"center"},"Avatar"),r.a.createElement(_e.a,{align:"center"},e.username),r.a.createElement(_e.a,{align:"center"},e.name),r.a.createElement(_e.a,{align:"center"},"ViewLink"),r.a.createElement(_e.a,{align:"center"},"Action (-)"))})))):null)},ea=t(221),aa=t(220),ta=t(66),na=["username@gmail.com","user02@gmail.com"],ra=Object(v.a)({avatar:{backgroundColor:ta.a[100],color:ta.a[600]}});function la(e){var a=ra(),t=e.onClose,n=e.selectedValue,l=e.open,c=e.onSearch,o=e.onChange;return r.a.createElement(aa.a,{onClose:function(){t(n)},"aria-labelledby":"simple-dialog-title",open:l},r.a.createElement(ea.a,{id:"simple-dialog-title"},"Find New Friends"),r.a.createElement(Se,{className:a.search,onChange:o,onSearch:c}))}function ca(){var e=r.a.useState(!1),a=Object(o.a)(e,2),t=a[0],n=a[1],l=r.a.useState(na[1]),c=Object(o.a)(l,2),i=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Find Friends"),r.a.createElement(la,{selectedValue:i,open:t,onClose:function(e){n(!1),s(e)}}))}var oa=Object(v.a)({layout:{marginTop:"75px"}}),ia=function(){var e=oa(),a=Object(n.useState)(),t=Object(o.a)(a,2),l=t[0],c=(t[1],Object(n.useState)()),i=Object(o.a)(c,2),s=(i[0],i[1],Object(n.useState)()),m=Object(o.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(),E=Object(o.a)(p,2),f=E[0],h=(E[1],r.a.useState(!1)),b=Object(o.a)(h,2);b[0],b[1];console.log(l),console.log(u);return Object(n.useEffect)(function(){B(g.getToken()).then(function(e){d(e.data.user),G(e.data.user._id,g.getToken()).then(function(e){console.log(e)})})},[]),r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:12},r.a.createElement(I,null))),r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:2,sm:2},r.a.createElement(ve,null)),r.a.createElement(L.a,{item:!0,md:10,sm:10,className:e.layout},r.a.createElement(Ze,{friends:f}),r.a.createElement(ca,null))))},sa=Object(v.a)(function(e){return{layout:{padding:"10px",marginRight:"50px"},search:{backgroundColor:"#FFFFFF",border:"1px"}}}),ma=function(){var e=sa();return r.a.createElement(L.a,{container:!0,direction:"row",spacing:1,className:e.layout},r.a.createElement(L.a,{item:!0,xs:12,className:e.search},r.a.createElement(Se,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)),r.a.createElement(L.a,{item:!0,xs:4,md:3},r.a.createElement(Ve,null)))},ua=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=(t[0],t[1]),c=Object(n.useState)({}),i=Object(o.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)(function(){e.checkAuthenticateStatus()},[]),Object(n.useEffect)(function(){B(g.getToken()).then(function(e){l(e.data.message),m(e.data.user)})},[]),r.a.createElement(H,null,r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:12},r.a.createElement(I,null))),r.a.createElement(L.a,{container:!0,spacing:0,direction:"row"},r.a.createElement(L.a,{item:!0,md:2,sm:2},r.a.createElement(ve,null)),r.a.createElement(L.a,{item:!0,md:10,sm:10},r.a.createElement(Ie,null),r.a.createElement(Ne,{user:s}),r.a.createElement(ma,null)))))},da=function(){var e=Object(n.useState)({authenticated:!1}),a=Object(o.a)(e,2),t=a[0],l=a[1];console.log(t),Object(n.useEffect)(function(){c()},[]),Object(n.useEffect)(function(){return function(){g.deauthenticateUser(),localStorage.removeItem("token")}},[]);var c=function(){l({authenticated:g.isUserAuthenticated()})};return r.a.createElement(E.a,null,r.a.createElement(i.a,{theme:m},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Y,Object.assign({},e,{checkAuthenticateStatus:c}))}}),r.a.createElement(f.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(J,Object.assign({},e,{checkAuthenticateStatus:c}))}}),r.a.createElement(f.a,{exact:!0,path:"/signup",component:q}),r.a.createElement(f.a,{exact:!0,path:"/profile",render:function(e){return r.a.createElement(Le,Object.assign({},e,{checkAuthenticateStatus:c}))}}),r.a.createElement(f.a,{exact:!0,path:"/mytrove",render:function(e){return r.a.createElement(ua,Object.assign({},e,{checkAuthenticateStatus:c}))}}),r.a.createElement(f.a,{exact:!0,path:"/discover",component:He}),r.a.createElement(f.a,{path:"/friends",component:ia}),r.a.createElement(f.a,{path:"/logout",render:function(e){return r.a.createElement(p,Object.assign({},e,{checkAuthenticateStatus:c}))}}))))},ga=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pa(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(da,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ga?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pa(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):pa(e)})}}()},56:function(e,a,t){e.exports=t.p+"static/media/TroveLogo.c3249b80.png"},96:function(e,a,t){e.exports=t.p+"static/media/049-island.805f3263.png"},97:function(e,a,t){e.exports=t.p+"static/media/046-treasureChest.3980003d.png"},98:function(e,a,t){e.exports=t.p+"static/media/029-pirate.8c7db220.png"},99:function(e,a,t){e.exports=t.p+"static/media/001-compass.482c367e.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.d8199f14.chunk.js.map