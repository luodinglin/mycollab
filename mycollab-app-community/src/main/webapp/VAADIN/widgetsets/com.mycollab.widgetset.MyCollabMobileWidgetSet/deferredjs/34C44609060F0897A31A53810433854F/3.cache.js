$wnd.com_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback3("function VQc(){}\nfunction XQc(){}\nfunction ZQc(){}\nfunction ord(a){this.a=a}\nfunction lrd(a,b){this.a=a;dWc.call(this,b)}\nfunction LXc(a,b){this.g=a;gyb.call(this);fyb(this,b)}\nfunction wXc(a,b,c){var d;d=oXc(a,b);!!d&&IXc(d,c)}\nfunction mXc(a,b){var c;c=new LXc(a,b);KXc(c);bub(a,c,a.a)}\nfunction pXc(a,b){var c;c=oXc(a,b);if(c){return c.b}return null}\nfunction qXc(a,b){var c;c=oXc(a,b);if(c){return ok((Dpb(),c.bc),sze)}return 0}\nfunction rXc(a,b){var c;c=oXc(a,b);if(c){return ok((Dpb(),c.bc),tze)}return 0}\nfunction tXc(a,b){var c;c=oXc(a,b);if(c){!!c.b&&Jtb(c.b);Jtb(c);return mub(a,c)}return mub(a,b)}\nfunction uXc(a,b){Gk((Dpb(),a.bc),b);yXc(a,b);utb(a.bc,HVe,true)}\nfunction HXc(a,b){if(b){a.b=b}else if(a.b){Jtb(a.b);a.b=null}}\nfunction _qd(a,b){a.indexOf(b)!=-1||(a=a+b+':0.0px;');return a}\nfunction l8d(){N0b.call(this);this.I=P$e;this.a=new dne}\nfunction crd(){F_b.call(this);this.b=new lrd(this,this);this.a=new ord(this)}\nfunction ard(a,b){return Wbc(a.N,(!a.L&&(a.L=qJb(a)),NC(a.L,244)),b)}\nfunction RQc(c){var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Hk(zfb,O$e,d)}\nfunction sXc(a){var b,c,d;for(c=new SEb(a.Wb);c.b<c.c.c;){b=REb(c);if(RC(b,286)){d=NC(b,286);JXc(d)}}}\nfunction oXc(a,b){var c,d,e;for(d=new SEb(a.Wb);d.b<d.c.c;){c=REb(d);if(RC(c,286)){e=NC(c,286);if(e.Bb==b){return e}}}return null}\nfunction nXc(a){var b,c,d;for(c=new SEb(a.Wb);c.b<c.c.c;){b=REb(c);if(RC(b,286)){d=NC(b,286);if(!d.Bb){!!d.b&&Jtb(d.b);Jtb(d);mub(a,d);continue}}}}\nfunction vXc(a,b,c){var d;d=oXc(a,b);if(d){if(c){LEb(a.Wb,c)!=-1||bub(a,c,a.a);HXc(d,c);ncc(c);JXc(d)}else !!d.b&&HXc(d,null)}}\nfunction xXc(a,b,c){var d;d=oXc(a,b);if(!d){throw new cfe('No wrapper for widget found, has the widget been added to the layout?')}d.d=c;KXc(d)}\nfunction KXc(a){var b,c,d,e;ctb(a,otb(Tsb(a.g))+'-wrapper');if(a.d!=null){for(c=a.d,d=0,e=c.length;d<e;++d){b=c[d];dtb(a,otb((Dpb(),a.bc))+'-'+b,true)}}}\nfunction JXc(a){var b;if(a.b){b=Qsb(a.b).style;To(b,Zve,awe);b[Bze]=(((Dpb(),a.bc).offsetLeft||0)|0)+(Bs(),Lwe);b[Cze]=((a.bc.offsetTop||0)|0)-gcc(a.b)+Lwe}}\nfunction gcc(a){var b,c;c=0;if(a.i){b=Rec(Qsb(a.i));b>0&&(c=b)}if(a.e){b=Rec(a.e);b>c&&(c=b)}if(a.o){b=Rec(a.o);b>c&&(c=b)}if(a.g){b=Rec(a.g);b>c&&(c=b)}return c}\nfunction yXc(a,b){var c,d,e;wtb((Dpb(),a.bc),b);Gk(a.a,otb(a.bc)+'-canvas');Gk(a.a,otb(a.bc)+'-margin');for(d=new SEb(a.Wb);d.b<d.c.c;){c=REb(d);if(RC(c,286)){e=NC(c,286);KXc(e)}}}\nfunction zXc(){nub.call(this);this.a=(Dpb(),Om($doc));Zsb(this,Om($doc));this.b=Om($doc);To(this.a.style,Zve,_Je);To(this.a.style,xAe,lwe);Nj(this.b,this.a);Nj(this.bc,this.b);uXc(this,P$e)}\nfunction brd(a,b){var c,d,e;d=PC((!a.U&&(a.U=IIb(a)),NC(NC(a.U,6),521)).a.Ro(b.sg()));d==null&&(d='');e=b.Jg().L;if(e!=null&&bge(e,'%')){d=_qd(d,Bze);d=_qd(d,eAe)}c=b.Jg().F;if(c!=null&&bge(c,'%')){d=_qd(d,Cze);d=_qd(d,fAe)}wXc((!a.L&&(a.L=qJb(a)),NC(a.L,244)),b.Lg(),d)}\nfunction IXc(a,b){var c,d,e,f;if(a.c==null||!cge(a.c,b)){a.c=b;a.i=a.f=a.a=a.e=a.j=null;if(!cge(a.c,'')){e=mge(a.c,';',0);for(c=0;c<e.length;c++){d=mge(e[c],':',0);cge(d[0],Bze)?(a.e=d[1]):cge(d[0],Cze)?(a.i=d[1]):cge(d[0],eAe)?(a.f=d[1]):cge(d[0],fAe)?(a.a=d[1]):cge(d[0],'z-index')&&(a.j=d[1])}}f=(Dpb(),a.bc).style;a.j!=null?To(f,twe,a.j):To(f,twe,'');To(f,Cze,a.i);To(f,Bze,a.e);To(f,eAe,a.f);To(f,fAe,a.a)}JXc(a)}\nvar O$e='connectorToCssPosition',P$e='v-absolutelayout',Q$e='com.vaadin.client.ui.absolutelayout';ylb(1752,1,VLe);_.vc=function UQc(){oTc(this.b,zfb,mfb);eTc(this.b,gQe,k7);gTc(this.b,R2,DQe,new VQc);gTc(this.b,k7,DQe,new XQc);gTc(this.b,zfb,DQe,new ZQc);mTc(this.b,k7,oBe,new YSc(R2));mTc(this.b,k7,lBe,new YSc(zfb));RQc(this.b);kTc(this.b,zfb,O$e,new ZSc(lSe,GC(CC(O1,1),EQe,4,0,[new YSc(Eib),new YSc(Eib)])));cTc(this.b,k7,new OSc(c2,JQe,GC(CC(Eib,1),Sue,2,4,[LTe])));Vwc((!Owc&&(Owc=new _wc),Owc),this.a.d)};ylb(1754,1,sUe,VQc);_.zk=function WQc(a,b){return new zXc};var R0=ree(IOe,'ConnectorBundleLoaderImpl/3/1/1',1754);ylb(1755,1,sUe,XQc);_.zk=function YQc(a,b){return new crd};var S0=ree(IOe,'ConnectorBundleLoaderImpl/3/1/2',1755);ylb(1756,1,sUe,ZQc);_.zk=function $Qc(a,b){return new l8d};var T0=ree(IOe,'ConnectorBundleLoaderImpl/3/1/3',1756);ylb(244,210,{15:1,12:1,11:1,13:1,26:1,33:1,16:1,27:1,10:1,9:1,244:1,21:1},zXc);_.ef=function AXc(a){mXc(this,a)};_.jf=function BXc(a){var b,c,d;for(b=0,c=0;b<this.Wb.c;b++){d=KEb(this.Wb,b);if(RC(d,286)){if(c==a){return d}else{++c}}}return null};_.kf=function CXc(){var a,b;a=0;for(b=0;b<this.Wb.c;b++){RC(KEb(this.Wb,b),286)&&++a}return a};_.lf=function DXc(a){var b,c,d;for(b=0,c=0;b<this.Wb.c;b++){d=KEb(this.Wb,b);if(RC(d,286)){if(a==d){return c}else{++c}}}return -1};_.gf=function EXc(a){return tXc(this,a)};_.Te=function FXc(a){uXc(this,a)};_.Ue=function GXc(a){yXc(this,a)};var R2=ree(nBe,'VAbsoluteLayout',244);ylb(286,49,{15:1,12:1,11:1,113:1,112:1,13:1,26:1,33:1,16:1,27:1,49:1,10:1,9:1,286:1,21:1},LXc);var Q2=ree(nBe,'VAbsoluteLayout/AbsoluteWrapper',286);ylb(1753,313,{7:1,17:1,127:1,449:1,99:1,25:1,30:1,34:1,31:1,152:1,32:1,3:1},crd);_.Jg=function drd(){return !this.U&&(this.U=IIb(this)),NC(NC(this.U,6),521)};_.vg=function erd(){return !this.U&&(this.U=IIb(this)),NC(NC(this.U,6),521)};_.Lg=function frd(){return !this.L&&(this.L=qJb(this)),NC(this.L,244)};_.bj=function grd(){var a,b;sXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)));for(b=aKb(this).nf();b.If();){a=NC(b.Jf(),17);a.Qg()&&m9b(this.N.k,a,rXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)),a.Lg()))}};_.cj=function hrd(){var a,b;sXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)));for(b=aKb(this).nf();b.If();){a=NC(b.Jf(),17);a.Pg()&&j9b(this.N.k,a,qXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)),a.Lg()))}};_.dh=function ird(a){var b,c,d,e;for(c=aKb(this).nf();c.If();){b=NC(c.Jf(),17);if(!oXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)),b.Lg())){mXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)),b.Lg());b.ng(this.a);brd(this,b)}}for(e=a.a.nf();e.If();){d=NC(e.Jf(),17);if(d.tg()!=this){tXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)),d.Lg());d.Bg(this.a)}}nXc((!this.L&&(this.L=qJb(this)),NC(this.L,244)))};_.zg=function jrd(a){var b,c;tJb(this,a);uUc(this.b);for(c=aKb(this).nf();c.If();){b=NC(c.Jf(),17);brd(this,b)}};_.eh=function krd(a){var b,c,d;b=(!this.L&&(this.L=qJb(this)),NC(this.L,244));d=scc(a.Jg());c=pXc(b,a.Lg());if(d){!c&&(c=new qcc(a,this.N));vXc(b,a.Lg(),c)}else !!c&&vXc(b,a.Lg(),null)};var k7=ree(Q$e,WUe,1753);ylb(2172,475,cVe,lrd);_.Uk=function mrd(a){return ard(this.a,a)};_.Vk=function nrd(){return NC(OIb(this.a,yfb),407)};var i7=ree(Q$e,'AbsoluteLayoutConnector/1',2172);ylb(2173,1,eMe,ord);_.zg=function prd(a){var b,c;b=NC(a.d,17);c=b.Jg().K;!c?xXc(NC(rJb(this.a),244),b.Lg(),null):xXc(NC(rJb(this.a),244),b.Lg(),NC(c.Mo(DC(Eib,Sue,2,c.Ko(),4,1)),18))};var j7=ree(Q$e,'AbsoluteLayoutConnector/2',2173);ylb(521,119,{6:1,41:1,119:1,521:1,3:1},l8d);var zfb=ree(PYe,'AbsoluteLayoutState',521);Gue(Uh)(3);\n//# sourceURL=com.mycollab.widgetset.MyCollabMobileWidgetSet-3.js\n")