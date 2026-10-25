"use strict";var Vitrea3D=(()=>{var Ea=Object.defineProperty;var Wu=Object.getOwnPropertyDescriptor;var Xu=Object.getOwnPropertyNames;var qu=Object.prototype.hasOwnProperty;var Yu=(i,e)=>{for(var t in e)Ea(i,t,{get:e[t],enumerable:!0})},Ku=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Xu(e))!qu.call(i,r)&&r!==t&&Ea(i,r,{get:()=>e[r],enumerable:!(n=Wu(e,r))||n.enumerable});return i};var Zu=i=>Ku(Ea({},"__esModule",{value:!0}),i);var Lx={};Yu(Lx,{View3D:()=>Sa,createView3D:()=>Px});var Yc=0,rl=1,Kc=2;var Ei=1,Zc=2,or=3,si=0,Gt=1,Sn=2,wn=0,oi=1,ar=2,sl=3,ol=4,$c=5;var Ai=100,Jc=101,jc=102,Qc=103,eh=104,th=200,nh=201,ih=202,rh=203,al=204,ll=205,sh=206,oh=207,ah=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,ks=0,Ds=1,Ns=2,$i=3,Fs=4,Os=5,Bs=6,zs=7,uo=0,ph=1,mh=2,ln=0,cl=1,hl=2,ul=3,dl=4,fl=5,pl=6,ml=7;var gl=300,ai=301,Ri=302,fo=303,po=304,Yr=306,Gs=1e3,gn=1001,Hs=1002,At=1003,gh=1004;var Kr=1005;var ht=1006,mo=1007;var li=1008;var kt=1009,xl=1010,yl=1011,lr=1012,go=1013,cn=1014,Qt=1015,hn=1016,xo=1017,yo=1018,cr=1020,_l=35902,bl=35899,vl=1021,Ml=1022,en=1023,xn=1026,ci=1027,hr=1028,_o=1029,hi=1030,bo=1031;var vo=1033,Zr=33776,$r=33777,Jr=33778,jr=33779,Mo=35840,So=35841,wo=35842,To=35843,Eo=36196,Ao=37492,Ro=37496,Co=37488,Io=37489,Qr=37490,Po=37491,Lo=37808,Uo=37809,ko=37810,Do=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,Go=37817,Ho=37818,Vo=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,Ko=36495,Zo=36283,$o=36284,es=36285,Jo=36286;var Ar=2300,Vs=2301,Ls=2302,$a=2303,Ja=2400,ja=2401,Qa=2402;var xh=3200;var jo=0,yh=1,Gn="",Yt="srgb",vi="srgb-linear",Rr="linear",je="srgb";var Us=7680;var _h=519,bh=512,vh=513,Mh=514,Qo=515,Sh=516,wh=517,ea=518,Th=519,Eh=35044,Sl=35048;var wl="300 es",an=2e3,Ji=2001;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){let i=Cr("canvas");return i.style.display="block",i}var wc={},ji=null;function Tl(...i){let e="THREE."+i.shift();ji?ji("log",e,...i):console.log(e,...i)}function Rh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Rh(i);let e="THREE."+i.shift();if(ji)ji("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Rh(i);let e="THREE."+i.shift();if(ji)ji("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bi(...i){let e=i.join(" ");e in wc||(wc[e]=!0,Pe(...i))}function Ch(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Ih={[ks]:Ds,[Ns]:Bs,[Fs]:zs,[$i]:Os,[Ds]:ks,[Bs]:Ns,[zs]:Fs,[Os]:$i},yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Aa=Math.PI/180,Ws=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function Ra(i,e,t){return(1-t)*i+t*e}function br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ne=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],x=s[a+1],g=s[a+2],d=s[a+3];if(f!==d||c!==u||l!==x||h!==g){let m=c*u+l*x+h*g+f*d;m<0&&(u=-u,x=-x,g=-g,d=-d,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+u*o,l=l*p+x*o,h=h*p+g*o,f=f*p+d*o}else{c=c*p+u*o,l=l*p+x*o,h=h*p+g*o,f=f*p+d*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],u=s[a+1],x=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*x-l*u,e[t+1]=c*g+h*u+l*f-o*x,e[t+2]=l*g+h*x+o*u-c*f,e[t+3]=h*g-o*f-c*u-l*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),u=c(n/2),x=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*x*g,this._y=l*x*f-u*h*g,this._z=l*h*g+u*x*f,this._w=l*h*f-u*x*g;break;case"YXZ":this._x=u*h*f+l*x*g,this._y=l*x*f-u*h*g,this._z=l*h*g-u*x*f,this._w=l*h*f+u*x*g;break;case"ZXY":this._x=u*h*f-l*x*g,this._y=l*x*f+u*h*g,this._z=l*h*g+u*x*f,this._w=l*h*f-u*x*g;break;case"ZYX":this._x=u*h*f-l*x*g,this._y=l*x*f+u*h*g,this._z=l*h*g-u*x*f,this._w=l*h*f+u*x*g;break;case"YZX":this._x=u*h*f+l*x*g,this._y=l*x*f+u*h*g,this._z=l*h*g-u*x*f,this._w=l*h*f-u*x*g;break;case"XZY":this._x=u*h*f-l*x*g,this._y=l*x*f-u*h*g,this._z=l*h*g+u*x*f,this._w=l*h*f+u*x*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let x=.5/Math.sqrt(u+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-l)*x,this._z=(a-r)*x}else if(n>o&&n>f){let x=2*Math.sqrt(1+n-o-f);this._w=(h-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+l)/x}else if(o>f){let x=2*Math.sqrt(1+o-n-f);this._w=(s-l)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+h)/x}else{let x=2*Math.sqrt(1+f-n-o);this._w=(a-r)/x,this._x=(s+l)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ca=new D,Tc=new Ut,Ue=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],x=n[5],g=n[8],d=r[0],m=r[3],p=r[6],v=r[1],E=r[4],b=r[7],S=r[2],w=r[5],R=r[8];return s[0]=a*d+o*v+c*S,s[3]=a*m+o*E+c*w,s[6]=a*p+o*b+c*R,s[1]=l*d+h*v+f*S,s[4]=l*m+h*E+f*w,s[7]=l*p+h*b+f*R,s[2]=u*d+x*v+g*S,s[5]=u*m+x*E+g*w,s[8]=u*p+x*b+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*s,x=l*s-a*c,g=t*f+n*u+r*x;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/g;return e[0]=f*d,e[1]=(r*l-h*n)*d,e[2]=(o*n-r*a)*d,e[3]=u*d,e[4]=(h*t-r*c)*d,e[5]=(r*s-o*t)*d,e[6]=x*d,e[7]=(n*c-l*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Ue,Ec=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){let i={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?Rr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vi]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var ze=Qu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,Xs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Cr("canvas")),Di.width=e.width,Di.height=e.height;let r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ed=0,Qi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pa(r[a].image)):s.push(Pa(r[a]))}else s=Pa(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var td=0,La=new D,Ot=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,r=gn,s=ht,a=li,o=en,c=kt,l=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ts(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=gl;Ot.DEFAULT_ANISOTROPY=1;var at=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],x=c[5],g=c[9],d=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(l+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(x+1)/2,S=(p+1)/2,w=(h+u)/4,R=(f+d)/4,_=(g+m)/4;return E>b&&E>S?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=R/n):b>S?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=w/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=R/s,r=_/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-d)/v,this.z=(u-h)/v,this.w=Math.acos((l+x+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qs=class extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Ot(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends qs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ys=class extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ke=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,h,f,u,x,g,d,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,u,x,g,d,m)}set(e,t,n,r,s,a,o,c,l,h,f,u,x,g,d,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=x,p[7]=g,p[11]=d,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=a*h,x=a*f,g=o*h,d=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=x+g*l,t[5]=u-d*l,t[9]=-o*c,t[2]=d-u*l,t[6]=g+x*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,x=c*f,g=l*h,d=l*f;t[0]=u+d*o,t[4]=g*o-x,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=x*o-g,t[6]=d+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,x=c*f,g=l*h,d=l*f;t[0]=u-d*o,t[4]=-a*f,t[8]=g+x*o,t[1]=x+g*o,t[5]=a*h,t[9]=d-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,x=a*f,g=o*h,d=o*f;t[0]=c*h,t[4]=g*l-x,t[8]=u*l+d,t[1]=c*f,t[5]=d*l+u,t[9]=x*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,x=a*l,g=o*c,d=o*l;t[0]=c*h,t[4]=d-u*f,t[8]=g*f+x,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=x*f+g,t[10]=u-d*f}else if(e.order==="XZY"){let u=a*c,x=a*l,g=o*c,d=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+d,t[5]=a*h,t[9]=x*f-g,t[2]=g*f-x,t[6]=o*h,t[10]=d*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){let r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Yn.crossVectors(n,Xt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Yn.crossVectors(n,Xt)),Yn.normalize(),ds.crossVectors(Xt,Yn),r[0]=Yn.x,r[4]=ds.x,r[8]=Xt.x,r[1]=Yn.y,r[5]=ds.y,r[9]=Xt.y,r[2]=Yn.z,r[6]=ds.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],x=n[13],g=n[2],d=n[6],m=n[10],p=n[14],v=n[3],E=n[7],b=n[11],S=n[15],w=r[0],R=r[4],_=r[8],T=r[12],I=r[1],k=r[5],N=r[9],B=r[13],C=r[2],O=r[6],W=r[10],X=r[14],ne=r[3],Y=r[7],Q=r[11],te=r[15];return s[0]=a*w+o*I+c*C+l*ne,s[4]=a*R+o*k+c*O+l*Y,s[8]=a*_+o*N+c*W+l*Q,s[12]=a*T+o*B+c*X+l*te,s[1]=h*w+f*I+u*C+x*ne,s[5]=h*R+f*k+u*O+x*Y,s[9]=h*_+f*N+u*W+x*Q,s[13]=h*T+f*B+u*X+x*te,s[2]=g*w+d*I+m*C+p*ne,s[6]=g*R+d*k+m*O+p*Y,s[10]=g*_+d*N+m*W+p*Q,s[14]=g*T+d*B+m*X+p*te,s[3]=v*w+E*I+b*C+S*ne,s[7]=v*R+E*k+b*O+S*Y,s[11]=v*_+E*N+b*W+S*Q,s[15]=v*T+E*B+b*X+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],x=e[14],g=e[3],d=e[7],m=e[11],p=e[15],v=c*x-l*u,E=o*x-l*f,b=o*u-c*f,S=a*x-l*h,w=a*u-c*h,R=a*f-o*h;return t*(d*v-m*E+p*b)-n*(g*v-m*S+p*w)+r*(g*E-d*S+p*R)-s*(g*b-d*w+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],x=e[11],g=e[12],d=e[13],m=e[14],p=e[15],v=t*o-n*a,E=t*c-r*a,b=t*l-s*a,S=n*c-r*o,w=n*l-s*o,R=r*l-s*c,_=h*d-f*g,T=h*m-u*g,I=h*p-x*g,k=f*m-u*d,N=f*p-x*d,B=u*p-x*m,C=v*B-E*N+b*k+S*I-w*T+R*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=(o*B-c*N+l*k)*O,e[1]=(r*N-n*B-s*k)*O,e[2]=(d*R-m*w+p*S)*O,e[3]=(u*w-f*R-x*S)*O,e[4]=(c*I-a*B-l*T)*O,e[5]=(t*B-r*I+s*T)*O,e[6]=(m*b-g*R-p*E)*O,e[7]=(h*R-u*b+x*E)*O,e[8]=(a*N-o*I+l*_)*O,e[9]=(n*I-t*N-s*_)*O,e[10]=(g*w-d*b+p*v)*O,e[11]=(f*b-h*w-x*v)*O,e[12]=(o*T-a*k-c*_)*O,e[13]=(t*k-n*T+r*_)*O,e[14]=(d*E-g*S-m*v)*O,e[15]=(h*S-f*E+u*v)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,u=s*l,x=s*h,g=s*f,d=a*h,m=a*f,p=o*f,v=c*l,E=c*h,b=c*f,S=n.x,w=n.y,R=n.z;return r[0]=(1-(d+p))*S,r[1]=(x+b)*S,r[2]=(g-E)*S,r[3]=0,r[4]=(x-b)*w,r[5]=(1-(u+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+E)*R,r[9]=(m-v)*R,r[10]=(1-(u+d))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ni.set(r[0],r[1],r[2]).length(),o=Ni.set(r[4],r[5],r[6]).length(),c=Ni.set(r[8],r[9],r[10]).length();s<0&&(a=-a),nn.copy(this);let l=1/a,h=1/o,f=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=an,c=!1){let l=this.elements,h=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),x=(n+r)/(n-r),g,d;if(c)g=s/(a-s),d=a*s/(a-s);else if(o===an)g=-(a+s)/(a-s),d=-2*a*s/(a-s);else if(o===Ji)g=-a/(a-s),d=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=x,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),x=-(n+r)/(n-r),g,d;if(c)g=1/(a-s),d=a/(a-s);else if(o===an)g=-2/(a-s),d=-(a+s)/(a-s);else if(o===Ji)g=-1/(a-s),d=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=x,l[2]=0,l[6]=0,l[10]=g,l[14]=d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new D,nn=new Ke,nd=new D(0,0,0),id=new D(1,1,1),Yn=new D,ds=new D,Xt=new D,Rc=new Ke,Cc=new Ut,Bt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bt.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rd=0,Ic=new D,Fi=new Ut,Pn=new Ke,fs=new D,vr=new D,sd=new D,od=new Ut,Pc=new D(1,0,0),Lc=new D(0,1,0),Uc=new D(0,0,1),kc={type:"added"},ad={type:"removed"},Oi={type:"childadded",child:null},Ua={type:"childremoved",child:null},zt=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Bt,n=new Ut,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ue}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(vr,fs,this.up):Pn.lookAt(fs,vr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),x=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),x.length>0&&(n.animations=x),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ld={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let d of e.hand.values()){let m=t.getJointPose(d,n),p=this._getHandJoint(l,d);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),x=.02,g=.005;l.inputState.pinching&&u>x+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=x-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ze.workingColorSpace){if(e=ju(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ka(a,s,e+1/3),this.g=ka(a,s,e),this.b=ka(a,s,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=Ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return ze.workingToColorSpace(Lt.copy(this),e),Math.round(We(Lt.r*255,0,255))*65536+Math.round(We(Lt.g*255,0,255))*256+Math.round(We(Lt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(Lt.copy(this),t);let n=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Yt){ze.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,r=Lt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(ps);let n=Ra(Kn.h,ps.h,t),r=Ra(Kn.s,ps.s,t),s=Ra(Kn.l,ps.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ce;Ce.NAMES=Ph;var tr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bt,this.environmentIntensity=1,this.environmentRotation=new Bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},rn=new D,Ln=new D,Da=new D,Un=new D,Bi=new D,zi=new D,Dc=new D,Na=new D,Fa=new D,Oa=new D,Ba=new at,za=new at,Ga=new at,jn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){rn.subVectors(r,t),Ln.subVectors(n,t),Da.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(Ln),c=rn.dot(Da),l=Ln.dot(Ln),h=Ln.dot(Da),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,x=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-x-g,g,x)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ba.setScalar(0),za.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(e,t),za.fromBufferAttribute(e,n),Ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ba,s.x),a.addScaledVector(za,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),Ln.subVectors(e,t),rn.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Bi.subVectors(r,n),zi.subVectors(s,n),Na.subVectors(e,n);let c=Bi.dot(Na),l=zi.dot(Na);if(c<=0&&l<=0)return t.copy(n);Fa.subVectors(e,r);let h=Bi.dot(Fa),f=zi.dot(Fa);if(h>=0&&f<=h)return t.copy(r);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bi,a);Oa.subVectors(e,s);let x=Bi.dot(Oa),g=zi.dot(Oa);if(g>=0&&x<=g)return t.copy(s);let d=x*l-c*g;if(d<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(zi,o);let m=h*g-x*f;if(m<=0&&f-h>=0&&x-g>=0)return Dc.subVectors(s,r),o=(f-h)/(f-h+(x-g)),t.copy(r).addScaledVector(Dc,o);let p=1/(m+d+u);return a=d*p,o=u*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),gs.subVectors(this.max,Mr),Gi.subVectors(e.a,Mr),Hi.subVectors(e.b,Mr),Vi.subVectors(e.c,Mr),Zn.subVectors(Hi,Gi),$n.subVectors(Vi,Hi),gi.subVectors(Gi,Vi);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-gi.z,gi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,gi.z,0,-gi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-gi.y,gi.x,0];return!Ha(t,Gi,Hi,Vi,gs)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Gi,Hi,Vi,gs))?!1:(xs.crossVectors(Zn,$n),t=[xs.x,xs.y,xs.z],Ha(t,Gi,Hi,Vi,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,ms=new _n,Gi=new D,Hi=new D,Vi=new D,Zn=new D,$n=new D,gi=new D,Mr=new D,gs=new D,xs=new D,xi=new D;function Ha(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);let o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var yt=new D,ys=new Ne,cd=0,mt=class extends yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ur=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var kr=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},hd=new _n,Sr=new D,Va=new D,Qn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Va)),this.expandByPoint(Sr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ud=0,Jt=new Ke,Wa=new zt,Wi=new D,qt=new _n,wr=new _n,Et=new D,_t=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?kr:Ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(qt.min,wr.min),qt.expandByPoint(Et),Et.addVectors(qt.max,wr.max),qt.expandByPoint(Et)):(qt.expandByPoint(wr.min),qt.expandByPoint(wr.max))}qt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),Et.add(Wi)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new D,c[_]=new D;let l=new D,h=new D,f=new D,u=new Ne,x=new Ne,g=new Ne,d=new D,m=new D;function p(_,T,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,I),u.fromBufferAttribute(s,_),x.fromBufferAttribute(s,T),g.fromBufferAttribute(s,I),h.sub(l),f.sub(l),x.sub(u),g.sub(u);let k=1/(x.x*g.y-g.x*x.y);isFinite(k)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(k),m.copy(f).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(k),o[_].add(d),o[T].add(d),o[I].add(d),c[_].add(m),c[T].add(m),c[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,T=v.length;_<T;++_){let I=v[_],k=I.start,N=I.count;for(let B=k,C=k+N;B<C;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let E=new D,b=new D,S=new D,w=new D;function R(_){S.fromBufferAttribute(r,_),w.copy(S);let T=o[_];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),b.crossVectors(w,T);let k=b.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,k)}for(let _=0,T=v.length;_<T;++_){let I=v[_],k=I.start,N=I.count;for(let B=k,C=k+N;B<C;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,x=n.count;u<x;u++)n.setXYZ(u,0,0,0);let r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,f=new D;if(e)for(let u=0,x=e.count;u<x;u+=3){let g=e.getX(u+0),d=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,x=t.count;u<x;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),x=0,g=0;for(let d=0,m=c.length;d<m;d++){o.isInterleavedBufferAttribute?x=c[d]*o.data.stride+o.offset:x=c[d]*h;for(let p=0;p<h;p++)u[g++]=l[x++]}return new mt(u,h,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],x=e(u,n);c.push(x)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let x=l[f];h.push(x.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,x=f.length;u<x;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=new D,dd=new D,fd=new Ue,on=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xa.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Xa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fd.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pd=0,Fn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=oi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new on().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Dn=new D,qa=new D,_s=new D,bs=new D,Ks=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qa.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(qa);let s=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=bs.dot(this.direction),c=-bs.dot(_s),l=bs.lengthSq(),h=Math.abs(1-a*a),f,u,x,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){let d=1/h;f*=d,u*=d,x=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),x=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),x=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),x=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),x=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),x=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),x=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(_s,u),x}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,x=e.z-a.z,g=t.x-a.x,d=t.y-a.y,m=t.z-a.z,p=n.x-a.x,v=n.y-a.y,E=n.z-a.z,b=Math.abs(c),S=Math.abs(l),w=Math.abs(h),R,_,T,I,k,N,B,C,O,W,X,ne;if(b>=S&&b>=w?(T=c,N=f,O=g,ne=p,c>=0?(R=l,_=h,I=u,k=x,B=d,C=m,W=v,X=E):(R=h,_=l,I=x,k=u,B=m,C=d,W=E,X=v)):S>=w?(T=l,N=u,O=d,ne=v,l>=0?(R=h,_=c,I=x,k=f,B=m,C=g,W=E,X=p):(R=c,_=h,I=f,k=x,B=g,C=m,W=p,X=E)):(T=h,N=x,O=m,ne=E,h>=0?(R=c,_=l,I=f,k=u,B=g,C=d,W=p,X=v):(R=l,_=c,I=u,k=f,B=d,C=g,W=v,X=p)),T===0)return null;let Y=R/T,Q=_/T,te=1/T,Re=I-Y*N,Ee=k-Q*N,nt=B-Y*O,Xe=C-Q*O,Ze=W-Y*ne,K=X-Q*ne,j=Ze*Xe-K*nt,xe=Re*K-Ee*Ze,ke=nt*Ee-Xe*Re;if(r){if(j<0||xe<0||ke<0)return null}else if((j<0||xe<0||ke<0)&&(j>0||xe>0||ke>0))return null;let me=j+xe+ke;if(me===0)return null;let Be=te*(j*N+xe*O+ke*ne);return(me>0?Be<0:Be>0)?null:this.at(Be/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nc=new Ke,yi=new Ks,vs=new Qn,Fc=new D,Ms=new D,Ss=new D,ws=new D,Ya=new D,Ts=new D,Oc=new D,Es=new D,ut=class extends zt{constructor(e=new _t,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],f=s[c];h!==0&&(Ya.fromBufferAttribute(f,e),a?Ts.addScaledVector(Ya,h):Ts.addScaledVector(Ya.sub(t),h))}t.add(Ts)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(vs.containsPoint(yi.origin)===!1&&(yi.intersectSphere(vs,Fc)===null||yi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),yi.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,d=u.length;g<d;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,x.start),E=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let b=v,S=E;b<S;b+=3){let w=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);r=As(this,p,e,n,l,h,f,w,R,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,x.start),d=Math.min(o.count,x.start+x.count);for(let m=g,p=d;m<p;m+=3){let v=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);r=As(this,a,e,n,l,h,f,v,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,d=u.length;g<d;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,x.start),E=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let b=v,S=E;b<S;b+=3){let w=b,R=b+1,_=b+2;r=As(this,p,e,n,l,h,f,w,R,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,x.start),d=Math.min(c.count,x.start+x.count);for(let m=g,p=d;m<p;m+=3){let v=m,E=m+1,b=m+2;r=As(this,a,e,n,l,h,f,v,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function md(i,e,t,n,r,s,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===si,o),c===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Es);return l<t.near||l>t.far?null:{distance:l,point:Es.clone(),object:i}}function As(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ms),i.getVertexPosition(c,Ss),i.getVertexPosition(l,ws);let h=md(i,e,t,n,Ms,Ss,ws,Oc);if(h){let f=new D;jn.getBarycoord(Oc,Ms,Ss,ws,f),r&&(h.uv=jn.getInterpolatedAttribute(r,o,c,l,f,new Ne)),s&&(h.uv1=jn.getInterpolatedAttribute(s,o,c,l,f,new Ne)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};jn.getNormal(Ms,Ss,ws,u.normal),h.face=u,h.barycoord=f}return h}var Mi=class extends Ot{constructor(e=null,t=1,n=1,r,s,a,o,c,l=At,h=At,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class extends mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new Ke,Bc=new Ke,Rs=[],zc=new _n,gd=new Ke,Tr=new ut,Er=new Qn,Si=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,gd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),zc.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(zc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Er.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xi),Bc.multiplyMatrices(n,Xi),Tr.matrixWorld=Bc,Tr.raycast(e,Rs);for(let a=0,o=Rs.length;a<o;a++){let c=Rs[a];c.instanceId=s,c.object=this,t.push(c)}Rs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(r*this.count),r,this.count,hr,Qt));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_i=new Qn,xd=new Ne(.5,.5),Cs=new D,nr=class{constructor(e=new on,t=new on,n=new on,r=new on,s=new on,a=new on){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],x=s[7],g=s[8],d=s[9],m=s[10],p=s[11],v=s[12],E=s[13],b=s[14],S=s[15];if(r[0].setComponents(l-a,x-h,p-g,S-v).normalize(),r[1].setComponents(l+a,x+h,p+g,S+v).normalize(),r[2].setComponents(l+o,x+f,p+d,S+E).normalize(),r[3].setComponents(l-o,x-f,p-d,S-E).normalize(),n)r[4].setComponents(c,u,m,b).normalize(),r[5].setComponents(l-c,x-u,p-m,S-b).normalize();else if(r[4].setComponents(l-c,x-u,p-m,S-b).normalize(),t===an)r[5].setComponents(l+c,x+u,p+m,S+b).normalize();else if(t===Ji)r[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=xd.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dr=class extends Ot{constructor(e=[],t=ai,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Ot{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends Ot{constructor(e,t,n=cn,r,s,a,o=At,c=At,l,h=xn,f=1){if(h!==xn&&h!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zs=class extends ei{constructor(e,t=cn,n=ai,r,s,a=At,o=At,c,l=xn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nr=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vn=class i extends _t{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,x=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function g(d,m,p,v,E,b,S,w,R,_,T){let I=b/R,k=S/_,N=b/2,B=S/2,C=w/2,O=R+1,W=_+1,X=0,ne=0,Y=new D;for(let Q=0;Q<W;Q++){let te=Q*k-B;for(let Re=0;Re<O;Re++){let Ee=Re*I-N;Y[d]=Ee*v,Y[m]=te*E,Y[p]=C,l.push(Y.x,Y.y,Y.z),Y[d]=0,Y[m]=0,Y[p]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Re/R),f.push(1-Q/_),X+=1}}for(let Q=0;Q<_;Q++)for(let te=0;te<R;te++){let Re=u+te+O*Q,Ee=u+te+O*(Q+1),nt=u+(te+1)+O*(Q+1),Xe=u+(te+1)+O*Q;c.push(Re,Ee,Xe),c.push(Ee,nt,Xe),ne+=6}o.addGroup(x,ne,T),x+=ne,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kt=class i extends _t{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],u=[],x=[],g=0,d=[],m=n/2,p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(x,2));function v(){let b=new D,S=new D,w=0,R=(t-e)/n;for(let _=0;_<=s;_++){let T=[],I=_/s,k=I*(t-e)+e;for(let N=0;N<=r;N++){let B=N/r,C=B*c+o,O=Math.sin(C),W=Math.cos(C);S.x=k*O,S.y=-I*n+m,S.z=k*W,f.push(S.x,S.y,S.z),b.set(O,R,W).normalize(),u.push(b.x,b.y,b.z),x.push(B,1-I),T.push(g++)}d.push(T)}for(let _=0;_<r;_++)for(let T=0;T<s;T++){let I=d[T][_],k=d[T+1][_],N=d[T+1][_+1],B=d[T][_+1];(e>0||T!==0)&&(h.push(I,k,B),w+=3),(t>0||T!==s-1)&&(h.push(k,N,B),w+=3)}l.addGroup(p,w,0),p+=w}function E(b){let S=g,w=new Ne,R=new D,_=0,T=b===!0?e:t,I=b===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,m*I,0),u.push(0,I,0),x.push(.5,.5),g++;let k=g;for(let N=0;N<=r;N++){let C=N/r*c+o,O=Math.cos(C),W=Math.sin(C);R.x=T*W,R.y=m*I,R.z=T*O,f.push(R.x,R.y,R.z),u.push(0,I,0),w.x=O*.5+.5,w.y=W*.5*I+.5,x.push(w.x,w.y),g++}for(let N=0;N<r;N++){let B=S+N,C=k+N;b===!0?h.push(C,C+1,B):h.push(C+1,C,B),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class i extends Kt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends _t{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new D,b=new D,S=new D;for(let w=0;w<t.length;w+=3)x(t[w+0],E),x(t[w+1],b),x(t[w+2],S),c(E,b,S,v)}function c(v,E,b,S){let w=S+1,R=[];for(let _=0;_<=w;_++){R[_]=[];let T=v.clone().lerp(b,_/w),I=E.clone().lerp(b,_/w),k=w-_;for(let N=0;N<=k;N++)N===0&&_===w?R[_][N]=T:R[_][N]=T.clone().lerp(I,N/k)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let I=Math.floor(T/2);T%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function l(v){let E=new D;for(let b=0;b<s.length;b+=3)E.x=s[b+0],E.y=s[b+1],E.z=s[b+2],E.normalize().multiplyScalar(v),s[b+0]=E.x,s[b+1]=E.y,s[b+2]=E.z}function h(){let v=new D;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];let b=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(b,1-S)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let E=a[v+0],b=a[v+2],S=a[v+4],w=Math.max(E,b,S),R=Math.min(E,b,S);w>.9&&R<.1&&(E<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function x(v,E){let b=v*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){let v=new D,E=new D,b=new D,S=new D,w=new Ne,R=new Ne,_=new Ne;for(let T=0,I=0;T<s.length;T+=9,I+=6){v.set(s[T+0],s[T+1],s[T+2]),E.set(s[T+3],s[T+4],s[T+5]),b.set(s[T+6],s[T+7],s[T+8]),w.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),S.copy(v).add(E).add(b).divideScalar(3);let k=m(S);d(w,I+0,v,k),d(R,I+2,E,k),d(_,I+4,b,k)}}function d(v,E,b,S){S<0&&v.x===1&&(a[E]=v.x-1),b.x===0&&b.z===0&&(a[E]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Br=class i extends Or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ti=class i extends Or{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Bn=class i extends _t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,u=t/c,x=[],g=[],d=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let E=0;E<l;E++){let b=E*f-s;g.push(b,-v,0),d.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let E=v+l*p,b=v+l*(p+1),S=v+1+l*(p+1),w=v+1+l*p;x.push(E,b,w),x.push(b,S,w)}this.setIndex(x),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zn=class i extends _t{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new D,u=new D,x=[],g=[],d=[],m=[];for(let p=0;p<=n;p++){let v=[],E=p/n,b=a+E*o,S=e*Math.cos(b),w=Math.sqrt(e*e-S*S),R=0;p===0&&a===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let T=_/t,I=r+T*s;f.x=-w*Math.cos(I),f.y=S,f.z=w*Math.sin(I),g.push(f.x,f.y,f.z),u.copy(f).normalize(),d.push(u.x,u.y,u.z),m.push(T+R,1-E),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let E=h[p][v+1],b=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&x.push(E,b,w),(p!==n-1||c<Math.PI)&&x.push(b,S,w)}this.setIndex(x),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ir=class i extends _t{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],h=[],f=[],u=new D,x=new D,g=new D;for(let d=0;d<=n;d++){let m=a+d/n*o;for(let p=0;p<=r;p++){let v=p/r*s;x.x=(e+t*Math.cos(m))*Math.cos(v),x.y=(e+t*Math.cos(m))*Math.sin(v),x.z=t*Math.sin(m),l.push(x.x,x.y,x.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(x,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/r),f.push(d/n)}}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){let p=(r+1)*d+m-1,v=(r+1)*(d-1)+m-1,E=(r+1)*(d-1)+m,b=(r+1)*d+m;c.push(p,v,b),c.push(v,E,b)}this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var zr=class extends Fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ci(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Gc(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Gc(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=Ci(i[t]);for(let r in n)e[r]=n[r]}return e}function Gc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function El(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Lh={clone:Ci,merge:Dt},_d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new at().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$s=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Mn=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bt,this.combine=uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Js=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},js=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ka(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qs=class extends ti{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ja,endingEnd:Ja}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ja:s=e,o=2*t-n;break;case Qa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ja:a=e,c=2*n-t;break;case Qa:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,x=this._weightNext,g=(n-t)/(r-t),d=g*g,m=d*g,p=-u*m+2*u*d-u*g,v=(1+u)*m+(-1.5-2*u)*d+(-.5+u)*g+1,E=(-1-x)*m+(1.5+x)*d+.5*g,b=x*m-x*d;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+v*a[l+S]+E*a[c+S]+b*a[f+S];return s}},eo=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}},to=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},no=class extends ti{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(r-t),d=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*d+a[c+m]*g;return s}let u=o*2,x=e-1;for(let g=0;g!==o;++g){let d=a[l+g],m=a[c+g],p=x*u+g*2,v=f[p],E=f[p+1],b=e*u+g*2,S=h[b],w=h[b+1],R=Md(n,t,v,S,r);s[g]=Uh(R,d,E,w,m)}return s}};function Uh(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function vd(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Md(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Uh(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=vd(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Zt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ka(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new no(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case Ls:t=this.InterpolantFactoryMethodSmooth;break;case $a:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return Ls;case this.InterpolantFactoryMethodBezier:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ka(this.settings)&&(Hc(this.settings.inTangents,e),Hc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Ju(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ls,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let f=o*n,u=f-n,x=f+n;for(let g=0;g!==n;++g){let d=t[f+g];if(d!==t[u+g]||d!==t[x+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let x=0;x!==n;++x)t[u+x]=t[f+x]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ka(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Hc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Vs;var ni=class extends Zt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ar;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Zt{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName="color";var ro=class extends Zt{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName="number";var so=class extends ti{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ut.slerpFlat(s,0,a,l-o,a,l,c);return s}},Gr=class extends Zt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Zt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ar;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Zt{constructor(e,t,n,r){super(e,t,n,r)}};oo.prototype.ValueTypeName="vector";var ao=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let x=l[f],g=l[f+1];if(x.global&&(x.lastIndex=0),x.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kh=new ao,lo=class{constructor(e){this.manager=e!==void 0?e:kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Za=new Ke,Vc=new D,Wc=new D,Hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Is=new D,Ps=new Ut,mn=new D,Vr=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Is,Ps,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ps,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Is,Ps,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ps,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jn=new D,Xc=new Ne,qc=new Ne,Rt=class extends Vr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var el=class extends Hr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends rr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new el}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ri=class extends Vr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tl=class extends Hr{constructor(){super(new ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new tl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},qr=class extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sr=class extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Yi=-90,Ki=1,co=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rt(Yi,Ki,e,t);r.layers=this.layers,this.add(r);let s=new Rt(Yi,Ki,e,t);s.layers=this.layers,this.add(s);let a=new Rt(Yi,Ki,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Yi,Ki,e,t);o.layers=this.layers,this.add(o);let c=new Rt(Yi,Ki,e,t);c.layers=this.layers,this.add(c);let l=new Rt(Yi,Ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,x),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Al="\\[\\]\\.:\\/",Sd=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",wd="[^"+Al.replace("\\.","")+"]",Td=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Ed=/(WCOD+)?/.source.replace("WCOD",wd),Ad=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Rd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Cd=new RegExp("^"+Td+Ed+Ad+Rd+"$"),Id=["material","materials","bones","map"],nl=class{constructor(e,t,n){let r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sd,"")}static parseTrackName(e){let t=Cd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Id.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=nl;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kx=new Float32Array(1);var il=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};function Cl(i,e,t,n){let r=Pd(n);switch(t){case vl:return i*e;case hr:return i*e/r.components*r.byteLength;case _o:return i*e/r.components*r.byteLength;case hi:return i*e*2/r.components*r.byteLength;case bo:return i*e*2/r.components*r.byteLength;case Ml:return i*e*3/r.components*r.byteLength;case en:return i*e*4/r.components*r.byteLength;case vo:return i*e*4/r.components*r.byteLength;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:case To:return Math.max(i,16)*Math.max(e,8)/4;case Mo:case wo:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case Ao:case Co:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Qr:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qo:case Yo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case es:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pd(i){switch(i){case kt:case xl:return{byteLength:1,components:1};case lr:case yl:case hn:return{byteLength:2,components:1};case xo:case yo:return{byteLength:2,components:4};case cn:case go:case Qt:return{byteLength:4,components:1};case _l:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nu(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ud(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let x;if(l instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)x=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)x=i.SHORT;else if(l instanceof Uint32Array)x=i.UNSIGNED_INT;else if(l instanceof Int32Array)x=i.INT;else if(l instanceof Int8Array)x=i.BYTE;else if(l instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((x,g)=>x.start-g.start);let u=0;for(let x=1;x<f.length;x++){let g=f[u],d=f[x];d.start<=g.start+g.count+1?g.count=Math.max(g.count,d.start+d.count-g.start):(++u,f[u]=d)}f.length=u+1;for(let x=0,g=f.length;x<g;x++){let d=f[x];i.bufferSubData(l,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:kd,alphahash_pars_fragment:Dd,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:Gd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:rf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:xf,fog_vertex:yf,fog_pars_vertex:_f,fog_fragment:bf,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:Sf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Ef,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:If,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Uf,lights_fragment_begin:kf,lights_fragment_maps:Df,lights_fragment_end:Nf,lightprobes_pars_fragment:Ff,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Gf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Kf,morphcolor_vertex:Zf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:jf,normal_fragment_begin:Qf,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:ap,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:_p,shadowmask_pars_fragment:bp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:wp,specularmap_fragment:Tp,specularmap_pars_fragment:Ep,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Ip,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Up,worldpos_vertex:kp,background_vert:Dp,background_frag:Np,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:Gp,depth_frag:Hp,distance_vert:Vp,distance_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Kp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Jp,meshlambert_frag:jp,meshmatcap_vert:Qp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},he={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},En={basic:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Dt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Dt([he.lights,he.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};En.physical={uniforms:Dt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ta={r:0,b:0,g:0},mm=new Ke,iu=new Ue;iu.set(-1,0,0,0,1,0,0,0,1);function gm(i,e,t,n,r,s){let a=new Ce(0),o=r===!0?0:1,c,l,h=null,f=0,u=null;function x(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(v){let E=!1,b=x(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(v,E){let b=x(E);b&&(b.isCubeTexture||b.mapping===Yr)?(l===void 0&&(l=new ut(new vn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Ci(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(iu),l.material.toneMapped=ze.getTransfer(b.colorSpace)!==je,(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new Bn(2,2),new bt({name:"BackgroundMaterial",uniforms:Ci(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ze.getTransfer(b.colorSpace)!==je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(ta,El(i)),t.buffers.color.setClear(ta.r,ta.g,ta.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:d,dispose:p}}function xm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,a=!1;function o(k,N,B,C,O){let W=!1,X=f(k,C,B,N);s!==X&&(s=X,l(s.object)),W=x(k,C,B,O),W&&g(k,C,B,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(k,N,B,C),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function f(k,N,B,C){let O=C.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let X=k.isInstancedMesh===!0?k.id:0,ne=W[X];ne===void 0&&(ne={},W[X]=ne);let Y=ne[B.id];Y===void 0&&(Y={},ne[B.id]=Y);let Q=Y[O];return Q===void 0&&(Q=u(c()),Y[O]=Q),Q}function u(k){let N=[],B=[],C=[];for(let O=0;O<t;O++)N[O]=0,B[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:C,object:k,attributes:{},index:null}}function x(k,N,B,C){let O=s.attributes,W=N.attributes,X=0,ne=B.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=O[Y],Re=W[Y];if(Re===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(Re=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(Re=k.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;X++}return s.attributesNum!==X||s.index!==C}function g(k,N,B,C){let O={},W=N.attributes,X=0,ne=B.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=W[Y];te===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(te=k.instanceColor));let Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),O[Y]=Re,X++}s.attributes=O,s.attributesNum=X,s.index=C}function d(){let k=s.newAttributes;for(let N=0,B=k.length;N<B;N++)k[N]=0}function m(k){p(k,0)}function p(k,N){let B=s.newAttributes,C=s.enabledAttributes,O=s.attributeDivisors;B[k]=1,C[k]===0&&(i.enableVertexAttribArray(k),C[k]=1),O[k]!==N&&(i.vertexAttribDivisor(k,N),O[k]=N)}function v(){let k=s.newAttributes,N=s.enabledAttributes;for(let B=0,C=N.length;B<C;B++)N[B]!==k[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function E(k,N,B,C,O,W,X){X===!0?i.vertexAttribIPointer(k,N,B,O,W):i.vertexAttribPointer(k,N,B,C,O,W)}function b(k,N,B,C){d();let O=C.attributes,W=B.getAttributes(),X=N.defaultAttributeValues;for(let ne in W){let Y=W[ne];if(Y.location>=0){let Q=O[ne];if(Q===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),Q!==void 0){let te=Q.normalized,Re=Q.itemSize,Ee=e.get(Q);if(Ee===void 0)continue;let nt=Ee.buffer,Xe=Ee.type,Ze=Ee.bytesPerElement,K=Xe===i.INT||Xe===i.UNSIGNED_INT||Q.gpuType===go;if(Q.isInterleavedBufferAttribute){let j=Q.data,xe=j.stride,ke=Q.offset;if(j.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,j.meshPerAttribute);k.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let me=0;me<Y.locationSize;me++)E(Y.location+me,Re/Y.locationSize,Xe,te,xe*Ze,(ke+Re/Y.locationSize*me)*Ze,K)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)p(Y.location+j,Q.meshPerAttribute);k.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let j=0;j<Y.locationSize;j++)E(Y.location+j,Re/Y.locationSize,Xe,te,Re*Ze,Re/Y.locationSize*j*Ze,K)}}else if(X!==void 0){let te=X[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Y.location,te);break;case 3:i.vertexAttrib3fv(Y.location,te);break;case 4:i.vertexAttrib4fv(Y.location,te);break;default:i.vertexAttrib1fv(Y.location,te)}}}}v()}function S(){T();for(let k in n){let N=n[k];for(let B in N){let C=N[B];for(let O in C){let W=C[O];for(let X in W)h(W[X].object),delete W[X];delete C[O]}}delete n[k]}}function w(k){if(n[k.id]===void 0)return;let N=n[k.id];for(let B in N){let C=N[B];for(let O in C){let W=C[O];for(let X in W)h(W[X].object),delete W[X];delete C[O]}}delete n[k.id]}function R(k){for(let N in n){let B=n[N];for(let C in B){let O=B[C];if(O[k.id]===void 0)continue;let W=O[k.id];for(let X in W)h(W[X].object),delete W[X];delete O[k.id]}}}function _(k){for(let N in n){let B=n[N],C=k.isInstancedMesh===!0?k.id:0,O=B[C];if(O!==void 0){for(let W in O){let X=O[W];for(let ne in X)h(X[ne].object),delete X[ne];delete O[W]}delete B[C],Object.keys(B).length===0&&delete n[N]}}}function T(){I(),a=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:d,enableAttribute:m,disableUnusedAttributes:v}}function ym(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let x=0;x<h;x++)u+=l[x];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _m(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kt&&R!==Qt&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Pe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:g,maxTextureSize:d,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:S,samples:w}}function bm(i){let e=this,t=null,n=0,r=!1,s=!1,a=new on,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let x=f.length!==0||u||n!==0||r;return r=u,n=f.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,x){let g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let v=s?0:n,E=v*4,b=p.clippingState||null;c.value=b,b=h(g,u,E,x);for(let S=0;S!==E;++S)b[S]=t[S];p.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,x,g){let d=f!==null?f.length:0,m=null;if(d!==0){if(m=c.value,g!==!0||m===null){let p=x+d*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=x;E!==d;++E,b+=4)a.copy(f[E]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}var dr=4,vm=6,Mm=20,Sm=256,ns=new ri,Dh=new Ce,Il=null,Pl=0,Ll=0,Ul=!1,wm=new D,Ii=new D,ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=wm}=s;Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Ul,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:hn,format:en,colorSpace:vi,depthBuffer:!1},r=Nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tm(s)),this._blurMaterial=Am(s,e,t),this._ggxMaterial=Em(s,e,t)}return r}_compileMaterial(e){let t=new ut(new _t,e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,n,r,s){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,x=f.toneMapping;f.getClearColor(Dh),f.toneMapping=ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new vn,new On({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,m=d.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Dh),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let S=this._cubeSize;ur(r,b*S,E>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(d,c),f.render(e,c)}f.toneMapping=x,f.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ai||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ns)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,x=f*u,{_lodMax:g}=this,d=this._sizeLods[n],m=3*d*(n>g-dr?n-g+dr:0),p=4*(this._cubeSize-d);c.envMap.value=e.texture,c.roughness.value=x,c.mipInt.value=g-t,ur(s,m,p,3*d,2*d),r.setRenderTarget(s),r.render(o,ns),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ur(e,m,p,3*d,2*d),r.setRenderTarget(e),r.render(o,ns)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],f=3*h*(r>this._lodMax-dr?r-this._lodMax+dr:0),u=4*(this._cubeSize-h);ur(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(c,ns)}};function Tm(i){let e=[],t=[],n=i,r=i-dr+1+vm;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,x=3,g=new Float32Array(x*u*f),d=new Float32Array(x*u*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,E=p>2?0:-1,b=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];g.set(b,x*u*p);for(let S=0;S<u;S++){let w=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Ii.set(1,R,w):p===1?Ii.set(-w,1,-R):p===2?Ii.set(-w,R,1):p===3?Ii.set(-1,R,-w):p===4?Ii.set(-w,-1,R):Ii.set(w,R,-1),Ii.toArray(d,(p*u+S)*x)}}let m=new _t;m.setAttribute("position",new mt(g,x)),m.setAttribute("outputDirection",new mt(d,x)),t.push(new ut(m,null)),n>dr&&n--}return{lodMeshes:t,sizeLods:e}}function Nh(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Em(i,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Am(i,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Fh(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Oh(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ra=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:wn});s.uniforms.tEquirect.value=t;let a=new ut(r,s),o=t.minFilter;return t.minFilter===li&&(t.minFilter=ht),new co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function Rm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,x=!1){return u==null?null:x?a(u):s(u)}function s(u){if(u&&u.isTexture){let x=u.mapping;if(x===fo||x===po)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let d=new ra(g.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",l),o(d.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let x=u.mapping,g=x===fo||x===po,d=x===ai||x===Ri;if(g||d){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ia(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||d&&v&&c(v)?(n===null&&(n=new ia(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,x){return x===fo?u.mapping=ai:x===po&&(u.mapping=Ri),u}function c(u){let x=0,g=6;for(let d=0;d<g;d++)u[d]!==void 0&&x++;return x===g}function l(u){let x=u.target;x.removeEventListener("dispose",l);let g=e.get(x);g!==void 0&&(e.delete(x),g.dispose())}function h(u){let x=u.target;x.removeEventListener("dispose",h);let g=t.get(x);g!==void 0&&(t.delete(x),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Cm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&bi("WebGLRenderer: "+n+" extension not supported."),r}}}function Im(i,e,t,n){let r={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];let x=s.get(u);x&&(e.remove(x),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER)}function l(f){let u=[],x=f.index,g=f.attributes.position,d=0;if(g===void 0)return;if(x!==null){let v=x.array;d=x.version;for(let E=0,b=v.length;E<b;E+=3){let S=v[E+0],w=v[E+1],R=v[E+2];u.push(S,w,w,R,R,S)}}else{let v=g.array;d=g.version;for(let E=0,b=v.length/3-1;E<b;E+=3){let S=E+0,w=E+1,R=E+2;u.push(S,w,w,R,R,S)}}let m=new(g.count>=65535?kr:Ur)(u,1);m.version=d;let p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let x=f.index;x!==null&&u.version<x.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Pm(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,s,f*a),t.update(u,n,1)}function l(f,u,x){x!==0&&(i.drawElementsInstanced(n,u,s,f*a,x),t.update(u,n,x))}function h(f,u,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,x);let d=0;for(let m=0;m<x;m++)d+=u[m];t.update(d,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Lm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Um(i,e,t){let n=new WeakMap,r=new at;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;x===!0&&(E=1),g===!0&&(E=2),d===!0&&(E=3);let b=o.attributes.position.count*E,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*S*4*f),R=new Ir(w,b,S,f);R.type=Qt,R.needsUpdate=!0;let _=E*4;for(let I=0;I<f;I++){let k=m[I],N=p[I],B=v[I],C=b*S*4*I;for(let O=0;O<k.count;O++){let W=O*_;x===!0&&(r.fromBufferAttribute(k,O),w[C+W+0]=r.x,w[C+W+1]=r.y,w[C+W+2]=r.z,w[C+W+3]=0),g===!0&&(r.fromBufferAttribute(N,O),w[C+W+4]=r.x,w[C+W+5]=r.y,w[C+W+6]=r.z,w[C+W+7]=0),d===!0&&(r.fromBufferAttribute(B,O),w[C+W+8]=r.x,w[C+W+9]=r.y,w[C+W+10]=r.z,w[C+W+11]=B.itemSize===4?r.w:1)}}u={count:f,texture:R,size:new Ne(b,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let d=0;d<l.length;d++)x+=l[d];let g=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function km(i,e,t,n,r){let s=new WeakMap;function a(l){let h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let x=l.skeleton;s.get(x)!==h&&(x.update(),s.set(x,h))}return u}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Dm={[cl]:"LINEAR_TONE_MAPPING",[hl]:"REINHARD_TONE_MAPPING",[ul]:"CINEON_TONE_MAPPING",[dl]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[ml]:"NEUTRAL_TONE_MAPPING",[fl]:"CUSTOM_TONE_MAPPING"};function Nm(i,e,t,n,r,s){let a=new Wt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new _t;l.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ot([0,2,0,0,2,0],2));let h=new $s({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ut(l,h),u=new ri(-1,1,1,-1,0,1),x=null,g=null,d=!1,m,p=null,v=[],E=!1;this.setSize=function(b,S){a.setSize(b,S),o!==null&&o.setSize(b,S),c!==null&&c.setSize(b,S);for(let w=0;w<v.length;w++){let R=v[w];R.setSize&&R.setSize(b,S)}},this.setEffects=function(b){v=b,E=v.length>0&&v[0].isRenderPass===!0;let S=a.width,w=a.height;v.length>0&&o===null&&(o=new Wt(S,w,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(S,w,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let _=v[R];_.setSize&&_.setSize(S,w)}},this.begin=function(b,S){if(d||b.toneMapping===ln&&v.length===0)return!1;if(p=S,S!==null){let w=S.width,R=S.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return E===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=ln,!0},this.hasRenderPass=function(){return E},this.end=function(b,S){b.toneMapping=m,d=!0;let w=a,R=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(b,R,w,S),T.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(x!==b.outputColorSpace||g!==b.toneMapping){x=b.outputColorSpace,g=b.toneMapping,h.defines={},ze.getTransfer(x)===je&&(h.defines.SRGB_TRANSFER="");let _=Dm[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(f,u),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ru=new Ot,Nl=new ei(1,1),su=new Ir,ou=new Ys,au=new Dr,Bh=[],zh=[],Gh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Bh[r];if(s===void 0&&(s=new Float32Array(r),Bh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Vh.set(n),i.uniformMatrix2fv(this.addr,!1,Vh),wt(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Hh.set(n),i.uniformMatrix3fv(this.addr,!1,Hh),wt(t,n)}}function Vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),wt(t,n)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function jm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=t.isReversedDepthBuffer()?ea:Qo,s=Nl):s=ru,t.setTexture2D(e||s,r)}function Qm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ou,r)}function e0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||au,r)}function t0(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||su,r)}function n0(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return Gm;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return Km;case 36294:return Zm;case 36295:return $m;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(i,e){i.uniform1fv(this.addr,e)}function r0(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function s0(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function o0(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function a0(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l0(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c0(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h0(i,e){i.uniform1iv(this.addr,e)}function u0(i,e){i.uniform2iv(this.addr,e)}function d0(i,e){i.uniform3iv(this.addr,e)}function f0(i,e){i.uniform4iv(this.addr,e)}function p0(i,e){i.uniform1uiv(this.addr,e)}function m0(i,e){i.uniform2uiv(this.addr,e)}function g0(i,e){i.uniform3uiv(this.addr,e)}function x0(i,e){i.uniform4uiv(this.addr,e)}function y0(i,e,t){let n=this.cache,r=e.length,s=aa(t,r);St(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nl:a=ru;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function _0(i,e,t){let n=this.cache,r=e.length,s=aa(t,r);St(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ou,s[a])}function b0(i,e,t){let n=this.cache,r=e.length,s=aa(t,r);St(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||au,s[a])}function v0(i,e,t){let n=this.cache,r=e.length,s=aa(t,r);St(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||su,s[a])}function M0(i){switch(i){case 5126:return i0;case 35664:return r0;case 35665:return s0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return v0}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n0(t.type)}},Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M0(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Wh(i,e){i.seq.push(e),i.map[e.id]=e}function S0(i,e,t){let n=i.name,r=n.length;for(kl.lastIndex=0;;){let s=kl.exec(n),a=kl.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Wh(t,l===void 0?new Fl(o,i,e):new Ol(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Bl(o),Wh(t,f)),t=f}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);S0(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Xh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w0=37297,T0=0;function E0(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var qh=new Ue;function A0(i){ze._getMatrix(qh,ze.workingColorSpace,i);let e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(e),o)}else return s}function R0(i,e){let t=A0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var C0={[cl]:"Linear",[hl]:"Reinhard",[ul]:"Cineon",[dl]:"ACESFilmic",[pl]:"AgX",[ml]:"Neutral",[fl]:"Custom"};function I0(i,e){let t=C0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var na=new D;function P0(){ze.getLuminanceCoefficients(na);let i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function U0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rs(i){return i!==""}function Kh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(D0,F0)}var N0=new Map;function F0(i,e){let t=Oe[e];if(t===void 0){let n=N0.get(e);if(n!==void 0)t=Oe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zl(t)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(i){return i.replace(O0,B0)}function B0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var z0={[Ei]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function G0(i){return z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H0={[ai]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function V0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var W0={[Ri]:"ENVMAP_MODE_REFRACTION"};function X0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":W0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q0={[uo]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function Y0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":q0[i.combine]||"ENVMAP_BLENDING_NONE"}function K0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=G0(t),l=V0(t),h=X0(t),f=Y0(t),u=K0(t),x=L0(t),g=U0(s),d=r.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ln?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=zl(a),a=Kh(a,t),a=Zh(a,t),o=zl(o),o=Kh(o,t),o=Zh(o,t),a=$h(a),o=$h(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+a,b=v+p+o,S=Xh(r,r.VERTEX_SHADER,E),w=Xh(r,r.FRAGMENT_SHADER,b);r.attachShader(d,S),r.attachShader(d,w),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function R(k){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(d)||"",B=r.getShaderInfoLog(S)||"",C=r.getShaderInfoLog(w)||"",O=N.trim(),W=B.trim(),X=C.trim(),ne=!0,Y=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,S,w);else{let Q=Yh(r,S,"vertex"),te=Yh(r,w,"fragment");Le("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+O+`
`+Q+`
`+te)}else O!==""?Pe("WebGLProgram: Program Info Log:",O):(W===""||X==="")&&(Y=!1);Y&&(k.diagnostics={runnable:ne,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(S),r.deleteShader(w),_=new fr(r,d),T=k0(r,d)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(d,w0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=w,this}var $0=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function J0(i){return i===hi||i===Qr||i===es}function j0(i,e,t,n,r,s){let a=new Pr,o=new Gl,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function d(_,T,I,k,N,B){let C=k.fog,O=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||W,X),Y=ne&&ne.mapping===Yr?ne.image.height:null,Q=x[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Re=te!==void 0?te.length:0,Ee=0;O.morphAttributes.position!==void 0&&(Ee=1),O.morphAttributes.normal!==void 0&&(Ee=2),O.morphAttributes.color!==void 0&&(Ee=3);let nt,Xe,Ze,K;if(Q){let rt=En[Q];nt=rt.vertexShader,Xe=rt.fragmentShader}else{nt=_.vertexShader,Xe=_.fragmentShader;let rt=o.getVertexShaderStage(_),$e=o.getFragmentShaderStage(_);o.update(_,rt,$e),Ze=rt.id,K=$e.id}let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Be=!!_.map,Mt=!!_.matcap,Ge=!!ne,Ye=!!_.aoMap,it=!!_.lightMap,Ve=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Tt=!!_.displacementMap,Ht=!!_.emissiveMap,ft=!!_.metalnessMap,gt=!!_.roughnessMap,U=_.anisotropy>0,Ct=_.clearcoat>0,Qe=_.dispersion>0,A=_.retroreflectivity>0,y=_.iridescence>0,F=_.sheen>0,H=_.transmission>0,q=U&&!!_.anisotropyMap,ie=Ct&&!!_.clearcoatMap,re=Ct&&!!_.clearcoatNormalMap,Z=Ct&&!!_.clearcoatRoughnessMap,J=y&&!!_.iridescenceMap,se=y&&!!_.iridescenceThicknessMap,we=F&&!!_.sheenColorMap,ce=F&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Te=!!_.specularColorMap,Ie=!!_.specularIntensityMap,De=H&&!!_.transmissionMap,L=H&&!!_.thicknessMap,ae=!!_.gradientMap,$=!!_.alphaMap,le=_.alphaTest>0,fe=!!_.alphaHash,ee=!!_.extensions,Ae=ln;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Me={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:Xe,defines:_.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:Mt,envMap:Ge,envMapMode:Ge&&ne.mapping,envMapCubeUVHeight:Y,aoMap:Ye,lightMap:it,bumpMap:Ve,normalMap:dt,displacementMap:Tt,emissiveMap:Ht,normalMapObjectSpace:dt&&_.normalMapType===yh,normalMapTangentSpace:dt&&_.normalMapType===jo,packedNormalMap:dt&&_.normalMapType===jo&&J0(_.normalMap.format),metalnessMap:ft,roughnessMap:gt,anisotropy:U,anisotropyMap:q,clearcoat:Ct,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:Z,dispersion:Qe,retroreflection:A,iridescence:y,iridescenceMap:J,iridescenceThicknessMap:se,sheen:F,sheenColorMap:we,sheenRoughnessMap:ce,specularMap:oe,specularColorMap:Te,specularIntensityMap:Ie,transmission:H,transmissionMap:De,thicknessMap:L,gradientMap:ae,opaque:_.transparent===!1&&_.blending===oi&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:fe,combine:_.combine,mapUv:Be&&g(_.map.channel),aoMapUv:Ye&&g(_.aoMap.channel),lightMapUv:it&&g(_.lightMap.channel),bumpMapUv:Ve&&g(_.bumpMap.channel),normalMapUv:dt&&g(_.normalMap.channel),displacementMapUv:Tt&&g(_.displacementMap.channel),emissiveMapUv:Ht&&g(_.emissiveMap.channel),metalnessMapUv:ft&&g(_.metalnessMap.channel),roughnessMapUv:gt&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(_.sheenRoughnessMap.channel),specularMapUv:oe&&g(_.specularMap.channel),specularColorMapUv:Te&&g(_.specularColorMap.channel),specularIntensityMapUv:Ie&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:L&&g(_.thicknessMap.channel),alphaMapUv:$&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||U),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Be||$),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===je,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(T,_),v(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let T=x[_.type],I;if(T){let k=En[T];I=Lh.clone(k.uniforms)}else I=_.uniforms;return I}function b(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Z0(i,T,_,r),l.push(I),h.set(T,I)),I}function S(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:R}}function Q0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qh(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let x=0;return u.isInstancedMesh&&(x+=2),u.isSkinnedMesh&&(x+=1),x}function o(u,x,g,d,m,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:x,material:g,materialVariant:a(u),groupOrder:d,renderOrder:u.renderOrder,z:m,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=x,v.material=g,v.materialVariant=a(u),v.groupOrder=d,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function c(u,x,g,d,m,p,v){v.reversedDepth===!0&&(m=-m);let E=o(u,x,g,d,m,p);g.transmission>0?n.push(E):g.transparent===!0?r.push(E):t.push(E)}function l(u,x,g,d,m,p){let v=o(u,x,g,d,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function h(u,x){t.length>1&&t.sort(u||eg),n.length>1&&n.sort(x||jh),r.length>1&&r.sort(x||jh)}function f(){for(let u=e,x=i.length;u<x;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function tg(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Qh,i.set(n,[a])):r>=s.length?(a=new Qh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ce};break;case"SpotLight":t={position:new D,direction:new D,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rg=0;function sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function og(i){let e=new ng,t=ig(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new Ke,a=new Ke;function o(l){let h=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let x=0,g=0,d=0,m=0,p=0,v=0,E=0,b=0,S=0,w=0,R=0,_=0,T=0,I=0;l.sort(sg);for(let N=0,B=l.length;N<B;N++){let C=l[N],O=C.color,W=C.intensity,X=C.distance,ne=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===hi?ne=C.shadow.map.texture:ne=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*W,f+=O.g*W,u+=O.b*W;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],W);I++}else if(C.isSunLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;let Re=Q.getViewportCount();for(let Ee=0;Ee<Re;Ee++)n.sunShadowMatrix[d+Ee]=Q.getMatrix(Ee),n.sunShadowCascade[d+Ee]=Q._cascadeData[Ee];d+=Re,g++}n.sun[x]=Y,x++}else if(C.isDirectionalLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=C.shadow.matrix,S++}n.directional[m]=Y,m++}else if(C.isSpotLight){let Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=X,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[v]=Y;let Q=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,Q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,C.castShadow){let te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[v]=te,n.spotShadowMap[v]=ne,R++}v++}else if(C.isRectAreaLight){let Y=e.get(C);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=Y,E++}else if(C.isPointLight){let Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let Q=C.shadow,te=t.get(C);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=C.shadow.matrix,w++}n.point[p]=Y,p++}else if(C.isHemisphereLight){let Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(W),Y.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[b]=Y,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let k=n.hash;(k.sunLength!==x||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==v||k.rectAreaLength!==E||k.hemiLength!==b||k.numSunShadows!==g||k.numDirectionalShadows!==S||k.numPointShadows!==w||k.numSpotShadows!==R||k.numSpotMaps!==_||k.numLightProbes!==I)&&(n.sun.length=x,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=d,n.sunShadowCascade.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,k.sunLength=x,k.directionalLength=m,k.pointLength=p,k.spotLength=v,k.rectAreaLength=E,k.hemiLength=b,k.numSunShadows=g,k.numDirectionalShadows=S,k.numPointShadows=w,k.numSpotShadows=R,k.numSpotMaps=_,k.numLightProbes=I,n.version=rg++)}function c(l,h){let f=0,u=0,x=0,g=0,d=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let b=l[v];if(b.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(b.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let S=n.rectArea[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(b.isPointLight){let S=n.point[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),x++}else if(b.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function eu(i){let e=new og(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ag(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new eu(i),e.set(r,[o])):s>=a.length?(o=new eu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ug=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],tu=new Ke,is=new D,Dl=new D;function dg(i,e,t){let n=new nr,r=new Ne,s=new Ne,a=new at,o=new Js,c=new js,l={},h=t.maxTextureSize,f={[si]:Gt,[Gt]:si,[Sn]:Sn},u=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),x=u.clone();x.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ei;let p=this.type;this.render=function(w,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Zc&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ei);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),N=i.state;N.setBlending(wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=w.length;C<O;C++){let W=w[C],X=W.shadow;if(X===void 0){Pe("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ne=X.getFrameExtents();r.multiply(ne),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,X.mapSize.y=s.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===or){if(W.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Wt(r.x,r.y,{format:hi,type:hn,minFilter:ht,magFilter:ht,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new ei(r.x,r.y,Qt),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=xn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At}else W.isPointLight?(X.map=new ra(r.x),X.map.depthTexture=new Zs(r.x,cn)):(X.map=new Wt(r.x,r.y),X.map.depthTexture=new ei(r.x,r.y,cn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=xn,this.type===Ei?(X.map.depthTexture.compareFunction=Y?ea:Qo,X.map.depthTexture.minFilter=ht,X.map.depthTexture.magFilter=ht):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,_);for(let te=0;te<Q;te++){let Re=X.getCamera(te);if(W.isPointLight){let Ee=X.camera,nt=X.matrix,Xe=W.distance||Ee.far;Xe!==Ee.far&&(Ee.far=Xe,Ee.updateProjectionMatrix()),is.setFromMatrixPosition(W.matrixWorld),Ee.position.copy(is),Dl.copy(Ee.position),Dl.add(hg[te]),Ee.up.copy(ug[te]),Ee.lookAt(Dl),Ee.updateMatrixWorld(),nt.makeTranslation(-is.x,-is.y,-is.z),tu.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(tu,Ee.coordinateSystem,Ee.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,te),i.clear();else{te===0&&(i.setRenderTarget(X.map),i.clear());let Ee=X.getViewport(te);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(a)}n=X.getFrustum(te),b(R,_,Re,W,this.type)}X.isPointLightShadow!==!0&&this.type===or&&v(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,k)};function v(w,R){let _=e.update(d);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,x.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,x.needsUpdate=!0),w.mapPass===null?w.mapPass=new Wt(r.x,r.y,{format:hi,type:hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,d,null),x.uniforms.shadow_pass.value=w.mapPass.texture,x.uniforms.resolution.value.set(w.map.width,w.map.height),x.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,_,x,d,null)}function E(w,R,_,T){let I=null,k=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)I=k;else if(I=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=I.uuid,B=R.uuid,C=l[N];C===void 0&&(C={},l[N]=C);let O=C[B];O===void 0&&(O=I.clone(),C[B]=O,R.addEventListener("dispose",S)),I=O}if(I.visible=R.visible,I.wireframe=R.wireframe,T===or?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=i.properties.get(I);N.light=_}return I}function b(w,R,_,T,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===or)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let B=e.update(w),C=w.material;if(Array.isArray(C)){let O=B.groups;for(let W=0,X=O.length;W<X;W++){let ne=O[W],Y=C[ne.materialIndex];if(Y&&Y.visible){let Q=E(w,Y,T,I);w.onBeforeShadow(i,w,R,_,B,Q,ne),i.renderBufferDirect(_,null,B,Q,w,ne),w.onAfterShadow(i,w,R,_,B,Q,ne)}}}else if(C.visible){let O=E(w,C,T,I);w.onBeforeShadow(i,w,R,_,B,O,null),i.renderBufferDirect(_,null,B,O,w,null),w.onAfterShadow(i,w,R,_,B,O,null)}}let N=w.children;for(let B=0,C=N.length;B<C;B++)b(N[B],R,_,T,I)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let T=l[_],I=w.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function fg(i,e){function t(){let L=!1,ae=new at,$=null,le=new at(0,0,0,0);return{setMask:function(fe){$!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ee,Ae,Me,rt){rt===!0&&(fe*=Me,ee*=Me,Ae*=Me),ae.set(fe,ee,Ae,Me),le.equals(ae)===!1&&(i.clearColor(fe,ee,Ae,Me),le.copy(ae))},reset:function(){L=!1,$=null,le.set(-1,0,0,0)}}}function n(){let L=!1,ae=!1,$=null,le=null,fe=null;return{setReversed:function(ee){if(ae!==ee){let Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;let Me=fe;fe=null,this.setClear(Me)}},getReversed:function(){return ae},setTest:function(ee){ee?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!L&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(ae&&(ee=Ih[ee]),le!==ee){switch(ee){case ks:i.depthFunc(i.NEVER);break;case Ds:i.depthFunc(i.ALWAYS);break;case Ns:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Fs:i.depthFunc(i.EQUAL);break;case Os:i.depthFunc(i.GEQUAL);break;case Bs:i.depthFunc(i.GREATER);break;case zs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){L=ee},setClear:function(ee){fe!==ee&&(fe=ee,ae&&(ee=1-ee),i.clearDepth(ee))},reset:function(){L=!1,$=null,le=null,fe=null,ae=!1}}}function r(){let L=!1,ae=null,$=null,le=null,fe=null,ee=null,Ae=null,Me=null,rt=null;return{setTest:function($e){L||($e?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function($e){ae!==$e&&!L&&(i.stencilMask($e),ae=$e)},setFunc:function($e,tn,fn){($!==$e||le!==tn||fe!==fn)&&(i.stencilFunc($e,tn,fn),$=$e,le=tn,fe=fn)},setOp:function($e,tn,fn){(ee!==$e||Ae!==tn||Me!==fn)&&(i.stencilOp($e,tn,fn),ee=$e,Ae=tn,Me=fn)},setLocked:function($e){L=$e},setClear:function($e){rt!==$e&&(i.clearStencil($e),rt=$e)},reset:function(){L=!1,ae=null,$=null,le=null,fe=null,ee=null,Ae=null,Me=null,rt=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,h={},f={},u={},x=new WeakMap,g=[],d=null,m=!1,p=null,v=null,E=null,b=null,S=null,w=null,R=null,_=new Ce(0,0,0),T=0,I=!1,k=null,N=null,B=null,C=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=ne>=2);let Q=null,te={},Re=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),nt=new at().fromArray(Re),Xe=new at().fromArray(Ee);function Ze(L,ae,$,le){let fe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<$;Ae++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ae+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ee}let K={};K[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc($i),Ve(!1),dt(rl),j(i.CULL_FACE),Ye(wn);function j(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ke(L,ae){return u[L]!==ae?(i.bindFramebuffer(L,ae),u[L]=ae,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function me(L,ae){let $=g,le=!1;if(L){$=x.get(ae),$===void 0&&($=[],x.set(ae,$));let fe=L.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ae=fe.length;ee<Ae;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=fe.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function Be(L){return d!==L?(i.useProgram(L),d=L,!0):!1}let Mt={[Ai]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};Mt[Qc]=i.MIN,Mt[eh]=i.MAX;let Ge={[th]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[sh]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,ae,$,le,fe,ee,Ae,Me,rt,$e){if(L===wn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),L!==$c){if(L!==p||$e!==I){if((v!==Ai||S!==Ai)&&(i.blendEquation(i.FUNC_ADD),v=Ai,S=Ai),$e)switch(L){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",L);break}else switch(L){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",L);break}E=null,b=null,w=null,R=null,_.set(0,0,0),T=0,p=L,I=$e}return}fe=fe||ae,ee=ee||$,Ae=Ae||le,(ae!==v||fe!==S)&&(i.blendEquationSeparate(Mt[ae],Mt[fe]),v=ae,S=fe),($!==E||le!==b||ee!==w||Ae!==R)&&(i.blendFuncSeparate(Ge[$],Ge[le],Ge[ee],Ge[Ae]),E=$,b=le,w=ee,R=Ae),(Me.equals(_)===!1||rt!==T)&&(i.blendColor(Me.r,Me.g,Me.b,rt),_.copy(Me),T=rt),p=L,I=!1}function it(L,ae){L.side===Sn?xe(i.CULL_FACE):j(i.CULL_FACE);let $=L.side===Gt;ae&&($=!$),Ve($),L.blending===oi&&L.transparent===!1?Ye(wn):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function dt(L){L!==Yc?(j(i.CULL_FACE),L!==N&&(L===rl?i.cullFace(i.BACK):L===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),N=L}function Tt(L){L!==B&&(X&&i.lineWidth(L),B=L)}function Ht(L,ae,$){L?(j(i.POLYGON_OFFSET_FILL),(C!==ae||O!==$)&&(C=ae,O=$,a.getReversed()&&(ae=-ae),i.polygonOffset(ae,$))):xe(i.POLYGON_OFFSET_FILL)}function ft(L){L?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function gt(L){L===void 0&&(L=i.TEXTURE0+W-1),Q!==L&&(i.activeTexture(L),Q=L)}function U(L,ae,$){$===void 0&&(Q===null?$=i.TEXTURE0+W-1:$=Q);let le=te[$];le===void 0&&(le={type:void 0,texture:void 0},te[$]=le),(le.type!==L||le.texture!==ae)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,ae||K[L]),le.type=L,le.texture=ae)}function Ct(){let L=te[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function y(){try{i.texSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function re(){try{i.texStorage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function Z(){try{i.texImage2D(...arguments)}catch(L){Le("WebGLState:",L)}}function J(){try{i.texImage3D(...arguments)}catch(L){Le("WebGLState:",L)}}function se(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function we(L,ae){f[L]!==ae&&(i.pixelStorei(L,ae),f[L]=ae)}function ce(L){nt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function oe(L){Xe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Xe.copy(L))}function Te(L,ae){let $=l.get(ae);$===void 0&&($=new WeakMap,l.set(ae,$));let le=$.get(L);le===void 0&&(le=i.getUniformBlockIndex(ae,L.name),$.set(L,le))}function Ie(L,ae){let le=l.get(ae).get(L);c.get(ae)!==le&&(i.uniformBlockBinding(ae,le,L.__bindingPointIndex),c.set(ae,le))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,te={},u={},x=new WeakMap,g=[],d=null,m=!1,p=null,v=null,E=null,b=null,S=null,w=null,R=null,_=new Ce(0,0,0),T=0,I=!1,k=null,N=null,B=null,C=null,O=null,nt.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:xe,bindFramebuffer:ke,drawBuffers:me,useProgram:Be,setBlending:Ye,setMaterial:it,setFlipSided:Ve,setCullFace:dt,setLineWidth:Tt,setPolygonOffset:Ht,setScissorTest:ft,activeTexture:gt,bindTexture:U,unbindTexture:Ct,compressedTexImage2D:Qe,compressedTexImage3D:A,texImage2D:Z,texImage3D:J,pixelStorei:we,getParameter:se,updateUBOMapping:Te,uniformBlockBinding:Ie,texStorage2D:ie,texStorage3D:re,texSubImage2D:y,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ce,viewport:oe,reset:De}}function pg(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,f=new Set,u,x=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,y){return g?new OffscreenCanvas(A,y):Cr("canvas")}function m(A,y,F){let H=1,q=Qe(A);if((q.width>F||q.height>F)&&(H=F/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ie=Math.floor(H*q.width),re=Math.floor(H*q.height);u===void 0&&(u=d(ie,re));let Z=y?d(ie,re):u;return Z.width=ie,Z.height=re,Z.getContext("2d").drawImage(A,0,0,ie,re),Pe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+re+")."),Z}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,y,F,H,q,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re;H&&(re=e.get("EXT_texture_norm16"),re||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),F===i.SHORT&&re&&(Z=re.R16_SNORM_EXT)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),y===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),F===i.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(F===i.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),F===i.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let J=ie?Rr:ze.getTransfer(q);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=J===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),F===i.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(A,y){let F;return A?y===null||y===cn||y===cr?F=i.DEPTH24_STENCIL8:y===Qt?F=i.DEPTH32F_STENCIL8:y===lr&&(F=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cn||y===cr?F=i.DEPTH_COMPONENT24:y===Qt?F=i.DEPTH_COMPONENT32F:y===lr&&(F=i.DEPTH_COMPONENT16),F}function w(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==ht?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){let y=A.target;y.removeEventListener("dispose",R),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function _(A){let y=A.target;y.removeEventListener("dispose",_),k(y)}function T(A){let y=n.get(A);if(y.__webglInit===void 0)return;let F=A.source,H=x.get(F);if(H){let q=H[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(A),Object.keys(H).length===0&&x.delete(F)}n.remove(A)}function I(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let F=A.source,H=x.get(F);delete H[y.__cacheKey],a.memory.textures--}function k(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let q=0;q<y.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(y.__webglFramebuffer[H][q]);else i.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)i.deleteFramebuffer(y.__webglFramebuffer[H]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=A.textures;for(let H=0,q=F.length;H<q;H++){let ie=n.get(F[H]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(A)}let N=0;function B(){N=0}function C(){return N}function O(A){N=A}function W(){let A=N;return A>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function X(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ne(A,y){let F=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let H=A.image;if(H===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,A,y);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function Y(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xe(F,A,y);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function Q(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){xe(F,A,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function te(A,y){let F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){ke(F,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}let Re={[Gs]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Hs]:i.MIRRORED_REPEAT},Ee={[At]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[ht]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},nt={[bh]:i.NEVER,[Th]:i.ALWAYS,[vh]:i.LESS,[Qo]:i.LEQUAL,[Mh]:i.EQUAL,[ea]:i.GEQUAL,[Sh]:i.GREATER,[wh]:i.NOTEQUAL};function Xe(A,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ht||y.magFilter===mo||y.magFilter===Kr||y.magFilter===li||y.minFilter===ht||y.minFilter===mo||y.minFilter===Kr||y.minFilter===li)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Re[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Re[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Re[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ee[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===At||y.minFilter!==Kr&&y.minFilter!==li||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let H=y.source,q=x.get(H);q===void 0&&(q={},x.set(H,q));let ie=X(y);if(ie!==A.__cacheKey){q[ie]===void 0&&(q[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ie].usedTimes++;let re=q[A.__cacheKey];re!==void 0&&(q[A.__cacheKey].usedTimes--,re.usedTimes===0&&I(y)),A.__cacheKey=ie,A.__webglTexture=q[ie].texture}return F}function K(A,y,F){return Math.floor(Math.floor(A/F)/y)}function j(A,y,F,H){let ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,F,H,y.data);else{ie.sort((we,ce)=>we.start-ce.start);let re=0;for(let we=1;we<ie.length;we++){let ce=ie[re],oe=ie[we],Te=ce.start+ce.count,Ie=K(oe.start,y.width,4),De=K(ce.start,y.width,4);oe.start<=Te+1&&Ie===De&&K(oe.start+oe.count-1,y.width,4)===Ie?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++re,ie[re]=oe)}ie.length=re+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let we=0,ce=ie.length;we<ce;we++){let oe=ie[we],Te=Math.floor(oe.start/4),Ie=Math.ceil(oe.count/4),De=Te%y.width,L=Math.floor(Te/y.width),ae=Ie,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,De,L,ae,$,F,H,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function xe(A,y,F){let H=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=i.TEXTURE_3D);let q=Ze(A,y),ie=y.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+F);let re=n.get(ie);if(ie.version!==re.__version||q===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let $=ze.getPrimaries(ze.workingColorSpace),le=y.colorSpace===Gn?null:ze.getPrimaries(y.colorSpace),fe=y.colorSpace===Gn||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,r.maxTextureSize);J=Ct(y,J);let se=s.convert(y.format,y.colorSpace),we=s.convert(y.type),ce=b(y.internalFormat,se,we,y.normalized,y.colorSpace,y.isVideoTexture);Xe(H,y);let oe,Te=y.mipmaps,Ie=y.isVideoTexture!==!0,De=re.__version===void 0||q===!0,L=ie.dataReady,ae=w(y,J);if(y.isDepthTexture)ce=S(y.format===ci,y.type),De&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,se,we,null));else if(y.isDataTexture)if(Te.length>0){Ie&&De&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)oe=Te[$],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,se,we,oe.data):t.texImage2D(i.TEXTURE_2D,$,ce,oe.width,oe.height,0,se,we,oe.data);y.generateMipmaps=!1}else Ie?(De&&t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height),L&&j(y,J,se,we)):t.texImage2D(i.TEXTURE_2D,0,ce,J.width,J.height,0,se,we,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ie&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,Te[0].width,Te[0].height,J.depth);for(let $=0,le=Te.length;$<le;$++)if(oe=Te[$],y.format!==en)if(se!==null)if(Ie){if(L)if(y.layerUpdates.size>0){let fe=Cl(oe.width,oe.height,y.format,y.type);for(let ee of y.layerUpdates){let Ae=oe.data.subarray(ee*fe/oe.data.BYTES_PER_ELEMENT,(ee+1)*fe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,oe.width,oe.height,1,se,Ae)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,J.depth,se,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ce,oe.width,oe.height,J.depth,0,oe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,J.depth,se,we,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ce,oe.width,oe.height,J.depth,0,se,we,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ie&&De&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Te[0].width,Te[0].height);for(let $=0,le=Te.length;$<le;$++)oe=Te[$],y.format!==en?se!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,se,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ce,oe.width,oe.height,0,oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,oe.width,oe.height,se,we,oe.data):t.texImage2D(i.TEXTURE_2D,$,ce,oe.width,oe.height,0,se,we,oe.data)}else if(y.isDataArrayTexture)if(Ie){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,J.width,J.height,J.depth),L)if(y.layerUpdates.size>0){let $=Cl(J.width,J.height,y.format,y.type);for(let le of y.layerUpdates){let fe=J.data.subarray(le*$/J.data.BYTES_PER_ELEMENT,(le+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,se,we,fe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,se,we,J.data);else if(y.isData3DTexture)Ie?(De&&t.texStorage3D(i.TEXTURE_3D,ae,ce,J.width,J.height,J.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,we,J.data)):t.texImage3D(i.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,se,we,J.data);else if(y.isFramebufferTexture){if(De)if(Ie)t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height);else{let $=J.width,le=J.height;for(let fe=0;fe<ae;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,$,le,0,se,we,null),$>>=1,le>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),f.add(y),$.onpaint=le=>{let fe=le.changedElements;for(let ee of f)fe.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let fe=i.RGBA,ee=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ee,Ae,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ie&&De){let $=Qe(Te[0]);t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height)}for(let $=0,le=Te.length;$<le;$++)oe=Te[$],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,se,we,oe):t.texImage2D(i.TEXTURE_2D,$,ce,se,we,oe);y.generateMipmaps=!1}else if(Ie){if(De){let $=Qe(J);t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,we,J)}else t.texImage2D(i.TEXTURE_2D,0,ce,se,we,J);p(y)&&v(H),re.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ke(A,y,F){if(y.image.length!==6)return;let H=Ze(A,y),q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(i.TEXTURE0+F);let re=ze.getPrimaries(ze.workingColorSpace),Z=y.colorSpace===Gn?null:ze.getPrimaries(y.colorSpace),J=y.colorSpace===Gn||re===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let se=y.isCompressedTexture||y.image[0].isCompressedTexture,we=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!se&&!we?ce[ee]=m(y.image[ee],!0,r.maxCubemapSize):ce[ee]=we?y.image[ee].image:y.image[ee],ce[ee]=Ct(y,ce[ee]);let oe=ce[0],Te=s.convert(y.format,y.colorSpace),Ie=s.convert(y.type),De=b(y.internalFormat,Te,Ie,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,ae=ie.__version===void 0||H===!0,$=q.dataReady,le=w(y,oe);Xe(i.TEXTURE_CUBE_MAP,y);let fe;if(se){L&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,De,oe.width,oe.height);for(let ee=0;ee<6;ee++){fe=ce[ee].mipmaps;for(let Ae=0;Ae<fe.length;Ae++){let Me=fe[Ae];y.format!==en?Te!==null?L?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,De,Me.width,Me.height,0,Me.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Me.width,Me.height,Te,Ie,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,De,Me.width,Me.height,0,Te,Ie,Me.data)}}}else{if(fe=y.mipmaps,L&&ae){fe.length>0&&le++;let ee=Qe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,De,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(we){L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Te,Ie,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,ce[ee].width,ce[ee].height,0,Te,Ie,ce[ee].data);for(let Ae=0;Ae<fe.length;Ae++){let rt=fe[Ae].image[ee].image;L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,rt.width,rt.height,Te,Ie,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,De,rt.width,rt.height,0,Te,Ie,rt.data)}}else{L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te,Ie,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,De,Te,Ie,ce[ee]);for(let Ae=0;Ae<fe.length;Ae++){let Me=fe[Ae];L?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Te,Ie,Me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,De,Te,Ie,Me.image[ee])}}}p(y)&&v(i.TEXTURE_CUBE_MAP),ie.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function me(A,y,F,H,q,ie){let re=s.convert(F.format,F.colorSpace),Z=s.convert(F.type),J=b(F.internalFormat,re,Z,F.normalized,F.colorSpace),se=n.get(y),we=n.get(F);if(we.__renderTarget=y,!se.__hasExternalTextures){let ce=Math.max(1,y.width>>ie),oe=Math.max(1,y.height>>ie);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,J,ce,oe,y.depth,0,re,Z,null):t.texImage2D(q,ie,J,ce,oe,0,re,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,we.__webglTexture,0,ft(y)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,we.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let H=y.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=S(y.stencilBuffer,q),re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(y),ie,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,A)}else{let H=y.textures;for(let q=0;q<H.length;q++){let ie=H[q],re=s.convert(ie.format,ie.colorSpace),Z=s.convert(ie.type),J=b(ie.internalFormat,re,Z,ie.normalized,ie.colorSpace);gt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(y),J,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(A,y,F){let H=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,y.depthTexture);let se=s.convert(y.depthTexture.format),we=s.convert(y.depthTexture.type),ce;y.depthTexture.format===xn?ce=i.DEPTH_COMPONENT24:y.depthTexture.format===ci&&(ce=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,y.width,y.height,0,se,we,null)}}else ne(y.depthTexture,0);let ie=q.__webglTexture,re=ft(y),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=y.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===xn)gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else if(y.depthTexture.format===ci)gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(A){let y=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=H}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)Mt(y.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?Mt(y.__webglFramebuffer[0],A,0):Mt(y.__webglFramebuffer,A,0)}else if(F){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=i.createRenderbuffer(),Be(y.__webglDepthbuffer[H],A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Be(y.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(A,y,F){let H=n.get(A);y!==void 0&&me(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ge(A)}function it(A){let y=A.texture,F=n.get(A),H=n.get(y);A.addEventListener("dispose",_);let q=A.textures,ie=A.isWebGLCubeRenderTarget===!0,re=q.length>1;if(re||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=y.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)F.__webglFramebuffer[Z][J]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(re)for(let Z=0,J=q.length;Z<J;Z++){let se=n.get(q[Z]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){let J=q[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);let se=s.convert(J.format,J.colorSpace),we=s.convert(J.type),ce=b(J.internalFormat,se,we,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),oe=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)me(F.__webglFramebuffer[Z][J],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else me(F.__webglFramebuffer[Z],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(y)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,J=q.length;Z<J;Z++){let se=q[Z],we=n.get(se),ce=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,we.__webglTexture),Xe(ce,se),me(F.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+Z,ce,0),p(se)&&v(ce)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,H.__webglTexture),Xe(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)me(F.__webglFramebuffer[J],A,y,i.COLOR_ATTACHMENT0,Z,J);else me(F.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Z,0);p(y)&&v(Z),t.unbindTexture()}A.depthBuffer&&Ge(A)}function Ve(A){let y=A.textures;for(let F=0,H=y.length;F<H;F++){let q=y[F];if(p(q)){let ie=E(A),re=n.get(q).__webglTexture;t.bindTexture(ie,re),v(ie),t.unbindTexture()}}}let dt=[],Tt=[];function Ht(A){if(A.samples>0){if(gt(A)===!1){let y=A.textures,F=A.width,H=A.height,q=i.COLOR_BUFFER_BIT,ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(A),Z=y.length>1;if(Z)for(let se=0;se<y.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<y.length;se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let we=n.get(y[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,q,i.NEAREST),c===!0&&(dt.length=0,Tt.length=0,dt.push(i.COLOR_ATTACHMENT0+se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(dt.push(ie),Tt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let se=0;se<y.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let we=n.get(y[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ft(A){return Math.min(r.maxSamples,A.samples)}function gt(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ct(A,y){let F=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==vi&&F!==Gn&&(ze.getTransfer(F)===je?(H!==en||q!==kt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",F)),y}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=C,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Ye,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mg(i,e){function t(n,r=Gn){let s,a=ze.getTransfer(r);if(n===kt)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xl)return i.BYTE;if(n===yl)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===en)return i.RGBA;if(n===xn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===hr)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Zr||n===$r||n===Jr||n===jr)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===wo||n===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===Ao||n===Ro||n===Co||n===Io||n===Qr||n===Po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eo||n===Ao)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Co)return s.COMPRESSED_R11_EAC;if(n===Io)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return s.COMPRESSED_RG11_EAC;if(n===Po)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Uo||n===ko||n===Do||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Go||n===Ho||n===Vo||n===Wo||n===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Yo||n===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qo)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===$o||n===es||n===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===es)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends yn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,x=null,g=null,d=typeof XRWebGLBinding<"u",m=new Vl,p={},v=t.getContextAttributes(),E=null,b=null,S=[],w=[],R=new Ne,_=null,T=null,I=new Rt;I.viewport=new at;let k=new Rt;k.viewport=new at;let N=[I,k],B=new ho,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=S[K];return j===void 0&&(j=new er,S[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=S[K];return j===void 0&&(j=new er,S[K]=j),j.getGripSpace()},this.getHand=function(K){let j=S[K];return j===void 0&&(j=new er,S[K]=j),j.getHandSpace()};function W(K){let j=w.indexOf(K.inputSource);if(j===-1)return;let xe=S[j];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let K=0;K<S.length;K++){let j=w[K];j!==null&&(w[K]=null,S[K].disconnect(j))}C=null,O=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(E),x=null,u=null,f=null,r=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:x},this.getBinding=function(){return f===null&&d&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),d&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ke=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?ci:xn,ke=v.stencil?cr:cn);let Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Wt(u.textureWidth,u.textureHeight,{format:en,type:kt,depthTexture:new ei(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Wt(x.framebufferWidth,x.framebufferHeight,{format:en,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(K){for(let j=0;j<K.removed.length;j++){let xe=K.removed[j],ke=w.indexOf(xe);ke>=0&&(w[ke]=null,S[ke].disconnect(xe))}for(let j=0;j<K.added.length;j++){let xe=K.added[j],ke=w.indexOf(xe);if(ke===-1){for(let Be=0;Be<S.length;Be++)if(Be>=w.length){w.push(xe),ke=Be;break}else if(w[Be]===null){w[Be]=xe,ke=Be;break}if(ke===-1)break}let me=S[ke];me&&me.connect(xe)}}let Y=new D,Q=new D;function te(K,j,xe){Y.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let ke=Y.distanceTo(Q),me=j.projectionMatrix.elements,Be=xe.projectionMatrix.elements,Mt=me[14]/(me[10]-1),Ge=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],it=(me[9]-1)/me[5],Ve=(me[8]-1)/me[0],dt=(Be[8]+1)/Be[0],Tt=Mt*Ve,Ht=Mt*dt,ft=ke/(-Ve+dt),gt=ft*-Ve;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let U=Mt+ft,Ct=Ge+ft,Qe=Tt-gt,A=Ht+(ke-gt),y=Ye*Ge/Ct*U,F=it*Ge/Ct*U;K.projectionMatrix.makePerspective(Qe,A,y,F,U,Ct),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Re(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let j=K.near,xe=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=k.near=I.near=j,B.far=k.far=I.far=xe,(C!==B.near||O!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,O=B.far),B.layers.mask=K.layers.mask|6,I.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;let ke=K.parent,me=B.cameras;Re(B,ke);for(let Be=0;Be<me.length;Be++)Re(me[Be],ke);me.length===2?te(B,I,k):B.projectionMatrix.copy(I.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Ee(K,B,ke)};function Ee(K,j,xe){xe===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ws*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&x===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let nt=null;function Xe(K,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let xe=h.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let ke=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,ke=!0);for(let Ge=0;Ge<xe.length;Ge++){let Ye=xe[Ge],it=null;if(x!==null)it=x.getViewport(Ye);else{let dt=f.getViewSubImage(u,Ye);it=dt.viewport,Ge===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let Ve=N[Ge];Ve===void 0&&(Ve=new Rt,Ve.layers.enable(Ge),Ve.viewport=new at,N[Ge]=Ve),Ve.matrix.fromArray(Ye.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ye.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Ge===0&&(B.matrix.copy(Ve.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ke===!0&&B.cameras.push(Ve)}let me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){f=n.getBinding();let Ge=f.getDepthInformation(xe[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(me&&me.includes("camera-access")&&d){e.state.unbindTexture(),f=n.getBinding();for(let Ge=0;Ge<xe.length;Ge++){let Ye=xe[Ge].camera;if(Ye){let it=p[Ye];it||(it=new Nr,p[Ye]=it);let Ve=f.getCameraImage(Ye);it.sourceTexture=Ve}}}}for(let xe=0;xe<S.length;xe++){let ke=w[xe],me=S[xe];ke!==null&&me!==void 0&&me.update(ke,j,l||a)}nt&&nt(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ze=new nu;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}},yg=new Ke,lu=new Ue;lu.set(-1,0,0,0,1,0,0,0,1);function _g(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,El(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&x(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),d(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function x(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function d(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bg(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let w=S.program;n.uniformBlockBinding(b,w)}function l(b,S){let w=r[b.id];w===void 0&&(m(b),w=h(b),r[b.id]=w,b.addEventListener("dispose",v));let R=S.program;n.updateUBOMapping(b,R);let _=e.render.frame;s[b.id]!==_&&(u(b),s[b.id]=_)}function h(b){let S=f();b.__bindingPointIndex=S;let w=i.createBuffer(),R=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let S=r[b.id],w=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,T=w.length;_<T;_++){let I=w[_];if(Array.isArray(I))for(let k=0,N=I.length;k<N;k++)x(I[k],_,k,R);else x(I,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(b,S,w,R){if(d(b,S,w,R)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let I=0;for(let k=0;k<T.length;k++){let N=T[k],B=p(N);g(N,b.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function g(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function d(b,S,w,R){let _=b.value,T=S+"_"+w;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let I=R[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(b){let S=b.uniforms,w=0,R=16;for(let T=0,I=S.length;T<I;T++){let k=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,B=k.length;N<B;N++){let C=k[N],O=Array.isArray(C.value)?C.value:[C.value];for(let W=0,X=O.length;W<X;W++){let ne=O[W],Y=p(ne),Q=w%R,te=Q%Y.boundary,Re=Q+te;w+=te,Re!==0&&R-Re<Y.storage&&(w+=R-Re),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=Y.storage}}}let _=w%R;return _>0&&(w+=R-_),b.__size=w,b.__cache={},this}function p(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",b),S}function v(b){let S=b.target;S.removeEventListener("dispose",v);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function E(){for(let b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:E}}var vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function Mg(){return Tn===null&&(Tn=new Mi(vg,16,16,hi,hn),Tn.name="DFG_LUT",Tn.minFilter=ht,Tn.magFilter=ht,Tn.wrapS=gn,Tn.wrapT=gn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var sa=class{constructor(e={}){let{canvas:t=Ah(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:x=kt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let d=x,m=new Set([vo,bo,_o]),p=new Set([kt,cn,lr,cr,xo,yo]),v=new Uint32Array(4),E=new Int32Array(4),b=new D,S=null,w=null,R=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,k=!1,N=null,B=null,C=null,O=null;this._outputColorSpace=Yt;let W=0,X=0,ne=null,Y=-1,Q=null,te=new at,Re=new at,Ee=null,nt=new Ce(0),Xe=0,Ze=t.width,K=t.height,j=1,xe=null,ke=null,me=new at(0,0,Ze,K),Be=new at(0,0,Ze,K),Mt=!1,Ge=new nr,Ye=!1,it=!1,Ve=new Ke,dt=new D,Tt=new at,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function gt(){return ne===null?j:1}let U=n;function Ct(M,P){return t.getContext(M,P)}let Qe,A,y,F,H,q,ie,re,Z,J,se,we,ce,oe,Te,Ie,De,L,ae,$,le,fe,ee;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",tn,!1),U===null){let P="webgl2";if(U=Ct(P,M),U===null)throw Ct(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(M){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),Le("WebGLRenderer: "+M.message),M}function Ae(){Qe=new Cm(U),Qe.init(),le=new mg(U,Qe),A=new _m(U,Qe,e,le),y=new fg(U,Qe),A.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=U.createFramebuffer(),C=U.createFramebuffer(),O=U.createFramebuffer(),F=new Lm(U),H=new Q0,q=new pg(U,Qe,y,H,A,le,F),ie=new Rm(I),re=new Ud(U),fe=new xm(U,re),Z=new Im(U,re,F,fe),J=new km(U,Z,re,fe,F),L=new Um(U,A,q),Te=new bm(H),se=new j0(I,ie,Qe,A,fe,Te),we=new _g(I,H),ce=new tg,oe=new ag(Qe),De=new gm(I,ie,y,J,g,c),Ie=new dg(I,J,A),ee=new bg(U,F,A,y),ae=new ym(U,Qe,F),$=new Pm(U,Qe,F),F.programs=se.programs,I.capabilities=A,I.extensions=Qe,I.properties=H,I.renderLists=ce,I.shadowMap=Ie,I.state=y,I.info=F}d!==kt&&(T=new Nm(d,t.width,t.height,o,r,s));let Me=new Wl(I,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Ze,K,!1))},this.getSize=function(M){return M.set(Ze,K)},this.setSize=function(M,P,V=!0){if(Me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=M,K=P,t.width=Math.floor(M*j),t.height=Math.floor(P*j),V===!0&&(t.style.width=M+"px",t.style.height=P+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Ze*j,K*j).floor()},this.setDrawingBufferSize=function(M,P,V){Ze=M,K=P,j=V,t.width=Math.floor(M*V),t.height=Math.floor(P*V),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(d===kt){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,P,V,z){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,P,V,z),y.viewport(te.copy(me).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,P,V,z){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,P,V,z),y.scissor(Re.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(M){y.setScissorTest(Mt=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,V=!0){let z=0;if(M){let G=!1;if(ne!==null){let de=ne.texture.format;G=m.has(de)}if(G){let de=ne.texture.type,ge=p.has(de),ue=De.getClearColor(),_e=De.getClearAlpha(),Se=ue.r,Fe=ue.g,He=ue.b;ge?(v[0]=Se,v[1]=Fe,v[2]=He,v[3]=_e,U.clearBufferuiv(U.COLOR,0,v)):(E[0]=Se,E[1]=Fe,E[2]=He,E[3]=_e,U.clearBufferiv(U.COLOR,0,E))}else z|=U.COLOR_BUFFER_BIT}P&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),De.dispose(),ce.dispose(),oe.dispose(),H.dispose(),ie.dispose(),J.dispose(),fe.dispose(),ee.dispose(),se.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",mc),Me.removeEventListener("sessionend",gc),mi.stop()};function rt(M){M.preventDefault(),Tl("WebGLRenderer: Context Lost."),k=!0}function $e(){Tl("WebGLRenderer: Context Restored."),k=!1;let M=F.autoReset,P=Ie.enabled,V=Ie.autoUpdate,z=Ie.needsUpdate,G=Ie.type;Ae(),F.autoReset=M,Ie.enabled=P,Ie.autoUpdate=V,Ie.needsUpdate=z,Ie.type=G}function tn(M){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fn(M){let P=M.target;P.removeEventListener("dispose",fn),Fu(P)}function Fu(M){Ou(M),H.remove(M)}function Ou(M){let P=H.get(M).programs;P!==void 0&&(P.forEach(function(V){se.releaseProgram(V)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,V,z,G,de){P===null&&(P=Ht);let ge=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=Gu(M,P,V,z,G);y.setMaterial(z,ge);let _e=V.index,Se=1;if(z.wireframe===!0){if(_e=Z.getWireframeAttribute(V),_e===void 0)return;Se=2}let Fe=V.drawRange,He=V.attributes.position,be=Fe.start*Se,Je=(Fe.start+Fe.count)*Se;de!==null&&(be=Math.max(be,de.start*Se),Je=Math.min(Je,(de.start+de.count)*Se)),_e!==null?(be=Math.max(be,0),Je=Math.min(Je,_e.count)):He!=null&&(be=Math.max(be,0),Je=Math.min(Je,He.count));let xt=Je-be;if(xt<0||xt===1/0)return;fe.setup(G,z,ue,V,_e);let lt,tt=ae;if(_e!==null&&(lt=re.get(_e),tt=$,tt.setIndex(lt)),G.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*gt()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(G.isLine){let It=z.linewidth;It===void 0&&(It=1),y.setLineWidth(It*gt()),G.isLineSegments?tt.setMode(U.LINES):G.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else G.isPoints?tt.setMode(U.POINTS):G.isSprite&&tt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let It=G._multiDrawStarts,pe=G._multiDrawCounts,Ft=G._multiDrawCount,qe=_e?re.get(_e).bytesPerElement:1,$t=H.get(z).currentProgram.getUniforms();for(let pn=0;pn<Ft;pn++)$t.setValue(U,"_gl_DrawID",pn),tt.render(It[pn]/qe,pe[pn])}else if(G.isInstancedMesh)tt.renderInstances(be,xt,G.count);else if(V.isInstancedBufferGeometry){let It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,It);tt.renderInstances(be,xt,pe)}else tt.render(be,xt)};function pc(M,P,V,z){N!==null&&M.isNodeMaterial&&N.setObject(z,M),Ye===!0&&Te.setState(M,V,!1),M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,us(M,P,z),M.side=si,M.needsUpdate=!0,us(M,P,z),M.side=Sn):us(M,P,z)}this.compile=function(M,P,V=null){V===null&&(V=M),N!==null&&N.renderStart(M,P,V),w=oe.get(V),w.init(P),_.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==V&&M.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),it=this.localClippingEnabled,Ye=Te.init(this.clippingPlanes,it),Ye===!0&&Te.setGlobalState(this.clippingPlanes,P),N!==null&&Ie.render(w.state.shadowsArray,V,P);let z=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let de=G.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let ue=de[ge];pc(ue,V,P,G),z.add(ue)}else pc(de,V,P,G),z.add(de)}),w=_.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(M,P,V=null){let z=this.compile(M,P,V);return new Promise(G=>{function de(){if(z.forEach(function(ge){let _e=H.get(ge).currentProgram;(_e===void 0||_e.isReady())&&z.delete(ge)}),z.size===0){G(M);return}setTimeout(de,10)}Qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let wa=null;function Bu(M){wa&&wa(M)}function mc(){mi.stop()}function gc(){mi.start()}let mi=new nu;mi.setAnimationLoop(Bu),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){wa=M,Me.setAnimationLoop(M),M===null?mi.stop():mi.start()},Me.addEventListener("sessionstart",mc),Me.addEventListener("sessionend",gc),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N!==null&&N.renderStart(M,P);let V=Me.enabled===!0&&Me.isPresenting===!0,z=T!==null&&(ne===null||V)&&T.begin(I,ne);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(P),P=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,P,ne),w=oe.get(M,_.length),w.init(P),w.state.textureUnits=q.getTextureUnits(),_.push(w),Ve.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ge.setFromProjectionMatrix(Ve,an,P.reversedDepth),it=this.localClippingEnabled,Ye=Te.init(this.clippingPlanes,it),S=ce.get(M,R.length),S.init(),R.push(S),Me.enabled===!0&&Me.isPresenting===!0){let ge=I.xr.getDepthSensingMesh();ge!==null&&Ta(ge,P,-1/0,I.sortObjects)}Ta(M,P,0,I.sortObjects),S.finish(),N!==null&&N.updateLights(w.state.lightsArray),I.sortObjects===!0&&S.sort(xe,ke),ft=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ft&&De.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Te.beginShadows();let G=w.state.shadowsArray;if(Ie.render(G,M,P),Ye===!0&&Te.endShadows(),(z&&T.hasRenderPass())===!1){let ge=S.opaque,ue=S.transmissive;if(w.setupLights(),P.isArrayCamera){let _e=P.cameras;if(ue.length>0)for(let Se=0,Fe=_e.length;Se<Fe;Se++){let He=_e[Se];yc(ge,ue,M,He)}ft&&De.render(M);for(let Se=0,Fe=_e.length;Se<Fe;Se++){let He=_e[Se];xc(S,M,He,He.viewport)}}else ue.length>0&&yc(ge,ue,M,P),ft&&De.render(M),xc(S,M,P)}ne!==null&&X===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),z&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,P),fe.resetDefaultState(),Y=-1,Q=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),Ye===!0&&Te.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,N!==null&&N.renderEnd()};function Ta(M,P,V,z){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ge)){z&&Tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ve);let ge=J.update(M),ue=M.material;ue.visible&&S.push(M,ge,ue,V,Tt.z,null,P)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ge))){let ge=J.update(M),ue=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Tt.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Tt.copy(ge.boundingSphere.center)),Tt.applyMatrix4(M.matrixWorld).applyMatrix4(Ve)),Array.isArray(ue)){let _e=ge.groups;for(let Se=0,Fe=_e.length;Se<Fe;Se++){let He=_e[Se],be=ue[He.materialIndex];be&&be.visible&&S.push(M,ge,be,V,Tt.z,He,P)}}else ue.visible&&S.push(M,ge,ue,V,Tt.z,null,P)}}let de=M.children;for(let ge=0,ue=de.length;ge<ue;ge++)Ta(de[ge],P,V,z)}function xc(M,P,V,z){let{opaque:G,transmissive:de,transparent:ge}=M;w.setupLightsView(V),Ye===!0&&Te.setGlobalState(I.clippingPlanes,V),z&&y.viewport(te.copy(z)),G.length>0&&hs(G,P,V),de.length>0&&hs(de,P,V),ge.length>0&&hs(ge,P,V),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yc(M,P,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let be=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Wt(1,1,{generateMipmaps:!0,type:be?hn:kt,minFilter:li,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let de=w.state.transmissionRenderTarget[z.id],ge=z.viewport||te;de.setSize(ge.z*I.transmissionResolutionScale,ge.w*I.transmissionResolutionScale);let ue=I.getRenderTarget(),_e=I.getActiveCubeFace(),Se=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(nt),Xe=I.getClearAlpha(),Xe<1&&I.setClearColor(16777215,.5),I.clear(),ft&&De.render(V);let Fe=I.toneMapping;I.toneMapping=ln;let He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Ye===!0&&Te.setGlobalState(I.clippingPlanes,z),hs(M,V,z),q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Je=0,xt=P.length;Je<xt;Je++){let lt=P[Je],{object:tt,geometry:It,material:pe,group:Ft}=lt;if(pe.side===Sn&&tt.layers.test(z.layers)){let qe=pe.side;pe.side=Gt,pe.needsUpdate=!0,_c(tt,V,z,It,pe,Ft),pe.side=qe,pe.needsUpdate=!0,be=!0}}be===!0&&(q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de))}I.setRenderTarget(ue,_e,Se),I.setClearColor(nt,Xe),He!==void 0&&(z.viewport=He),I.toneMapping=Fe}function hs(M,P,V){let z=P.isScene===!0?P.overrideMaterial:null;for(let G=0,de=M.length;G<de;G++){let ge=M[G],{object:ue,geometry:_e,group:Se}=ge,Fe=ge.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),ue.layers.test(V.layers)&&_c(ue,P,V,_e,Fe,Se)}}function _c(M,P,V,z,G,de){N!==null&&G.isNodeMaterial&&N.setObject(M,G),M.onBeforeRender(I,P,V,z,G,de),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,P,V,z,M,de),G.transparent===!0&&G.side===Sn&&G.forceSinglePass===!1?(G.side=Gt,G.needsUpdate=!0,I.renderBufferDirect(V,P,z,G,M,de),G.side=si,G.needsUpdate=!0,I.renderBufferDirect(V,P,z,G,M,de),G.side=Sn):I.renderBufferDirect(V,P,z,G,M,de),M.onAfterRender(I,P,V,z,G,de)}function us(M,P,V){P.isScene!==!0&&(P=Ht);let z=H.get(M),G=w.state.lights,de=w.state.shadowsArray,ge=G.state.version,ue=se.getParameters(M,G.state,de,P,V,w.state.lightProbeGridArray),_e=se.getProgramCacheKey(ue),Se=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=ie.get(M.envMap||z.environment,Fe),z.envMapRotation=z.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Se===void 0&&(M.addEventListener("dispose",fn),Se=new Map,z.programs=Se);let He=Se.get(_e);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===ge)return vc(M,ue),He}else ue.uniforms=se.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,V,ue),M.onBeforeCompile(ue,I),He=se.acquireProgram(ue,_e),Se.set(_e,He),z.uniforms=ue.uniforms;let be=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=Te.uniform),vc(M,ue),z.needsLights=Vu(M),z.lightsStateVersion=ge,z.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.sunLights.value=G.state.sun,be.sunLightShadows.value=G.state.sunShadow,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.sunShadowMatrix.value=G.state.sunShadowMatrix,be.sunShadowCascade.value=G.state.sunShadowCascade,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=He,z.uniformsList=null,He}function bc(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function vc(M,P){let V=H.get(M);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function zu(M,P){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(P.matrixWorld);for(let V=0,z=M.length;V<z;V++){let G=M[V];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function Gu(M,P,V,z,G){P.isScene!==!0&&(P=Ht),q.resetTextureUnits();let de=P.fog,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,ue=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ze.workingColorSpace,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Se=ie.get(z.envMap||ge,_e),Fe=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color,lt=ln;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(lt=I.toneMapping);let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=tt!==void 0?tt.length:0,pe=H.get(z),Ft=w.state.lights;if(Ye===!0&&(it===!0||M!==Q)){let st=M===Q&&z.id===Y;Te.setState(z,M,st)}let qe=!1;z.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Ft.state.version||pe.outputColorSpace!==ue||G.isBatchedMesh&&pe.batching===!1||!G.isBatchedMesh&&pe.batching===!0||G.isBatchedMesh&&pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&pe.instancing===!1||!G.isInstancedMesh&&pe.instancing===!0||G.isSkinnedMesh&&pe.skinning===!1||!G.isSkinnedMesh&&pe.skinning===!0||G.isInstancedMesh&&pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pe.instancingMorph===!1&&G.morphTexture!==null||pe.envMap!==Se||z.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Te.numPlanes||pe.numIntersection!==Te.numIntersection)||pe.vertexAlphas!==Fe||pe.vertexTangents!==He||pe.morphTargets!==be||pe.morphNormals!==Je||pe.morphColors!==xt||pe.toneMapping!==lt||pe.morphTargetsCount!==It||!!pe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,pe.__version=z.version);let $t=pe.currentProgram;qe===!0&&($t=us(z,P,G),N&&z.isNodeMaterial&&N.onUpdateProgram(z,$t,pe));let pn=!1,Wn=!1,Ui=!1,et=$t.getUniforms(),pt=pe.uniforms;if(y.useProgram($t.program)&&(pn=!0,Wn=!0,Ui=!0),z.id!==Y&&(Y=z.id,Wn=!0),pe.needsLights){let st=zu(w.state.lightProbeGridArray,G);pe.lightProbeGrid!==st&&(pe.lightProbeGrid=st,Wn=!0)}if(pn||Q!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),et.setValue(U,"projectionMatrix",M.projectionMatrix),et.setValue(U,"viewMatrix",M.matrixWorldInverse);let qn=et.map.cameraPosition;qn!==void 0&&qn.setValue(U,dt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Wn=!0,Ui=!0)}if(pe.needsLights&&(Ft.state.sunShadowMap.length>0&&et.setValue(U,"sunShadowMap",Ft.state.sunShadowMap,q),Ft.state.directionalShadowMap.length>0&&et.setValue(U,"directionalShadowMap",Ft.state.directionalShadowMap,q),Ft.state.spotShadowMap.length>0&&et.setValue(U,"spotShadowMap",Ft.state.spotShadowMap,q),Ft.state.pointShadowMap.length>0&&et.setValue(U,"pointShadowMap",Ft.state.pointShadowMap,q)),G.isSkinnedMesh){et.setOptional(U,G,"bindMatrix"),et.setOptional(U,G,"bindMatrixInverse");let st=G.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),et.setValue(U,"boneTexture",st.boneTexture,q))}G.isBatchedMesh&&(et.setOptional(U,G,"batchingTexture"),et.setValue(U,"batchingTexture",G._matricesTexture,q),et.setOptional(U,G,"batchingIdTexture"),et.setValue(U,"batchingIdTexture",G._indirectTexture,q),et.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&et.setValue(U,"batchingColorTexture",G._colorsTexture,q));let Xn=V.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&L.update(G,V,$t),(Wn||pe.receiveShadow!==G.receiveShadow)&&(pe.receiveShadow=G.receiveShadow,et.setValue(U,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(pt.envMapIntensity.value=P.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Mg()),Wn){if(et.setValue(U,"toneMappingExposure",I.toneMappingExposure),pe.needsLights&&Hu(pt,Ui),de&&z.fog===!0&&we.refreshFogUniforms(pt,de),we.refreshMaterialUniforms(pt,z,j,K,w.state.transmissionRenderTarget[M.id]),pe.needsLights&&pe.lightProbeGrid){let st=pe.lightProbeGrid;pt.probesSH.value=st.texture,pt.probesMin.value.copy(st.boundingBox.min),pt.probesMax.value.copy(st.boundingBox.max),pt.probesResolution.value.copy(st.resolution)}fr.upload(U,bc(pe),pt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fr.upload(U,bc(pe),pt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(U,"center",G.center),et.setValue(U,"modelViewMatrix",G.modelViewMatrix),et.setValue(U,"normalMatrix",G.normalMatrix),et.setValue(U,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let st=z.uniformsGroups;for(let qn=0,ki=st.length;qn<ki;qn++){let Sc=st[qn];ee.update(Sc,$t),ee.bind(Sc,$t)}}return $t}function Hu(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Vu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(M,P,V){let z=H.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=P,H.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let V=H.get(M);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,V=0){ne=M,W=P,X=V;let z=null,G=!1,de=!1;if(M){let ue=H.get(M);if(ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(M.viewport),Re.copy(M.scissor),Ee=M.scissorTest,y.viewport(te),y.scissor(Re),y.setScissorTest(Ee),Y=-1;return}else if(ue.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(ue.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&H.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let _e=M.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);let Se=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Se[P])?z=Se[P][V]:z=Se[P],G=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?z=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Se)?z=Se[V]:z=Se,te.copy(M.viewport),Re.copy(M.scissor),Ee=M.scissorTest}else te.copy(me).multiplyScalar(j).floor(),Re.copy(Be).multiplyScalar(j).floor(),Ee=Mt;if(V!==0&&(z=B),y.bindFramebuffer(U.FRAMEBUFFER,z)&&y.drawBuffers(M,z),y.viewport(te),y.scissor(Re),y.setScissorTest(Ee),G){let ue=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,V)}else if(de){let ue=P;for(let _e=0;_e<M.textures.length;_e++){let Se=H.get(M.textures[_e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_e,Se.__webglTexture,V,ue)}}else if(M!==null&&V!==0){let ue=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,V)}Y=-1};function Mc(M){let P=H.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=A.textureFormatReadable(M.format),P.__typeReadable=A.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,V,z,G,de,ge,ue=0){if(!(M&&M.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){y.bindFramebuffer(U.FRAMEBUFFER,_e);try{let Se=M.textures[ue],Fe=Se.format,He=Se.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);let be=Mc(Se);if(be.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-z&&V>=0&&V<=M.height-G&&U.readPixels(P,V,z,G,le.convert(Fe),le.convert(He),de)}finally{let Se=ne!==null?H.get(ne).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,P,V,z,G,de,ge,ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(P>=0&&P<=M.width-z&&V>=0&&V<=M.height-G){y.bindFramebuffer(U.FRAMEBUFFER,_e);let Se=M.textures[ue],Fe=Se.format,He=Se.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);let be=Mc(Se);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(P,V,z,G,le.convert(Fe),le.convert(He),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let xt=ne!==null?H.get(ne).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,xt);let lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ch(U,lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Je),U.deleteSync(lt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,V=0){let z=Math.pow(2,-V),G=Math.floor(M.image.width*z),de=Math.floor(M.image.height*z),ge=P!==null?P.x:0,ue=P!==null?P.y:0;q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ge,ue,G,de),y.unbindTexture()},this.copyTextureToTexture=function(M,P,V=null,z=null,G=0,de=0){let ge,ue,_e,Se,Fe,He,be,Je,xt,lt=M.isCompressedTexture?M.mipmaps[de]:M.image;if(V!==null)ge=V.max.x-V.min.x,ue=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Fe=V.min.y,He=V.isBox3?V.min.z:0;else{let pt=Math.pow(2,-G);ge=Math.floor(lt.width*pt),ue=Math.floor(lt.height*pt),M.isDataArrayTexture?_e=lt.depth:M.isData3DTexture?_e=Math.floor(lt.depth*pt):_e=1,Se=0,Fe=0,He=0}z!==null?(be=z.x,Je=z.y,xt=z.z):(be=0,Je=0,xt=0);let tt=le.convert(P.format),It=le.convert(P.type),pe;P.isData3DTexture?(q.setTexture3D(P,0),pe=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(q.setTexture2DArray(P,0),pe=U.TEXTURE_2D_ARRAY):(q.setTexture2D(P,0),pe=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let Ft=y.getParameter(U.UNPACK_ROW_LENGTH),qe=y.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=y.getParameter(U.UNPACK_SKIP_PIXELS),pn=y.getParameter(U.UNPACK_SKIP_ROWS),Wn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),y.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),y.pixelStorei(U.UNPACK_SKIP_IMAGES,He);let Ui=M.isDataArrayTexture||M.isData3DTexture,et=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let pt=H.get(M),Xn=H.get(P),st=H.get(pt.__renderTarget),qn=H.get(Xn.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,st.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let ki=0;ki<_e;ki++)Ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(M).__webglTexture,G,He+ki),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(P).__webglTexture,de,xt+ki)),U.blitFramebuffer(Se,Fe,ge,ue,be,Je,ge,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||H.has(M)){let pt=H.get(M),Xn=H.get(P);y.bindFramebuffer(U.READ_FRAMEBUFFER,C),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let st=0;st<_e;st++)Ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,G,He+st):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,G),et?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xn.__webglTexture,de,xt+st):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xn.__webglTexture,de),G!==0?U.blitFramebuffer(Se,Fe,ge,ue,be,Je,ge,ue,U.COLOR_BUFFER_BIT,U.NEAREST):et?U.copyTexSubImage3D(pe,de,be,Je,xt+st,Se,Fe,ge,ue):U.copyTexSubImage2D(pe,de,be,Je,Se,Fe,ge,ue);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else et?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(pe,de,be,Je,xt,ge,ue,_e,tt,It,lt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(pe,de,be,Je,xt,ge,ue,_e,tt,lt.data):U.texSubImage3D(pe,de,be,Je,xt,ge,ue,_e,tt,It,lt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,be,Je,ge,ue,tt,It,lt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,be,Je,lt.width,lt.height,tt,lt.data):U.texSubImage2D(U.TEXTURE_2D,de,be,Je,ge,ue,tt,It,lt);y.pixelStorei(U.UNPACK_ROW_LENGTH,Ft),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe),y.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),y.pixelStorei(U.UNPACK_SKIP_ROWS,pn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Wn),de===0&&P.generateMipmaps&&U.generateMipmap(pe),y.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){W=0,X=0,ne=null,y.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var mr={firstSpawn:200,gapMin:90,gapMax:150,radius:4,buildUp:20,rageMin:35,rageMax:55,fade:10,damage:{infantry:14,light:10,heavy:5,building:2},seedRate:1.2,seedAmount:150};var vt={infantry:{label:"Infantry",speed:1.2,maxHp:50,radius:5,cost:60,producer:"barracks",needs:null,armor:"infantry",weapon:"rifle",faction:"concord"},rocketInfantry:{label:"Rocket Trooper",speed:1.1,maxHp:45,radius:5,cost:100,producer:"barracks",needs:null,armor:"infantry",weapon:"rocket",faction:"any"},quad:{label:"Quad",speed:3.5,maxHp:120,radius:9,cost:260,producer:"lightFactory",needs:null,armor:"light",weapon:"mg",faction:"concord"},raider:{label:"Raider",speed:4.6,maxHp:80,radius:8,cost:150,producer:"lightFactory",needs:null,armor:"light",weapon:"raiderGun",faction:"any"},tank:{label:"Tank",speed:2,maxHp:450,radius:11,cost:620,producer:"heavyFactory",needs:null,armor:"heavy",weapon:"cannon",faction:"concord"},artillery:{label:"Artillery",speed:1.5,maxHp:160,radius:11,cost:720,producer:"heavyFactory",needs:"radar",armor:"light",weapon:"artilleryShell",faction:"concord"},harvester:{label:"Harvester",speed:1.6,maxHp:400,radius:13,cost:1100,producer:"heavyFactory",needs:null,armor:"heavy",weapon:null,faction:"any"},gunship:{label:"Gunship",speed:4.2,maxHp:220,radius:12,cost:900,producer:"airfield",needs:null,armor:"light",weapon:"gunRockets",faction:"any"},dropship:{label:"Dropship",speed:3.6,maxHp:380,radius:14,cost:700,producer:"airfield",needs:null,armor:"heavy",weapon:null,faction:"any"},bomber:{label:"Bomber",speed:2.6,maxHp:420,radius:15,cost:1800,producer:"airfield",needs:"techCenter",armor:"heavy",weapon:"bombs",faction:"any"},outpostTruck:{label:"Outpost Truck",speed:1.5,maxHp:500,radius:13,cost:1600,producer:"heavyFactory",needs:null,armor:"heavy",weapon:null,faction:"any"},drillRig:{label:"Drill Rig",speed:1.6,maxHp:450,radius:12,cost:700,producer:"heavyFactory",needs:null,armor:"heavy",weapon:null,faction:"concord"},glasswalker:{label:"Glasswalker",speed:1.3,maxHp:55,radius:5,cost:70,producer:"barracks",needs:null,armor:"infantry",weapon:"shardRifle",faction:"shardbound"},skimmer:{label:"Skimmer",speed:4.2,maxHp:100,radius:9,cost:260,producer:"lightFactory",needs:null,armor:"light",weapon:"shardRepeater",faction:"shardbound"},prismTank:{label:"Prism Tank",speed:2.3,maxHp:410,radius:11,cost:680,producer:"heavyFactory",needs:null,armor:"heavy",weapon:"prismBeam",faction:"shardbound"},resonator:{label:"Resonator",speed:1.6,maxHp:150,radius:11,cost:800,producer:"heavyFactory",needs:"radar",armor:"light",weapon:"resonance",faction:"shardbound"},scrapper:{label:"Scrapper",speed:1.3,maxHp:50,radius:5,cost:60,producer:"barracks",needs:null,armor:"infantry",weapon:"scattergun",faction:"reclaimers"},junker:{label:"Junker",speed:4,maxHp:95,radius:8,cost:250,producer:"lightFactory",needs:null,armor:"light",weapon:"flamer",faction:"reclaimers"},wrecker:{label:"Wrecker",speed:1.9,maxHp:400,radius:11,cost:600,producer:"heavyFactory",needs:null,armor:"heavy",weapon:"autocannon",faction:"reclaimers"},mortarCrawler:{label:"Mortar Crawler",speed:1.4,maxHp:140,radius:10,cost:600,producer:"heavyFactory",needs:"radar",armor:"light",weapon:"mortar",faction:"reclaimers"},medic:{label:"Field Medic",speed:1.3,maxHp:60,radius:5,cost:200,producer:"barracks",needs:null,armor:"infantry",weapon:null,faction:"concord"},mender:{label:"Mender",speed:1.3,maxHp:65,radius:5,cost:250,producer:"barracks",needs:null,armor:"infantry",weapon:null,faction:"shardbound"},mechanic:{label:"Mechanic",speed:1.3,maxHp:60,radius:5,cost:200,producer:"barracks",needs:null,armor:"infantry",weapon:null,faction:"reclaimers"},marksman:{label:"Marksman",speed:1.1,maxHp:45,radius:5,cost:400,producer:"barracks",needs:"radar",armor:"infantry",weapon:"marksmanRifle",faction:"concord"},lancer:{label:"Lancer",speed:1.2,maxHp:50,radius:5,cost:450,producer:"barracks",needs:"radar",armor:"infantry",weapon:"lancerBeam",faction:"shardbound"},deadeye:{label:"Deadeye",speed:1.2,maxHp:45,radius:5,cost:420,producer:"barracks",needs:"radar",armor:"infantry",weapon:"deadeyeRifle",faction:"reclaimers"},bastion:{label:"Bastion",speed:1.5,maxHp:900,radius:13,cost:1450,producer:"heavyFactory",needs:"techCenter",armor:"heavy",weapon:"twinCannon",faction:"concord"},monolith:{label:"Monolith",speed:1.6,maxHp:700,radius:13,cost:1600,producer:"heavyFactory",needs:"techCenter",armor:"heavy",weapon:"monolithBeam",faction:"shardbound"},vance:{label:"Captain Vance",speed:1.6,maxHp:400,radius:6,cost:2e3,producer:"barracks",needs:"techCenter",armor:"infantry",weapon:"vancePistols",faction:"concord"},seer:{label:"The Seer",speed:1.5,maxHp:350,radius:6,cost:2e3,producer:"barracks",needs:"techCenter",armor:"infantry",weapon:"seerBeam",faction:"shardbound"},rook:{label:"Boss Rook",speed:1.4,maxHp:480,radius:6,cost:2e3,producer:"barracks",needs:"techCenter",armor:"infantry",weapon:"rookCannon",faction:"reclaimers"},titan:{label:"Scrap Titan",speed:1.3,maxHp:1e3,radius:14,cost:1500,producer:"heavyFactory",needs:"techCenter",armor:"heavy",weapon:"scrapCannon",faction:"reclaimers"}};var ql={capacity:700,harvestRate:50,unloadRate:200,searchRadius:24,fieldRadius:6},un={yard:{label:"Construction Yard",w:3,h:3,maxHp:1e3,cost:0,power:0,requires:null,weapon:null},power:{label:"Power Plant",w:2,h:2,maxHp:500,cost:300,power:100,requires:"yard",weapon:null},refinery:{label:"Refinery",w:3,h:2,maxHp:900,cost:1500,power:-30,requires:"power",weapon:null},barracks:{label:"Barracks",w:2,h:2,maxHp:600,cost:300,power:-20,requires:"power",weapon:null},turret:{label:"Gun Turret",w:1,h:1,maxHp:700,cost:600,power:-15,requires:"barracks",weapon:"turretGun"},lightFactory:{label:"Light Factory",w:3,h:2,maxHp:700,cost:400,power:-25,requires:"refinery",weapon:null},radar:{label:"Radar Outpost",w:2,h:2,maxHp:600,cost:800,power:-30,requires:"refinery",weapon:null},heavyFactory:{label:"Heavy Factory",w:3,h:3,maxHp:1e3,cost:1e3,power:-35,requires:"lightFactory",weapon:null},repairPad:{label:"Repair Pad",w:2,h:2,maxHp:600,cost:700,power:-20,requires:"heavyFactory",weapon:null},rocketTurret:{label:"Rocket Turret",w:1,h:1,maxHp:650,cost:900,power:-25,requires:"radar",weapon:"turretRocket"},techCenter:{label:"Tech Center",w:3,h:3,maxHp:1e3,cost:1500,power:-50,requires:"radar",weapon:null},outpost:{label:"Forward Outpost",w:2,h:2,maxHp:700,cost:1600,power:-10,requires:"refinery",weapon:null},deepDrill:{label:"Deep Drill",w:2,h:2,maxHp:600,cost:900,power:-25,requires:"refinery",weapon:null,faction:"concord"},seedSpire:{label:"Seed Spire",w:1,h:1,maxHp:450,cost:700,power:-15,requires:"refinery",weapon:null,faction:"shardbound"},silo:{label:"Silo",w:1,h:1,maxHp:400,cost:150,power:-5,requires:"refinery",weapon:null},uplink:{label:"Orbital Uplink",w:3,h:3,maxHp:1500,cost:3e3,power:-80,requires:"techCenter",weapon:null,faction:"concord"},stormHeart:{label:"Storm Heart",w:3,h:3,maxHp:1500,cost:3e3,power:-80,requires:"techCenter",weapon:null,faction:"shardbound"},scrapHive:{label:"Scrap Hive",w:3,h:3,maxHp:1500,cost:3e3,power:-80,requires:"techCenter",weapon:null,faction:"reclaimers"},airfield:{label:"Airfield",w:3,h:2,maxHp:900,cost:1e3,power:-30,requires:"radar",weapon:null},flakTurret:{label:"Flak Turret",w:1,h:1,maxHp:600,cost:800,power:-20,requires:"radar",weapon:"flak"},wall:{label:"Wall",w:1,h:1,maxHp:500,cost:25,power:0,requires:"barracks",weapon:null},gate:{label:"Gate",w:1,h:1,maxHp:700,cost:150,power:0,requires:"barracks",weapon:null}};var Sg=["gunship","dropship","bomber"],ui=i=>Sg.includes(i);var cu={frames:32,size:96,scale:.5},sv={...cu,scale:cu.scale*1.25};var di={Sand:0,Rock:1,Cliff:2},Pi={Crystal:0,Dense:1,StormGlass:2,Core:3};function Nt(i,e,t){return t*i.w+e}function dn(i,e,t){return e>=0&&t>=0&&e<i.w&&t<i.h}function uu(i,e){let t=i.spice[e],n=i.vein[e];return t<=0?0:(n===Pi.Core?1+Math.min(5,Math.floor(t/7)):1+Math.min(5,Math.floor(t/(n===Pi.Dense?170:90))))*8+n}var wg={[di.Sand]:0,[di.Rock]:1,[di.Cliff]:2};var Tg=.38;function la(i,e,t){let n=i*374761393+e*668265263+t*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var ha=i=>i*i*(3-2*i),Hn=480,An=(i,e)=>(i%e+e)%e;function Yl(i,e,t,n){let r=Hn/t,s=i/t,a=e/t,o=Math.floor(s),c=Math.floor(a),l=ha(s-o),h=ha(a-c),f=la(An(o,r),An(c,r),n),u=la(An(o+1,r),An(c,r),n),x=la(An(o,r),An(c+1,r),n),g=la(An(o+1,r),An(c+1,r),n);return(f+(u-f)*l)*(1-h)+(x+(g-x)*l)*h}function Eg(i,e,t){return .55*Yl(i,e,40,t)+.3*Yl(i,e,16,t+1)+.15*Yl(i,e,6,t+2)}var Kl=new Map;function Ag(i,e){let t=Kl.get(i);if(!t){t=new Float32Array(Hn*Hn);for(let n=0;n<Hn;n++)for(let r=0;r<Hn;r++)t[n*Hn+r]=e(r,n);Kl.set(i,t)}return t}var Rg=(i,e,t)=>i[An(Math.floor(t),Hn)*Hn+An(Math.floor(e),Hn)];function Cg(i,e,t){let n=Kl.get(t*1e3)??Ag(t*1e3,(r,s)=>Eg(r,s,t));return Rg(n,i,e)}function ca(i,e,t){let n=Math.min(i.w-1,Math.max(0,e)),r=Math.min(i.h-1,Math.max(0,t));return wg[i.terrain[Nt(i,n,r)]]}function du(i,e,t,n=0){let r=e/32-.5,s=t/32-.5,a=Math.floor(r),o=Math.floor(s),c=ha(r-a),l=ha(s-o),h=ca(i,a,o),f=ca(i,a+1,o),u=ca(i,a,o+1),x=ca(i,a+1,o+1),g=(h+(f-h)*c)*(1-l)+(u+(x-u)*c)*l,d=Math.min(1,2*Math.hypot(r-Math.round(r),s-Math.round(s)));return g+(Cg(e,t,n)-.5)*2*Tg*d}var Jl=36,Zl=22,fu=50;function Rn(i,e,t){let n=Math.max(0,du(i,Math.min(Math.max(e,0),i.w*32-1),Math.min(Math.max(t,0),i.h*32-1)));return n<=1?n*Zl:Zl+(n-1)*fu}var ua=Zl+1.4*fu,$l=i=>i*Math.PI/180;function pu(i,e,t,n,r,s){let a=$l(t.pitch);return{x:(n-i)*t.zoom,y:((r-e)*Math.sin(a)-s*Math.cos(a))*t.zoom}}function Ig(i,e,t,n,r){let s=$l(t.pitch),a=r/2/Math.tan($l(Jl)/2),o=a/t.zoom,c=Math.sin(s),l=Math.cos(s);return{eye:[i,o*c,e+o*l],f:[0,-c,-l],r:[1,0,0],u:[0,l,-c],focal:a,width:n,height:r,distance:o}}function mu(i,e,t,n){let r=e-i.eye[0],s=n-i.eye[1],a=t-i.eye[2],o=r*i.f[0]+s*i.f[1]+a*i.f[2],c=r*i.r[0]+s*i.r[1]+a*i.r[2],l=r*i.u[0]+s*i.u[1]+a*i.u[2],h=i.focal/Math.max(o,.001);return{x:i.width/2+c*h,y:i.height/2-l*h,depth:o}}function ss(i,e,t,n){let r=(t-e.width/2)/e.focal,s=-(n-e.height/2)/e.focal,a=[e.f[0]+e.r[0]*r+e.u[0]*s,e.f[1]+e.r[1]*r+e.u[1]*s,e.f[2]+e.r[2]*r+e.u[2]*s],o=Math.min(a[1],-.05),c=-e.eye[1]/o;for(let l=0;l<10;l++){let h=e.eye[0]+a[0]*c,f=e.eye[2]+a[2]*c,u=(Rn(i,h,f)-e.eye[1])/o;c=.5*c+.5*u}return{x:e.eye[0]+a[0]*c,y:e.eye[2]+a[2]*c}}function gu(i,e,t,n){return Ig(i.x+i.w/2,i.y+i.h/2,e,t,n)}function xu(i,e){let t=Math.min(e,i.life)-Math.min(e,i.life)**2/(2*i.life);return{x:i.x+(i.vx??0)*t,y:i.y+(i.vy??0)*t}}var xr={charge:300,orbitalDelay:3,orbitalRadius:3.5,orbitalDamage:650,stormRage:30,swarmLife:12,swarmRadius:3.5,swarmBite:22,swarmPay:.6};function ic(i){let e=Math.min(1,i.age/mr.buildUp),t=Math.min(1,(i.life-i.age)/mr.fade);return mr.radius*Math.max(.15,Math.min(e,t))}var Jg=3e3,jg=2500,Qg=1500,rc=600,Cu=6,ex=`
attribute vec3 iPos;
attribute vec2 iSize;
attribute vec4 iColor;
attribute float iRot;
varying vec2 vUv;
varying vec4 vColor;
void main() {
  vUv = uv;
  vColor = iColor;
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  float c = cos(iRot);
  float s = sin(iRot);
  vec2 p = position.xy * iSize;
  mv.xy += vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  // Drawn facing the camera; pulled towards it a little so the ground doesn't cut the bottom off.
  mv.z += max(iSize.x, iSize.y) * 0.5;
  gl_Position = projectionMatrix * mv;
}`,tx=`
uniform sampler2D map;
varying vec2 vUv;
varying vec4 vColor;
void main() {
  vec4 t = texture2D(map, vUv);
  float a = vColor.a * t.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb * t.rgb, a);
}`,nx=`
attribute vec3 iA;
attribute vec3 iB;
attribute float iWidth;
attribute vec4 iColor;
varying vec2 vAt;
varying vec4 vColor;
void main() {
  vColor = iColor;
  vAt = position.xy;
  vec4 a = viewMatrix * vec4(iA, 1.0);
  vec4 b = viewMatrix * vec4(iB, 1.0);
  vec2 d = b.xy - a.xy;
  float len = length(d);
  vec2 dir = len > 0.001 ? d / len : vec2(1.0, 0.0);
  vec2 n = vec2(-dir.y, dir.x);
  vec4 p = mix(a, b, position.x);
  // As wide as asked, with rounded-off ends half a width past each point.
  p.xy += n * position.y * iWidth * 0.5 + dir * (position.x * 2.0 - 1.0) * iWidth * 0.5;
  p.z += 6.0;
  gl_Position = projectionMatrix * p;
}`,ix=`
varying vec2 vAt;
varying vec4 vColor;
void main() {
  float k = 1.0 - abs(vAt.y);
  float a = vColor.a * k * k;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`;function rx(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,0.6)"),t.addColorStop(.65,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Iu(i)}function sx(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=[[32,32,22],[22,26,14],[42,24,13],[40,40,14],[24,40,12]];for(let[n,r,s]of t){let a=e.createRadialGradient(n,r,0,n,r,s);a.addColorStop(0,"rgba(255,255,255,0.9)"),a.addColorStop(.6,"rgba(235,235,235,0.5)"),a.addColorStop(1,"rgba(220,220,220,0)"),e.fillStyle=a,e.fillRect(0,0,64,64)}return Iu(i)}function Iu(i){let e=new wi(i);return e.generateMipmaps=!1,e.minFilter=ht,e.magFilter=ht,e}function pi(i,e,t,n){let r=new Float32Array(n*t),s=new bn(r,t);return s.setUsage(Sl),i.setAttribute(e,s),r}var xa=class{mesh;geo=new sr;pos;size;color;rot;max;n=0;constructor(e,t,n,r){this.max=e;let s=new Bn(1,1);this.geo.index=s.index,this.geo.setAttribute("position",s.getAttribute("position")),this.geo.setAttribute("uv",s.getAttribute("uv")),this.pos=pi(this.geo,"iPos",3,e),this.size=pi(this.geo,"iSize",2,e),this.color=pi(this.geo,"iColor",4,e),this.rot=pi(this.geo,"iRot",1,e);let a=new bt({vertexShader:ex,fragmentShader:tx,uniforms:{map:{value:t}},transparent:!0,depthWrite:!1,blending:n});this.mesh=new ut(this.geo,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r}add(e,t,n,r,s,a,o,c,l,h=0){if(this.n>=this.max||l<=.004||r<=0)return;let f=this.n++;this.pos.set([e,n,t],f*3),this.size.set([r,s],f*2),this.color.set([a,o,c,Math.min(1,l)],f*4),this.rot[f]=h}commit(){this.geo.instanceCount=this.n;for(let e of["iPos","iSize","iColor","iRot"])this.geo.getAttribute(e).needsUpdate=!0}dispose(){this.geo.dispose(),this.mesh.material.dispose()}},sc=class{mesh;geo=new sr;a;b;width;color;max;n=0;constructor(e){this.max=e,this.geo.setAttribute("position",new mt(new Float32Array([0,-1,0,1,-1,0,1,1,0,0,1,0]),3)),this.geo.setIndex([0,1,2,0,2,3]),this.a=pi(this.geo,"iA",3,e),this.b=pi(this.geo,"iB",3,e),this.width=pi(this.geo,"iWidth",1,e),this.color=pi(this.geo,"iColor",4,e);let t=new bt({vertexShader:nx,fragmentShader:ix,transparent:!0,depthWrite:!1,blending:ar});this.mesh=new ut(this.geo,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12}add(e,t,n,r,s,a,o,c,l,h,f){if(this.n>=this.max||f<=.004)return;let u=this.n++;this.a.set([e,n,t],u*3),this.b.set([r,a,s],u*3),this.width[u]=o,this.color.set([c,l,h,Math.min(1,f)],u*4)}commit(){this.geo.instanceCount=this.n;for(let e of["iA","iB","iWidth","iColor"])this.geo.getAttribute(e).needsUpdate=!0}dispose(){this.geo.dispose(),this.mesh.material.dispose()}},ox=i=>{let e=parseInt(i.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255]},ya=class{group=new jt;glowTex=rx();puffTex=sx();glows=new xa(Jg,this.glowTex,ar,13);puffs=new xa(jg,this.puffTex,oi,11);streaks=new sc(Qg);chunks;nChunks=0;lights=[];flares=[];m4=new Ke;q=new Ut;e=new Bt;v=new D;s=new D;c=new Ce;shade=1;constructor(){this.chunks=new Si(new vn(1,1,1),new Mn({color:16777215}),rc),this.chunks.instanceColor=new bn(new Float32Array(rc*3),3),this.chunks.frustumCulled=!1,this.chunks.count=0,this.group.add(this.chunks,this.puffs.mesh,this.streaks.mesh,this.glows.mesh);for(let e=0;e<Cu;e++){let t=new Wr(16752720,0,100,0);this.lights.push(t),this.group.add(t)}}update(e,t){this.glows.n=0,this.puffs.n=0,this.streaks.n=0,this.nChunks=0,this.flares=[];let n=e.weather.light;this.shade=.35+.65*n;let r=(s,a,o)=>t.inView(s,a,o)&&t.seen(s,a);for(let s of e.effects)if(!(s.kind==="scorch"||s.kind==="shake"||s.kind==="ring")){if(s.kind==="wreck"){r(s.x,s.y,40)&&this.wreckSmoke(s,t);continue}!r(s.x,s.y,80)&&!r(s.x2,s.y2,80)||this.effect(s,t)}for(let s of e.projectiles)r(s.x,s.y,40)&&this.projectile(s,t);for(let s of e.buildings)this.burning(s,e.time,t);for(let s of e.units){if(!r(s.x,s.y,60))continue;let a=vt[s.kind];if(a.armor!=="infantry"&&s.hp<a.maxHp*.35&&this.damageSmoke(s.id,s.x,s.y,t.bodyHeight(s.x,s.y)+8,a.radius,s.hp/a.maxHp,e.time),n<.95&&a.armor!=="infantry"&&s.owner===e.local){let o=(1-n)/.7,c=a.radius,l=s.x+Math.cos(s.angle)*c*1.1,h=s.y+Math.sin(s.angle)*c*1.1;this.glows.add(l,h,t.bodyHeight(s.x,s.y)+5,c*1.4,c*1.4,1,.94,.78,.45*o)}}for(let s of e.storms)t.inView(s.x,s.y,ic(s)*32*1.5)&&this.storm(s,e.time,t);for(let s of e.strikes)t.inView(s.x,s.y,200)&&this.strike(s,e.time,t);this.glows.commit(),this.puffs.commit(),this.streaks.commit(),this.chunks.count=this.nChunks,this.chunks.instanceMatrix.needsUpdate=!0,this.chunks.instanceColor&&(this.chunks.instanceColor.needsUpdate=!0),this.light(n)}light(e){this.flares.sort((n,r)=>r.power-n.power);let t=.6+1.6*(1-e);for(let n=0;n<Cu;n++){let r=this.lights[n],s=this.flares[n];if(!s){r.intensity=0;continue}r.position.set(s.x,s.h+14,s.y),r.distance=s.reach,r.intensity=s.power*t}}flare(e,t,n,r,s){r>.05&&this.flares.push({x:e,y:t,h:n,power:r,reach:s})}smoke(e,t,n,r,s,a,o=0){let c=s*this.shade;this.puffs.add(e,t,n,r,r,c,c*.97,c*.93,a,o)}chunk(e,t,n,r,s,a,o,c,l){this.nChunks>=rc||(this.e.set(c,o,c*.7),this.q.setFromEuler(this.e),this.m4.compose(this.v.set(e,n,t),this.q,this.s.set(r,s,a)),this.chunks.setMatrixAt(this.nChunks,this.m4),this.chunks.setColorAt(this.nChunks,this.c.setHex(l)),this.nChunks++)}effect(e,t){let n=e.age/e.life,r=this.glows;switch(e.kind){case"fire":{let s=n<.25?n/.25:1-(n-.25)*.5,a=16*e.size*s,o=t.bodyHeight(e.x,e.y)+a*.5+14*n*e.size;r.add(e.x,e.y,o,a*2.6,a*2.6,1,.55,.2,1-n),r.add(e.x,e.y,o,a*1.3,a*1.3,1,.95,.8,1-n),n>.4&&this.smoke(e.x,e.y,o+a*.6,a*2.2,.4,.6*(1-n),e.x),this.flare(e.x,e.y,o,1.6*e.size*(1-n),90*Math.max(1,e.size));break}case"plume":{let s=t.ground(e.x,e.y)+6;for(let a=0;a<7;a++){let o=(e.age*.6+a/7)%1,c=.8*(1-o)*Math.min(1,(1-n)*3)*Math.min(1,e.age*4),l=(6+o*16)*e.size;this.smoke(e.x+Math.sin(a*2.1+e.age)*4*e.size+o*12,e.y,s+o*100*e.size,l*2.4,.5,c,a*1.9+e.age*.4)}break}case"debris":case"shard":case"spark":{let s=xu(e,e.age),a=t.ground(s.x,s.y),o=t.bodyHeight(e.x,e.y)-t.ground(e.x,e.y),c=Math.sin(Math.min(1,n*1.4)*Math.PI)*(e.kind==="spark"?10:22)*e.size,l=a+1.5+c+o*Math.max(0,1-n*1.6),h=(e.spin??0)*e.age;if(e.kind==="spark")this.streaks.add(s.x,s.y,l,s.x-(e.vx??0)*.04,s.y-(e.vy??0)*.04,l-2,1.8,1,.86-.4*n,.47,1-n);else if(e.kind==="shard"){let f=4*e.size,[u,x,g]=ox(e.color??"#6fe3f0"),d=Math.min(1,(1-n)*2);r.add(s.x,s.y,l+f*.5,f*4,f*4,u,x,g,d*.55),this.chunk(s.x,s.y,l+f*.5,f*.5,f*1.6,f*.5,h,h*.7,e.color?parseInt(e.color.slice(1),16):7332848)}else{let f=2.6*e.size;n<.92&&this.chunk(s.x,s.y,l+f*.4,f*2,f*1.1,f*1.5,h,h*.5,3814188)}break}case"muzzle":{let s=t.gunHeight(e.x,e.y),a=10*e.size*(1-n*.5);r.add(e.x,e.y,s,a*2.4,a*2.4,1,.75,.4,1-n),r.add(e.x,e.y,s,a,a,1,.97,.85,1-n),this.flare(e.x,e.y,s,.7*e.size*(1-n),70);break}case"tracer":{let s=t.gunHeight(e.x2,e.y2),a=t.bodyHeight(e.x,e.y)+4;this.streaks.add(e.x2,e.y2,s,e.x,e.y,a,2.2,1,.92,.59,1-n);break}case"beam":{let s=t.gunHeight(e.x2,e.y2),a=t.bodyHeight(e.x,e.y)+4;this.streaks.add(e.x2,e.y2,s,e.x,e.y,a,8,.37,.85,.94,.55*(1-n)),this.streaks.add(e.x2,e.y2,s,e.x,e.y,a,2.5,.92,1,1,1-n),r.add(e.x,e.y,a,16,16,.5,.9,1,.8*(1-n)),this.flare(e.x,e.y,a,.6*(1-n),60);break}case"heal":{let s=t.gunHeight(e.x2,e.y2),a=t.bodyHeight(e.x,e.y)+4;this.streaks.add(e.x2,e.y2,s,e.x,e.y,a,4,.47,.94,.55,.55*(1-n)),r.add(e.x,e.y,a,14+16*n,14+16*n,.6,1,.65,.7*(1-n));break}case"flame":{let s=t.gunHeight(e.x2,e.y2),a=t.bodyHeight(e.x,e.y)+3;for(let o=0;o<=6;o++){let c=o/6,l=4+c*(9+6*n),h=Math.sin(e.age*30+o*1.7)*2*c;r.add(e.x2+(e.x-e.x2)*c,e.y2+(e.y-e.y2)*c,s+(a-s)*c+h+c*4,l*2.4,l*2.4,1,.95-.55*c,.6-.5*c,(.9-.4*c)*(1-n))}this.flare(e.x,e.y,a,.8*(1-n),80);break}case"smoke":{let s=t.gunHeight(e.x,e.y)-4;this.smoke(e.x,e.y,s+10*n,(4+9*n)*1.6,.6,.5*(1-n),e.x+e.y);break}case"hit":{let s=t.bodyHeight(e.x,e.y)+4;r.add(e.x,e.y,s,(2+3*n)*4,(2+3*n)*4,1,.86,.47,1-n);break}case"boom":case"bigBoom":{let s=(e.kind==="bigBoom"?18:10)*e.size*(.4+n),a=t.bodyHeight(e.x,e.y)+s*.6;this.smoke(e.x,e.y,a+n*16,s*2.8,.4,.6*(1-n),e.x),r.add(e.x,e.y,a,s*2.4*(1-n*.5),s*2.4*(1-n*.5),1,.78-.47*n,.24,1-n),this.flare(e.x,e.y,a,(e.kind==="bigBoom"?2:1.2)*(1-n),100);break}}}wreckSmoke(e,t){let n=t.ground(e.x,e.y)+6*e.size;if(e.age<8){let r=.5+.5*Math.sin(e.age*23+e.x);this.glows.add(e.x+3*e.size,e.y,n+2,(6+6*r)*e.size,(6+6*r)*e.size,1,.55+.3*r,.2,.8*(1-e.age/8)),this.flare(e.x,e.y,n,.5*(1-e.age/8),50)}if(e.age<20)for(let r=0;r<3;r++){let s=(e.age*.7+r*.33)%1;this.smoke(e.x+2+s*6,e.y,n+s*34,(5+s*10)*2.2,.55,.7*(1-s)*(1-e.age/20),r*2.1)}}projectile(e,t){let n=Math.hypot(e.tx-e.sx,e.ty-e.sy)||1,r=Math.min(1,Math.hypot(e.x-e.sx,e.y-e.sy)/n),s=t.gunHeight(e.sx,e.sy),a=t.bodyHeight(e.tx,e.ty)+4,o=s+(a-s)*r;if(e.style==="arc"){o+=Math.sin(r*Math.PI)*Math.min(90,n*.35),this.chunk(e.x,e.y,o,4,4,4,r*9,r*7,3813672),this.glows.add(e.x,e.y,o,9,9,1,.7,.4,.35);return}let c=Math.atan2(e.ty-e.y,e.tx-e.x),l=Math.cos(c),h=Math.sin(c);if(e.style==="rocket"){this.chunk(e.x,e.y,o,3,3,3,-c,0,14212580),this.streaks.add(e.x-l*12,e.y-h*12,o,e.x-l*3,e.y-h*3,o,4,1,.65,.25,.9),this.glows.add(e.x-l*6,e.y-h*6,o,14,14,1,.6,.25,.8),this.flare(e.x,e.y,o,.35,50);return}this.streaks.add(e.x-l*9,e.y-h*9,o,e.x,e.y,o,2.4,1,.86,.55,.8),this.glows.add(e.x,e.y,o,9,9,1,.86,.55,.9)}burning(e,t,n){let r=e.hp/un[e.kind].maxHp;if(r>=.5||e.hp<=0)return;let s=n.roof(e);if(s===null)return;let a=e.w*32,o=e.h*32,c=r<.25?2:1,l=r<.25?1.3:.8;for(let h=0;h<c;h++){let f=e.id*7.3+h*3.1,u=e.tx*32+a*(.3+.4*((Math.sin(f)+1)/2)),x=e.ty*32+o*(.3+.4*((Math.cos(f*1.7)+1)/2));if(!(!n.seen(u,x)&&!n.seen(u,x+32))){for(let g=0;g<7;g++){let d=(t*.45+g/7+h*.37)%1,m=(5+d*15)*l;this.smoke(u+Math.sin(g*2.3+t)*3+d*18,x,s+4+d*110*l,m*2.6,.62,.9*Math.sqrt(1-d)*Math.min(1,d*4+.4),g*1.3+t*.2)}if(r<.25){for(let g=0;g<3;g++){let d=.6+.4*Math.sin(t*(13+g*4)+f+g),m=(6+3*g)*d;this.glows.add(u+(g-1)*5,x,s+m*.8,m*1.6,m*2.6,1,.6,.2,.95)}this.flare(u,x,s,1.2,110)}}}}damageSmoke(e,t,n,r,s,a,o){let c=a<.15?1.3:1,l=s/11;for(let h=0;h<5;h++){let f=(o*.7+h/5+e*.13)%1,u=(4+f*10)*l*c*2.2;this.smoke(t-2*l+f*10,n,r+f*50*l,u,.62,.9*Math.sqrt(1-f)*Math.min(1,f*4+.4),h*1.7+e)}a<.15&&(o*3+e)%1<.15&&this.glows.add(t-2*l,n,r,9*l,12*l,1,.6,.2,.9)}storm(e,t,n){let r=ic(e)*32,s=Math.min(1,e.age/2,(e.life-e.age)/2),a=n.ground(e.x,e.y);for(let h=0;h<30;h++){let f=h*2.17+t*(.35+h%3*.12),u=r*(.45+h%4*.17),x=h%6,g=r*(.38+h%5*.07),m=(x>=4?.5:.28)*this.shade;this.puffs.add(e.x+Math.cos(f)*u,e.y+Math.sin(f)*u*.85,a+18+x*26,g*2.2,g*2.2,m*.85,m*.95,m*1.1,.5*s,f)}let o=Math.max(0,Math.sin(t*.9+e.id)*Math.sin(t*2.3+1))**3;this.glows.add(e.x,e.y,a+70,r*1.8,r*1.8,.45,.85,.95,(.12+o*.45)*s);for(let h=0;h<60;h++){let f=t*(1.2+h%5*.25)+h*2.39,u=r*(.2+h*37%80/100),x=a+8+h*53%140,g=.5+.5*Math.sin(t*7+h);this.glows.add(e.x+Math.cos(f)*u,e.y+Math.sin(f)*u*.85,x,5+g*4,5+g*4,.6,.95,1,(.4+.6*g)*s)}let c=Math.floor(t*1.3+e.id*.37),l=t*1.3+e.id*.37-c;if(l<.12&&c*2654435761%5<2){let h=(1-l/.12)*s,f=c*1.618%1*Math.PI*2,u=e.x+Math.cos(f)*r*.5,x=e.y+Math.sin(f)*r*.5,g=e.x,d=e.y,m=a+150;for(let p=1;p<=7;p++){let v=p/7,E=Math.sin(c*12.9898+p*78.233)*14*(1-v*.5),b=e.x+(u-e.x)*v+E,S=e.y+(x-e.y)*v-E*.5,w=p===7?n.ground(u,x):a+150*(1-v);this.streaks.add(g,d,m,b,S,w,9,.43,.89,.94,.45*h),this.streaks.add(g,d,m,b,S,w,2.5,.85,.98,1,h),g=b,d=S,m=w}this.glows.add(u,x,n.ground(u,x)+6,50,50,.6,.95,1,h),this.flare(u,x,n.ground(u,x),2.5*h,220)}}strike(e,t,n){let r=n.ground(e.x,e.y);if(e.kind==="orbital"){let s=xr.orbitalRadius*32;if(e.age<xr.orbitalDelay){let a=e.age/xr.orbitalDelay;this.streaks.add(e.x,e.y,r+1200,e.x,e.y,r,4,1,.47,.35,.2+.4*a)}else{let a=1-(e.age-xr.orbitalDelay);if(a<=0)return;this.streaks.add(e.x,e.y,r+1400,e.x,e.y,r,60*a,1,.75,.5,.6*a),this.streaks.add(e.x,e.y,r+1400,e.x,e.y,r,24*a,1,.97,.9,a),this.glows.add(e.x,e.y,r+20,s*2.6*a,s*2.6*a,1,.7,.4,a),this.flare(e.x,e.y,r,4*a,400)}}else if(e.kind==="swarm"){let s=xr.swarmRadius*32,a=Math.min(1,e.age,e.life-e.age);if(a<=0)return;for(let o=0;o<26;o++){let c=t*(1.5+o%5*.4)+o*2.4,l=s*(.2+o*37%80/100),h=e.x+Math.cos(c)*l,f=e.y+Math.sin(c*1.3)*l*.8,u=r+24+o*29%30+Math.sin(t*6+o)*4;this.chunk(h,f,u,6*a,2.5*a,4*a,-c,0,2828324),this.glows.add(h,f,u+1,6,6,1,o%3===0?.48:.8,.24,.8*a)}}}dispose(){this.glows.dispose(),this.puffs.dispose(),this.streaks.dispose(),this.chunks.geometry.dispose(),this.chunks.material.dispose(),this.glowTex.dispose(),this.puffTex.dispose()}};var va={0:3108784,1:12597547,2:3054190,3:9327288},Ma={concord:{body:14867663,dark:7828331,metal:4409682,accent:15905597,glass:10475775,apron:10131085,window:3493998},shardbound:{body:5925766,dark:2897222,metal:2041393,accent:7332848,glass:8381439,apron:4607838,window:6279400},reclaimers:{body:10714194,dark:5915954,metal:7037785,accent:16738877,glass:16757610,apron:7759439,window:2893602}},ax=14267535,lx=2764083,ac=2303531,Uu=5922921,cc=16773572,yr=1910579;function ye(i,e){let t=new Ce(i);return t.multiplyScalar(e),t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t.getHex()}function cx(i,e,t,n){let r=-i/2,s=i/2,a=-t/2,o=t/2,c=-e/2,l=e/2,h=[[r+(n.bb??0),c,a+(n.bs??0)],[s-(n.bf??0),c,a+(n.bs??0)],[s-(n.bf??0),c,o-(n.bs??0)],[r+(n.bb??0),c,o-(n.bs??0)]],f=[[r+(n.tb??0),l,a+(n.ts??0)],[s-(n.tf??0),l,a+(n.ts??0)],[s-(n.tf??0),l,o-(n.ts??0)],[r+(n.tb??0),l,o-(n.ts??0)]],u=[[f[0],f[3],f[2],f[1]],[h[0],h[1],h[2],h[3]],[h[1],f[1],f[2],h[2]],[h[3],f[3],f[0],h[0]],[h[0],f[0],f[1],h[1]],[h[2],f[2],f[3],h[3]]],x=[];for(let[d,m,p,v]of u)x.push(...d,...m,...p,...d,...p,...v);let g=new _t;return g.setAttribute("position",new ot(x,3)),g.computeVertexNormals(),g}var Vn=class{solid=[];glow=[];add(e,t,n,r={}){let s=e.index?e.toNonIndexed():e;s.getAttribute("uv")&&s.deleteAttribute("uv");let a=new Ke().compose(new D(...n),new Ut().setFromEuler(new Bt(r.rx??0,r.ry??0,r.rz??0)),new D(1,1,1));s.applyMatrix4(a);let o=new Ce(t),c=s.getAttribute("position").count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l.set([o.r,o.g,o.b],h*3);return s.setAttribute("color",new mt(l,3)),(r.glow?this.glow:this.solid).push(s),r.both&&(r.glow?this.glow:this.solid).push(hx(s)),this}box(e,t,n,r,s,a){return this.add(new vn(e,t,n),r,s,a)}taper(e,t,n,r,s,a,o){return this.add(cx(e,t,n,r),s,a,o)}cyl(e,t,n,r,s,a){return this.add(new Kt(e,t,n,a?.seg??8),r,s,a)}barrel(e,t,n,r,s){return this.add(new Kt(e,e,t,s?.seg??6),n,r,{rz:Math.PI/2+(s?.rz??0),ry:s?.ry,glow:s?.glow})}gun(e,t,n,r,s=0){let[a,o,c]=r,l=Math.cos(s),h=Math.sin(s);return this.barrel(e,t,n,[a+l*t/2,o+h*t/2,c],{rz:s}),this.barrel(e*1.55,e*2.2,ye(n,.8),[a+l*(t-e),o+h*(t-e),c],{rz:s}),this}wheel(e,t,n,r=Uu){this.add(new Kt(e,e,t,10),ac,n,{rx:Math.PI/2});let s=n[2]>=0?1:-1;return this.add(new Kt(e*.5,e*.5,.4,8),r,[n[0],n[1],n[2]+s*t*.5],{rx:Math.PI/2})}ball(e,t,n,r){return this.add(new Br(e,0),t,n,r)}dome(e,t,n,r){let s=new zn(e,r?.seg??8,4,0,Math.PI*2,0,Math.PI/2);return r?.squash&&s.scale(1,r.squash,1),this.add(s,t,n,r)}shard(e,t,n,r,s){let a=new Ti(1,0);return a.scale(e,t,e),this.add(a,n,r,{...s,glow:!0})}cone(e,t,n,r,s){return this.add(new Fr(e,t,s?.seg??6),n,r,s)}done(){return{solid:Pu(this.solid),glow:Pu(this.glow)}}};function hx(i){let e=i.clone();for(let n of["position","normal","color"]){let r=e.getAttribute(n).array;for(let s=0;s<r.length;s+=9)for(let a=0;a<3;a++){let o=r[s+3+a];r[s+3+a]=r[s+6+a],r[s+6+a]=o}}let t=e.getAttribute("normal").array;for(let n=0;n<t.length;n++)t[n]=-t[n];return e}function Pu(i){if(i.length===0)return null;let e=i.reduce((n,r)=>n+r.getAttribute("position").count,0),t=new _t;for(let n of["position","normal","color"]){let r=new Float32Array(e*3),s=0;for(let a of i){let o=a.getAttribute(n).array;r.set(o,s),s+=o.length}t.setAttribute(n,new mt(r,3))}t.computeBoundingSphere();for(let n of i)n.dispose();return t}var ux=new Set(["infantry","rocketInfantry","glasswalker","scrapper","medic","mender","mechanic","marksman","lancer","deadeye","vance","seer","rook"]),dx=new Set(["gunship","dropship","bomber"]),ku=38;function hc(i,e,t){let n=Ma[e],r=va[t],s=vt[i].radius;return ux.has(i)?fx(i,e,n,r):dx.has(i)?gx(i,e,n,r,s):mx(i,e,n,r,s)}function fx(i,e,t,n){let r=i==="vance"||i==="seer"||i==="rook",s=r?1.3:1,a=new Vn,o=u=>u*s,c=i==="seer"?n:ye(t.dark,1.1),l=2762274;for(let[u,x]of[[-.85,.5],[.85,-.5]])a.box(o(1.4),o(3.6),o(1.3),c,[o(x),o(2.3),o(u)]),a.box(o(1.9),o(.9),o(1.4),l,[o(x+.2),o(.45),o(u)]);a.box(o(2.2),o(.8),o(3.2),ye(t.dark,.8),[0,o(4.3),0]),a.taper(o(2.5),o(3.6),o(3.6),{ts:o(.25),tb:o(.2)},i==="medic"?15790057:n,[0,o(6.5),0]);for(let u of[-1.9,1.9])a.box(o(1.6),o(.9),o(1.1),t.body,[0,o(8.1),o(u)]);a.box(o(1.3),o(2.6),o(2.4),ye(t.dark,1.2),[o(-1.8),o(6.6),0]),a.ball(o(1.15),ax,[o(.15),o(9.5),0]),i==="seer"?a.cone(o(1.6),o(2.6),n,[0,o(11.2),0],{seg:6}):e==="shardbound"?(a.dome(o(1.45),t.body,[0,o(9.6),0],{squash:1.05}),a.box(o(.5),o(.7),o(2.2),t.glass,[o(1.25),o(9.6),0],{glow:!0})):e==="reclaimers"?(a.dome(o(1.4),t.metal,[0,o(9.7),0],{squash:.8}),a.box(o(.6),o(.7),o(2.3),t.accent,[o(1.15),o(9.75),0])):(a.dome(o(1.45),t.body,[0,o(9.7),0],{squash:.85}),a.box(o(.5),o(.6),o(2),yr,[o(1.2),o(9.55),0]));let h=()=>{a.box(o(2.6),o(.9),o(.9),n,[o(1.1),o(7),o(-1.6)],{ry:-.35}),a.box(o(2.6),o(.9),o(.9),n,[o(1.3),o(6.8),o(1.4)],{ry:.25})},f=(u,x=t.metal,g=.45)=>{h(),a.box(o(u*.45),o(1.1),o(.7),ye(x,1.2),[o(u*.15),o(6.9),o(.3)]),a.barrel(o(g),o(u*.6),x,[o(u*.55),o(7.05),o(.3)])};switch(i){case"rocketInfantry":h(),a.barrel(o(.9),o(7),ye(t.dark,.9),[o(.8),o(9),o(-1.7)]),a.cyl(o(1.05),o(1.05),o(.6),t.accent,[o(4.2),o(9),o(-1.7)],{rz:Math.PI/2});break;case"glasswalker":f(6),a.shard(o(.7),o(2.2),t.glass,[o(-1.8),o(9.2),o(1)],{rz:.4}),a.shard(o(.5),o(1.6),t.glass,[o(-1.8),o(9),o(-.8)],{rz:.3});break;case"scrapper":f(5.5,t.metal,.75),a.box(o(1.8),o(1.1),o(3.8),t.accent,[o(-.2),o(8.6),0],{rz:.15});break;case"medic":h(),a.box(o(2.6),o(.6),o(1.2),13646382,[o(.05),o(7.2),o(1.85)]),a.box(o(2.6),o(.6),o(1.2),13646382,[o(.05),o(7.2),o(-1.85)]),a.box(o(1.6),o(1.8),o(1.8),15790057,[o(2),o(6.6),o(1)]);break;case"mender":h(),a.ball(o(1.2),t.glass,[o(2.6),o(7.4),o(1.2)],{glow:!0});break;case"mechanic":h(),a.box(o(4),o(.8),o(.8),t.accent,[o(2),o(7),o(1.4)]),a.box(o(1.2),o(1.2),o(1.6),t.metal,[o(3.9),o(7),o(1.4)]);break;case"marksman":case"deadeye":f(10,t.metal,.35),a.box(o(1.6),o(.7),o(.7),yr,[o(1),o(7.9),o(.3)]);break;case"lancer":h(),a.shard(o(.8),o(5),t.glass,[o(3.4),o(7),o(.3)],{rz:-Math.PI/2});break;case"vance":h();for(let u of[-1.6,1.4])a.box(o(2),o(.8),o(.6),t.metal,[o(2.6),o(7),o(u)]);a.taper(o(3),o(4.6),o(4),{tf:o(.6),ts:o(.4)},t.body,[o(-.2),o(4.4),0]),a.cyl(o(1.9),o(1.9),o(.25),ye(t.dark,.7),[0,o(10.2),0],{seg:10}),a.cyl(o(1.1),o(1.25),o(1.1),ye(t.dark,.7),[0,o(10.8),0],{seg:8});break;case"seer":h(),a.cyl(o(.4),o(3.2),o(6.5),n,[0,o(3.8),0],{seg:7}),a.box(o(.4),o(9),o(.4),ye(t.dark,1.3),[o(2.4),o(6),o(1.6)]),a.shard(o(.8),o(1.8),t.glass,[o(2.4),o(11.2),o(1.6)]);for(let u=0;u<5;u++){let x=u/5*Math.PI*2;a.shard(o(.5),o(1.6),t.glass,[o(Math.cos(x)*2.6),o(13.6),o(Math.sin(x)*2.6)])}break;case"rook":h(),a.barrel(o(1.2),o(7),t.accent,[o(2.4),o(8.4),o(-1.8)]),a.box(o(3.2),o(1.6),o(5.2),t.metal,[o(-.3),o(8.6),0],{rz:.1}),a.box(o(.6),o(4),o(.6),t.metal,[o(-2.2),o(11),o(.8)]);break;default:f(6.5)}return{body:a.done(),top:r?17:12.5}}function px(i,e,t,n,r,s){i.taper(e,t,r,{bf:t*.55,bb:t*.55,tf:t*.15,tb:t*.15},lx,[0,t/2,n]);let a=Math.max(3,Math.round(e/5)),o=n>=0?1:-1;for(let c=0;c<a;c++){let l=-e/2+t*.75+c*(e-t*1.5)/(a-1);i.add(new Kt(t*.32,t*.32,.6,8),Uu,[l,t*.4,n+o*r*.5],{rx:Math.PI/2})}i.box(e*1.02,.7,r+.6,s,[0,t+.3,n])}function Lu(i,e,t,n,r){for(let s=0;s<3;s++)i.box(.7,.4,n*.7,r,[e+s*1.3,t,0]);for(let s of[-n*.32,n*.32])i.cyl(.55,.55,2,ye(r,.7),[e-1.2,t+.8,s])}function oc(i,e,t,n){for(let r of[-n/2,n/2])i.box(.6,.8,1.2,cc,[e,t,r],{glow:!0})}function _a(i,e,t,n){i.taper(e,2.6,t,{bf:2.2,bb:1,bs:1.4,tf:.6},n.dark,[0,2.8,0]),i.box(e*.75,.6,t*.7,n.glass,[0,1.3,0],{glow:!0})}function as(i,e,t,n,r){for(let s of[-n/2,n/2])i.box(e,.4,.3,r.glass,[0,t,s],{glow:!0})}function ba(i,e,t,n,r,s){i.box(e*.2,.5,n*.25,r.metal,[-e*.2,t+.2,-n*.25],{ry:.4+s*.2,rz:.08}),i.box(e*.18,.5,n*.3,ye(r.accent,.75),[e*.12,t+.15,n*.22],{ry:-.3}),i.cone(.6,2.4,r.metal,[e*.45,t-.6,n*.42],{rz:-1.2}),i.cone(.6,2.4,r.metal,[e*.45,t-.6,-n*.42],{rz:-1.2})}function mx(i,e,t,n,r){let s=new Vn,a=new Vn,o=r*2.1,c=r*1.5,l,h=r*1.4,f=e==="shardbound",u=e==="reclaimers",x=(d=1,m=5)=>{let p=m*d,v=Math.max(3.2,c*.22);for(let b of[-(c/2-v/2),c/2-v/2])px(s,o,p,b,v,ye(t.body,.85));s.taper(o*.9,p*.9,c-v*2+.4,{tf:1.2,bf:2},ye(t.body,.75),[0,p*.55,0]);let E=p+.6;return s.taper(o*.84,3*d,c*.9,{tf:o*.16,tb:1,ts:.8},t.body,[-o*.02,E+1.5*d,0]),oc(s,o*.36,E+.8,c*.62),f&&as(s,o*.6,E+.3,c*.9,t),E+3*d},g=(d,m,p=2.4)=>{let v=c/2-1;for(let E of d)for(let b of[-v,v])s.wheel(m,2.2,[E,m,b]),s.box(m*2.4,.5,2.8,ye(t.body,.85),[E,m*2+.3,b]);return s.taper(o*.9,p,c-3.4,{bf:1.2,bb:1},t.dark,[0,m+p/2,0]),m+p};switch(i){case"tank":case"wrecker":case"bastion":case"titan":{let d=i==="titan"?1.15:i==="bastion"?1.08:1,m=x(d);if(Lu(s,-o*.36,m+.2,c*.7,t.dark),i==="wrecker"&&(s.taper(2.4,6,c*1.1,{tf:1.4},t.metal,[o*.53,3.4,0]),s.box(4,1,1,t.dark,[o*.4,4,c*.3]),s.box(4,1,1,t.dark,[o*.4,4,-c*.3])),i==="titan")for(let b of[-c*.55,c*.55])s.box(6,3,3,t.dark,[o*.12,m-1,b]),s.gun(.6,6,t.metal,[o*.12+2.5,m-1,b]);l=[-1,m,0];let p=r*(i==="tank"||i==="wrecker"?.52:.6),v=3.6*d;a.taper(p*2.2,v,p*2,{tf:p*.55,tb:.4,ts:p*.3},t.body,[0,v/2,0]),a.box(p*.9,v*.75,p*1.6,ye(t.body,.85),[-p*1.25,v*.4,0]),a.box(1.6,v*.6,p*.9,ye(t.body,.75),[p*1.05,v*.45,0]);let E=i==="bastion"||i==="titan"?[-1.3,1.3]:[0];for(let b of E)a.gun(i==="titan"?1.2:.95,r*1.25,t.metal,[p*1.1,v*.5,b]);a.cyl(1.1,1.2,.7,ye(t.body,.8),[-p*.35,v+.3,p*.35]),a.box(p*1.4,.5,p*.5,n,[-p*.5,v+.05,-p*.5]);for(let b of[-p*.9,p*.9])a.box(p*1.2,v*.45,.35,n,[-p*.2,v*.45,b]);a.box(.25,7,.25,1710618,[-p*1.5,v+3.5,-p*.6]),u&&(ba(s,o,m,c,t,i.length),a.box(p*.7,.5,p*.6,t.metal,[p*.3,v+.15,p*.45],{ry:.5})),h=m+v+1;break}case"prismTank":{_a(s,o,c,t),s.taper(o*.9,3.4,c*.88,{tf:o*.22,tb:1.2,ts:1.4},t.body,[0,5.8,0]),as(s,o*.7,5.2,c*.9,t);for(let d of[-c*.32,c*.32])s.box(o*.35,.5,1.2,n,[-o*.15,7.6,d]);l=[0,7.5,0],a.taper(6,2.6,6,{ts:1.2,tf:1.2,tb:1.2},t.dark,[0,1.3,0]),a.box(3.5,1.6,2.2,t.metal,[2.8,1.6,0]),a.shard(1.8,4.4,t.glass,[5.2,2,0],{rz:-Math.PI/2}),a.shard(.9,2.2,t.glass,[-1,3.6,0]),h=13;break}case"quad":{let d=g([-o*.3,o*.3],2.8,1.8);s.taper(o*.55,2,c*.6,{tf:2,tb:.8},t.body,[o*.12,d+1,0]),s.box(2,1.6,c*.5,ye(t.dark,1.2),[-o*.12,d+.8,0]);for(let m of[-c*.28,c*.28])s.box(.5,4,.5,t.metal,[-o*.24,d+2,m]);s.box(.6,.5,c*.62,t.metal,[-o*.24,d+4,0]),s.box(o*.3,.4,c*.62,n,[o*.12,d+2.1,0]),oc(s,o*.42,d+.6,c*.45),l=[-1,d+2.2,0],a.cyl(1.4,1.6,1,t.dark,[0,.5,0]),a.box(2.4,1.2,1.4,t.metal,[.8,1.4,0]),a.barrel(.35,5,t.metal,[3.8,1.5,0]),h=10;break}case"raider":case"junker":{let d=g([-o*.32,o*.32],3,2);s.taper(o*.86,2.6,c*.82,{tf:o*.25,tb:.8,ts:.6},t.body,[0,d+1.3,0]),s.taper(o*.3,2.2,c*.6,{tf:1.3,ts:.4},ye(t.body,.9),[-o*.1,d+3.6,0]),s.box(.5,1.2,c*.5,yr,[o*.03,d+3.6,0],{rz:-.5}),s.box(o*.3,.4,c*.62,n,[-o*.1,d+4.8,0]),oc(s,o*.43,d+1,c*.6),i==="junker"?(s.cyl(1.4,1.4,c*.6,t.accent,[-o*.36,d+3,0],{rx:Math.PI/2}),s.barrel(.7,5,t.metal,[o*.4,d+3.4,0]),s.box(1.4,1.4,1.4,3813672,[o*.62,d+3.4,0])):(s.box(2.2,1.6,1.8,t.dark,[-o*.25,d+3.2,0]),s.barrel(.4,6,t.metal,[o*.05,d+3.6,0])),u&&ba(s,o*.8,d+2.6,c*.8,t,1),h=10;break}case"mortarCrawler":{let d=x(1,4.4);Lu(s,-o*.38,d+.2,c*.7,t.dark),l=[-1,d,0],a.taper(5.6,2.4,5.6,{ts:1,tf:1,tb:.6},t.dark,[0,1.2,0]),a.cyl(1.8,1.4,8,t.metal,[2.2,4.2,0],{rz:-.75}),a.box(2,.6,1.8,n,[-1.4,2.5,0]),u&&ba(s,o,d,c,t,2),h=13;break}case"skimmer":{_a(s,o*.9,c*.85,t),s.taper(o,2.6,c*.9,{tf:o*.38,tb:.6,ts:1.5,bf:o*.25},t.body,[0,5.2,0]),s.taper(o*.32,1.6,c*.38,{tf:1.6,tb:.6,ts:.6},t.glass,[o*.05,7.2,0],{glow:!0});for(let d of[-c*.42,c*.42])s.taper(o*.35,3,.6,{tf:o*.25},t.dark,[-o*.32,7.5,d]),s.box(o*.28,.4,.7,n,[-o*.3,6.5,d]);s.barrel(.4,6,t.metal,[o*.35,4.8,c*.25]),s.barrel(.4,6,t.metal,[o*.35,4.8,-c*.25]),as(s,o*.6,4.2,c*.88,t),h=10;break}case"resonator":{_a(s,o,c,t),s.taper(o*.8,3,c*.85,{tf:2.4,tb:1.2,ts:1.2},t.body,[0,5.6,0]),as(s,o*.6,5,c*.88,t);for(let d of[-c*.3,c*.3])s.box(o*.35,.5,1.2,n,[-o*.2,7.2,d]);s.cyl(1.6,2.6,3,t.dark,[o*.08,8.5,0]),s.add(new ir(4.6,.6,5,12),t.metal,[o*.08,13,0],{ry:Math.PI/2}),s.shard(2,4.4,t.glass,[o*.08,13,0]),h=18;break}case"artillery":{let d=g([-o*.32,0,o*.32],3.2,2.4);s.taper(o*.28,4.2,c*.78,{tf:1.4,ts:.5},t.body,[o*.3,d+2.1,0]),s.box(.5,1.6,c*.6,yr,[o*.42,d+2.8,0],{rz:-.35}),s.taper(o*.55,2,c*.86,{tb:.8,ts:.4},ye(t.body,.9),[-o*.16,d+1,0]),s.cyl(3,3.4,1.6,t.dark,[-o*.2,d+2.8,0]),s.box(5,2.8,3.6,t.dark,[-o*.22,d+4.6,0]),s.gun(1.1,r*1.9,t.metal,[-o*.1,d+5.4,0],.38);for(let m of[-c*.4,c*.4])s.box(5,.5,.6,t.metal,[-o*.45,d+.4,m],{rz:.3});s.box(o*.24,.4,c*.7,n,[o*.3,d+4.4,0]),h=15;break}case"harvester":{let d=x(1.1,5.5);s.barrel(2.4,c*1.05,t.metal,[o*.5,3,0],{ry:Math.PI/2});for(let m=-2;m<=2;m++)s.box(1,5.4,.5,15254362,[o*.5,3,m*c/5.5]);s.taper(o*.28,5,c*.42,{tf:1.2,ts:.4},t.body,[o*.26,d+2.5,c*.24]),s.box(.5,1.8,c*.34,yr,[o*.4,d+3.4,c*.24],{rz:-.3}),s.taper(o*.58,6.5,c*.9,{ts:1.2,tb:1,tf:1},ye(t.body,.9),[-o*.14,d+3.25,0]),s.box(o*.46,.6,c*.62,ye(t.dark,.8),[-o*.14,d+6.6,0]);for(let m=0;m<5;m++)s.shard(1.1,1.8,Ma.shardbound.glass,[-o*.3+m*2.4,d+7.2,m*37%5-2],{rz:m%3*.3-.3});s.box(o*.58,.5,1.2,n,[-o*.14,d+4.5,c*.45]),s.box(o*.58,.5,1.2,n,[-o*.14,d+4.5,-c*.45]),u&&ba(s,o*.6,d+6.5,c*.8,t,3),h=d+9;break}case"outpostTruck":{let d=g([-o*.36,-o*.12,o*.34],3.2,2.2);s.taper(o*.26,6,c*.82,{tf:1.8,ts:.5},t.body,[o*.33,d+3,0]),s.box(.5,2,c*.64,yr,[o*.44,d+4.2,0],{rz:-.3}),s.box(o*.6,7,c*.9,t.dark,[-o*.17,d+3.5,0]);for(let m=0;m<4;m++)s.box(.6,7.2,c*.92,ye(t.dark,1.3),[-o*.42+m*o*.17,d+3.5,0]);s.box(o*.6,.5,c*.4,n,[-o*.17,d+7.2,0]),s.barrel(.6,o*.55,t.metal,[-o*.15,d+7.8,c*.3]),h=15;break}case"drillRig":{let d=x();s.box(4,3,5,t.dark,[-o*.25,d+1.5,0]);for(let m of[-2,2])s.box(o*.85,1,1,t.accent,[0,d+4,m],{rz:.12});for(let m=0;m<4;m++)s.box(.6,.6,4.4,t.accent,[-o*.3+m*4.5,d+3.6+m*.5,0]);s.cone(1.8,5,t.metal,[o*.52,d+6,0],{rz:-Math.PI/2-.12}),s.box(o*.3,.5,c*.6,n,[o*.1,d+.3,0]),h=16;break}case"monolith":{_a(s,o*.85,c*.9,t),s.taper(o*.7,4,c*.75,{ts:1.4,tf:1.4,tb:1.4},t.body,[0,6,0]),s.taper(o*.45,18,c*.48,{tf:o*.12,tb:o*.12,ts:c*.1},t.dark,[0,17,0]);for(let d of[-c*.2,c*.2])s.box(.5,16,.4,t.glass,[o*.12,16,d],{glow:!0});s.box(o*.72,.6,c*.77,n,[0,8.2,0]),s.shard(3,6.5,t.glass,[0,30,0]);for(let d of[0,2.1,4.2])s.shard(.9,2.4,t.glass,[Math.cos(d)*4,26,Math.sin(d)*4]);h=34;break}default:{let d=g([-o*.3,o*.3],3,2);s.taper(o*.86,4,c*.84,{tf:o*.2,tb:1,ts:.8},t.body,[0,d+2,0]),s.box(o*.4,.4,c*.6,n,[0,d+4.1,0]),h=11}}return{body:s.done(),turret:l?a.done():void 0,turretAt:l,top:h}}function gx(i,e,t,n,r){let s=new Vn,a,o=r;if(i==="bomber"){s.taper(r*2.4,4,5,{tf:3,tb:1,ts:1,bf:2},t.body,[0,0,0]),s.cone(2.4,5,t.body,[r*1.2+2.2,0,0],{rz:-Math.PI/2}),s.taper(2.4,1.2,3,{tf:.8},t.glass,[r*.9,1.8,0],{glow:!0});for(let l of[-1,1])s.taper(10,1,r*1.4,{tf:4,bf:4},ye(t.body,.85),[-1,-.2,l*(r*.7+2)],{ry:l*.35}),s.barrel(1.4,5,t.dark,[.5,-1.4,l*(r*.6+2)]),s.box(.5,.5,1.6,t.accent,[-2.2,-1.4,l*(r*.6+2)],{glow:!0}),s.taper(3.2,4.4,.6,{tf:2},n,[-r*1.05,2.6,l*2]);s.box(5,.4,r*1.6,n,[-1,.25,0],{ry:0})}else{let l=i==="dropship",h=r*(l?2.1:1.5);s.taper(h,l?7:5.4,l?8:5.2,{tf:l?2.2:2.4,tb:1,ts:.8,bf:1.4,bb:1.2},t.body,[0,0,0]),s.taper(h*.3,l?3.2:2.6,l?6:4,{tf:1.4,ts:.6},t.glass,[h*.36,l?1.4:1,0],{glow:!0}),s.taper(r*1.2,1.6,1.6,{tb:.6,ts:.3},t.body,[-h*.5-r*.45,1,0]),s.taper(3,4,.5,{tf:1.6},n,[-h*.5-r*.95,2.6,0]),s.box(h*.5,.4,l?8.2:5.4,n,[-h*.05,l?3.6:2.8,0]);for(let f of l?[-4.4,4.4]:[-3,3]){s.box(h*.9,.6,.6,ac,[0,l?-5:-4,f]);for(let u of[-h*.25,h*.25])s.box(.4,1.6,.4,ac,[u,l?-4:-3.2,f])}if(l){s.taper(2,4,6,{tb:1},ye(t.body,.8),[-h*.5,-1.4,0],{rz:-.4});for(let f of[-4.6,4.6])s.barrel(1.4,5,t.dark,[-h*.15,2.4,f])}else{s.box(2.4,.6,r*1.4,t.dark,[0,-.6,0]);for(let f of[-r*.7,r*.7])s.barrel(1,4,t.metal,[.6,-1.4,f]);s.barrel(.35,4,t.metal,[h*.55,-2,0])}e==="shardbound"&&as(s,h*.6,-1,l?8:5.2,t),e==="reclaimers"&&s.box(h*.3,.5,2,t.metal,[-h*.15,(l?3.6:2.8)+.3,1],{ry:.5}),a=l?[[h*.38,5,0],[-h*.42,5.5,0]]:[[0,4,0]];for(let f of a)s.cyl(.6,.8,f[1]-(l?3.4:2.6),t.dark,[f[0],(f[1]+(l?3.4:2.6))/2,0]);o=l?r*.8:r*1.05}let c=a?new Kt(o,o,.4,16):void 0;return{body:s.done(),rotor:c,rotorsAt:a,top:10}}var xx=new Set(["turret","rocketTurret","flakTurret"]),yx=15254362,lc=class{k=new Vn;p;team;faction;W;D;constructor(e,t,n,r){this.faction=e,this.p=Ma[e],this.team=va[t],this.W=n*32-4,this.D=r*32-4}apron(){let{k:e,p:t,W:n,D:r}=this;e.box(n,12,r,t.apron,[0,-4,0]),e.taper(n,1,r,{tf:.8,tb:.8,ts:.8},ye(t.apron,1.12),[0,2.5,0]),e.box(n-6,.3,r-6,ye(t.apron,.92),[0,3.05,0]);for(let s of[-n/2+2,n/2-2])e.box(.8,5,.8,t.metal,[s,5,r/2-2]),e.box(1.2,.8,1.2,cc,[s,7.6,r/2-2],{glow:!0})}hazard(e,t,n){let r=Math.max(2,Math.round(n/3));for(let s=0;s<r;s++)this.k.box(n/r-.2,.25,1.6,s%2?2236962:yx,[e-n/2+(s+.5)*(n/r),3.2,t])}block(e,t,n,r,s=this.p.body,a=!0){let{k:o,p:c,faction:l}=this,[h,f]=r,u=3.2,x=7,g=t*x+1,d=f+n/2;o.box(e,g,n,s,[h,u+g/2,f]);let m=ye(s,l==="concord"?.8:1.18);o.box(e+.5,1.4,n+.5,ye(s,.7),[h,u+.7,f]);for(let E=1;E<t;E++)o.box(e+.6,.6,.9,m,[h,u+E*x,d+.2]);o.box(e+.8,1.4,.9,m,[h,u+g+.5,d]),o.box(e+.8,1.4,.9,m,[h,u+g+.5,f-n/2]),o.box(.9,1.4,n,m,[h+e/2,u+g+.5,f]),o.box(.9,1.4,n,m,[h-e/2,u+g+.5,f]);let p=l==="shardbound",v=Math.max(1,Math.floor(e/5.5));for(let E=t>1?1:0;E<t;E++){let b=u+E*x+4;for(let S=0;S<v;S++){let w=h-e/2+(S+.5)*(e/v);o.box(2.6,3,.5,c.window,[w,b,d+.1],{glow:p}),o.box(3.2,.5,.9,m,[w,b-1.8,d+.25])}}return a&&this.roof(e,n,[h,f],u+g),u+g}roof(e,t,n,r){let{k:s,p:a,faction:o}=this,[c,l]=n;if(!(e<10||t<10))if(s.box(e*.16,2.2,t*.16,ye(a.body,.75),[c-e*.3,r+1.1,l-t*.25]),s.box(e*.12,1.6,t*.12,a.metal,[c-e*.1,r+.8,l-t*.3]),s.box(3,2.4,3,ye(a.dark,1.2),[c+e*.3,r+1.2,l+t*.2]),o==="concord")s.box(e*.3,.6,t*.2,a.glass,[c+e*.08,r+.4,l+t*.12]),this.dish(c+e*.32,l-t*.28,r,3.2);else if(o==="shardbound")s.box(e*.8,.3,.5,a.glass,[c,r+.2,l],{glow:!0}),s.shard(1.2,3.5,a.glass,[c+e*.28,r+2,l-t*.25],{rz:.2}),s.shard(.9,2.6,a.glass,[c+e*.35,r+1.5,l-t*.32],{rz:-.3});else{s.cyl(1.4,1.6,8,a.metal,[c+e*.3,r+4,l-t*.25],{seg:7}),s.cyl(1.7,1.7,.8,a.accent,[c+e*.3,r+8,l-t*.25],{seg:7});for(let[h,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.box(.4,4,.4,a.metal,[c+e*.05+h*1.6,r+2,l+t*.2+f*1.6]);s.cyl(2.4,2.4,3.6,ye(a.metal,1.2),[c+e*.05,r+5.8,l+t*.2],{seg:8}),s.box(e*.25,.5,t*.2,ye(a.accent,.7),[c-e*.15,r+.4,l+t*.15],{ry:.3})}}dish(e,t,n,r){let{k:s,p:a}=this;s.box(.5,r,.5,a.metal,[e,n+r/2,t]);let o=new zn(r,10,3,0,Math.PI*2,0,Math.PI/3.2);s.add(o,ye(a.body,1.1),[e,n+r*1.9,t],{rx:Math.PI+.7,both:!0})}flag(e,t,n,r=12){let{k:s,p:a}=this;s.box(.4,r,.4,a.metal,[e,n+r/2,t]),s.box(4.4,2.6,.2,this.team,[e+2.3,n+r-1.6,t])}banner(e,t,n,r,s=3.2){let{k:a}=this;a.box(s+.8,.6,.8,this.p.metal,[e,n+.3,t+.4]),a.box(s,r,.3,this.team,[e,n-r/2,t+.4]),a.box(s*.5,s*.5,.35,ye(this.team,1.5),[e,n-r*.35,t+.45],{rz:Math.PI/4})}stairs(e,t,n,r=4){let{k:s,p:a}=this,o=n*.9,c=Math.max(3,Math.round(n/1.6));for(let l=0;l<c;l++){let h=(l+1)*n/c;s.box(r,h,o/c,ye(a.apron,1.15-l%2*.05),[e,3.2+h/2,t+o-(l+.5)*(o/c)])}s.box(.3,n+3,.3,a.metal,[e+r/2,3.2+n/2+1.5,t+o*.5])}door(e,t,n,r){let{k:s,p:a}=this;s.box(n+1,r+.8,.6,ye(a.dark,1.3),[e,3.2+r/2+.2,t+.1]),s.box(n,r,.6,ye(a.dark,.8),[e,3.2+r/2,t+.25]);for(let o=1;o<5;o++)s.box(n,.3,.7,ye(a.dark,1.15),[e,3.2+o*r/5,t+.3]);s.box(n+1.6,1,1.4,this.team,[e,3.2+r+.8,t+.6]),this.hazard(e,t+1.6,n)}tank(e,t,n,r=this.p.body,s=!0){let{k:a,p:o}=this,[c,l]=n;return a.cyl(e,e,t,r,[c,3.2+t/2,l],{seg:12}),a.cyl(e+.3,e+.3,1.2,this.team,[c,3.2+t*.65,l],{seg:12}),a.cyl(e+.25,e+.25,.6,ye(r,.8),[c,3.2+t*.25,l],{seg:12}),s?a.dome(e,ye(r,.92),[c,3.2+t,l],{seg:12,squash:.45}):a.cyl(e*.9,e,1,o.dark,[c,3.2+t+.5,l],{seg:12}),a.box(.4,t,1.6,o.metal,[c+e*.7,3.2+t/2,l+e*.72]),this.faction==="reclaimers"&&a.box(e*.8,t*.4,.6,o.metal,[c-e*.3,3.2+t*.4,l+e*.95],{rz:.2}),3.2+t}pipe(e,t,n,r,s,a=.8){let o=Math.hypot(n-e,r-t);this.k.barrel(a,o,this.p.metal,[(e+n)/2,s,(t+r)/2],{ry:-Math.atan2(r-t,n-e)})}shed(e,t,n,r,s=this.p.body){let{k:a,p:o}=this,[c,l]=r;a.box(e,t,n,s,[c,3.2+t/2,l]);let h=n*.32,f=this.faction==="reclaimers"?ye(o.metal,1.15):ye(o.dark,1.25);a.taper(e+2,h,n+2.4,{ts:(n+2.4)/2-.4},f,[c,3.2+t+h/2,l]);let u=Math.max(3,Math.floor(e/3));for(let x=0;x<=u;x++){let g=c-e/2+x*e/u,d=Math.abs(x-u/2)<1?this.team:ye(f,.85);for(let m of[-1,1])a.box(Math.abs(x-u/2)<1?e/u:.5,.4,(n+2.4)/2,d,[g,3.2+t+h/2+.25,l+m*(n+2.4)/4],{rx:m*Math.atan2(h,(n+2.4)/2)})}return 3.2+t+h}hangar(e,t,n,r){let{k:s,p:a}=this,[o,c]=n,l=new Kt(t,t,e,14,1,!1,0,Math.PI);s.add(l,a.body,[o,3.2,c],{rz:Math.PI/2,ry:0});for(let h=0;h<=6;h++){let f=new Kt(t+.4,t+.4,.8,14,1,!0,0,Math.PI);s.add(f,h===3?this.team:ye(a.body,.8),[o-e/2+h*e/6,3.2,c],{rz:Math.PI/2})}s.box(r,t*.85,1,ye(a.dark,.8),[o,3.2+t*.42,c+t-.6]);for(let h=1;h<6;h++)s.box(r,.35,1.1,ye(a.dark,1.2),[o,3.2+h*t*.85/6,c+t-.5]);s.box(r+1.6,1.2,1.4,this.team,[o,3.2+t*.85+.6,c+t-.4]),this.hazard(o,c+t+1.4,r);for(let h=-1;h<=1;h++)this.faction==="shardbound"?s.box(e*.18,.4,1.4,a.glass,[o+h*e*.28,3.2+t+.1,c],{glow:!0}):s.box(e*.12,1.6,2.2,ye(a.body,.75),[o+h*e*.28,3.2+t+.5,c]);return 3.2+t}};function Du(i,e,t,n){let r=Ma[e],s=new Vn,a=14,o=e==="reclaimers"?9141611:e==="shardbound"?5596541:12169634,c=ye(o,.8);if(i==="wall")s.taper(13,a,13,{ts:1.2,tf:1.2,tb:1.2},o,[0,a/2,0]),s.box(12,1.2,12,c,[0,a+.4,0]),s.box(6,.8,.5,va[t],[0,a*.6,6.2]),e==="shardbound"&&s.shard(1,3,r.glass,[0,a+2.4,0]);else{for(let l of[-11,11])s.taper(8,a+2,8,{ts:.8,tf:.8,tb:.8},o,[0,(a+2)/2,l]),s.box(8.6,1,8.6,c,[0,a+2.4,l]),s.box(1.4,1,1.4,cc,[0,a+3.4,l],{glow:!0});s.box(3,9,14,r.metal,[0,4.5,0]);for(let l=-2;l<=2;l++)s.box(3.2,9.2,.6,ye(r.metal,1.3),[0,4.6,l*2.8]);s.box(4,2,16,va[t],[0,a-1,0])}for(let l of[1,2,4,8]){if(!(n&l))continue;let h=l===1?1:l===4?-1:0,f=l===2?1:l===8?-1:0,u=32/2;s.taper(h?u:10,a-2,f?u:10,h?{ts:.8}:{tf:.8,tb:.8},o,[h*u/2,(a-2)/2,f*u/2]),s.box(h?u:9,.8,f?u:9,c,[h*u/2,a-1.6,f*u/2])}return{body:s.done(),top:a+4}}function Nu(i,e,t,n,r){let s=new lc(e,t,n,r),{k:a,p:o,team:c,W:l,D:h}=s,f=e==="shardbound",u=e==="reclaimers";s.apron();let x=24;if(xx.has(i)){a.cyl(10,12,6,o.dark,[0,6,0],{seg:8}),a.cyl(9,10,3,ye(o.dark,1.2),[0,10.5,0],{seg:8}),a.cyl(9.3,9.3,1.2,c,[0,11.5,0],{seg:8});for(let d=0;d<6;d++){let m=d/6*Math.PI*2+.3;a.box(4,2,2.4,ye(o.apron,1.25),[Math.cos(m)*12.5,4.2,Math.sin(m)*12.5],{ry:-m})}if(f)for(let d of[.4,2.5,4.6])a.shard(1,3,o.glass,[Math.cos(d)*10,9,Math.sin(d)*10]);u&&a.box(8,3,1,o.metal,[2,8,9.5],{ry:.3});let g=new Vn;if(g.taper(11,6,10,{tf:2.4,ts:1.6,tb:.6},o.body,[0,3,0]),g.box(4,4,8,ye(o.body,.85),[-6,2.6,0]),g.box(5,.6,3,c,[-1,6.2,0]),i==="rocketTurret")for(let d of[-3,3]){g.box(8,4,4,o.metal,[4,4.5,d]);for(let m of[-1,1])for(let p of[-1,1])g.cyl(.7,.7,.3,1118481,[8.1,4.5+p,d+m],{rz:Math.PI/2})}else if(i==="flakTurret"){for(let d of[-2.2,2.2])g.gun(.7,12,o.metal,[3,4,d],.6);g.dome(2.5,o.glass,[-2,6,0],{glow:f,squash:.6})}else g.box(2.5,3.5,4,ye(o.body,.75),[5.5,3,0]),g.gun(1.3,13,o.metal,[6,3.2,0]);return{body:a.done(),turret:g.done(),turretAt:[0,12,0],top:22}}switch(i){case"yard":{let g=-l*.14,d=-h*.14,m=l*.56,p=h*.44,v=s.block(m,3,p,[g,d]);s.door(g,d+p/2,8,5.5),s.stairs(g+m*.32,d+p/2,7,5);for(let S of[-m*.32,m*.08])s.banner(g+S,d+p/2,v-2,12);s.flag(g-m*.4,d-p*.3,v),s.shed(l*.34,9,h*.34,[l*.28,h*.2],ye(o.body,.9)),a.box(l*.22,7,.6,ye(o.dark,.8),[l*.28,6.7,h*.2+h*.17+.2]),s.hazard(l*.28,h*.2+h*.17+1.8,l*.22);let E=l*.34,b=-h*.32;for(let S=0;S<6;S++)a.box(3,6,3,S%2?o.accent:ye(o.accent,.8),[E,6+S*6,b]);a.box(4,2,4,o.dark,[E,39.5,b]),a.box(34,1.6,1.8,o.accent,[E-11,41.5,b]),a.box(5,3,3,o.metal,[E+8,40.5,b]),a.box(.3,14,.3,2236962,[E-24,33.5,b]),a.box(2,1.4,2,o.metal,[E-24,26,b]),x=42;break}case"power":{for(let g of[-h*.2,h*.2])a.cyl(7,9.5,22,o.body,[-l*.16,14.2,g],{seg:14}),a.cyl(7.2,7.2,1.2,c,[-l*.16,19,g],{seg:14}),a.cyl(6.2,6.2,.4,2763306,[-l*.16,25.3,g],{seg:14}),f&&a.cyl(6.4,6.4,.6,o.glass,[-l*.16,25.4,g],{seg:14,glow:!0});s.block(l*.34,2,h*.72,[l*.26,0],o.dark),s.banner(l*.26,h*.36,16,8,2.8),a.cyl(1.2,1.5,18,o.metal,[l*.36,12,-h*.28],{seg:7}),a.cyl(1.6,1.6,.8,c,[l*.36,20.5,-h*.28],{seg:7}),s.pipe(-l*.02,-h*.2,l*.1,-h*.2,9),s.pipe(-l*.02,h*.2,l*.1,h*.2,9),x=26;break}case"refinery":{let g=s.shed(l*.42,13,h*.66,[-l*.26,-h*.06]);s.door(-l*.26,-h*.06+h*.33,l*.18,9),s.banner(-l*.26-l*.14,-h*.06+h*.33,15,8,2.6);for(let d of[l*.14,l*.34])s.tank(6.5,17,[d,-h*.14],f?o.dark:o.body);s.pipe(-l*.05,-h*.14,l*.34,-h*.14,17),a.box(l*.5,1.2,3,o.metal,[l*.05,7,h*.3],{rz:-.1});for(let d=0;d<4;d++)a.box(.6,6,.6,o.dark,[-l*.15+d*l*.14,5.5,h*.3]);f&&a.shard(2,5,o.glass,[l*.24,24,-h*.14]),x=24;break}case"barracks":{let g=s.block(l*.7,2,h*.5,[-l*.04,-h*.12]);s.door(-l*.2,-h*.12+h*.25,6,5.5),s.stairs(l*.18,-h*.12+h*.25,7,4),s.banner(l*.02,-h*.12+h*.25,g-2,9),s.flag(l*.28,-h*.25,g,10);for(let d=0;d<4;d++)a.box(4,2,2.4,ye(o.apron,1.25),[-l*.3+d*4.3,4.2,h*.36]);x=g+2;break}case"lightFactory":case"heavyFactory":{let g=i==="heavyFactory",d=g?h*.36:h*.38;s.hangar(l*.66,d,[-l*.14,-h*.08],l*(g?.34:.28));let m=s.block(l*.2,2,h*.46,[l*.36,-h*.12],o.dark);s.banner(l*.36,-h*.12+h*.23,m-2,9,2.6);for(let p of g?[-h*.32,-h*.2]:[-h*.3])a.cyl(1.3,1.5,g?24:18,o.metal,[l*.42,g?15:12,p],{seg:7});x=Math.max(d+6,m);break}case"airfield":{s.hangar(l*.5,h*.3,[-l*.2,-h*.14],l*.3);let g=s.block(l*.14,3,h*.24,[l*.36,-h*.25],o.dark,!1);a.taper(l*.18,5,h*.3,{tf:0,ts:0,bs:1,bf:1,bb:1},o.glass,[l*.36,g+2.5,-h*.25],{glow:f}),a.box(l*.2,1,h*.32,o.body,[l*.36,g+5.5,-h*.25]),a.box(.4,6,.4,o.metal,[l*.36,g+9,-h*.25]),a.box(l*.95,.4,h*.3,3881787,[0,3.3,h*.3]);for(let d=-3;d<=3;d++)a.box(3,.4,.8,15921906,[d*l*.13,3.6,h*.3]);s.flag(l*.2,-h*.4,3.2,14),x=g+10;break}case"radar":{let g=s.block(l*.55,2,h*.42,[-l*.06,h*.16]);s.door(-l*.2,h*.16+h*.21,5,5),s.banner(l*.08,h*.16+h*.21,g-2,8,2.6);for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.box(.8,26,.8,o.metal,[l*.1+m*3,16,-h*.18+p*3],{rx:p*.08,rz:-m*.08});for(let m=1;m<4;m++)a.box(7-m,.5,7-m,o.metal,[l*.1,3+m*6.5,-h*.18]);a.box(5,1,5,o.dark,[l*.1,29,-h*.18]);let d=new zn(11,14,5,0,Math.PI*2,0,Math.PI/3.2);a.add(d,f?o.glass:ye(o.body,1.05),[l*.1,34,-h*.18],{rx:Math.PI+.9,glow:f,both:!0}),a.box(.6,7,.6,o.metal,[l*.1,36,-h*.18+2],{rx:.9}),a.ball(1,c,[l*.1,38.5,-h*.18+4.5]),x=38;break}case"repairPad":{a.box(l*.86,1.2,h*.86,o.metal,[0,3.6,0]);for(let g=0;g<3;g++)a.box(6,.3,1.4,c,[-l*.18+g*l*.18,4.3,-2],{ry:.5}),a.box(6,.3,1.4,c,[-l*.18+g*l*.18,4.3,2],{ry:-.5});for(let g of[-h*.4,h*.4])a.box(1.6,14,1.6,o.accent,[0,10,g]);a.box(1.6,1.6,h*.82,o.accent,[0,17,0]),a.box(3,2.4,3,o.dark,[0,15.2,-h*.1]),a.box(.3,4,.3,2236962,[0,12.5,-h*.1]);for(let g of[-l*.42,l*.42])a.box(2,5,6,ye(o.dark,1.2),[g,5.7,h*.25]);x=18;break}case"techCenter":{let g=s.block(l*.66,2,h*.6,[-l*.1,h*.08]);s.door(-l*.1,h*.08+h*.3,7,5.5),s.stairs(-l*.1+l*.22,h*.08+h*.3,7,4);for(let m of[-l*.24,l*.04])s.banner(-l*.1+m,h*.08+h*.3,g-2,9);a.cyl(9,9,2,ye(o.body,.85),[-l*.2,g+1,h*.02],{seg:16}),a.dome(8.5,o.glass,[-l*.2,g+2,h*.02],{seg:16,squash:.75,glow:!0});let d=s.block(l*.22,5,h*.26,[l*.26,-h*.24],o.dark);for(let[m,p]of[[-2,12],[2,8]])a.box(.6,p,.6,o.metal,[l*.26+m,d+p/2,-h*.3]),a.ball(1,c,[l*.26+m,d+p,-h*.3],{glow:!0});x=d+12;break}case"outpost":{let g=s.block(l*.55,1,h*.5,[-l*.1,-h*.1]);s.door(-l*.1,-h*.1+h*.25,6,5),s.banner(-l*.1+l*.18,-h*.1+h*.25,g-1,5,2.4),s.tank(4.5,12,[l*.3,-h*.2],o.dark,!1),s.flag(-l*.32,-h*.25,g,10);for(let d=0;d<4;d++)a.box(4,2,2.4,ye(o.apron,1.25),[l*.18+d%2*4.2,4.2+Math.floor(d/2)*2,h*.3]);x=18;break}case"deepDrill":{s.block(l*.36,1,h*.36,[l*.25,h*.22],o.dark,!1),a.box(l*.5,2,h*.5,o.metal,[-l*.08,4.2,-h*.05]);for(let[g,d]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.box(1.4,32,1.4,o.accent,[-l*.08+g*6,19,-h*.05+d*6],{rx:-d*.16,rz:g*.16});for(let g=1;g<4;g++)a.box(14-g*3,.8,14-g*3,o.accent,[-l*.08,4+g*8,-h*.05]);a.box(5,3,5,o.metal,[-l*.08,35,-h*.05]),a.cyl(1.4,1.4,20,2763306,[-l*.08,14,-h*.05],{seg:6}),a.box(l*.36,1,.5,c,[l*.25,9,h*.22+h*.18]),x=37;break}case"seedSpire":{a.cyl(8,10,5,o.dark,[0,5.5,0],{seg:7}),a.cyl(8.3,8.3,1,c,[0,7,0],{seg:7}),a.shard(5,18,o.glass,[0,24,0]);for(let g of[0,2.1,4.2])a.shard(2,7,o.glass,[Math.cos(g)*6,12,Math.sin(g)*6],{rx:Math.sin(g)*.4,rz:-Math.cos(g)*.4});x=42;break}case"silo":{s.tank(10,16,[0,0],o.body),x=24;break}case"uplink":{let g=s.block(l*.6,1,h*.6,[0,0],o.dark,!1);s.banner(-l*.18,h*.3,g-1,5,2.6),s.banner(l*.18,h*.3,g-1,5,2.6),a.taper(10,18,10,{ts:2.5,tf:2.5,tb:2.5},o.body,[0,g+9,0]);let d=new zn(26,16,6,0,Math.PI*2,0,Math.PI/3);a.add(d,f?o.glass:ye(o.body,1.05),[0,g+45,0],{rx:Math.PI,glow:f,both:!0});for(let m of[0,2.1,4.2])a.box(.8,18,.8,o.metal,[Math.cos(m)*8,g+29,Math.sin(m)*8],{rx:Math.sin(m)*-.45,rz:Math.cos(m)*.45});a.ball(2.5,o.accent,[0,g+35,0],{glow:!0}),x=g+36;break}case"stormHeart":{let g=s.block(l*.7,1,h*.7,[0,0],o.dark,!1);for(let d=0;d<4;d++){let m=d/4*Math.PI*2+Math.PI/4,p=Math.cos(m)*l*.28,v=Math.sin(m)*h*.28;a.taper(4,30,4,{ts:1,tf:1,tb:1},o.body,[p,g+15,v]),a.shard(1.4,4,o.glass,[p,g+33,v])}a.ball(11,o.glass,[0,g+18,0],{glow:!0}),a.add(new ir(15,.8,5,18),o.metal,[0,g+18,0],{rx:Math.PI/2}),x=g+36;break}case"scrapHive":{a.add(new zn(l*.38,9,6,0,Math.PI*2,0,Math.PI/2),o.body,[0,3,0]);for(let g=0;g<9;g++){let d=g/9*Math.PI*2;a.box(8,1,5,g%2?o.metal:ye(o.accent,.7),[Math.cos(d)*l*.26,10+g%3*3,Math.sin(d)*h*.26],{ry:d,rz:.5}),a.cone(1.8,12,o.metal,[Math.cos(d)*l*.32,17,Math.sin(d)*h*.32],{rx:Math.sin(d)*.6,rz:-Math.cos(d)*.6})}a.cyl(5,6,6,o.dark,[0,l*.38+4,0],{seg:8}),a.cyl(4,4,.6,o.accent,[0,l*.38+7.2,0],{seg:8,glow:!0}),a.cyl(l*.39,l*.39,1.4,c,[0,6,0],{seg:12}),x=l*.38+10;break}default:{let g=s.block(l*.7,2,h*.6,[0,0]);s.banner(0,h*.3,g-2,8),x=g+2}}return{body:a.done(),top:x}}var Li=8,uc=new D(-.55,.75,-.45).normalize(),ls=14e3,_x=.4,dc=1775122,cs=new D(-.72,.55,-.25).normalize(),_r=1.25,bx=[[6281456,4176088],[8162548,5135312],[16742994,14173226],[16765802,14719530]].map(i=>i.map(e=>new Ce(e))),vx=[{count:1,height:1,width:1},{count:1.3,height:1.35,width:1.2},{count:1,height:1.15,width:.9},{count:.7,height:1.6,width:1.7}],Mx=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function In(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var Sx=`
uniform vec4 drapeRect;
varying vec2 vUv;
varying vec2 vWorld;
varying vec3 vNormal;
varying vec3 vPos;
void main() {
  vUv = (position.xz - drapeRect.xy) / drapeRect.zw;
  vWorld = position.xz;
  vNormal = normal;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,wx=`
uniform sampler2D drape;
uniform vec3 lightDir;
uniform float flatLight;
uniform vec3 background;
uniform sampler2D fog;
uniform vec2 mapSize;
uniform vec3 grade;
uniform vec3 hazeColor;
uniform vec3 haze;
varying vec2 vUv;
varying vec2 vWorld;
varying vec3 vNormal;
varying vec3 vPos;
void main() {
  // Distance haze: x near, y far, z how thick it gets at most.
  float h = smoothstep(haze.x, haze.y, length(vPos - cameraPosition)) * haze.z;
  if (vUv.x < 0.0 || vUv.y < 0.0 || vUv.x > 1.0 || vUv.y > 1.0) {
    gl_FragColor = vec4(mix(background, hazeColor, max(h, 0.6)), 1.0);
    return;
  }
  vec3 c = texture2D(drape, vUv).rgb;
  // Flat ground keeps the 2D picture's colours exactly; slopes catch or lose the light.
  float l = (0.5 + 0.6 * max(dot(normalize(vNormal), lightDir), 0.0)) / flatLight;
  // Never-explored ground gives nothing away, not even the shape of the land.
  l = mix(1.0, l, smoothstep(0.05, 0.45, texture2D(fog, vWorld / mapSize).r));
  gl_FragColor = vec4(mix(c * l * grade, hazeColor, h), 1.0);
}`,Tx=`
varying vec3 vPos;
void main() {
  vPos = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
}`,Ex=`
uniform vec3 sand;
uniform vec3 grade;
uniform vec3 hazeColor;
uniform vec3 haze;
uniform float light;
varying vec3 vPos;
void main() {
  float ripple = 0.94 + 0.06 * sin(vPos.x * 0.021 + sin(vPos.z * 0.013) * 3.0) * sin(vPos.z * 0.017);
  float h = smoothstep(haze.x, haze.y, length(vPos - cameraPosition)) * max(haze.z, 0.85);
  gl_FragColor = vec4(mix(sand * ripple * grade * light, hazeColor, h), 1.0);
}`,Ax=`
varying vec3 vColor;
varying vec3 vNormal;
varying vec2 vWorld;
void main() {
  vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorld = world.xz;
  vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  vColor = instanceColor;
  gl_Position = projectionMatrix * viewMatrix * world;
}`,Rx=`
uniform sampler2D fog;
uniform vec2 mapSize;
uniform vec3 lightDir;
uniform float light;
uniform float pulse;
varying vec3 vColor;
varying vec3 vNormal;
varying vec2 vWorld;
void main() {
  vec3 n = normalize(vNormal);
  float d = max(dot(n, lightDir), 0.0);
  // Lit faces, a glassy glint, and an inner glow that doesn't fade at night.
  vec3 c = vColor * (0.45 + 0.6 * d) * (0.55 + 0.45 * light) + vColor * pulse + vec3(0.9, 1.0, 1.0) * pow(d, 10.0) * 0.5;
  // Fog of war: hidden where never explored, dimmed where not watched.
  float seen = texture2D(fog, vWorld / mapSize).r;
  if (seen < 0.2) discard;
  gl_FragColor = vec4(c * seen, 1.0);
}`,Sa=class{canvas;gl;scene=new Lr;ortho=new ri(-1,1,1,-1,1,2e4);persp=new Rt(Jl,1,10,2e4);camera=this.ortho;lens=null;seen={x0:0,y0:0,x1:0,y1:0};hud;drapeCanvas=document.createElement("canvas");drapeCtx;drapeTex=null;terrainMat;desertMat;shards;shardMat;fogData;fogTex;looks;crystalClock=1/0;width=0;height=0;solidMat=fc(new Mn({vertexColors:!0,flatShading:!0}),!1);solidDim=fc(new Mn({vertexColors:!0,flatShading:!0,color:6974058}),!0);buildMat=fc(new Mn({vertexColors:!0,flatShading:!0}),!0);glowMat=new On({vertexColors:!0});glowDim=new On({vertexColors:!0,color:7368816});wreckMat=new Mn({flatShading:!0,color:7234909});rotorMat=new On({color:1382170,transparent:!0,opacity:.35,depthWrite:!1});ambient=new qr(16777215,1);sun=new Xr(16777215,1.5);shadowGround;shadowMat=new zr({opacity:.4,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});models=new Map;pieces=new Map;bars=[];fx=new ya;stands=new Map;wreckIds=new WeakMap;nextWreck=0;seats=new Map;cam={x:0,y:0,w:0,h:0};game=null;world={ground:(e,t)=>Rn(this.map,e,t),gunHeight:(e,t)=>this.standAt(e,t)?.gun??Rn(this.map,e,t)+9,bodyHeight:(e,t)=>this.standAt(e,t)?.body??Rn(this.map,e,t)+3,seen:(e,t)=>{let n=this.game;if(!n||!n.fog.enabled)return!0;let r=Math.floor(e/32),s=Math.floor(t/32);return dn(this.map,r,s)&&n.fog.visible[Nt(this.map,r,s)]===1},inView:(e,t,n)=>{let r=this.seen;return e>r.x0-n&&e<r.x1+n&&t>r.y0-n&&t<r.y1+n},roof:e=>{let t=this.pieces.get(`b${e.id}`);return t?t.root.position.y+t.model.top*.75:null}};view;map;flat;state;constructor(e,t,n,r){this.view=e,this.map=t,this.flat=n,this.state=r,ze.enabled=!1,this.canvas=document.createElement("canvas"),this.canvas.id="view3d",this.canvas.style.cssText="position:fixed;left:0;top:0;pointer-events:none;display:block",e.before(this.canvas),e.style.position="relative",this.gl=new sa({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.gl.outputColorSpace=vi,this.gl.setClearColor(dc),this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Ei,this.hud=e.getContext("2d"),this.drapeCtx=this.drapeCanvas.getContext("2d");let s=t,a=.5+.6*uc.y;this.fogData=new Uint8Array(s.w*s.h).fill(255),this.fogTex=new Mi(this.fogData,s.w,s.h,hr,kt),this.fogTex.unpackAlignment=1,this.fogTex.magFilter=ht,this.fogTex.minFilter=ht,this.fogTex.needsUpdate=!0,this.terrainMat=new bt({vertexShader:Sx,fragmentShader:wx,uniforms:{drape:{value:null},drapeRect:{value:new at(0,0,1,1)},lightDir:{value:uc},flatLight:{value:a},background:{value:new Ce(dc)},fog:{value:this.fogTex},mapSize:{value:new Ne(s.w*32,s.h*32)},grade:{value:new Ce(1,1,1)},hazeColor:{value:new Ce(dc)},haze:{value:new D(1e6,2e6,0)}}}),this.desertMat=new bt({vertexShader:Tx,fragmentShader:Ex,uniforms:{sand:{value:new Ce(.66,.58,.46)},grade:this.terrainMat.uniforms.grade,hazeColor:this.terrainMat.uniforms.hazeColor,haze:this.terrainMat.uniforms.haze,light:{value:1}}});let o=new ut(new Bn(s.w*32+16e3,s.h*32+16e3),this.desertMat);o.rotation.x=-Math.PI/2,o.position.set(s.w*32/2,-1.5,s.h*32/2),this.scene.add(o);let c=Ix(s);this.scene.add(new ut(c,this.terrainMat)),this.shadowGround=new ut(c,this.shadowMat),this.shadowGround.receiveShadow=!0,this.shadowGround.renderOrder=1,this.scene.add(this.shadowGround),this.shardMat=new bt({vertexShader:Ax,fragmentShader:Rx,uniforms:{fog:{value:this.fogTex},mapSize:{value:new Ne(s.w*32,s.h*32)},lightDir:{value:uc},light:{value:1},pulse:{value:.2}}});let l=new Ti(1,0);l.scale(1,1,.8),this.shards=new Si(l,this.shardMat,ls),this.shards.instanceColor=new bn(new Float32Array(ls*3),3),this.shards.count=0,this.shards.frustumCulled=!1,this.shards.castShadow=!0,this.scene.add(this.shards),this.looks=new Int16Array(s.w*s.h).fill(-1),this.sun.position.copy(cs).multiplyScalar(1500),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6,this.sun.shadow.radius=2,this.scene.add(this.ambient,this.sun,this.sun.target,this.fx.group)}resize(e,t){e===this.width&&t===this.height||(this.width=e,this.height=t,this.gl.setPixelRatio(1),this.gl.setSize(e,t,!0))}draw(e,t,n,r,s){let a=this.state,o=a.pitch*Math.PI/180,c=Math.sin(o),l=Math.cos(o),h=24;this.lens=a.perspective?gu(t,a,this.width,this.height):null;let f=t.x,u=t.y,x=t.x+t.w,g=t.y+t.h+ua*l/c;if(this.lens){let C=this.map,O=[ss(C,this.lens,0,0),ss(C,this.lens,this.width,0),ss(C,this.lens,0,this.height),ss(C,this.lens,this.width,this.height)];f=Math.min(...O.map(W=>W.x)),x=Math.max(...O.map(W=>W.x)),u=Math.min(...O.map(W=>W.y))-ua,g=Math.max(...O.map(W=>W.y))+ua}this.seen={x0:f,y0:u,x1:x,y1:g};let d=Math.floor(f-h),m=Math.floor(u-h),p=Math.ceil(x-f+h*2),v=Math.ceil(g-u+h*2),E=Math.min(1.5,Math.max(.6,a.zoom),3600/Math.max(p,v)),b=Math.ceil(p*E),S=Math.ceil(v*E);(this.drapeCanvas.width!==b||this.drapeCanvas.height!==S)&&(this.drapeCanvas.width=b,this.drapeCanvas.height=S,this.drapeTex?.dispose(),this.drapeTex=null);let w=this.drapeCtx;w.setTransform(E,0,0,E,0,0);let R=this.flat.ctx;this.flat.ctx=w,this.flat.drape=!0;try{this.flat.draw(e,{x:d,y:m,w:p,h:v},null,n,r)}finally{this.flat.ctx=R}this.flat.drawMinimap(e,t,r),this.drapeTex||(this.drapeTex=new wi(this.drapeCanvas),this.drapeTex.flipY=!1,this.drapeTex.generateMipmaps=!1,this.drapeTex.minFilter=ht,this.drapeTex.magFilter=ht,this.terrainMat.uniforms.drape.value=this.drapeTex),this.drapeTex.needsUpdate=!0,this.terrainMat.uniforms.drapeRect.value.set(d,m,p,v),this.crystalClock+=r,this.crystalClock>=_x&&(this.crystalClock=0,this.growCrystals()),this.updateFog(e),this.shardMat.uniforms.light.value=e.weather.light,this.shardMat.uniforms.pulse.value=.16+.05*Math.sin(e.time*.8)+.25*(1-e.weather.light);let _=t.x+t.w/2,T=t.y+t.h/2,I=Mx?0:Cx(e,t),k=(Math.random()-.5)*I,N=(Math.random()-.5)*I;if(_+=k,T+=N,this.cam=t,this.game=e,this.syncModels(e,t,r),this.fx.update(e,this.world),this.weather(e),this.aimShadows(e,t,_,T),this.lens){let C=this.persp;C.aspect=this.width/this.height,C.updateProjectionMatrix();let O=this.lens.eye;C.up.set(0,0,-1),C.position.set(O[0]+k,O[1],O[2]+N),C.lookAt(_,0,T),this.camera=C}else{let C=this.ortho,O=this.width/(2*a.zoom),W=this.height/(2*a.zoom);C.left=-O,C.right=O,C.top=W,C.bottom=-W,C.updateProjectionMatrix();let X=6e3;C.up.set(0,0,-1),C.position.set(_,X*c,T+X*l),C.lookAt(_,0,T),this.camera=C}this.gl.render(this.scene,this.camera);let B=this.hud;B.setTransform(1,0,0,1,0,0),B.clearRect(0,0,B.canvas.width,B.canvas.height);for(let C of this.bars){let O=this.lens?mu(this.lens,C.x,C.y,C.h):pu(t.x,t.y,a,C.x,C.y,C.h),W=Math.round(O.x-C.w/2),X=Math.round(O.y-6);B.fillStyle="rgba(0,0,0,0.6)",B.fillRect(W-1,X-1,C.w+2,C.cargo===void 0?5:9),B.fillStyle=C.frac>.5?"#5fd35a":C.frac>.25?"#e8c35a":"#e0503a",B.fillRect(W,X,Math.round(C.w*Math.max(0,C.frac)),3),C.cargo!==void 0&&(B.fillStyle="#5fd8f0",B.fillRect(W,X+4,Math.round(C.w*C.cargo),3))}if(s){let C=Math.min(s.x0,s.x1),O=Math.min(s.y0,s.y1),W=Math.abs(s.x1-s.x0),X=Math.abs(s.y1-s.y0);B.fillStyle="rgba(242,179,61,0.08)",B.fillRect(C,O,W,X),B.strokeStyle="#f2b33d",B.lineWidth=1,B.strokeRect(C+.5,O+.5,W,X)}}syncModels(e,t,n){let r=this.map,s=e.fog,a=96,o=this.seen,c=(d,m)=>d>o.x0-a&&d<o.x1+a&&m>o.y0-a&&m<o.y1+a,l=(d,m,p)=>dn(r,d,m)&&p[Nt(r,d,m)]===1,h=(d,m)=>{for(let p=d.ty;p<d.ty+d.h;p++)for(let v=d.tx;v<d.tx+d.w;v++)if(l(v,p,m))return!0;return!1},f=new Set;this.bars=[],this.stands.clear();let u=this.flat.showAllHealth,x=new Map;for(let d of e.buildings)(d.kind==="wall"||d.kind==="gate")&&x.set(d.ty*r.w+d.tx,d);let g=(d,m,p)=>x.get((d.ty+p)*r.w+d.tx+m)?.owner===d.owner;for(let d of e.buildings){let m=(d.tx+d.w/2)*32,p=(d.ty+d.h/2)*32;if(!c(m,p)||d.owner!==e.local&&!h(d,s.explored))continue;let v=e.factions[d.owner],E,b;if(d.kind==="wall"||d.kind==="gate"){let I=(g(d,1,0)?1:0)|(g(d,0,1)?2:0)|(g(d,-1,0)?4:0)|(g(d,0,-1)?8:0),k=d.kind;E=`${k}:${v}:${d.owner}:${I}`,b=()=>Du(k,v,d.owner,I)}else E=`${d.kind}:${v}:${d.owner}`,b=()=>Nu(d.kind,v,d.owner,d.w,d.h);let S=`b${d.id}`;f.add(S);let w=this.piece(S,E,b),R=this.seat(d);w.root.position.set(m,R,p),w.turret&&(w.turret.rotation.y=-d.angle),this.setLook(w,d.owner!==e.local&&s.enabled&&!h(d,s.visible)?"dim":"live");let _=w.model.turretAt;this.stand(m,p,Math.max(d.w,d.h)*32*.6,_?R+_[1]+3:R+w.model.top*.6,R+w.model.top*.5);let T=un[d.kind].maxHp;(d.id===e.selectedBuilding||d.hp<T||u)&&this.bars.push({x:m,y:p,h:w.root.position.y+w.model.top+6,w:Math.max(16,d.w*32-12),frac:d.hp/T})}for(let d of e.units){if(!c(d.x,d.y)||d.owner!==e.local&&s.enabled&&!l(Math.floor(d.x/32),Math.floor(d.y/32),s.visible))continue;let m=e.factions[d.owner],p=`u${d.id}`;f.add(p);let v=this.piece(p,`${d.kind}:${m}:${d.owner}`,()=>hc(d.kind,m,d.owner));v.root.scale.setScalar(_r);let E=this.flat.poseOf(d.id),b=E?.hull??d.angle,S=Rn(r,d.x,d.y);ui(d.kind)?S+=ku+Math.sin(e.time*2.2+d.id)*2:vt[d.kind].armor==="infantry"&&d.path.length>0&&(S+=Math.abs(Math.sin(e.time*11+d.id))*1.2),v.root.position.set(d.x,S,d.y),v.root.rotation.y=-b,this.setLook(v,"live");let w=ui(d.kind),R=v.model.turretAt?v.model.turretAt[1]+2:v.model.top*.65;this.stand(d.x,d.y,vt[d.kind].radius*_r+(w?12:8),S+(w?2:R*_r),S+(w?2:v.model.top*.5*_r)),v.turret&&(v.turret.rotation.y=-((E?.turret??b)-b));for(let I of v.rotors)I.rotation.y+=n*28;let _=vt[d.kind].maxHp,T=e.selection.has(d.id);(T||d.hp<_||u)&&this.bars.push({x:d.x,y:d.y,h:S+v.model.top*_r+4,w:Math.max(12,vt[d.kind].radius*2+4),frac:d.hp/_,cargo:T&&d.kind==="harvester"?Math.min(1,d.cargo/ql.capacity):void 0})}for(let d of e.effects){if(d.kind!=="wreck"||!d.unit||!c(d.x,d.y)||s.enabled&&!l(Math.floor(d.x/32),Math.floor(d.y/32),s.explored))continue;let m=this.wreckIds.get(d);m===void 0&&(m=this.nextWreck++,this.wreckIds.set(d,m));let p=`w${m}`;f.add(p);let v=d.owner??0,E=e.factions[v],b=d.unit,S=this.piece(p,`${b}:${E}:${v}`,()=>hc(b,E,v));this.setLook(S,"wreck");let w=d.age/d.life,R=w>.8?(w-.8)/.2:0;S.root.scale.setScalar(_r),S.root.position.set(d.x,Rn(r,d.x,d.y)-1-R*14,d.y),S.root.rotation.set((In(m,1)-.5)*.25,-(d.angle??0),(In(m,2)-.5)*.25),S.turret&&(S.turret.rotation.y=(In(m,3)-.5)*1.6)}for(let[d,m]of this.pieces)f.has(d)||(this.scene.remove(m.root),this.pieces.delete(d))}aimShadows(e,t,n,r){let s=this.state.shadows!==!1;if(this.flat.realShadows=s,this.gl.shadowMap.enabled=s,this.sun.castShadow=s,this.shadowGround.visible=s,!s)return;let a=this.sun,o=cs;a.target.position.set(n,0,r),a.position.set(n+o.x*1500,o.y*1500,r+o.z*1500),a.target.updateMatrixWorld();let c=this.seen,l=Math.min(1500,Math.max(c.x1-c.x0,c.y1-c.y0)*.55+120);n=(c.x0+c.x1)/2,r=(c.y0+c.y1)/2,a.target.position.set(n,0,r),a.position.set(n+cs.x*1500,cs.y*1500,r+cs.z*1500),a.target.updateMatrixWorld();let h=a.shadow.camera;h.left=-l,h.right=l,h.top=l,h.bottom=-l,h.near=100,h.far=3200,h.updateProjectionMatrix(),this.shadowMat.opacity=.42*(.35+.65*e.weather.light)*(1-.6*e.weather.dust)}seat(e){let t=(e.ty*this.map.w+e.tx)*64+e.w*8+e.h,n=this.seats.get(t);if(n===void 0){n=0;let r=Li/2;for(let s=e.ty*32+2;s<=(e.ty+e.h)*32-2;s+=r)for(let a=e.tx*32+2;a<=(e.tx+e.w)*32-2;a+=r)n=Math.max(n,Rn(this.map,a,s));this.seats.set(t,n)}return n}stand(e,t,n,r,s){let a=Math.floor(t/32)*this.map.w+Math.floor(e/32),o=this.stands.get(a),c={x:e,y:t,r:n,gun:r,body:s};o?o.push(c):this.stands.set(a,[c])}standAt(e,t){let n=Math.floor(e/32),r=Math.floor(t/32),s=null,a=1/0;for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++)for(let l of this.stands.get((r+o)*this.map.w+n+c)??[]){let h=Math.hypot(l.x-e,l.y-t);h<l.r&&h<a&&(s=l,a=h)}return s}weather(e){let t=e.weather.light,n=1-t;this.ambient.intensity=.6+.55*t,this.ambient.color.setRGB(1-.38*n,1-.3*n,1-.05*n),this.sun.intensity=.6+2.2*t,this.sun.color.setRGB(1-.4*n,1-.28*n,1);let r=e.weather.dust,s=t;this.sun.color.multiply(new Ce(1,.94+.06*n,.84+.16*n)),this.terrainMat.uniforms.grade.value.setRGB(1.04-.1*n,.99-.06*n,.9+.04*n);let o=new Ce(.8,.68,.52).lerp(new Ce(.72,.5,.3),r).multiplyScalar(.25+.75*s);o.lerp(new Ce(.06,.08,.16),n*.8),this.terrainMat.uniforms.hazeColor.value.copy(o),this.desertMat.uniforms.light.value=.35+.65*t,this.gl.setClearColor(o),this.scene.fog instanceof tr||(this.scene.fog=new tr(0,0,1));let c=this.scene.fog;c.color.copy(o);let l=this.terrainMat.uniforms.haze.value;if(this.lens){let h=this.lens.distance,f=h*(1.05-.6*r),u=h*(3.4-1.6*r);l.set(f,u,.8+.15*r),c.near=f,c.far=f+(u-f)/(.8+.15*r)}else l.set(6e3-900/Math.max(.05,.4*r),7800,r>.01?.85:0),c.far=r>.01?7800:1e9,c.near=r>.01?c.far-1800/(.4*r):999999999}piece(e,t,n){let r=e[0]==="b"?this.buildMat:this.solidMat,s=this.pieces.get(e);if(s&&s.key===t)return s;s&&this.scene.remove(s.root);let a=this.models.get(t);a||(a=n(),this.models.set(t,a));let o=new jt,c=[],l=[],h=(x,g)=>{if(x.solid){let d=new ut(x.solid,r);d.castShadow=!0,d.receiveShadow=!0,g.add(d),c.push(d)}if(x.glow){let d=new ut(x.glow,this.glowMat);d.castShadow=!0,g.add(d),l.push(d)}};h(a.body,o);let f;a.turret&&a.turretAt&&(f=new jt,f.position.set(...a.turretAt),h(a.turret,f),o.add(f));let u=[];if(a.rotor)for(let x of a.rotorsAt??[]){let g=new ut(a.rotor,this.rotorMat);g.position.set(...x),o.add(g),u.push(g)}return s={key:t,model:a,root:o,solids:c,glows:l,turret:f,rotors:u,look:"live",live:r},this.scene.add(o),this.pieces.set(e,s),s}setLook(e,t){if(e.look!==t){e.look=t;for(let n of e.solids)n.material=t==="wreck"?this.wreckMat:t==="dim"?this.solidDim:e.live;for(let n of e.glows)n.material=t==="wreck"?this.wreckMat:t==="dim"?this.glowDim:this.glowMat;for(let n of e.rotors)n.visible=t!=="wreck"}}growCrystals(){let e=this.map,t=!1;for(let l=0;l<e.w*e.h;l++){let h=uu(e,l);h!==this.looks[l]&&(this.looks[l]=h,t=!0)}if(!t)return;let n=new Ke,r=new D,s=new Ut,a=new Bt,o=new D,c=0;for(let l=0;l<e.h&&c<ls;l++)for(let h=0;h<e.w&&c<ls;h++){let f=Nt(e,h,l),u=this.looks[f];if(u<=0)continue;let x=u>>3,g=u&7,d=vx[g],m=x/6,p=Math.round((1+x)*d.count);for(let v=0;v<p&&c<ls;v++){let E=h*32+4+In(f,v+5)*24,b=l*32+6+In(f,v+37)*22,S=(6+12*m*(.6+.4*In(f,v+71)))*d.height,w=(2+2*In(f,v+91))*d.width;r.set(E,Rn(e,E,b)+S*.35,b),a.set((In(f,v+13)-.5)*.7,In(f,v+17)*Math.PI,(In(f,v+19)-.5)*.7),s.setFromEuler(a),o.set(w,S,w),n.compose(r,s,o),this.shards.setMatrixAt(c,n),this.shards.setColorAt(c,bx[g][v%3===0?1:0]),c++}}this.shards.count=c,this.shards.instanceMatrix.needsUpdate=!0,this.shards.instanceColor.needsUpdate=!0}updateFog(e){let t=e.fog,n=this.fogData,r=!1;for(let s=0;s<n.length;s++){let a=!t.enabled||t.visible[s]?255:t.explored[s]?128:0;n[s]!==a&&(n[s]=a,r=!0)}r&&(this.fogTex.needsUpdate=!0)}dispose(){for(let e of this.models.values()){for(let t of[e.body,e.turret])t?.solid?.dispose(),t?.glow?.dispose();e.rotor?.dispose()}for(let e of[this.buildMat,this.solidMat,this.solidDim,this.glowMat,this.glowDim,this.rotorMat,this.wreckMat,this.shadowMat])e.dispose();this.flat.realShadows=!1,this.fx.dispose(),this.flat.drape=!1,this.drapeTex?.dispose(),this.fogTex.dispose(),this.shards.geometry.dispose(),this.shardMat.dispose(),this.terrainMat.dispose(),this.desertMat.dispose(),this.scene.traverse(e=>{e instanceof ut&&e.geometry.dispose()}),this.gl.dispose(),this.canvas.remove(),this.view.style.position=""}};function fc(i,e){return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
float grainHash(vec3 p) { return fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 wn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
          float g = 0.94 + 0.08 * grainHash(vWPos * 1.3);
          ${e?`if (abs(wn.y) < 0.5) {
            float row = vWPos.y / 2.2;
            float along = (abs(wn.x) > abs(wn.z) ? vWPos.z : vWPos.x) / 4.4 + 0.5 * floor(row);
            float line = max(step(0.86, fract(row)), step(0.93, fract(along)) * 0.6);
            g *= 1.0 - 0.13 * line;
          } else if (wn.y > 0.5) {
            g *= 1.0 - 0.06 * step(0.95, max(fract(vWPos.x / 8.0), fract(vWPos.z / 8.0)));
          }`:""}
          diffuseColor.rgb *= g;
        }`)},i.customProgramCacheKey=()=>e?"surface-courses":"surface",i}function Cx(i,e){let t=0;for(let n of i.effects)n.kind!=="shake"||n.x<e.x||n.x>e.x+e.w||n.y<e.y||n.y>e.y+e.h||(t+=5*n.size*(1-n.age/n.life));return t}function Ix(i){let e=i.w*32/Li+1,t=i.h*32/Li+1,n=new Float32Array(e*t*3);for(let o=0;o<t;o++)for(let c=0;c<e;c++){let l=(o*e+c)*3;n[l]=c*Li,n[l+1]=Rn(i,c*Li,o*Li),n[l+2]=o*Li}let r=new Uint32Array((e-1)*(t-1)*6),s=0;for(let o=0;o<t-1;o++)for(let c=0;c<e-1;c++){let l=o*e+c,h=l+1,f=l+e,u=f+1;r.set([l,f,h,h,f,u],s),s+=6}let a=new _t;return a.setAttribute("position",new mt(n,3)),a.setIndex(new mt(r,1)),a.computeVertexNormals(),a}function Px(i,e,t,n){return new Sa(i,e,t,n)}return Zu(Lx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
