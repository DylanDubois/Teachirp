(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,a,t){},172:function(e,a,t){},176:function(e,a,t){},178:function(e,a,t){},180:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);t(78),t(56),t(80),t(81);var s=t(0),n=t.n(s),r=t(73),o=t.n(r),l=(t(86),t(4)),c=t(5),i=t(7),m=t(6),u=t(8),d=(t(88),function(e){return e.children}),p=(t(92),function(e){var a=e.progress;return n.a.createElement("div",{className:"col-md-4 col-sm-12 mb-4",onClick:e.courseSelected},n.a.createElement("div",{className:"card bg-dark col-12 course"},n.a.createElement("div",{className:"card-header text-primary border-bottom border-white"},n.a.createElement("h5",null,e.courseName)),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-white"},e.assignmentCount," Assignments"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar-animated progress-bar-striped bg-primary",role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100",style:{width:a+"%"}})))))}),h=t(189),b=t(74),v=(t.n(b).a.create({baseURL:"https://teachirp.firebaseio.com/"}),t(30)),g=t.n(v),E=g.a.initializeApp({apiKey:"AIzaSyCnZUngvfvS0AaP694Pvsyl0J_OKymFd4c",authDomain:"teachirp.firebaseapp.com",databaseURL:"https://teachirp.firebaseio.com",projectId:"teachirp",storageBucket:"teachirp.appspot.com",messagingSenderId:"1011919166886"}),f=new g.a.auth.GoogleAuthProvider,N=function(){g.a.auth().signInWithPopup(f).then(function(e){}).catch(function(e){})},y=function(){g.a.auth().signOut().then(function(e){}).catch(function(e){})},k=E,w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={courses:[]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,a){return e.courses!==a.courses&&this.setState({courses:e.courses}),!0}},{key:"render",value:function(){var e=this,a=null;return this.state.courses&&(a=Object.keys(this.state.courses).map(function(a){return n.a.createElement(p,{courseName:e.state.courses[a].name,progress:e.state.courses[a].progress,assignmentCount:e.state.courses[a].assignmentCount,key:e.state.courses[a].id,courseSelected:function(){e.props.courseSelected(e.state.courses[a]),e.props.history.push("/course/"+e.state.courses[a].id)}})})),n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"row"},a))}}]),a}(s.Component),j=Object(h.a)(w),O=(t(170),t(184)),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",tmpTaskName:""},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleSubmit=function(e){e.preventDefault()},t.submitCourse=function(){var e=(new Date).getTime()-155e10,a={name:t.state.name,id:e};t.setState({name:""}),k.database().ref("/users/"+t.props.uid+"/courses/"+e).update(a)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"modal","data-target":"#exampleModal"},"Add Course"),n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content bg-dark"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h4",{className:"modal-title text-primary text-center header",id:"exampleModalLabel"},"Add Course"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.setState({name:"",tmpTaskName:""})}},n.a.createElement("span",{"aria-hidden":"true",className:"text-white"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("form",{className:"row"},n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"name","aria-describedby":"name",placeholder:"Course name",value:this.state.name,onChange:this.handleNameChange})))),n.a.createElement("div",{className:"modal-footer text-center"},n.a.createElement("button",{type:"button",className:"btn btn-outline-primary header","data-dismiss":"modal",onClick:this.submitCourse},"Add"))))))}}]),a}(s.Component),x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={user:{displayName:"Dylan"},courses:[]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props),this.setState({courses:this.props.courses})}},{key:"shouldComponentUpdate",value:function(e,a){return e.courses!==a.courses&&this.setState({courses:e.courses}),e.user!==a.user&&this.setState({user:e.user}),!0}},{key:"render",value:function(){var e=this,a=this.props.user?this.props.user.uid:null,t=this.state.user?this.state.user.displayName:"  ";return n.a.createElement(d,null,n.a.createElement("div",{className:"jumbotron gradient jumbotron-fluid bg-dark text-white border-bottom border-primary"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4 header"},"Welcome, ",n.a.createElement("span",{className:"text-primary"},t),"!"),n.a.createElement("p",{className:"lead"},"See all that there is to do!"),n.a.createElement(C,{uid:a}))),n.a.createElement(O.a,{path:"/dashboard",exact:!0,render:function(){return n.a.createElement(j,{courseSelected:e.props.courseSelected,courses:e.props.courses})}}))}}]),a}(s.Component),S=t(185),A=function(e){var a=n.a.createElement(S.a,{className:"btn btn-outline-primary btn-lg mt-3 header",role:"button",to:"/",onClick:e.signIn},"Get Started");return e.userSignedIn&&(a=n.a.createElement(S.a,{className:"btn btn-outline-primary btn-lg mt-3 header",role:"button",to:"/dashboard"},"View Dashboard")),n.a.createElement(d,null,n.a.createElement("div",{className:"jumbotron gradient jumbotron-fluid bg-dark text-white border-bottom border-primary"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-2 brand text-primary"},"Teachirp"),n.a.createElement("p",{className:"lead"},"Your courses, made easy!"),n.a.createElement("p",{className:"lead"},a))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 col-12"},n.a.createElement("h1",null,"Feature 1")),n.a.createElement("div",{className:"col-sm-4 col-12"},n.a.createElement("h1",null,"Feature 2")),n.a.createElement("div",{className:"col-sm-4 col-12"},n.a.createElement("h1",null,"Feature 3")))))},T=(t(172),function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary header"},n.a.createElement(S.a,{className:"navbar-brand text-primary brand",to:"/"},"Teachirp"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(S.a,{className:"nav-link",to:"/"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement(S.a,{className:"nav-link",to:"/dashboard"},"Dashboard")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement(S.a,{className:"nav-link dropdown-toggle",to:"/",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-target":"#yungdropdown"},"Courses"),n.a.createElement("div",{className:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdownMenuLink",id:"yungdropdown"},n.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),n.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),n.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here")))),e.user&&n.a.createElement("div",{className:"profile-dropdown"},n.a.createElement("ul",{className:"navbar-nav float-r-dt"},n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement(S.a,{className:"nav-link dropdown-toggle",to:"/",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-target":"#profiledropdown"},e.user.displayName),n.a.createElement("div",{className:"dropdown-menu bg-dark","aria-labelledby":"navbarDropdownMenuLink",id:"profiledropdown"},n.a.createElement(S.a,{className:"dropdown-item",to:"/"},"Action"),n.a.createElement(S.a,{className:"dropdown-item",to:"/"},"Another action"),n.a.createElement(S.a,{className:"dropdown-item",to:"/",onClick:e.signOut},"Sign-Out")))))))}),D=t(187),M=t(186),L=t(188),I=(t(176),function(e){var a=e.progress>=50?180:e.progress/50*180,t=e.progress<50?0:e.progress%50/50*180;return n.a.createElement("div",{className:"progress-cust blue mt-5"},n.a.createElement("span",{className:"progress-cust-left"},n.a.createElement("span",{className:"progress-cust-bar",style:{transform:"rotate("+t+"deg)"}})),n.a.createElement("span",{className:"progress-cust-right"},n.a.createElement("span",{className:"progress-cust-bar",style:{transform:"rotate("+a+"deg)"}})),n.a.createElement("div",{className:"progress-cust-value"},e.progress,"%"))}),U=t(76),P=function(e){if(!e.tasks)return null;var a=e.tasks.map(function(e){return n.a.createElement("div",{key:e.id,className:"col-12"},n.a.createElement("h5",{className:"text-white"},e.name))});return n.a.createElement("div",{className:"container mt-3 p-0"},n.a.createElement("div",{className:"row text-left"},a))},W=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={name:"",estimatedTime:"",tasks:[],tmpTaskName:""},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleEstimationChange=function(e){t.setState({estimatedTime:e.target.value})},t.handleTasksChange=function(e){t.setState({tmpTaskName:e.target.value})},t.handleTaskAddition=function(){if(t.state.tmpTaskName){var e=(new Date).getTime()-155e10,a={name:t.state.tmpTaskName,complete:!1,id:e},s=t.state.tasks;s.push(a),t.setState({tmpTaskName:"",tasks:s})}},t.handleSubmit=function(e){e.preventDefault()},t.submitAssignment=function(){var e=(new Date).getTime()-155e10,a=Object(U.a)({},t.state,{id:e});t.setState({name:"",estimatedTime:"",tasks:[],tmpTaskName:""}),k.database().ref("users/"+t.props.uid+"/courses/"+t.props.courseId+"/assignments/"+e).update(a)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement("button",{type:"button",className:"btn btn-outline-primary mt-5","data-toggle":"modal","data-target":"#exampleModal"},"Add Assignment"),n.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content bg-dark"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h4",{className:"modal-title text-primary text-center header",id:"exampleModalLabel"},"Add Assignment"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.setState({name:"",estimatedTime:"",tasks:[],tmpTaskName:""})}},n.a.createElement("span",{"aria-hidden":"true",className:"text-white"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("form",{className:"row"},n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("input",{type:"text",className:"form-control",id:"name","aria-describedby":"name",placeholder:"Assignment name",value:this.state.name,onChange:this.handleNameChange})),n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("input",{type:"number",className:"form-control",id:"effort",placeholder:"Estimated time to complete",value:this.state.estimatedTime,onChange:this.handleEstimationChange})),n.a.createElement("div",{className:"col-12 row pr-0"},n.a.createElement("div",{className:"form-group col-10 m-0"},n.a.createElement("input",{type:"text",className:"form-control",id:"task",placeholder:"Add Task",value:this.state.tmpTaskName,onChange:this.handleTasksChange})),n.a.createElement("button",{type:"button",className:"btn btn-outline-primary col-2 btn-sm align-middle p-0",onClick:this.handleTaskAddition},n.a.createElement("h4",null,"+")))),n.a.createElement(P,{tasks:this.state.tasks})),n.a.createElement("div",{className:"modal-footer text-center"},n.a.createElement("button",{type:"button",className:"btn btn-outline-primary header","data-dismiss":"modal",onClick:this.submitAssignment},"Add"))))))}}]),a}(s.Component),F=function(e){var a=e.course;return console.log("course view change"),n.a.createElement("div",{className:"col-md-3 col-sm-12 bg-dark pt-5 text-center pt-sm-0"},a&&n.a.createElement(d,null,n.a.createElement("h1",{className:"text-primary display-4 mt-5 header"},a.name),n.a.createElement(I,{progress:a.progress}),n.a.createElement(W,{courseId:a.id,uid:e.uid})))},H=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={name:"Homework 1",tasks:["wow","hey"],progress:50,id:1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.assignment;console.log(e),this.setState({name:e.name,tasks:e.tasks,progress:e.progress,id:e.id})}},{key:"render",value:function(){return n.a.createElement("div",{className:"col-md-4 col-sm-12 mb-4"},n.a.createElement("div",{className:"card bg-dark col-12 course"},n.a.createElement("div",{className:"card-header text-primary border-bottom border-white header"},n.a.createElement("h4",null,this.state.name)),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-white"},this.state.tasks?this.state.tasks.length:0," Tasks"),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar-animated progress-bar-striped bg-primary",role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100",style:{width:this.state.progress+"%"}})))))}}]),a}(s.Component),B=(t(178),function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={assignments:[]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.course&&this.props.course.assignments&&this.setState({assignments:this.props.course.assignments})}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.course.assignments!==this.state.assignments&&this.setState({assignments:e.course.assignments})}},{key:"render",value:function(){var e=this,a=n.a.createElement("h5",null,"No Assignments");return console.log(this.state.assignments),this.state.assignments&&(a=Object.keys(this.state.assignments).map(function(a){return n.a.createElement(H,{assignment:e.state.assignments[a],key:e.state.assignments[a].id})})),n.a.createElement("div",{className:"col-md-9 col-sm-12 p-0"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row gradient mb-3"},n.a.createElement("h1",{className:"display-4 text-primary pt-5 pb-5 header"},"Assignments")),n.a.createElement("div",{className:"row"},a)))}}]),a}(s.Component)),J=(t(180),function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={course:null},t.coursesListener=function(){var e=t.props.uid?t.props.uid:null;k.database().ref("users/"+e+"/courses/"+t.props.course.id).on("value",function(e){t.setState({course:e.val()})})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.coursesListener(),this.setState({course:this.props.course})}},{key:"render",value:function(){return n.a.createElement(d,null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row course-view"},n.a.createElement(F,{course:this.state.course,uid:this.props.uid}),n.a.createElement(B,{course:this.state.course}))))}}]),a}(s.Component)),R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={selectedCourse:null,user:null,courses:null},t.courseSelectedHandler=function(e){t.setState({selectedCourse:e})},t.authListener=function(){k.auth().onAuthStateChanged(function(e){if(e){var a={uid:e.uid,displayName:e.displayName};t.setState({user:a}),k.database().ref("/users/"+e.uid).update(a),t.coursesListener()}else t.setState({user:null})})},t.coursesListener=function(){var e=t.state.user?t.state.user.uid:null;k.database().ref("users/"+e+"/courses/").on("value",function(e){t.setState({courses:e.val()})})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this,a=!!this.state.user;return n.a.createElement(D.a,{basename:"/Teachirp"},n.a.createElement("div",{className:"h-100"},n.a.createElement(T,{user:this.state.user,signOut:y}),window.location.pathname.includes("course")&&!this.state.selectedCourse&&n.a.createElement(M.a,{to:"/"}),n.a.createElement(L.a,null,n.a.createElement(O.a,{path:"/",exact:!0,render:function(){return n.a.createElement(A,{signIn:N,userSignedIn:a})}}),n.a.createElement(O.a,{path:"/dashboard",exact:!0,render:function(){return n.a.createElement(x,{courseSelected:e.courseSelectedHandler,courses:e.state.courses,user:e.state.user})}}),this.state.selectedCourse&&n.a.createElement(O.a,{path:"/course",render:function(){return n.a.createElement(J,{course:e.state.selectedCourse,uid:e.state.user.uid})}}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,a,t){e.exports=t(182)},86:function(e,a,t){},88:function(e,a,t){},92:function(e,a,t){}},[[77,2,1]]]);
//# sourceMappingURL=main.69f61b92.chunk.js.map