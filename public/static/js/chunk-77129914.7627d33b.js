(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77129914"],{2506:function(t,e,n){"use strict";n.d(e,"h",(function(){return s})),n.d(e,"l",(function(){return a})),n.d(e,"m",(function(){return c})),n.d(e,"p",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return i})),n.d(e,"g",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"r",(function(){return p})),n.d(e,"q",(function(){return l})),n.d(e,"c",(function(){return m})),n.d(e,"f",(function(){return v})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return h})),n.d(e,"s",(function(){return g}));n("99af");var r=n("b775");function s(t){return Object(r["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function a(t){return Object(r["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(r["a"])({url:"/approvals/flows/".concat(t)})}function o(t){return Object(r["a"])({url:"/approvals/setting",method:"put",data:t})}function u(t){return Object(r["a"])({url:"/user/process/instance/".concat(t)})}function i(t){return Object(r["a"])({url:"/user/process/instance/tasks/".concat(t)})}function d(t){return Object(r["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function f(t){return Object(r["a"])({url:"/user/process/definition",params:t})}function p(t){return Object(r["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function l(t){return Object(r["a"])({url:"/user/process/startProcess",data:t,method:"post"})}function m(t){return Object(r["a"])({url:"/user/process_leave/startProcess",data:t,method:"post"})}function v(t){return Object(r["a"])({url:"/user/approvals/".concat(t.id,"/reject"),method:"put",data:t})}function _(t){return Object(r["a"])({url:"/user/approvals/".concat(t),method:"delete"})}function b(t){return Object(r["a"])({url:"/user/process/instance/commit",method:"put",data:t})}function j(t){return Object(r["a"])({url:"/user/process_dimission/startProcess",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/user/process_overtime/startProcess",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}},"2de5":function(t,e,n){},"616f":function(t,e,n){t.exports=n.p+"static/img/img.0615818f.jpeg"},ca02:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"enterApproval"},[r("div",{staticClass:"contLeft"},[r("div",{staticClass:"topTit"},[r("img",{attrs:{src:n("616f"),alt:""}}),r("div",{staticClass:"info"},[r("p",{staticClass:"name"},[r("strong",[t._v(" "+t._s(t.information.user.fullName)+" ")])]),r("p",[r("span",[t._v("学历："+t._s(t.information.user.academic))]),t._v(" 毕业院校： "+t._s(t.information.user.college))]),r("p",[r("span",[t._v("入职部门： "+t._s(t.information.user.department))]),t._v(" 入职岗位："+t._s(t.information.user.post))])])]),r("div",{staticClass:"content"},t._l(t.information.body,(function(e,n){return r("p",{key:n},[r("span",[t._v(t._s(e.key)+" ")]),t._v(" "+t._s(e.val))])})),0)]),r("div",{staticClass:"contRit"},[t._m(0),r("div",{staticClass:"Items"},t._l(t.reviewHistoryDataes,(function(e,n){return r("li",{key:n},[r("div",{staticClass:"name"},[r("p",[t._v(t._s(e.opTime))]),r("p",[t._v(t._s(e.description))])]),r("div",{staticClass:"act"},[r("strong",[t._v(t._s(e.opUserName))]),1==e.state?r("span",[t._v("审批中")]):2==e.state?r("span",[t._v("审批驳回")]):3==e.state?r("span",[t._v("已撤销")]):4==e.state?r("span",[t._v("审批通过")]):t._e()])])})),0)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTit"},[n("strong",[t._v("审批记录")])])}],a=n("1da1"),c=(n("96cf"),n("2506")),o={name:"UsersTableIndex",components:{},data:function(){return{information:{},reviewHistoryDataes:{}}},created:function(){this.getInformation()},methods:{getInformation:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["information"])({id:1});case 2:n=e.sent,r=n.data,t.getReviewHistory(),t.information=r;case 6:case"end":return e.stop()}}),e)})))()},getReviewHistory:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["reviewHistory"])({id:1});case 2:n=t.sent,r=n.data,e.reviewHistoryDataes=r;case 5:case"end":return t.stop()}}),t)})))()}}},u=o,i=(n("d050"),n("2877")),d=Object(i["a"])(u,r,s,!1,null,"042f2390",null);e["default"]=d.exports},d050:function(t,e,n){"use strict";n("2de5")}}]);