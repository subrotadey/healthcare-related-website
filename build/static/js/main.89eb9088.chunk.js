(this["webpackJsonpassignment-10"]=this["webpackJsonpassignment-10"]||[]).push([[0],{37:function(e,c,t){},70:function(e,c,t){},82:function(e,c,t){},83:function(e,c,t){},92:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(35),i=t.n(n),r=(t(82),t(17)),l=t(13),j=(t(83),t(94)),d=t(71),o=t(101),b=t.p+"static/media/dentalia-demo-team-720x720.1a685d7d.jpg",h=(t(37),t(0)),x=function(){return Object(h.jsx)("div",{className:"mt-5 p-5",children:Object(h.jsxs)(j.a,{xs:1,md:3,className:"g-4",children:[Object(h.jsxs)(d.a,{className:"mt-5 pt-5",children:[Object(h.jsx)("h6",{children:"WE ARE DENTALIA"}),Object(h.jsx)("h1",{children:"Creating Beautiful Smiles Since 1999"}),Object(h.jsx)("p",{className:"doc-about",children:"Dentalia is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services."})]}),Object(h.jsx)(d.a,{children:Object(h.jsx)(o.a.Img,{variant:"top",className:"rounded-circle",src:b})}),Object(h.jsxs)(d.a,{className:"mt-5 pt-5",children:[Object(h.jsx)("h1",{children:"Our mission"}),Object(h.jsx)("p",{className:"doc-about",children:"Dentalia is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services."})]})]})})},m=t(12),O=t(33),u=t(72),p={apiKey:"AIzaSyClnjKcw-jYPOVh9neF0ldAxyMiX_8DC3U",authDomain:"assignment-10-e5779.firebaseapp.com",projectId:"assignment-10-e5779",storageBucket:"assignment-10-e5779.appspot.com",messagingSenderId:"314152819466",appId:"1:314152819466:web:f513e74a4f820430fc38f3"};(function(){Object(u.a)(p)})();var f=function(){var e=Object(s.useState)({}),c=Object(m.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),i=Object(m.a)(n,2),r=i[0],l=i[1],j=Object(s.useState)(!0),d=Object(m.a)(j,2),o=d[0],b=d[1],h=Object(O.c)();Object(s.useEffect)((function(){Object(O.d)(h,(function(e){a(e||{}),b(!1)}))}),[h]);return{user:t,error:r,auth:h,isLoading:o,setIsLoading:b,setError:l,setUser:a,signInUsingGoogle:function(){b(!0);var e=new O.a;return Object(O.f)(h,e)},createUserWithEmailAndPassword:O.b,signInWithEmailAndPassword:O.e,logOut:function(){b(!0),Object(O.g)(h).then((function(){a({})})).finally((function(){b(!1)}))}}},v=Object(s.createContext)(),N=function(e){var c=e.children,t=f();return Object(h.jsx)(v.Provider,{value:t,children:c})},g=t(98),y=function(){return Object(h.jsxs)("div",{className:"mt-5 p-5",children:[Object(h.jsx)("div",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Request an Appointment"}),Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(j.a,{className:"mb-3",children:[Object(h.jsxs)(g.a.Group,{as:d.a,controlId:"formGridEmail",children:[Object(h.jsx)(g.a.Label,{children:"Email"}),Object(h.jsx)(g.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(h.jsxs)(g.a.Group,{as:d.a,controlId:"formGridPassword",children:[Object(h.jsx)(g.a.Label,{children:"Password"}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"Password"})]})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"formGridAddress1",children:[Object(h.jsx)(g.a.Label,{children:"Address"}),Object(h.jsx)(g.a.Control,{placeholder:"1234 Main St"})]}),Object(h.jsxs)(g.a.Group,{className:"mb-3",controlId:"formGridAddress2",children:[Object(h.jsx)(g.a.Label,{children:"Address 2"}),Object(h.jsx)(g.a.Control,{placeholder:"Apartment, studio, or floor"})]}),Object(h.jsxs)(j.a,{className:"mb-3",children:[Object(h.jsxs)(g.a.Group,{as:d.a,controlId:"formGridCity",children:[Object(h.jsx)(g.a.Label,{children:"City"}),Object(h.jsx)(g.a.Control,{})]}),Object(h.jsxs)(g.a.Group,{as:d.a,controlId:"formGridState",children:[Object(h.jsx)(g.a.Label,{children:"State"}),Object(h.jsxs)(g.a.Select,{defaultValue:"Choose...",children:[Object(h.jsx)("option",{children:"Choose..."}),Object(h.jsx)("option",{children:"..."})]})]}),Object(h.jsxs)(g.a.Group,{as:d.a,controlId:"formGridZip",children:[Object(h.jsx)(g.a.Label,{children:"Zip"}),Object(h.jsx)(g.a.Control,{})]})]}),Object(h.jsx)(g.a.Group,{className:"mb-3",id:"formGridCheckbox",children:Object(h.jsx)(g.a.Check,{type:"checkbox",label:"Check me out"})}),Object(h.jsxs)(r.b,{to:"/home",children:[" ",Object(h.jsx)("button",{className:"btn btn-success",variant:"primary",type:"submit",children:"Submit"})]})]})]})]})},w=t(75),I=function(){var e=Object(l.i)().serviceId,c=parseInt(e),t=Object(s.useState)([]),a=Object(m.a)(t,2),n=a[0],i=a[1];Object(s.useEffect)((function(){fetch("/FakeData.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var b=null===n||void 0===n?void 0:n.find((function(e){return e.id===c}));return Object(h.jsx)("div",{className:"mt-5 pt-3",children:b&&Object(h.jsx)(j.a,{xs:1,md:2,className:"g-4 ",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.a,{className:" pb-2",children:[Object(h.jsx)(o.a.Img,{variant:"top",src:b.img}),Object(h.jsxs)(o.a.Body,{children:[Object(h.jsx)(o.a.Title,{children:b.name}),Object(h.jsx)(o.a.Text,{className:"doc-about",children:b.description}),Object(h.jsxs)("p",{children:["Price:$",b.price]}),Object(h.jsx)(w.a,{initialRating:b.rating,emptySymbol:"far fa-star rating",fullSymbol:"fas fa-star rating",readonly:!0})]}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)("button",{className:"btn btn-success",children:"Purchase now"})})]})})})})},S=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"footer mt-5 text-light bg-dark p-3",children:[Object(h.jsxs)(j.a,{xs:1,md:4,xl:4,className:"g-4",children:[Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.a.Body,{children:[Object(h.jsxs)(o.a.Title,{children:[" ",Object(h.jsx)("h3",{children:"Contact Information"})," "]}),Object(h.jsx)("hr",{}),Object(h.jsxs)(o.a.Text,{children:[Object(h.jsx)("p",{children:"1675/A, O.R Nizam Road Chittagong Bangladesh"}),Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("a",{href:"/",children:"http://cscrbd.com/"})]}),Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("a",{href:"/",children:"info@cscrbd.com"})]}),Object(h.jsx)("p",{children:"031-656565"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fab fa-facebook-f p-2"}),Object(h.jsx)("i",{className:"fab fa-twitter p-2"}),Object(h.jsx)("i",{className:"fab fa-instagram p-2"})]})]})]})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.a.Body,{children:[Object(h.jsxs)(o.a.Title,{children:[" ",Object(h.jsx)("h3",{children:"Doctors"})," "]}),Object(h.jsx)("hr",{}),Object(h.jsx)(o.a.Text,{children:Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:Object(h.jsxs)("ol",{children:[Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"/",children:"Dr. Md. Gofranul Hoque"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"/",children:"Dr. S. M. Tariq"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"/",children:"Dr. Md. Qumrul Ahsan."})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"/",children:"Dr. Md. Ibrahim Chowdhury"})}),Object(h.jsx)("hr",{})]})})})})})]})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.a.Body,{children:[Object(h.jsxs)(o.a.Title,{children:[" ",Object(h.jsx)("h3",{children:"Services"})," "]}),Object(h.jsx)("hr",{}),Object(h.jsx)(o.a.Text,{children:Object(h.jsx)("div",{className:"d-flex justify-content-between",children:Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:Object(h.jsxs)("ol",{children:[Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"/home",children:"IMPLANTS"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"#doctors",children:"DENTISTRY"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"#clients",children:"VENEERS"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"#solutions",children:"TEETH WHITENING"})}),Object(h.jsx)("hr",{})]})})})})})]})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"pt-3",children:"Contact Us"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{className:"p-2",for:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(h.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{className:"p-2",for:"exampleInputPassword1",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(h.jsx)("div",{className:"p-4",children:Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})})]})]})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("small",{className:"text-light",children:"Doctor's Dental Care \xa9 2021 | All Rights Reserved"})," "]})]})})},C=t(97),E=t(95),k=t(99),T=function(){return Object(s.useContext)(v)},D=function(){var e=T(),c=e.user,t=e.logOut;return Object(h.jsx)("div",{children:Object(h.jsxs)(C.a,{bg:"dark",variant:"dark",fixed:"top",expand:"lg",children:[Object(h.jsxs)(E.a,{children:[Object(h.jsx)(r.b,{to:"/home",children:Object(h.jsx)(C.a.Brand,{children:"Doctor's Dental Care"})}),Object(h.jsx)(C.a.Toggle,{"aria-controls":"navbarScroll"}),Object(h.jsxs)(C.a.Collapse,{id:"navbarScroll",children:[Object(h.jsxs)(k.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(h.jsx)(k.a.Link,{children:Object(h.jsx)(r.b,{to:"/home",children:"Home"})}),Object(h.jsx)(k.a.Link,{children:Object(h.jsx)(r.b,{to:"/about",children:"About us"})}),Object(h.jsx)(k.a.Link,{children:Object(h.jsx)(r.b,{to:"/services",children:"services"})}),Object(h.jsx)(k.a.Link,{children:Object(h.jsx)(r.b,{to:"/contact",children:"contact us"})})]}),Object(h.jsxs)(g.a,{className:"d-flex",children:[c.email&&Object(h.jsxs)("h4",{className:"text-light",children:["Hello ",c.displayName]}),c.email?Object(h.jsx)(r.b,{to:"/login",children:Object(h.jsx)("button",{onClick:t,className:"btn btn-warning",children:"log out"})}):Object(h.jsx)(k.a.Link,{children:Object(h.jsx)(r.b,{to:"/login",children:"Sign in"})})]})]})]}),Object(h.jsx)("hr",{})]})})},P=function(){var e=Object(s.useState)([]),c=Object(m.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/FakeData.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),t},A=function(){var e=Object(s.useState)([]),c=Object(m.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("/doctor.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),t},G=function(e){var c=e.doctor,t=c.name,s=c.title,a=c.about,n=c.img;return Object(h.jsx)("div",{children:Object(h.jsxs)(d.a,{className:"doc",children:[Object(h.jsx)("div",{className:"card-img",children:Object(h.jsx)(o.a.Img,{variant:"top",src:n})}),Object(h.jsxs)(o.a.Body,{className:"doctor",children:[Object(h.jsx)("p",{children:s}),Object(h.jsxs)(o.a.Title,{children:[" ",t," "]}),Object(h.jsx)(o.a.Text,{className:"doc-about",children:a}),Object(h.jsx)(r.b,{to:"/contact",children:Object(h.jsx)("button",{className:"btn btn-success",children:"Book Your Appointment"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fab fa-facebook-f p-2"}),Object(h.jsx)("i",{className:"fab fa-twitter p-2"}),Object(h.jsx)("i",{className:"fab fa-instagram p-2"})]})]})]})})},L=function(){var e=A();return Object(h.jsxs)("div",{className:"mt-3 p-2",children:[Object(h.jsx)("h1",{children:"Our specialist"}),Object(h.jsx)("hr",{className:"w-25 mx-auto text-success "}),Object(h.jsx)(j.a,{xs:1,md:3,sm:2,xl:3,className:"g-4",children:null===e||void 0===e?void 0:e.map((function(e){return Object(h.jsx)(G,{doctor:e},e.id)}))})]})},F=t(100),B=t.p+"static/media/beautiful-dentist-working-dental-clinic.c4d2c506.jpg",M=t.p+"static/media/happy-young-woman-smiling.75560f83.jpg",R=t.p+"static/media/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw.f267be10.jpg",H=function(){return Object(h.jsx)("div",{className:"mt-2 carousel",children:Object(h.jsxs)(F.a,{fade:!0,children:[Object(h.jsxs)(F.a.Item,{children:[Object(h.jsx)("img",{className:"w-100 img",src:B,alt:"First slide"}),Object(h.jsx)(F.a.Caption,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-dark",children:"Education and Clinical Training"}),Object(h.jsx)("p",{children:"The level of education and clinical training required to earn a dental degree, and the high academic standards of dental schools."})]})})]}),Object(h.jsxs)(F.a.Item,{children:[Object(h.jsx)("img",{className:"w-100 img",src:M,alt:"Second slide"}),Object(h.jsx)(F.a.Caption,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-dark",children:"More than Just Teeth and Gums"}),Object(h.jsx)("p",{children:"Dentists' areas of care include not only their patients' teeth and gums but also the muscles of the head."})]})})]}),Object(h.jsxs)(F.a.Item,{children:[Object(h.jsx)("img",{className:"w-100 img",src:R,alt:"Third slide"}),Object(h.jsx)(F.a.Caption,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-dark",children:"Doctors of Oral Health"}),Object(h.jsx)("p",{children:"The team approach to dentistry promotes continuity of care that is comprehensive, convenient."})]})})]})]})})},U=function(e){var c=e.service,t=c.name,s=c.title,a=c.img,n=c.description,i=c.id;return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{className:"doc",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)("div",{className:"card-img",children:Object(h.jsx)(o.a.Img,{variant:"top",src:a})}),Object(h.jsxs)(o.a.Body,{className:"service",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:s})}),Object(h.jsx)(o.a.Title,{children:t}),Object(h.jsx)(o.a.Text,{className:"doc-about",children:n.slice(0,83)}),Object(h.jsx)(r.b,{to:"/service/".concat(i),children:Object(h.jsx)("button",{className:"btn btn-success",children:"See details"})})]})]})})})},W=t.p+"static/media/after11.64961562.jpg",q=function(){return Object(h.jsx)("div",{className:" bg-dark",children:Object(h.jsxs)("div",{className:"row m-4",children:[Object(h.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(h.jsx)("img",{className:"w-100 p-3",src:W,alt:""})}),Object(h.jsxs)("div",{className:"col-md-6 col-sm-12 text-light doc-about p-3",children:[Object(h.jsx)("h5",{className:"text-primary",children:"Before and after teeth whitening"}),Object(h.jsx)("h1",{children:"Get a Hollywood Smile Today!"}),Object(h.jsx)("p",{children:"A comprehensive Dental Centre became operational at United Hospital on 29th April 2012. The Dental Centre has been set up with the aim to provide an international standard dental treatment facility to satisfy and meet the demands of our community."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Our dentists Dr Md. Nazrul Islam and Dr Lutfun Nahar both completed their Masters from National University of Singapore and have a 5-years working experience in Singapore."}),Object(h.jsx)("h3",{className:"text-success",children:"Dr. Jhankar Mahbub"})]})]})})},J=function(){var e=P();return Object(h.jsxs)("div",{className:"pt-5",children:[Object(h.jsx)(H,{}),Object(h.jsx)(q,{}),Object(h.jsx)("h1",{children:"Our services"}),Object(h.jsx)("hr",{className:"w-25 mx-auto text-success "}),Object(h.jsx)(j.a,{xs:1,sm:2,xl:3,className:"g-4 pb-3",children:null===e||void 0===e?void 0:e.slice(0,6).map((function(e){return Object(h.jsx)(U,{service:e},e.id)}))}),Object(h.jsx)(r.b,{to:"/services",children:Object(h.jsx)("button",{className:"btn btn-warning",children:"View all services"})}),Object(h.jsx)(L,{})]})},V=(t(70),function(){var e,c=T(),t=c.signInUsingGoogle,s=c.setUser,a=c.setIsLoading,n=Object(l.h)(),i=Object(l.g)(),j=(null===(e=n.state)||void 0===e?void 0:e.from)||"/home";return Object(h.jsx)("div",{className:"d-flex justify-content-center register pt-4 pb-5",children:Object(h.jsxs)("div",{className:"w-50 login",children:[Object(h.jsx)("h1",{children:"Please Sign in"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Email"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"email",className:"form-control",id:"inputEmail3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label",children:"Password"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"inputPassword3"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["New to Doctor's Dental Care? ",Object(h.jsx)(r.b,{to:"/register",children:"Register now"})]})})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign in"})]}),Object(h.jsx)("p",{children:"-----------or---------"}),Object(h.jsx)("button",{onClick:function(){t().then((function(e){s(e.user),i.push(j)})).finally((function(){a(!1)}))},className:"btn btn-success",children:Object(h.jsx)("i",{className:"fab fa-google"})})]})})}),z=function(){return Object(h.jsxs)("div",{className:"not-found",children:[Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("p",{children:"Module not found."})]})},Y=t(5),K=t(8),Z=t(96),Q=["children"],X=function(e){var c=e.children,t=Object(K.a)(e,Q),s=T(),a=s.user;return s.isLoading?Object(h.jsx)(Z.a,{animation:"border"}):Object(h.jsx)(l.b,Object(Y.a)(Object(Y.a)({},t),{},{render:function(e){var t=e.location;return a.email?c:Object(h.jsx)(l.a,{to:{pathname:"/login",state:{from:t}}})}}))},$=function(){var e=Object(s.useState)(""),c=Object(m.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),i=Object(m.a)(n,2),l=i[0],j=i[1],d=T(),o=d.setUser,b=d.signInUsingGoogle,x=Object(O.c)();return Object(h.jsx)("div",{className:"d-flex justify-content-center pb-5 register",children:Object(h.jsxs)("div",{className:"w-50 login",children:[Object(h.jsx)("h1",{children:"Register Now"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(O.b)(x,t,l).then((function(e){o(e.user)}))},children:[Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"firstName3",className:"col-sm-2 col-form-label",children:"First Name"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"firstName3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"lastName3",className:"col-sm-2 col-form-label",children:"Last Name"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"lastName3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Email"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"email",onBlur:function(e){a(e.target.value)},className:"form-control",id:"inputEmail3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"phoneNumber3",className:"col-sm-2 col-form-label",children:"Phone Number"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"text",className:"form-control",id:"phoneNumber3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label",children:"Password"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"password",onBlur:function(e){j(e.target.value)},className:"form-control",id:"inputPassword3"})})]}),Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("label",{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label",children:"Confirm Password"}),Object(h.jsx)("div",{className:"col-sm-10",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"inputPassword3"})})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[" ",Object(h.jsxs)("p",{children:["Already Registered? ",Object(h.jsx)(r.b,{to:"/login",children:"Sign in"})]})," "]})}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})]}),Object(h.jsx)("p",{children:"-----------or---------"}),Object(h.jsx)("button",{onClick:b,className:"btn btn-success",children:Object(h.jsx)("i",{className:"fab fa-google"})})]})})},_=function(){var e=P();return Object(h.jsxs)("div",{className:"mt-3 pt-5",children:[Object(h.jsx)("h1",{children:"Our Services"}),Object(h.jsx)(j.a,{xs:1,md:3,xl:4,sm:2,className:"g-4",children:null===e||void 0===e?void 0:e.map((function(e){return Object(h.jsx)(U,{service:e},e.id)}))})]})};var ee=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(N,{children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(D,{}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",children:Object(h.jsx)(J,{})}),Object(h.jsx)(l.b,{exact:!0,path:"/home",children:Object(h.jsx)(J,{})}),Object(h.jsx)(l.b,{path:"/services",children:Object(h.jsx)(_,{})}),Object(h.jsx)(X,{path:"/service/:serviceId",children:Object(h.jsx)(I,{})}),Object(h.jsx)(l.b,{path:"/login",children:Object(h.jsx)(V,{})}),Object(h.jsx)(l.b,{path:"/register",children:Object(h.jsx)($,{})}),Object(h.jsx)(l.b,{path:"/about",children:Object(h.jsx)(x,{})}),Object(h.jsx)(l.b,{path:"/contact",children:Object(h.jsx)(y,{})}),Object(h.jsx)(l.b,{path:"*",children:Object(h.jsx)(z,{})})]}),Object(h.jsx)(S,{})]})})})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ee,{})}),document.getElementById("root")),ce()}},[[92,1,2]]]);
//# sourceMappingURL=main.89eb9088.chunk.js.map