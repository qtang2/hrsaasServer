(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-487c5380"],{"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),o=n("1d80"),i=Math.ceil,s=function(e){return function(t,n,s){var c,u,d=String(o(t)),l=d.length,p=void 0===s?" ":String(s),m=r(n);return m<=l||""==p?d:(c=m-l,u=a.call(p,i(c/p.length)),u.length>c&&(u=u.slice(0,c)),e?d+u:u+d)}};e.exports={start:s(!1),end:s(!0)}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),d=n("14c3"),l=n("9263"),p=n("d039"),m=[].push,f=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var s,c,u,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=new RegExp(e.source,p+"g");while(s=l.call(g,r)){if(c=g.lastIndex,c>f&&(d.push(r.slice(f,s.index)),s.length>1&&s.index<r.length&&m.apply(d,s.slice(1)),u=s[0].length,f=c,d.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return f===r.length?!u&&g.test("")||d.push(""):d.push(r.slice(f)),d.length>o?d.slice(0,o):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var l=o(e),p=String(this),m=s(l,RegExp),b=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),w=new m(g?l:"^(?:"+l.source+")",v),D=void 0===a?h:a>>>0;if(0===D)return[];if(0===p.length)return null===d(w,p)?[p]:[];var y=0,x=0,j=[];while(x<p.length){w.lastIndex=g?x:0;var O,k=d(w,g?p:p.slice(x));if(null===k||(O=f(u(w.lastIndex+(g?0:x)),p.length))===y)x=c(p,x,b);else{if(j.push(p.slice(y,x)),j.length===D)return j;for(var _=1;_<=k.length-1;_++)if(j.push(k[_]),j.length===D)return j;x=y=O}}return j.push(p.slice(y)),j}]}),!g)},"1eef":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return c}));var r=n("b775");function a(){return Object(r["a"])({url:"/company/department"})}function o(e){return Object(r["a"])({url:"/company/department/".concat(e),method:"delete"})}function i(e){return Object(r["a"])({url:"/company/department",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/company/department/".concat(e)})}function c(e){return Object(r["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"8f00":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n("b775");function a(){return Object(r["a"])({url:"/sys/user/simple"})}function o(e){return Object(r["a"])({url:"/sys/user",params:e})}function i(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function s(e){return Object(r["a"])({url:"/sys/user",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function d(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function l(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function p(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function m(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function f(e){return Object(r["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},c85a:function(e,t,n){"use strict";n("df91")},df91:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("ac1f"),n("5319"),n("4d63"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(a){if(a.pid===t){var o=r(e,a.id);o.length&&(a.children=o),n.push(a)}})),n}},fb3b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"tree-card"},[n("tree-tool",{attrs:{"tree-node":e.company,"is-root":!0},on:{addDepts:e.addDepts}}),n("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return n("tree-tool",{attrs:{"tree-node":r},on:{delDepts:e.getDepartments,addDepts:e.addDepts,editDepts:e.editDepts}})}}])})],1)],1),n("add-dept",{ref:"addDept",attrs:{"show-dialog":e.showDialog,"tree-node":e.node},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t},addDepts:e.getDepartments}})],1)},a=[],o=n("1da1"),i=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",[e._v(e._s(e.treeNode.name))]),n("el-col",{attrs:{span:7}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",[e._v(e._s(e.treeNode.manager))]),n("el-col",[n("el-dropdown",{on:{command:e.operateDepts}},[n("span",[e._v(" Operation "),n("i",{staticClass:"el-icon-arrow-down"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"add",disabled:!e.checkPermission("add-dept")}},[e._v(" Add department ")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"edit"}},[e._v(" Edit department ")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"del"}},[e._v(" Del department ")])],1)],1)],1)],1)],1)],1)}),s=[],c=n("1eef"),u={props:{treeNode:{required:!0,type:Object},isRoot:{type:Boolean,default:!1}},methods:{operateDepts:function(e){var t=this;"add"===e?this.$emit("addDepts",this.treeNode):"edit"===e?this.$emit("editDepts",this.treeNode):this.$confirm("Sure to delete this department? ").then((function(){return Object(c["b"])(t.treeNode.id)})).then((function(){t.$emit("delDepts"),t.$message("Department Deleted! ")}))}}},d=u,l=n("2877"),p=Object(l["a"])(d,i,s,!1,null,null,null),m=p.exports,f=n("ed08"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.showTitle,visible:e.showDialog},on:{close:e.btnCancel}},[n("el-form",{ref:"deptForm",attrs:{"label-width":"120px",model:e.formData,rules:e.rules}},[n("el-form-item",{attrs:{label:"Name",prop:"name"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50 chars"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"Code",prop:"code"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50 chars"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),n("el-form-item",{attrs:{label:"Manager",prop:"manager"}},[n("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50 chars"},on:{focus:e.getEmployeeSimple},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.people,(function(e){return n("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),n("el-form-item",{attrs:{label:"Introduction",prop:"introduce"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300 chars",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("Cancel")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.btnOK}},[e._v("Add")])],1)],1)],1)},g=[],b=n("5530"),v=(n("4de4"),n("b0c0"),n("8f00")),w={props:{showDialog:{type:Boolean,default:!1},treeNode:{type:Object,default:null}},data:function(){var e=this,t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])();case 2:o=t.sent,i=o.depts,s=!1,s=e.formData.id?i.filter((function(t){return t.pid===e.treeNode.pid&&t.id!==e.treeNode.id})).some((function(e){return e.name===r})):i.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===r})),s?a(new Error("Department name '".concat(r,"' aready exist"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),n=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,r,a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])();case 2:o=t.sent,i=o.depts,s=!1,s=e.formData.id?i.filter((function(t){return t.id!==e.treeNode.id})).some((function(e){return e.code===r&&r})):i.some((function(e){return e.code===r&&r})),s?a(new Error("Department code '".concat(r,"' aready exist"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return{formData:{name:"",code:"",manager:"",introduce:""},rules:{name:[{required:!0,message:"name cant be empty",trigger:"blur"},{min:1,max:50,message:"name must between 1-50 chars",trigger:"blur"},{trigger:"blur",validator:t}],code:[{required:!0,message:"code cant be empty",trigger:"blur"},{min:1,max:50,message:"code must between 1-50 chars",trigger:"blur"},{trigger:"blur",validator:n}],manager:[{required:!0,message:"manager cant be empty",trigger:"blur"},{min:1,max:50,message:"manager must between 1-50 chars",trigger:"blur"}],introduce:[{required:!0,message:"introduce cant be empty",trigger:"blur"},{min:1,max:50,message:"introduce must between 1-300 chars",trigger:"blur"}]},people:[]}},computed:{showTitle:function(){return this.formData.id?"Edit Department ":"Add New Department"}},methods:{getEmployeeSimple:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["e"])();case 2:n=t.sent,e.people=n;case 4:case"end":return t.stop()}}),t)})))()},getDepartDetail:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["c"])(e);case 2:t.formData=n.sent;case 3:case"end":return n.stop()}}),n)})))()},btnOK:function(){var e=this;this.$refs.deptForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}if(!e.formData.id){t.next=6;break}return t.next=4,Object(c["e"])(e.formData);case 4:t.next=8;break;case 6:return t.next=8,Object(c["a"])(Object(b["a"])(Object(b["a"])({},e.formData),{},{pid:e.treeNode.id}));case 8:e.$emit("addDepts"),e.$emit("update:showDialog",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnCancel:function(){this.formData={name:"",code:"",manager:"",introduce:""},this.$refs.deptForm.resetFields(),this.$emit("update:showDialog",!1)}}},D=w,y=Object(l["a"])(D,h,g,!1,null,null,null),x=y.exports,j={components:{TreeTool:m,AddDept:x},data:function(){return{company:{},departs:[],defaultProps:{label:"name",children:"children"},showDialog:!1,node:null}},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])();case 2:n=t.sent,e.company={name:n.companyName,manager:"manager",id:""},e.departs=Object(f["a"])(n.depts,"");case 5:case"end":return t.stop()}}),t)})))()},addDepts:function(e){console.log("add dptss"),this.showDialog=!0,this.node=e},editDepts:function(e){this.showDialog=!0,this.node=e,this.$refs.addDept.getDepartDetail(e.id)}}},O=j,k=(n("c85a"),Object(l["a"])(O,r,a,!1,null,"daf01a82",null));t["default"]=k.exports}}]);