"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[9127],{59127:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(73396);const a=e=>((0,r.dD)("data-v-5010464c"),e=e(),(0,r.Cn)(),e),i={class:"container"},o=a((()=>(0,r._)("canvas",{id:"c"},null,-1))),s=[o];function c(e,t,n,a,o,c){return(0,r.wg)(),(0,r.iD)("div",i,s)}var l=n(11114),d=n(84543);class h{constructor(e=512,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const r=n.getContext("2d");r.fillStyle="rgb(127,127,255)",r.fillRect(0,0,e,t);for(let a=0;a<4e3;a++){const n=Math.random()*e,a=Math.random()*t,i=3*Math.random()+3;let o=2*Math.random()-1,s=2*Math.random()-1,c=1.5;const l=Math.sqrt(o*o+s*s+c*c);o/=l,s/=l,c/=l,r.fillStyle="rgb("+(127*o+127)+","+(127*s+127)+","+255*c+")",r.beginPath(),r.arc(n,a,i,0,2*Math.PI),r.fill()}return n}}n(63408),n(14590);class u extends l.yxD{constructor(e){super(e),this.type=l.cLu}parse(e){const t=-1,n=1,r=2,a=3,i=4,o=function(e,o){switch(e){case n:console.error("THREE.RGBELoader Read Error: "+(o||""));break;case r:console.error("THREE.RGBELoader Write Error: "+(o||""));break;case a:console.error("THREE.RGBELoader Bad File Format: "+(o||""));break;default:case i:console.error("THREE.RGBELoader: Error: "+(o||""))}return t},s=1,c=2,d=4,h="\n",u=function(e,t,n){const r=128;t=t||1024;let a=e.pos,i=-1,o=0,s="",c=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+r)));while(0>(i=c.indexOf(h))&&o<t&&a<e.byteLength)s+=c,o+=c.length,a+=r,c+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+r)));return-1<i&&(!1!==n&&(e.pos+=o+i+1),s+c.slice(0,i))},m=function(e){const t=/^#\?(\S+)/,r=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,l=/^\s*FORMAT=(\S+)\s*$/,h=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,m={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let p,f;if(e.pos>=e.byteLength||!(p=u(e)))return o(n,"no header found");if(!(f=p.match(t)))return o(a,"bad initial token");m.valid|=s,m.programtype=f[1],m.string+=p+"\n";while(1){if(p=u(e),!1===p)break;if(m.string+=p+"\n","#"!==p.charAt(0)){if((f=p.match(r))&&(m.gamma=parseFloat(f[1],10)),(f=p.match(i))&&(m.exposure=parseFloat(f[1],10)),(f=p.match(l))&&(m.valid|=c,m.format=f[1]),(f=p.match(h))&&(m.valid|=d,m.height=parseInt(f[1],10),m.width=parseInt(f[2],10)),m.valid&c&&m.valid&d)break}else m.comments+=p+"\n"}return m.valid&c?m.valid&d?m:o(a,"missing image size specifier"):o(a,"missing format specifier")},p=function(e,t,r){const s=t;if(s<8||s>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(s!==(e[2]<<8|e[3]))return o(a,"wrong scanline width");const c=new Uint8Array(4*t*r);if(!c.length)return o(i,"unable to allocate buffer space");let l=0,d=0;const h=4*s,u=new Uint8Array(4),m=new Uint8Array(h);let p=r;while(p>0&&d<e.byteLength){if(d+4>e.byteLength)return o(n);if(u[0]=e[d++],u[1]=e[d++],u[2]=e[d++],u[3]=e[d++],2!=u[0]||2!=u[1]||(u[2]<<8|u[3])!=s)return o(a,"bad rgbe scanline format");let t,r=0;while(r<h&&d<e.byteLength){t=e[d++];const n=t>128;if(n&&(t-=128),0===t||r+t>h)return o(a,"bad scanline data");if(n){const n=e[d++];for(let e=0;e<t;e++)m[r++]=n}else m.set(e.subarray(d,d+t),r),r+=t,d+=t}const i=s;for(let e=0;e<i;e++){let t=0;c[l]=m[e+t],t+=s,c[l+1]=m[e+t],t+=s,c[l+2]=m[e+t],t+=s,c[l+3]=m[e+t],l+=4}p--}return c},f=function(e,t,n,r){const a=e[t+3],i=Math.pow(2,a-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},g=function(e,t,n,r){const a=e[t+3],i=Math.pow(2,a-128)/255;n[r+0]=l.A5E.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=l.A5E.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=l.A5E.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=l.A5E.toHalfFloat(1)},w=new Uint8Array(e);w.pos=0;const b=m(w);if(t!==b){const e=b.width,n=b.height,r=p(w.subarray(w.pos),e,n);if(t!==r){let t,a,i,o;switch(this.type){case l.VzW:o=r.length/4;const e=new Float32Array(4*o);for(let t=0;t<o;t++)f(r,4*t,e,4*t);t=e,i=l.VzW;break;case l.cLu:o=r.length/4;const n=new Uint16Array(4*o);for(let t=0;t<o;t++)g(r,4*t,n,4*t);t=n,i=l.cLu;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:e,height:n,data:t,header:b.string,gamma:b.gamma,exposure:b.exposure,format:a,type:i}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function a(e,n){switch(e.type){case l.VzW:e.encoding=l.rnI,e.minFilter=l.wem,e.magFilter=l.wem,e.generateMipmaps=!1,e.flipY=!0;break;case l.cLu:e.encoding=l.rnI,e.minFilter=l.wem,e.magFilter=l.wem,e.generateMipmaps=!1,e.flipY=!0;break}t&&t(e,n)}return super.load(e,a,n,r)}}var m={mounted(){this.init()},methods:{init(){const e=document.querySelector("#c"),t=new l.xsS,n=new l.cPb(45,e.clientWidth/e.clientHeight,.1,1e4);n.position.z=500,t.add(n);const r=new l.CP7({canvas:e,antialias:!0});r.setSize(e.innerWidth,e.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.outputEncoding=l.knz;const a=new d.z(n,r.domElement),i=new l.ROQ(new h);i.wrapS=l.rpg,i.wrapT=l.rpg,i.repeat.x=10,i.repeat.y=6;const o=new l.anP(r);function s(){if(c(r)){const e=r.domElement;n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}a.update(),r.render(t,n),requestAnimationFrame(s)}function c(e){const t=e.domElement,n=t.clientWidth,r=t.clientHeight,a=t.width!==n||t.height!==r;return a&&e.setSize(n,r,!1),a}(new u).setPath("./SampleData/").load("garden_nook_2k.hdr",(function(e){const n=o.fromCubemap(e),r={clearcoat:1,cleacoatRoughness:.1,metalness:.9,roughness:.5,color:8657098,normalMap:i,normalScale:new l.FM8(.15,.15),envMap:n.texture};e.mapping=l.dSO,t.background=e;const a=new l.xo$(100,64,64),s=new l.EJi(r),c=new l.Kj0(a,s);t.add(c)})),s()}}},p=n(40089);const f=(0,p.Z)(m,[["render",c],["__scopeId","data-v-5010464c"]]);var g=f}}]);
//# sourceMappingURL=9127.92260172.js.map