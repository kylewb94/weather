(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(4),i=a.n(s),n=a(2),r=a.p+"static/media/loader.57e00057.gif",j=(a(9),a(0));var h=function(){var e=Object(c.useState)({}),t=Object(n.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(97223),h=Object(n.a)(i,2),d=h[0],l=h[1],b=Object(c.useState)(97223),p=Object(n.a)(b,2),o=p[0],m=p[1],O="https://api.openweathermap.org/data/2.5/weather?zip=".concat(o,"&units=imperial&appid=").concat("3aeeedbd5c68253419d88a3f75a3c261");return Object(c.useEffect)((function(){fetch(O).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[O]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{id:"head-container",children:Object(j.jsxs)("h1",{children:["How's the weather in",Object(j.jsx)("br",{}),Object(j.jsxs)("span",{id:"city",children:[" ",a.name]})]})}),Object(j.jsx)("div",{id:"form-container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(d)},children:[Object(j.jsx)("input",{type:"number",onChange:function(e){l(e.target.value)},value:d}),Object(j.jsx)("button",{children:"GO"})]})}),Object(j.jsx)("div",{id:"weather-wrapper",children:a.main?Object(j.jsxs)("div",{id:"weather-container",children:[Object(j.jsxs)("div",{className:"weather-item",children:[Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,".png"),alt:"Weather status icon",className:"weather-icon"}),Object(j.jsxs)("p",{className:"weather-value",children:[" ",a.weather[0].main]})]}),Object(j.jsxs)("div",{className:"weather-item",children:[Object(j.jsx)("i",{className:"fas fa-thermometer-half weather-icon"}),Object(j.jsxs)("p",{className:"weather-value",children:[" ",parseInt(a.main.temp),"\xb0F"]})]}),Object(j.jsxs)("div",{className:"weather-item",children:[Object(j.jsx)("i",{className:"fas fa-wind weather-icon"}),Object(j.jsxs)("p",{className:"weather-value",children:[" ",parseInt(a.wind.speed),"mph"]})]}),Object(j.jsxs)("div",{className:"weather-item",children:[Object(j.jsx)("i",{className:"far fa-compass weather-icon"}),Object(j.jsxs)("p",{className:"weather-value",children:[" ",a.name,",",Object(j.jsx)("br",{})," ",a.sys.country]})]})]}):Object(j.jsx)("img",{src:r,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}})}),Object(j.jsxs)("div",{id:"credit-container",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:"https://github.com/kylewb94",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/kylewb94/",style:{paddingLeft:"1rem"},children:Object(j.jsx)("i",{className:"fab fa-linkedin-in"})})]}),Object(j.jsxs)("p",{children:["Powered by ",Object(j.jsx)("a",{href:"https://openweathermap.org/api",children:"OpenWeatherMap"})]})]})]})};i.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.4906c1ef.chunk.js.map