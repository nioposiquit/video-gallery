!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1),a(2);document.addEventListener("DOMContentLoaded",(function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){var t=new IntersectionObserver((function(e,a){e.forEach((function(e){if(e.isIntersecting){var a=e.target;a.src=a.dataset.src,a.addEventListener("load",(function(){a.classList.add("show")})),a.classList.remove("lazy"),t.unobserve(a)}}))}));e.forEach((function(e){t.observe(e)}))}}))},function(e,t){window.addEventListener("load",(function(){var e=window.matchMedia("(prefers-reduced-motion)").matches,t=window.matchMedia("(max-width: 480px)").matches;e||t||("postMessage"in window?function(){var e,t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var o,i=document.getElementsByTagName("script")[0];function s(t){t.target.mute(),t.target.playVideo(),e=a.querySelector("iframe")}function c(t){t.data==YT.PlayerState.PLAYING&&(r.classList.add(r.dataset.pause),r.classList.remove(r.dataset.play),e.style.opacity=1,n.style.opacity=0),t.data!=YT.PlayerState.PAUSED&&t.data!=YT.PlayerState.BUFFERING&&t.data!=YT.PlayerState.ENDED||(r.classList.remove(r.dataset.pause),r.classList.add(r.dataset.play),e.style.opacity=0,n.style.opacity=1)}i.parentNode.insertBefore(t,i),window.onYouTubeIframeAPIReady=function(){o=new YT.Player("yt-player",{videoId:"1P1cEEp2KpU",playerVars:{controls:0,disablekb:1,enablejsapi:1,loop:1,playlist:"1P1cEEp2KpU",start:0},events:{onReady:s,onStateChange:c}})},r.addEventListener("click",(function(){return o.getPlayerState()==YT.PlayerState.PLAYING?void o.pauseVideo():void o.playVideo()}))}():function(){a.innerHTML='\n    <video muted="" preload="metadata">\n      <source src="./video/banner.webm" type="video/webm">\n      <source src="./video/banner.mp4" type="video/mp4">\n    </video>\n  ';var e=document.querySelector("video");e.addEventListener("canplaythrough",(function(){this.play()})),e.addEventListener("play",(function(){e.style.opacity=1,n.style.opacity=0,r.classList.add(r.dataset.pause),r.classList.remove(r.dataset.play)})),e.addEventListener("pause",(function(){e.style.opacity=0,n.style.opacity=1,r.classList.add(r.dataset.play),r.classList.remove(r.dataset.pause)})),r.addEventListener("click",(function(){e.paused?e.play():e.pause()}))}())}));var a=document.querySelector(".banner-vid-container"),n=document.querySelector(".banner-bg"),r=document.querySelector(".play-toggle")},function(e,t,a){}]);