(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/Ruby_Logo.3faf7fef.png"},107:function(e,t,a){e.exports=a.p+"static/media/Ruby_On_Rails_Logo.6cb79cc5.png"},108:function(e,t,a){e.exports=a.p+"static/media/javascript-logo.80cdee08.png"},109:function(e,t,a){e.exports=a.p+"static/media/react-logo-1000-transparent.96656bb8.png"},110:function(e,t,a){e.exports=a.p+"static/media/redux_logo.ffca3fad.png"},111:function(e,t,a){e.exports=a.p+"static/media/postit_note.15bc09a3.png"},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),s=a.n(o),l=(a(51),a(12)),i=a(29),c=a(2),m=a(3),u=a(5),d=a(4),p=a(6),h=a(10),g=(a(53),a(118)),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui menu navBar"},r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{to:"/home",className:"item"},"Welcome Board"),"/home"===this.props.currentPath?null:r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{to:"/mod/1",className:"item"},"Mod 1"),r.a.createElement(g.a,{to:"/mod/2",className:"item"},"Mod 2"),r.a.createElement(g.a,{to:"/mod/3",className:"item"},"Mod 3"),r.a.createElement(g.a,{to:"/mod/4",className:"item"},"Mod 4"),r.a.createElement(g.a,{to:"/mod/5",className:"item"},"Mod 5"))),this.props.isUserLoggedIn?r.a.createElement("span",{className:"ui menu navright"},r.a.createElement(g.a,{to:"/editProfile",className:"item"},"Edit Profile"),r.a.createElement("span",{className:"item pointer",onClick:this.props.logout},"Logout")):r.a.createElement("span",{className:"ui menu navright"},r.a.createElement(g.a,{to:"/login",className:"item"},"Login"),r.a.createElement(g.a,{to:"/signup",className:"item"},"SignUp")))}}]),t}(n.Component),b=a(120),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(b.a.Row,{columns:3},r.a.createElement(b.a.Column,null,r.a.createElement("div",{className:"mod-link-parent"},r.a.createElement("h1",null,"Mod 1"),r.a.createElement(g.a,{to:"/mod/1",className:"mod-link"},r.a.createElement("img",{className:"logo-image",alt:"",src:a(106)})))),r.a.createElement(b.a.Column,null,r.a.createElement("div",{className:"mod-link-parent"},r.a.createElement("h1",null,"Mod 2"),r.a.createElement(g.a,{to:"/mod/2",className:"mod-link"},r.a.createElement("img",{className:"logo-image",alt:"",src:a(107)})))),r.a.createElement(b.a.Column,null,r.a.createElement("div",{className:"mod-link-parent"},r.a.createElement("h1",null,"Mod 3"),r.a.createElement(g.a,{to:"/mod/3",className:"mod-link"},r.a.createElement("img",{className:"logo-image",alt:"",src:a(108)}))))),r.a.createElement(b.a.Row,{columns:3},r.a.createElement(b.a.Column,null,r.a.createElement("div",{className:"mod-link-parent"},r.a.createElement("h1",null,"Mod 4"),r.a.createElement(g.a,{to:"/mod/4",className:"mod-link"},r.a.createElement("img",{className:"logo-image",alt:"",src:a(109)})))),r.a.createElement(b.a.Column,null,r.a.createElement("div",{className:"mod-link-parent"},r.a.createElement("h1",null,"Mod 5"),r.a.createElement(g.a,{to:"/mod/5",className:"mod-link"},r.a.createElement("img",{className:"logo-image",alt:"",src:a(110)}))))))}}]),t}(r.a.Component),v=function(e){return r.a.createElement("div",null," ",r.a.createElement("h1",{id:"welcome"},r.a.createElement("span",null,"W"),r.a.createElement("span",null,"e"),r.a.createElement("span",null,"l"),r.a.createElement("span",null,"c"),r.a.createElement("span",null,"o"),r.a.createElement("span",null,"m"),r.a.createElement("span",null,"e"),r.a.createElement("span",null,"!")),r.a.createElement(E,null))},k=a(123),j=a(119),y=a(124),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={input:a.props.post.content},a.changeHandler=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.editPostHandler(a.props.post.id,a.state.input)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"postit-form",className:"ui"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{id:"postit-input",cols:"30",rows:"8",maxLength:"140",placeholder:"Edit post",value:this.state.input,onChange:this.changeHandler}),r.a.createElement("p",null,r.a.createElement("span",{className:"author"},"- ",this.props.author)),r.a.createElement("br",null),r.a.createElement("input",{id:"postit-submit",className:"pointer",type:"submit",value:"Update"})))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).editPostHandler=function(e){e.preventDefault(),a.props.editPostHandler()},a.state={markedForDeletion:!1,likes:"",author:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://welcome-board-backend.herokuapp.com/api/v1/likes").then(function(e){return e.json()}).then(function(t){var a=t.filter(function(t){return t.post_id===e.props.post.id}).length;e.setState({likes:a})});var t=this.props.users.find(function(t){return t.id===e.props.post.user_id}).full_name;this.setState({author:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"post-wrapper"},r.a.createElement("img",{alt:"",src:a(111)}),r.a.createElement("div",{className:"post-content"},this.props.post.user_id==localStorage.getItem("id")?r.a.createElement("span",{className:"delete pointer",onClick:this.deleteHandler.bind(this)},"x"):null,this.props.post.user_id==localStorage.getItem("id")?r.a.createElement(w,{post:this.props.post,editPostHandler:this.props.editPostHandler,author:this.state.author}):r.a.createElement("p",null,this.props.post.content," ",r.a.createElement("span",{className:"author"},"- ",this.state.author)),r.a.createElement("div",{className:"likes"},r.a.createElement("span",null,this.state.likes," "),r.a.createElement("span",{className:this.props.isUserLoggedIn?"pointer":"",onClick:this.props.isUserLoggedIn?this.likesHandler.bind(this):null},"\ud83d\ude0e"))))}},{key:"likesHandler",value:function(){fetch("https://welcome-board-backend.herokuapp.com/api/v1/likes",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify({post_id:this.props.post.id,user_id:this.props.currentUser.id})}).then(this.setState({likes:this.state.likes+1}))}},{key:"deleteHandler",value:function(){fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts/".concat(this.props.post.id),{method:"DELETE",headers:{Authorization:localStorage.getItem("token")}}),this.props.deleteHandler(this.props.post.id)}}]),t}(r.a.Component),S=Object(y.a)(O),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.handleChange=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.input?(a.props.addPost(a.state.input,a.props.mod),a.setState({input:""})):(alert("No blank comment please."),a.props.history.push("/mod/".concat(a.props.mod)))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"new-post-form",className:"ui card form"},r.a.createElement("form",{onSubmit:this.handleSubmit},"Write a note to a previous mod.",r.a.createElement("br",null),r.a.createElement("textarea",{className:"form-control",type:"text",placeholder:"Enter note",cols:"120",rows:"8",maxLength:"140",value:this.state.input,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{className:"submit button pointer",type:"submit"})))}}]),t}(n.Component),N=Object(y.a)(_),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={mod_posts:a.props.mod_id},a.showPostArray=function(){var e=a.props.postArray.filter(function(e){return e.mod_id==a.props.mod_id}).reverse();return r.a.createElement("div",{className:"post-array-container"},e.map(function(e){return r.a.createElement("div",{key:e.id,className:"content-wrapper"},r.a.createElement(S,{post:e,currentUser:a.props.currentUser,deleteHandler:a.props.deleteHandler,editPostHandler:a.props.editPostHandler,likes:a.props.likes,isUserLoggedIn:a.props.isUserLoggedIn,users:a.props.users}))}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={display:this.props.isUserLoggedIn?"block":"none"};return r.a.createElement("div",{className:"ui"},r.a.createElement("h1",{className:"mod-name"},"Mod ".concat(this.props.mod_id)),r.a.createElement("div",{className:"post-container"},this.showPostArray()),r.a.createElement("div",{style:e},r.a.createElement(N,{addPost:this.props.addPost,mod:this.props.mod_id,currentUser:this.props.currentUser})))}}]),t}(n.Component),U=Object(y.a)(H),I=a(122),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={id:a.props.currentUser.id,full_name:a.props.currentUser.full_name,password:"",mod_id:a.props.currentUser.mod_id},a.submitHandler=a.submitHandler.bind(Object(h.a)(Object(h.a)(a))),a.changeHandler=a.changeHandler.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"edit-profile-form",className:"ui card form"},this.props.isUserLoggedIn?r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",{htmlFor:"full_name"},"Full Name: "),r.a.createElement("input",{type:"text",name:"full_name",onChange:this.changeHandler,value:this.state.full_name}),r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"password",name:"password",placeholder:"type new password",id:"password",value:this.state.password,onChange:this.changeHandler}),r.a.createElement("label",{htmlFor:"mod"},"Mod #: "),r.a.createElement("select",{name:"mod_id",id:"mod_id",onChange:this.changeHandler,value:this.state.mod_id},this.getMods()),r.a.createElement("input",{type:"submit",className:"submit button pointer",value:"Update"})):r.a.createElement(I.a,{to:"/login"}))}},{key:"getMods",value:function(){return this.props.mods.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.rank)})}},{key:"submitHandler",value:function(e){e.preventDefault(),this.props.updateHandler(this.state),e.target.reset()}},{key:"changeHandler",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loginFullName:"",loginPassword:""},a.changeHandler=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.submitLoginHandler=function(e){e.preventDefault(),a.props.submitLoginHandler(a.state,e),a.setState({loginFullName:"",loginPassword:""})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"login-form",className:"ui card form"},r.a.createElement("h2",null,"Login"),r.a.createElement(j.a,{path:"/login",render:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.submitLoginHandler},r.a.createElement("label",{htmlFor:"full-name"},"Full Name:"),r.a.createElement("input",{id:"full-name",className:"form-control",name:"loginFullName",type:"text",placeholder:"Enter your full name",value:e.state.loginFullName,onChange:e.changeHandler}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",className:"form-control",name:"loginPassword",type:"password",placeholder:"Enter a password",value:e.state.loginPassword,onChange:e.changeHandler}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"submit button pointer",value:"Submit"})))}}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={full_name:"",password:"",mod_id:1},a.changeHandler=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.submitSignUpHandler=function(e){e.preventDefault(),""!==a.state.full_name||""!==a.state.password?(a.props.submitSignUpHandler(a.state,e),a.setState({full_name:"",password:"",mod_id:1})):(alert("Full name and password field cannot be empty."),a.props.history.push("/signup"))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"signup-form",className:"ui card form"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement(j.a,{path:"/signup",render:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.submitSignUpHandler},r.a.createElement("label",{htmlFor:"full-name"},"Full Name:"),r.a.createElement("input",{id:"full-name",className:"form-control",name:"full_name",type:"text",placeholder:"Enter your full name",value:e.state.full_name,onChange:e.changeHandler}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{id:"password",className:"form-control",name:"password",type:"password",placeholder:"Enter a password",value:e.state.password,onChange:e.changeHandler}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"mod"},"Mod:"),r.a.createElement("select",{id:"mod",className:"form-control",name:"mod_id",value:e.state.mod_id,onChange:e.changeHandler},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("input",{type:"submit",className:"submit button",value:"Submit"})))}}))}}]),t}(n.Component),A=Object(y.a)(L),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).addNewPost=function(e,t){parseInt(t)>a.state.currentUser.mod_id?alert("You can only submit posts for mods you are in or have completed."):fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify({content:e,mod_id:parseInt(t),user_id:parseInt(localStorage.getItem("id"))})}).then(function(e){return e.json()}).then(function(e){var t=Object(i.a)(a.state.posts);t.push(e),a.setState({posts:t})})},a.submitSignUpHandler=function(e,t){t.preventDefault(),a.createUser(e),a.props.history.push("/home")},a.createUser=function(e){fetch("https://welcome-board-backend.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({full_name:e.full_name,password:e.password,mod_id:e.mod_id})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),a.setState({isUserLoggedIn:!0,token:localStorage.getItem("token"),currentUser:{id:e.user.id,full_name:e.user.full_name,password:"",mod_id:e.user.mod_id}})})},a.submitLoginHandler=function(e,t){t.preventDefault(),a.getUser(e),a.props.history.push("/home")},a.getUser=function(e){fetch("https://welcome-board-backend.herokuapp.com/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({full_name:e.loginFullName,password:e.loginPassword})}).then(function(e){if(401===e.status)throw new Error(e.status);return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),localStorage.setItem("full_name",e.user.full_name),localStorage.setItem("id",e.user.id),localStorage.setItem("mod_id",e.user.mod_id),a.setState({isUserLoggedIn:!0,token:localStorage.getItem("token"),currentUser:{id:e.user.id,full_name:e.user.full_name,password:"",mod_id:e.user.mod_id}})}).catch(function(e){a.props.history.push("/login"),alert("HTTP ERROR: ".concat(e,", Unknown account or password!"))})},a.logout=function(){localStorage.removeItem("token"),localStorage.removeItem("id"),localStorage.removeItem("full_name"),localStorage.removeItem("mod_id"),localStorage.removeItem("users"),a.setState({currentUser:{id:0,full_name:"",mod_id:0},isUserLoggedIn:!1,token:""}),a.props.history.push("/home")},a.editPostHandler=function(e,t){fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:a.state.token},body:JSON.stringify({content:t})}).then(function(e){return e.json()}).then(function(t){var n=Object(i.a)(a.state.posts);n=n.map(function(a){return a.id===e?t:a}),a.setState({posts:n})})},a.state={isUserLoggedIn:!1,current_mod:0,currentUser:{id:0,full_name:"",mod_id:0},mods:[],posts:[],likes:[],token:""},a.updateHandler=a.updateHandler.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://welcome-board-backend.herokuapp.com/api/v1/mods").then(function(e){return e.json()}).then(function(t){return e.setState({mods:t})}),fetch("https://welcome-board-backend.herokuapp.com/api/v1/users").then(function(e){return e.json()}).then(function(e){localStorage.setItem("users",JSON.stringify(e))}),fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts").then(function(e){return e.json()}).then(function(t){e.setState({posts:t})}),fetch("https://welcome-board-backend.herokuapp.com/api/v1/likes").then(function(e){return e.json()}).then(function(t){e.setState({likes:t})}),null!==localStorage.getItem("token")&&this.setState({currentUser:{id:localStorage.getItem("id"),full_name:localStorage.getItem("full_name"),mod_id:localStorage.getItem("mod_id")},token:localStorage.getItem("token"),isUserLoggedIn:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{isUserLoggedIn:this.state.isUserLoggedIn,logout:this.logout,currentPath:this.props.location.pathname}),r.a.createElement(k.a,null,r.a.createElement(j.a,{path:"/home",component:v}),r.a.createElement(j.a,{path:"/mod/:id",render:function(t){var a;return r.a.createElement(U,(a={mod_id:t.match.params.id,postArray:e.state.posts,addPost:e.addNewPost,isUserLoggedIn:e.state.isUserLoggedIn,currentUser:e.state.currentUser,deleteHandler:e.deleteHandler.bind(e),editPostHandler:e.editPostHandler,likes:e.state.likes},Object(l.a)(a,"isUserLoggedIn",e.state.isUserLoggedIn),Object(l.a)(a,"users",JSON.parse(localStorage.getItem("users"))),a))}}),r.a.createElement(j.a,{path:"/editProfile",render:function(){return r.a.createElement(C,{isUserLoggedIn:e.state.isUserLoggedIn,currentUser:e.state.currentUser,updateHandler:e.updateHandler,mods:e.state.mods})}}),r.a.createElement(j.a,{path:"/login",render:function(){return r.a.createElement(P,{submitLoginHandler:e.submitLoginHandler})}}),r.a.createElement(j.a,{path:"/signUp",render:function(){return r.a.createElement(A,{submitSignUpHandler:e.submitSignUpHandler})}}),r.a.createElement(j.a,{path:"/",component:v})))}},{key:"updateHandler",value:function(e){var t=this;this.setState({currentUser:e}),fetch("https://welcome-board-backend.herokuapp.com/api/v1/users/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:this.state.token},body:JSON.stringify({full_name:e.full_name,password:e.password,mod_id:e.mod_id})}).then(function(e){return e.json()}).then(function(e){t.setState({currentUser:{id:e.id,full_name:e.full_name,mod_id:e.mod_id}}),t.props.history.push("/home")})}},{key:"deleteHandler",value:function(e){var t=Object(i.a)(this.state.posts).filter(function(t){return t.id!==e});this.setState({posts:t})}}]),t}(n.Component),x=Object(y.a)(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(121);a(113);s.a.render(r.a.createElement(M.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e,t,a){e.exports=a(116)},51:function(e,t,a){},53:function(e,t,a){}},[[46,2,1]]]);
//# sourceMappingURL=main.be63193d.chunk.js.map