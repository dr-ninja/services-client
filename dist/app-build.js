"bundle";!function(){var a=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="nav-bar.html"></require> <require from="bootstrap/css/bootstrap.css"></require> <nav-bar router.bind="router"></nav-bar> <div class="page-host"> <router-view></router-view> </div> </template>'}),a()}(),System.register("app.js",["aurelia-router","./utils","aurelia-framework","./local-storage-manager"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g,h,i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.Redirect},function(a){d=a.Utils},function(a){e=a.inject},function(a){f=a.LocalStorageManager}],execute:function(){g=function(){function a(){b(this,a)}return i(a,[{key:"configureRouter",value:function(a,b){a.title="Service Client",a.addPipelineStep("authorize",h),a.map([{route:["","login"],name:"login",moduleId:"login",nav:!0,title:"Login"},{route:"home",name:"home",moduleId:"home",nav:!0,title:"Home",settings:{auth:!0}},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users",settings:{auth:!0}},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router",settings:{auth:!0}}]),this.router=b}}]),a}(),a("App",g),h=function(){function a(a,c){b(this,g),this.utils=a,this.localStorageMgr=c}i(a,[{key:"run",value:function(a,b){if(a.getAllInstructions().some(function(a){return a.config.settings.auth===!0})){var d=this.localStorageMgr.getKey("auth")||!1;if(!d)return b.cancel(new c("login"))}return b()}}]);var g=a;return a=e(d,f)(a)||a}()}}}),System.register("blur-image.js",["aurelia-framework"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function c(a,b,c,e,f,g){if(!(isNaN(g)||1>g)){g|=0;var j,k=a.getContext("2d");try{j=k.getImageData(b,c,e,f)}catch(l){throw new Error("unable to access image data: "+l)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=j.data,L=g+g+1,M=e-1,N=f-1,O=g+1,P=O*(O+1)/2,Q=new d,R=Q;for(o=1;L>o;o++)if(R=R.next=new d,o==O)var S=R;R.next=Q;var T=null,U=null;s=r=0;var V=h[g],W=i[g];for(n=0;f>n;n++){for(B=C=D=E=t=u=v=w=0,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(o=1;O>o;o++)p=r+((o>M?M:o)<<2),t+=(R.r=F=K[p])*(J=O-o),u+=(R.g=G=K[p+1])*J,v+=(R.b=H=K[p+2])*J,w+=(R.a=I=K[p+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next;for(T=Q,U=S,m=0;e>m;m++)K[r+3]=I=w*V>>W,0!=I?(I=255/I,K[r]=(t*V>>W)*I,K[r+1]=(u*V>>W)*I,K[r+2]=(v*V>>W)*I):K[r]=K[r+1]=K[r+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=s+((p=m+g+1)<M?p:M)<<2,B+=T.r=K[p],C+=T.g=K[p+1],D+=T.b=K[p+2],E+=T.a=K[p+3],t+=B,u+=C,v+=D,w+=E,T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=4;s+=e}for(m=0;e>m;m++){for(C=D=E=B=u=v=w=t=0,r=m<<2,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(q=e,o=1;g>=o;o++)r=q+m<<2,t+=(R.r=F=K[r])*(J=O-o),u+=(R.g=G=K[r+1])*J,v+=(R.b=H=K[r+2])*J,w+=(R.a=I=K[r+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next,N>o&&(q+=e);for(r=m,T=Q,U=S,n=0;f>n;n++)p=r<<2,K[p+3]=I=w*V>>W,I>0?(I=255/I,K[p]=(t*V>>W)*I,K[p+1]=(u*V>>W)*I,K[p+2]=(v*V>>W)*I):K[p]=K[p+1]=K[p+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=m+((p=n+O)<N?p:N)*e<<2,t+=B+=T.r=K[p],u+=C+=T.g=K[p+1],v+=D+=T.b=K[p+2],w+=E+=T.a=K[p+3],T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=e}k.putImageData(j,b,c)}}function d(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function e(a,b){var d=a.width,e=a.height,f=a.getContext("2d");f.drawImage(b,0,0,d,e),c(a,0,0,d,e,j)}var f,g,h,i,j,k=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){f=a.inject}],execute:function(){g=function(){function a(a){b(this,c),this.element=a}k(a,[{key:"valueChanged",value:function(a){var b=this;a.complete?e(this.element,a):a.onload=function(){return e(b.element,a)}}}]);var c=a;return a=f(Element)(a)||a}(),a("BlurImageCustomAttribute",g),h=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],i=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],j=40}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("child-router.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section class="au-animate"> <h2>${heading}</h2> <div> <div class="col-md-2"> <ul class="well nav nav-pills nav-stacked"> <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"> <a href.bind="row.href">${row.title}</a> </li> </ul> </div> <div class="col-md-10" style="padding:0"> <router-view></router-view> </div> </div> </section> </template>'}),a()}(),System.register("child-router.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a),this.heading="Child Router"}return d(a,[{key:"configureRouter",value:function(a,b){a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b}}]),a}(),a("ChildRouter",c)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("home.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="blur-image"></require> <button class="btn" click.trigger="getAllClients()">check</button> <button class="btn" click.trigger="newClient()">new</button> <div repeat.for="client of clients"> <p>Nome: ${client.name}</p> <p>NIF: ${client.nif}</p> <p>Telefone: ${client.phone}</p> <p>Email: ${client.email}</p> </div> </template>'}),a()}(),System.register("api-client.js",["aurelia-fetch-client","aurelia-router","fetch","aurelia-framework","./utils","./local-storage-manager"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g,h,i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.HttpClient},function(a){d=a.Router},function(a){},function(a){e=a.inject},function(a){f=a.Utils},function(a){g=a.LocalStorageManager}],execute:function(){h=function(){function a(a,c,d,e){var f=this;b(this,h),this.utils=d,this.localStorageMgr=e,a.configure(function(a){a.useStandardConfiguration().withBaseUrl(f.utils.domain)}),this.http=a,this.router=c}i(a,[{key:"fetchClients",value:function(){return this.http.fetch("clients",{method:"get",credentials:"include"}).then(function(a){return a.json()},function(a){throw a})}},{key:"newClient",value:function(){var a=this;return this.http.fetch("clients",{method:"post",credentials:"include",body:JSON.stringify({name:"test",nif:210444444,phone:91121231231,email:"test@mail.pt",facebook:"facebook.com/client"})}).then(function(a){a.json().then(function(a){return a})},function(b){throw a.localStorageMgr.store("auth",!1),b})}}]);var h=a;return a=e(c,d,f,g)(a)||a}(),a("ApiClient",h)}}}),System.register("home.js",["aurelia-framework","./api-client"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.inject},function(a){d=a.ApiClient}],execute:function(){e=function(){function a(a,c){b(this,e),this.heading="Home",this.clients=[],this.api=a}f(a,[{key:"activate",value:function(){}},{key:"getAllClients",value:function(){var a=this;this.api.fetchClients().then(function(b){a.clients=b.results},function(a){})}},{key:"newClient",value:function(){this.api.newClient().then(function(a){console.log(a)})}}]);var e=a;return a=c(d)(a)||a}(),a("Home",e)}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("login.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section class="au-animate"> <form role="form" submit.delegate="submit()"> <div class="form-group"> <label for="username">First Name</label> <input value.bind="username" class="form-control" id="username" placeholder="username"> </div> <div class="form-group"> <label for="password">Last Name</label> <input type="password" value.bind="password" class="form-control" id="password" placeholder="password"> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </section> </template>'}),a()}(),System.register("utils.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c;return{setters:[],execute:function(){c=function d(){b(this,d),this.domain="//auth-services-api.herokuapp.com/",this.isAuthenticated=!1,this.username=""},a("Utils",c)}}}),System.register("local-storage-manager.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a)}return d(a,[{key:"store",value:function(a,b){if("string"==typeof a)try{if("string"==typeof b)localStorage.setItem(a,b);else try{var c=JSON.stringify(b);c&&localStorage.setItem(a,c)}catch(d){console.warn("json stringify",d,a)}}catch(e){console.warn("store",e,a)}}},{key:"getKey",value:function(a){if("string"==typeof a)try{var b=localStorage.getItem(a);if(!b)return null;try{return JSON.parse(b)}catch(c){return b}}catch(d){return console.warn("getKey",d,a),null}}},{key:"removeKey",value:function(a){if("string"==typeof a)try{localStorage.removeItem(a)}catch(b){console.warn("removeKey",b,a)}}}]),a}(),a("LocalStorageManager",c)}}}),System.register("login.js",["aurelia-fetch-client","aurelia-router","fetch","aurelia-framework","./utils","./local-storage-manager"],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d,e,f,g,h,i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[function(a){c=a.HttpClient},function(a){d=a.Router},function(a){},function(a){e=a.inject},function(a){f=a.Utils},function(a){g=a.LocalStorageManager}],execute:function(){h=function(){function a(a,c,d,e){var f=this;b(this,h),this.username="daniel",this.password="reis",this.utils=d,this.localStorageMgr=e,a.configure(function(a){a.useStandardConfiguration().withBaseUrl(f.utils.domain)}),this.http=a,this.router=c}i(a,[{key:"submit",value:function(){var a=this,b=new FormData;return b.append("username",this.username),b.append("password",this.password),this.http.fetch("login",{method:"post",credentials:"include",body:b}).then(function(b){b.json().then(function(b){a.utils.isAuthenticated=!0,a.localStorageMgr.store("auth",!0),a.utils.username=b.username,a.router.navigate("home")})}).then(function(b){a.utils.isAuthenticated=!1,a.utils.username=""})}},{key:"canDeactivate",value:function(){}},{key:"attached",value:function(){}}]);var h=a;return a=e(c,d,f,g)(a)||a}(),a("Welcome",h)}}}),System.register("main.js",["bootstrap"],function(a){"use strict";function b(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot()})}return a("configure",b),{setters:[function(a){}],execute:function(){}}}),function(){var a=System.get("@@amd-helpers").createDefine();define("nav-bar.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template bindable="router"> <nav class="navbar navbar-default navbar-fixed-top" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse"> <span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> <i class="fa fa-home"></i> <span>${router.title}</span> </a> </div> <div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> <ul class="nav navbar-nav"> <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"> <a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li class="loader" if.bind="router.isNavigating"> <i class="fa fa-spinner fa-spin fa-2x"></i> </li> </ul> </div> </nav> </template>'}),a()}(),function(){var a=System.get("@@amd-helpers").createDefine();define("styles.css!github:systemjs/plugin-text@0.0.3.js",[],function(){return'.card,.splash{text-align:center}body{margin:0}.btn{background-color:grey;color:red}.splash{margin:10% 0 0;box-sizing:border-box}.splash .message{font-size:72px;line-height:72px;text-shadow:rgba(0,0,0,.5) 0 0 15px;text-transform:uppercase;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.splash .fa-spinner{text-align:center;display:inline-block;font-size:72px;margin-top:50px}.page-host{position:absolute;left:0;right:0;top:50px;bottom:0;overflow-x:hidden;overflow-y:auto}@media print{.page-host{position:absolute;left:10px;right:0;top:50px;bottom:0;overflow-y:inherit;overflow-x:inherit}}section{margin:0 20px}.navbar-nav li.loader{margin:12px 24px 0 6px}.pictureDetail{max-width:425px}section.au-enter-active{-webkit-animation:fadeInRight 1s;animation:fadeInRight 1s}div.au-stagger{-webkit-animation-delay:50ms;animation-delay:50ms}.card-container.au-enter{opacity:0}.card-container.au-enter-active{-webkit-animation:fadeIn 2s;animation:fadeIn 2s}.card{overflow:hidden;position:relative;border:1px solid #CCC;border-radius:8px;padding:0;background-color:#337ab7;color:#88acd9;margin-bottom:32px;box-shadow:0 0 5px rgba(0,0,0,.5)}.card .content{margin-top:10px}.card .content .name{color:#fff;text-shadow:0 0 6px rgba(0,0,0,.5);font-size:18px}.card .header-bg{position:absolute;top:0;left:0;width:100%;height:70px;border-bottom:1px #FFF solid;border-radius:6px 6px 0 0}.card .avatar{position:relative;margin-top:15px;z-index:100}.card .avatar img{width:100px;height:100px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:2px solid #FFF}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}'}),a()}(),function(){var a=System.get("@@amd-helpers").createDefine();define("users.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="blur-image"></require> </template>'}),a()}(),System.register("users.js",[],function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c,d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return{setters:[],execute:function(){c=function(){function a(){b(this,a),this.heading="Clients",this.users=[]}return d(a,[{key:"activate",value:function(){}}]),a}(),a("Users",c)}}});