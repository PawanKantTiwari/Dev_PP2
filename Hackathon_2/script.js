


<!doctype html Cache-Control: no-transform>

<html class="html  e-update-animation  ">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
    <link rel="preload" href="/build-resume/build/rwzv2/main.bundle-1.0.0.364.js" as="script" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Cache-control" content="no-transform">
    <script type="text/javascript">
    //Code to set claims
    window.RDL = (window.RDL || {});
    RDL.appCD = 'RWZBLD_PRD_W_COR';
    var processingSteps = null;
    try {

        
            
                processingSteps = "1: MPR desktop user. 	";
            
                                                    
                RDL.portalCd = 'zty';
            
                    
                RDL.domain = 'zety.com';
            
                    
                RDL.blobUrl = '/blobcontent';
            
    }
    catch (ex) {
        //RDL.UserClaims = {};
    }


</script>
    <title>Zety</title>
    <script>
		(function () {
        	window.onpageshow = function(event) {
        		if (event.persisted) {
        			window.location.reload();
        		}
        	};
        })();
		//added because navigator.cookieEnabled was not working in IE11
        function areCookiesEnabled() {
            try {
                document.cookie = 'testcookie=1';
                var cookiesEnabled = document.cookie.indexOf('testcookie=') !== -1;
                document.cookie = 'testcookie=1; expires=' + new Date(0);
                return cookiesEnabled;
            } catch (e) {
                return false;
            }
        }
        if (!areCookiesEnabled()) {
            window.location = '/?forceRedirect=CookiesDisabled';
        }
        function addNewRelic(applicationId, sampleDenominator) {
            sampleDenominator = sampleDenominator || 5;
            var y = Math.floor((Math.random() * 10) + 1); var x = y % sampleDenominator; if (x == 0) {
                window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(25),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(26),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError",l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(13),t(12),"addEventListener"in window&&t(6),c.xhrWrappable&&t(14),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(){L++,C=g.hash,this[u]=y.now()}function o(){L--,g.hash!==C&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable){var x=t(10),b=t(11),E=t(8),O=t(6),R=t(13),P=t(7),T=t(14),N=t(9),M=t("ee"),S=M.get("tracer");t(16),y.features.spa=!0;var C,L=0;M.on(u,r),M.on(p,r),M.on(d,o),M.on(l,o),M.buffer([u,d,"xhr-done","xhr-resolved"]),O.buffer([u]),R.buffer(["setTimeout"+c,"clearTimeout"+s,u]),T.buffer([u,"new-xhr","send-xhr"+s]),P.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),x.buffer([u]),b.buffer(["propagate",p,l,"executor-err","resolve"+s]),S.buffer([u,"no-"+u]),N.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(T,"send-xhr"+s),a(M,"xhr-resolved"),a(M,"xhr-done"),a(P,m+s),a(P,m+"-done"),a(N,"new-jsonp"),a(N,"jsonp-end"),a(N,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,!0),w[v]("load",i,!0),w[v]("popstate",function(){i(0,L>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(13),s=t(12),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",p="resource",l="-start",h="-end",m="fn"+l,v="fn"+h,w="bstTimer",g="pushState",y=t("loader");y.features.stn=!0,t(8),"addEventListener"in window&&t(6);var x=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof x&&(this.bstStart=y.now())}),o.on(v,function(t,e){var n=t[0];n instanceof x&&i("bst",[n,e,this.bstStart,y.now()])}),a.on(m,function(t,e,n){this.bstStart=y.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),this.bstType])}),s.on(m,function(){this.bstStart=y.now()}),s.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),"requestAnimationFrame"])}),o.on(g+l,function(t){this.time=y.now(),this.startPath=location.pathname+location.hash}),o.on(g+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return o.emit(n+"start",[t,a],s),s.then(function(t){return o.emit(n+"end",[null,t],s),t},function(t){throw o.emit(n+"end",[t],s),t})})}var o=t("ee").get("fetch"),i=t(26),a=t(25);e.exports=o;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,p=s.Response,l=s.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(u,function(t,e){r(d[h],e,f),r(p[h],e,f)}),r(s,"fetch",c),o.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(c+"done",[null,e],n)}else o.emit(c+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){function r(t){function e(){c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}function n(){c.emit("jsonp-error",[],p),c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var u=s(a),d="function"==typeof u.parent[u.key];if(d){var p={};f.inPlace(u.parent,[u.key],"cb-",p),t.addEventListener("load",e,!1),t.addEventListener("error",n,!1),c.emit("new-jsonp",[t.src],p)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(u);return e?e[1]:null}function a(t,e){var n=t.match(p),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(d);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t("ee").get("jsonp"),f=t("wrap-function")(c);if(e.exports=c,o()){var u=/[?&](?:callback|cb)=([^&#]+)/,d=/(.*)\.([^.]+)/,p=/^(\w+)(\.|$)(.*)$/,l=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?f.inPlace(Node.prototype,l,"dom-"):(f.inPlace(HTMLElement.prototype,l,"dom-"),f.inPlace(HTMLHeadElement.prototype,l,"dom-"),f.inPlace(HTMLBodyElement.prototype,l,"dom-")),c.on("dom-start",function(t){r(t[0])})}},{}],10:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],11:[function(t,e,n){function r(t){var e=a.context(),n=s(t,"executor-",e),r=new f(n);return a.context(r).getCtx=function(){return e},a.emit("new-promise",[r,e],e),r}function o(t,e){return e}var i=t("wrap-function"),a=t("ee").get("promise"),s=i(a),c=t(25),f=NREUM.o.PR;e.exports=a,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){a.emit("propagate",[null,!o],i),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var i=e.apply(f,arguments),s=f.resolve(i);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&a.emit("propagate",[t,!0],n),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),a.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this),t[1]=s(t[1],"resolve-",this)}),a.on("executor-err",function(t,e,n){t[1](n)}),s.inPlace(f.prototype,["then"],"then-",o),a.on("then-start",function(t,e){this.promise=e,t[0]=s(t[0],"cb-",this),t[1]=s(t[1],"cb-",this)}),a.on("then-end",function(t,e,n){this.nextPromise=n;var r=this.promise;a.emit("propagate",[r,!0],n)}),a.on("cb-end",function(t,e,n){a.emit("propagate",[n,!0],this.nextPromise)}),a.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=a.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],12:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],13:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],14:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,g,"fn-",s)}function i(t){y.push(t),h&&(b?b.then(a):v?v(a):(E=-E,O.data=E))}function a(){for(var t=0;t<y.length;t++)r([],y[t]);y.length&&(y=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),p=NREUM.o,l=p.XHR,h=p.MO,m=p.PR,v=p.SI,w="readystatechange",g=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],y=[];e.exports=u;var x=window.XMLHttpRequest=function(t){var e=new l(t);try{u.emit("new-xhr",[e],e),e.addEventListener(w,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(l,x),x.prototype=l.prototype,d.inPlace(x.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var b=m&&m.resolve();if(!v&&!m){var E=1,O=document.createTextNode(E);new h(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===w||a()})},{}],15:[function(t,e,n){function r(t){if(!i(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,s=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var c=a.generateCatId(),f=a.generateCatId(),u=Date.now(),d=o(c,f,u,n,r,s);return{header:d,guid:c,traceId:f,timestamp:u}}function o(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(s.d.tk=i),btoa(JSON.stringify(s))}function i(t){var e=!1,n=!1,r={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(r=NREUM.init.distributed_tracing,n=!!r.enabled),n)if(t.sameOrigin)e=!0;else if(r.allowed_origins instanceof Array)for(var o=0;o<r.allowed_origins.length;o++){var i=s(r.allowed_origins[o]);if(t.hostname===i.hostname&&t.protocol===i.protocol&&t.port===i.port){e=!0;break}}return n&&e}var a=t(23),s=t(17);e.exports={generateTracePayload:r,shouldGenerateTrace:i}},{}],16:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,u.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime]))}}function o(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=c(e),t.sameOrigin=t.parsedOrigin.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(17),f=t(15).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(21),m=t(20),v=t(18),w=window.XMLHttpRequest;a.features.xhr=!0,t(14),t(7),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,t.addEventListener("load",function(n){i(e,t)},!1),h&&(h>34||h<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),u.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);n&&n.header&&(e.setRequestHeader("newrelic",n.header),this.dt=n)}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<p;s++)e.addEventListener(d[s],this.listener,!1)}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("addEventListener-end",function(t,e){e instanceof w&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof w&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof w&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){var e,n=t[1]||{};"string"==typeof t[0]?e=t[0]:t[0]&&t[0].url&&(e=t[0].url),e&&(this.parsedOrigin=c(e),this.sameOrigin=this.parsedOrigin.sameOrigin);var r=f(this.parsedOrigin);if(r&&r.header){var o=r.header;if("string"==typeof t[0]){var i={};for(var a in n)i[a]=n[a];i.headers=new Headers(n.headers||{}),i.headers.set("newrelic",o),this.dt=r,t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&(t[0].headers.append("newrelic",o),this.dt=r)}})}},{}],17:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||s),"/"===o.pathname&&(r[t]=o),o}},{}],18:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||"document"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(20);e.exports=r},{}],19:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[f.now()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(25),s=t(26),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){u[e]=o(p+e,!0,"api")}),u.addPageAction=o(p+"addPageAction",!0),u.setCurrentRouteName=o(p+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=o(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now(),!1,e])}},{}],20:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],21:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],22:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?c("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&c("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();n.length>0&&c("lcp",[n[n.length-1]])}function i(t){if(t instanceof u&&!p){var e,n=Math.round(t.timeStamp);e=n>1e12?Date.now()-n:f.now()-n,p=!0,c("timing",["fi",n,{type:t.type,fid:e}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,s,c=t("handle"),f=t("loader"),u=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),s=new PerformanceObserver(o);try{a.observe({entryTypes:["paint"]}),s.observe({entryTypes:["largest-contentful-paint"]})}catch(d){}}if("addEventListener"in document){var p=!1,l=["click","keydown","mousedown","pointerdown","touchstart"];l.forEach(function(t){document.addEventListener(t,i,!1)})}}},{}],23:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&Uint8Array&&(e=r.getRandomValues(new Uint8Array(31)));for(var o=[],i=0;i<16;i++)o.push(t().toString(16));return o.join("")}e.exports={generateUuid:r,generateCatId:o}},{}],24:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],25:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],26:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],27:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function n(n,r,o,i){if(!p.aborted||i){t&&t(n,r,o);for(var a=e(o),s=m(n),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[y[n]];return d&&d.push([x,n,r,a]),a}}function l(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return d[t]=d[t]||o(n)}function w(t,e){f(t,function(t,n){e=e||"feature",y[n]=e,e in u||(u[e]=[])})}var g={},y={},x={on:l,addEventListener:l,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:a,aborted:!1};return x}function i(){return new r}function a(){(u.api||u.feature)&&(p.aborted=!0,u=p.backlog={})}var s="nr@context",c=t("gos"),f=t(25),u={},d={},p=e.exports=o();p.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!E++){var t=b.info=NREUM.info,e=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(y,function(e,n){t[e]||(t[e]=n)}),c("mark",["onload",a()+b.offset],null,"api");var n=l.createElement("script");n.src="https://"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-b.offset}var s=(new Date).getTime(),c=t("handle"),f=t(25),u=t("ee"),d=t(24),p=window,l=p.document,h="addEventListener",m="attachEvent",v=p.XMLHttpRequest,w=v&&v.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:v,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var g=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1167.min.js"},x=v&&w&&w[h]&&!/CriOS/.test(navigator.userAgent),b=e.exports={offset:s,now:a,origin:g,features:{},xhrWrappable:x,userAgent:d};t(19),t(22),l[h]?(l[h]("DOMContentLoaded",i,!1),p[h]("load",r,!1)):(l[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",s],null,"api");var E=0,O=t(27)},{}],"wrap-function":[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(26),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof n?n(r,a):n||{}}catch(f){p([f,"",[r,a,o],s])}u(e+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(e+"err",[r,a,d],s),d}finally{u(e+"end",[r,a,c],s)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<e.length;c++)s=e[c],a=t[s],r(a)||(t[s]=n(a,f?s+o:o,i,s))}function u(n,r,o){if(!c||e){var i=c;c=!0;try{t.emit(n,r,o,e)}catch(a){p([a,n,r,o])}c=i}}function d(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){p([r])}for(var o in t)s.call(t,o)&&(e[o]=t[o]);return e}function p(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}]},{},["loader",2,16,5,3,4]);
                ; NREUM.loader_config = { accountID: "1160914", trustKey: "1160914", agentID: "16429473", licenseKey: "5000203576", applicationID: applicationId}
                ; NREUM.info = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net", licenseKey: "5000203576", applicationID: applicationId,sa:1}
            }
        }
    function UpdateHiwContainerHeight() {
    var bodyHeight = window.innerHeight,
    headerHeight = document.getElementById('hiwHeader').offsetHeight,
    footerHeight = document.getElementById('footer').offsetHeight;
    var hiwContainerHeight = bodyHeight - (headerHeight + footerHeight);
    document.getElementById("contentHowItWorks").style.height = hiwContainerHeight + "px";
    }
    </script>
        <link href="/blobcontent/zty/styles/google-fonts/google-fonts.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/build-resume/images/rwzv2/zty/favicon.ico" />

    <link rel="stylesheet" href="/build-resume/build/rwzv2/stylesheets/zty/main-1.0.0.364.css">
    
    <!--[if IE 9]>
      <link rel="stylesheet" href="/build-resume/build/rwzv2/stylesheets/zty/ie9.css">
    <![endif]-->
    <script>
        if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            if (!String.prototype.startsWith) {
                String.prototype.startsWith = function (searchString, position) {
                    position = position || 0;
                    return this.indexOf(searchString, position) === position;
                };
            }
            if (!String.prototype.endsWith) {
                String.prototype.endsWith = function (search, this_len) {
                    if (this_len === undefined || this_len > this.length) {
                        this_len = this.length;
                    }
                    return this.substring(this_len - search.length, this_len) === search;
                };
            }
            document.write(' <script src="/blobcontent/zty/scripts/browser-polyfill.min.js"><\/script>');
            document.write('<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"><\/script>');
        }
    </script>

        <script src="/ui-experimentation/zty/experiment.js"></script>
    
</head>
<body>
    <form id="mainForm" class="main-form" action="/">
        <section class="page-wrap">
            <div id="howItWorks" class="d-none">
                <nav class="navbar" id="hiwHeader">
                    <div class="container">
                        <a id="homeLogoLink" class="navbar-brand zty p-none"></a>
                        <div class="clearfix"></div>
                    </div>
                </nav>
                <div class="content-how-it-works" id="contentHowItWorks">
                    <section class="v-center">

                            <div class="container">
                                <div class="row">
									<div class="col-md-6 steps-wrap">
										<a class="h1" onclick="startApp(event);">
											Just three
											<br />
											<span class="text-emphasized">simple</span> steps
										</a>
										<ol class="list-steps">
											<li>
												<span class="list-step-text">
													Select a template from our library of
													<br />professional designs
												</span>
											</li>
											<li>
												<span class="list-step-text">
													Build your resume with our
													<br />industry-specific bullet points
												</span>
											</li>
											<li>
												<span class="list-step-text">
													Download your resume, print it out
													<br />and get it ready to send!
												</span>
											</li>
										</ol>

									</div>

									<div class="col-md-6 steps-wrap beat-the-bot-show" style="display:none">
										<a class="h1 main-heading"
										   onclick="startApp(event);">
											<span class="text-emphasized">3 steps</span> to get<br /> the interview
										</a>
										<ol class="list-steps">
											<li>
												<div class="list-step-text">
													<span class="list-step-subheading">Build Your Resume</span>
													<span>
														Choose a template and fill it out with
														<br /> pre-written examples from our experts
													</span>
												</div>
											</li>
											<li>
												<div class="list-step-text">
													<span class="list-step-subheading">Check It</span>
													Visit Resume Check to make sure your
													<br />resume is error-free and ready to go
												</div>
											</li>
											<li>
												<div class="list-step-text">
													<span class="list-step-subheading">Customize and Apply</span>
													See what skills and keywords you need
													<br />
													to get past the screening software
												</div>
											</li>
										</ol>
									</div>

                                    <div class="col-md-6 cta-disclaimer-wrap">
                                        <a onclick="startApp(event);" title="Resume" class="icon-how-it-works"></a>
                                        <a class="btn btn-primary" onclick="startApp(event);">
                                            CREATE
                                            MY RESUME
                                        </a>
                                        <p class="p toupvText">
                                            By clicking Create My Resume, you agree to our
                                            <a class="link aTermsCndtn" href="https://zety.com/terms-of-service"
                                               onClick="termConditions(event);">Terms of Use</a> and
                                            <a class="link aPrivacyPolicy" href="https://zety.com/privacy-policy"
                                               onClick="privacyPolicy(event)">
                                                Privacy Policy
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                            </div>


                    </section>
                </div>
            </div>
            <main id="app" role="main"></main>
            <div id="dvHidden" style="display:none"> </div>
            <div id="afterLoadContent" class="d-none"></div>
            <div id="page-loader" class="page-loader-new "></div>
        </section>

        <footer class="footer" id="footer">
            <section class="footer-top" id="upperFooter">
                <div class="container">
                    <ul class="nav">
                        <li>
                            <a href="https://zety.com/terms-of-service" class="aTermsCndtn" target="_blank"
                               tabIndex="14" title="Terms and Conditions">
                                Terms and Conditions
                            </a>
                            <a href="https://zety.com/terms-of-service" class="aTermsCndtn d-none aterms-ui-cleanup" target="_blank"
                               tabIndex="14" title="Terms">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="https://zety.com/privacy-policy" class="aPrivacyPolicy" target="_blank"
                               tabIndex="15" title="Privacy Policy">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://zety.com/contact" tabIndex="16" target="_blank"
                               title="Contact Us">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <input type="hidden" id="qsCheck" />
            </section>
            
            <section class="footer-bottom">
                <div class="container">
                    <div class="text-logo">Powered by <span class="logo-footer"></span></div>
                    <p class="text-copyright">&copy; 2021, Works Limited. All rights reserved.</p>
                </div>
            </section>
        </footer>
        <div id="divLoginWidget" hidden data-targetDomain="" data-referrerId="13" data-forgotPwdUrl="/membership/forgotpassword"
             data-enableappendjs="false">
        </div>
    </form>
    <script>
        UpdateHiwContainerHeight();
		window.onresize = function () {
			UpdateHiwContainerHeight();
		};
        var versionNumber = "1.0.0.364";
        var segmentUrl = "/build-resume/scripts/rwzv2/segment-io-1.0.0.364.js";
        var experimentUrl = "/build-resume/scripts/rwzv2/experiment-1.0.0.364.js";
        var packageUrl = "/build-resume/build/rwzv2/main.bundle-1.0.0.364.js";

    </script>
    <script>

		var html = document.documentElement,
			body = document.body;

        (function () {
            var ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                console.log("Explorer - " + tem)
                if (tem[1] < 11) {
                    window.location = "/information/unsupportedbrowsers";
                }
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            if (((M[0] === "IE" || M[0] === "MSIE") && M[1] < 11) || (M[0] === "Safari" && M[1] < 9)) {
                window.location = "/information/unsupportedbrowsers";
			}

			function isIE11() {
				if ((ua.toLowerCase().indexOf('trident') > -1) && (ua.match(/11.0/i))) return true;
				else return false;
			}
			if (isIE11()) {
				html.classList.add('ie11');
			}
        })();
    </script>
    <script src="/build-resume/scripts/rwzv2/app-1.0.0.364.js"></script>
    <script src="https://accountsv2.zety.com/scripts/app/accounts.min.js"></script>


    <script>
      var disclaimerElem = document.getElementsByClassName('toupvText');
        if (localStorage.getItem("toupv") && disclaimerElem.length > 0)
        {
            disclaimerElem[0].classList.add("d-none");
        }  
    </script>
</body>

</html>
