(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/vs.98c6db57.jpg"},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),l=a.n(r),m=a(22),u=(a(31),a(61)),i=a(62),s=a(63);a(32);function o(){return c.a.createElement("div",null,c.a.createElement(u.a,{position:"static",className:"root"},c.a.createElement(i.a,null,c.a.createElement(s.a,{variant:"h6"},"Cricket 2020"))))}var p=a(14),E=a.n(p),h=a(21),d="https://cricapi.com/api/matches?apikey=".concat("xYlLRyuJYpNbrxCySQzIEY7d6ni1");function f(){return(f=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.log("Error :",e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var v=a(68),b=a(64),y=a(65),w=a(67),x=a(66);a(38);function N(e){return c.a.createElement(b.a,{className:"card"},c.a.createElement(y.a,null,c.a.createElement("div",{className:"card-content"},c.a.createElement(x.a,{item:!0},c.a.createElement(s.a,null,e.match["team-1"])),c.a.createElement(x.a,{item:!0},c.a.createElement(s.a,null,c.a.createElement("img",{className:"vs",src:a(39),alt:"V/S"}))),c.a.createElement(x.a,{item:!0},c.a.createElement(s.a,null,e.match["team-2"])))),c.a.createElement(w.a,null,c.a.createElement("div",{className:"buttons"},c.a.createElement("div",null,!0===e.match.matchStarted?c.a.createElement("p",null,"".concat(e.match.winner_team," won the match")):c.a.createElement("p",null,"Yet to Start")),c.a.createElement("div",null,"Start Time : ","  ",new Date(e.match.dateTimeGMT).toLocaleString()))))}function S(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){return f.apply(this,arguments)})().then((function(e){return r(e.matches)})).catch((function(e){return alert("couldn't load data")}))}),[]),c.a.createElement("div",{className:"main"},c.a.createElement(v.a,{maxWidth:"sm"},c.a.createElement("div",{className:"main-container"},c.a.createElement(o,null),a.map((function(e){return"Twenty20"===e.type?c.a.createElement(N,{key:e.unique_id,match:e}):null})))))}l.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.49112992.chunk.js.map