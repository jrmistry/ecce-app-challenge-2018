// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/html jimu/dijit/Popup jimu/dijit/LoadingIndicator ./FilterConfig".split(" "),function(b,c,a,d,e,f,g){return b([e,c],{width:1024,height:600,titleLabel:"",filterList:null,streamLayer:null,nls:null,constructor:function(){this.inherited(arguments);this.nls=a.clone(window.jimuNls.common);this.buttons=[{label:this.nls.ok,onClick:a.hitch(this,this._accept)},{label:this.nls.cancel,onClick:a.hitch(this,this._reject)}]},postCreate:function(){this.inherited(arguments);
d.addClass(this.domNode,"stream-filter-popup");this._initLoading();this._initFilter()},_initFilter:function(){this.filter=new g({streamLayer:this.streamLayer,config:this.filterList,nls:this.nls});this.filter.placeAt(this.contentContainerNode)},_reject:function(){this.emit("cancel")},_accept:function(){var a=this.filter.getConfig();a?this.emit("ok",a):this.emit(null)},_initLoading:function(){this.loading=new f({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()}})});