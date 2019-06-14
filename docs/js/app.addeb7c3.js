(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0242":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0c45":function(e,t,n){},"2e80":function(e,t,n){},"3c8d":function(e,t,n){"use strict";var a=n("da26"),r=n.n(a);r.a},"484f":function(e,t,n){"use strict";var a=n("a2a3"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Calendar")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar"},[n("div",{staticClass:"calendar-header"},[n("Button",{attrs:{icon:"chevron_left"},on:{click:e.prevMonth}}),n("div",{staticClass:"calendar-header__title"},[e._v(e._s(e.getHeaderText(e.month)))]),n("Button",{attrs:{icon:"chevron_right"},on:{click:e.nextMonth}})],1),n("div",{staticClass:"calendar-week"},e._l(e.weekdays,function(t){return n("div",{key:t,staticClass:"calendar-weekday"},[e._v(e._s(t))])}),0),n("div",{staticClass:"calendar-month"},e._l(e.days,function(t,a){return n("div",{key:a,staticClass:"calendar-day",class:{"calendar-day--today":t.isToday,"calendar-day--disabled":t.isDisabled},on:{click:function(n){return e.addReminder(t)}}},[n("div",{staticClass:"calendar-day__date"},[e._v(e._s(t.date))]),t.reminders?n("div",{staticClass:"calendar-reminders"},e._l(t.reminders,function(t){return n("div",{key:t.id,staticClass:"reminder",style:"background-color: "+t.color+"; color: "+(e.isLightColor(t.color)?"#333":"#fff"),on:{click:function(n){return e.editReminder(t)}}},[n("span",{staticClass:"reminder-date"},[e._v(e._s(t.time))]),n("span",{staticClass:"reminder-message"},[e._v(e._s(t.message))])])}),0):e._e()])}),0),n("Modal",{ref:"modal"},[n("reminder-form",{attrs:{reminder:e.reminder},on:{submit:e.submitReminder,remove:e.removeReminder}})],1)],1)},o=[],c=(n("55dd"),n("cebc")),l=n("d225"),u=n("b0b4"),d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],f=["January","February","March","April","May","June","July","August","September","October","November","December"],m=function(){function e(t){Object(l["a"])(this,e),this._date=t?t instanceof e?new Date(t._date):new Date(t):new Date}return Object(u["a"])(e,[{key:"isToday",value:function(t){var n=+new Date(this._date.getFullYear(),this._date.getMonth()+1,this._date.getDate());t=t instanceof e?new Date(t._date):new Date(t);var a=+new Date(t.getFullYear(),t.getMonth()+1,t.getDate());return n===a}},{key:"format",value:function(e){var t=this._date.getFullYear(),n=""+(this._date.getMonth()+1),a=""+this._date.getDate();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),"YYYY-MM"===e?[t,n].join("-"):"MMMM YYYY"===e?[f[this._date.getMonth()],t].join(", "):[t,n,a].join("-")}},{key:"addDays",value:function(e){return this._date.setDate(this._date.getDate()+e),this}},{key:"addMonths",value:function(e){return this._date.setMonth(this._date.getMonth()+e),this}},{key:"month",get:function(){return this._date.getMonth()}},{key:"weekday",get:function(){return this._date.getDay()}},{key:"date",get:function(){return this._date.getDate()}},{key:"monthFirstDate",get:function(){return new Date(this._date.getFullYear(),this._date.getMonth(),1)}},{key:"monthLastDate",get:function(){return new Date(this._date.getFullYear(),this._date.getMonth()+1,0)}},{key:"daysInMonth",get:function(){return new Date(this._date.getFullYear(),this._date.getMonth()+1,0).getDate()}}]),e}();n("a481"),n("4917");function h(e){var t,n,a,r;return e.match(/^rgb/)?(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),t=e[1],n=e[2],a=e[3]):(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")),t=e>>16,n=e>>8&255,a=255&e),r=Math.sqrt(t*t*.299+n*n*.587+a*a*.114),r>127.5}var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("div",{staticClass:"form-input"},[n("text-input",{ref:"messageInput",attrs:{label:"Reminder message",max:30},on:{enter:e.submit},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e.error?n("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()],1),n("div",{staticClass:"form-input"},[n("datetime-input",{attrs:{label:"When"},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}})],1),n("div",{staticClass:"form-input"},[n("color-input",{attrs:{label:"Color"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1),n("div",{staticClass:"form-actions"},[e.id?n("Button",{attrs:{label:"Remove",danger:""},on:{click:e.remove}}):n("div"),n("Button",{attrs:{label:"Save",primary:""},on:{click:e.submit}})],1)])},v=[],b=(n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v("\n  "+e._s(e.label)+"\n  "),n("flat-pickr",{attrs:{config:e.config,placeholder:"Select date",name:"date"},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1)}),g=[],_=n("c38f"),y=n.n(_),k=(n("0952"),{props:{value:String,label:String},data:function(){return{inputValue:this.value}},watch:{inputValue:function(e){this.$emit("input",e)}}}),M={mixins:[k],components:{flatPickr:y.a},data:function(){return{config:{enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0}}}},w=M,x=(n("484f"),n("2877")),D=Object(x["a"])(w,b,g,!1,null,"38865a85",null),C=D.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("\n    "+e._s(e.label)+"\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"color"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),n("div",{staticClass:"selection"},e._l(e.selection,function(t){return n("div",{key:t,staticClass:"color",style:"background-color: "+t+";",on:{click:function(n){e.inputValue=t}}})}),0)])},Y=[],j={mixins:[k],data:function(){return{selection:["#55efc4","#81ecec","#74b9ff","#a29bfe","#ffeaa7","#fab1a0","#ff7675","#2d3436"]}}},$=j,S=(n("6f3a"),Object(x["a"])($,O,Y,!1,null,"130b8fa0",null)),R=S.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._v("\n  "+e._s(e.label)+"\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"input",attrs:{type:"text",maxlength:e.max},domProps:{value:e.inputValue},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("enter")},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})])},I=[],T=(n("c5f6"),{mixins:[k],props:{max:Number},methods:{focus:function(){this.$refs.input.focus()}}}),E=T,F=(n("8521"),Object(x["a"])(E,V,I,!1,null,"4f3c59c7",null)),P=F.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{primary:e.primary,danger:e.danger},on:{click:function(t){return e.$emit("click")}}},[e.icon?n("Icon",{attrs:{icon:e.icon}}):e._e(),e._v("\n  "+e._s(e.label)+"\n")],1)},J=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{staticClass:"material-icons"},[e._v(e._s(e.icon))])},L=[],H={props:{icon:String}},A=H,W=Object(x["a"])(A,N,L,!1,null,null,null),q=W.exports,z={components:{Icon:q},props:{icon:String,label:String,danger:Boolean,primary:Boolean}},G=z,K=(n("f635"),Object(x["a"])(G,B,J,!1,null,"6e12017a",null)),Q=K.exports,U={components:{ColorInput:R,DatetimeInput:C,TextInput:P,Button:Q},props:{reminder:Object},data:function(){var e=Object(c["a"])({id:null},this.reminder),t=e.id,n=e.color,a=e.date,r=e.time,i=e.message;return{error:null,id:t,color:n,message:i,datetime:a+" "+r}},mounted:function(){this.$refs.messageInput.focus()},methods:{submit:function(){if(this.error=null,this.message){var e=this.id,t=this.color,n=this.datetime,a=this.message,r=n.split(" "),i=r[0],s=r[1];this.$emit("submit",{id:e,message:a,color:t,date:i,time:s})}else this.error="Please fill the message field."},remove:function(){this.$emit("remove",{id:this.id})}}},X=U,Z=(n("b257"),Object(x["a"])(X,p,v,!1,null,"5bf8c239",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isVisible?n("div",{staticClass:"modal",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.hide(t)}}},[n("div",{staticClass:"modal-body"},[n("Icon",{staticClass:"icon",attrs:{icon:"close"},nativeOn:{click:function(t){return e.hide(t)}}}),e._t("default")],2),n("div",{staticClass:"modal-backdrop",on:{click:e.hide}})]):e._e()},ne=[],ae={components:{Icon:q},props:{visible:Boolean},data:function(){return{isVisible:!1}},methods:{show:function(){this.isVisible=!0},hide:function(){this.isVisible=!1}}},re=ae,ie=(n("7e23"),Object(x["a"])(re,te,ne,!1,null,"0e72bc56",null)),se=ie.exports,oe=n("2f62"),ce={components:{ReminderForm:ee,Button:Q,Modal:se},data:function(){return{today:new m,weekdays:d,reminder:null}},computed:Object(c["a"])({},Object(oe["b"])({reminders:"calendar/reminders"}),{month:function(){return this.$store.state.calendar.month},days:function(){return this.buildCalendar(this.month,this.reminders)}}),methods:Object(c["a"])({},Object(oe["c"])({nextMonth:"calendar/nextMonth",prevMonth:"calendar/prevMonth",saveReminder:"calendar/saveReminder",deleteReminder:"calendar/deleteReminder"}),{addReminder:function(e){e.isDisabled||(this.reminder={id:null,date:e._date.format("YYYY-MM-DD"),time:"12:00",message:"",color:"#333333"},this.$refs.modal.show())},editReminder:function(e){this.reminder=e,this.$refs.modal.show()},submitReminder:function(e){this.saveReminder(e),this.$refs.modal.hide()},removeReminder:function(e){this.deleteReminder(e),this.$refs.modal.hide()},isLightColor:function(e){return h(e)},getHeaderText:function(e){return(new m).addMonths(e).format("MMMM YYYY")},buildCalendar:function(e){for(var t=this,n=(new m).addMonths(e),a=n.daysInMonth,r=new m(n.monthFirstDate),i=new m(n.monthLastDate),s=[],o=r.weekday;o>0;o--)s.push({isDisabled:!0,date:new m(r).addDays(-o).date});for(var c=function(e){var n=new m(r).addDays(e);s.push({_date:n,isToday:t.today.isToday(n),date:n.date,reminders:t.reminders.filter(function(e){return e.date===n.format("YYYY-MM-DD")}).sort(function(e,t){var n=+new Date("".concat(e.date," ").concat(e.time)),a=+new Date("".concat(t.date," ").concat(t.time));return n>a?1:n<a?-1:0})})},l=0;l<a;l++)c(l);var u=6-i.weekday;s.length<=35&&(u+=7);for(var d=0;d<u;d++)s.push({isDisabled:!0,date:new m(i).addDays(d+1).date});return s}})},le=ce,ue=(n("3c8d"),Object(x["a"])(le,s,o,!1,null,"d39d2512",null)),de=ue.exports,fe={name:"app",components:{Calendar:de}},me=fe,he=(n("034f"),Object(x["a"])(me,r,i,!1,null,null,null)),pe=he.exports,ve=(n("20d6"),n("6b54"),"reminders"),be=function(){return"_"+Math.random().toString(36).substr(2,9)},ge=function(){try{return JSON.parse(localStorage.getItem(ve))||[]}catch(e){return[]}},_e=function(e){try{return localStorage.setItem(ve,JSON.stringify(e))}catch(t){return t}},ye={month:0,reminders:ge()},ke={reminders:function(e){var t=(new m).addMonths(e.month).format("YYYY-MM");return e.reminders.filter(function(e){return e.date.substr(0,7)===t})}},Me={nextMonth:function(e){e.month++},prevMonth:function(e){e.month--},deleteReminder:function(e,t){var n=e.reminders.findIndex(function(e){return e.id===t.id});-1!==n&&(e.reminders.splice(n,1),_e(e.reminders))},saveReminder:function(e,t){var n=t.id,a=t.date,r=t.time,i=t.color,s=t.message;if(t.id){var o=e.reminders.findIndex(function(e){return e.id===t.id});-1!==o&&Object.assign(e.reminders[o],{id:n,date:a,time:r,color:i,message:s})}else e.reminders.push({id:be(),date:a,time:r,color:i,message:s});_e(e.reminders)}},we={},xe={namespaced:!0,state:ye,getters:ke,mutations:Me,actions:we};a["a"].use(oe["a"]);var De=new oe["a"].Store({modules:{calendar:xe}});a["a"].config.productionTip=!1,new a["a"]({store:De,render:function(e){return e(pe)}}).$mount("#app")},6023:function(e,t,n){},"64a9":function(e,t,n){},"6f3a":function(e,t,n){"use strict";var a=n("0c45"),r=n.n(a);r.a},"7e23":function(e,t,n){"use strict";var a=n("e261"),r=n.n(a);r.a},8521:function(e,t,n){"use strict";var a=n("2e80"),r=n.n(a);r.a},a2a3:function(e,t,n){},b257:function(e,t,n){"use strict";var a=n("6023"),r=n.n(a);r.a},da26:function(e,t,n){},e261:function(e,t,n){},f635:function(e,t,n){"use strict";var a=n("0242"),r=n.n(a);r.a}});
//# sourceMappingURL=app.addeb7c3.js.map