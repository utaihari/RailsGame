!function(e){"use strict";e.fn.closestChild=function(t){var i,a;return i=this.children(),0===i.length?e():(a=i.filter(t),a.length>0?a:i.closestChild(t))};var t=0;e.fn.tabtab=function(i){var a=e.extend({tabMenu:".tabs__menu",tabContent:".tabs__content",next:".tabs-controls__next",prev:".tabs-controls__prev",startSlide:2,arrows:!0,animateHeight:!0,fixedHeight:!0,useAnimations:!0,easing:[200,20],speed:700,slideDelay:0,perspective:1500,transformOrigin:"center top",perspectiveOrigin:"50% 50%",translateY:0,translateX:0,scale:1.05,rotateX:20,rotateY:0,skewY:0,skewX:0,tabSwitched:function(){}},i);return this.each(function(){var i,s,n=e(this),r=n.closestChild(a.tabMenu),o=r.closestChild("li"),l=o.length,c=n.closestChild(a.tabContent),d=c.children();i=a.startSlide<1?0:a.startSlide>l?l-1:a.startSlide-1,"slide"===a.translateX&&(a.translateX=e(d).outerWidth()),"slide"===a.translateY&&(a.translateY=e(d).outerHeight());var u=a.startSlide-1,h="left",f=n.find(a.next),g=n.find(a.prev),v=a.useAnimations;t++,a.useAnimations&&(e.isFunction(e.fn.velocity)||(v=!1,console.log("Animations wil not work because you did not include the www.velocityjs.org library"))),d.css("position","absolute"),s=0,c.wrapInner('<div class="js-tabs-height"></div>'),a.animateHeight===!0&&a.fixedHeight===!1?(s=d.eq(i).outerHeight(),n.find(".js-tabs-height").height(s)):a.fixedHeight===!0?(d.each(function(){s=s>e(this).outerHeight()?s:e(this).outerHeight()}),n.find(".js-tabs-height").height(s)):(s=d.eq(i).outerHeight(),n.find(".js-tabs-height").height(s)),o.on("click",function(t){return t=e(this).index(),t!==i&&p(t,i),i=t,!1}),f.on("click",function(){return u=i+1,p(u,i),!1}),g.on("click",function(){return u=i-1,p(u,i),!1}),a.arrows===!0&&1>=t&&e(document).keydown(function(t){e("input").is(":focus")||(37===t.keyCode?(u=i-1,p(u,i)):39===t.keyCode&&(u=i+1,p(u,i)))});var p=function(t,s){return t>=l||0>t?(1>u?u=0:t>=l&&(u=l-1),!1):(o.eq(s).removeClass("active").attr("aria-hidden","true"),o.eq(t).addClass("active").attr("aria-hidden","false"),d.eq(s).removeClass("active").attr("aria-hidden","true"),d.eq(t).addClass("active").attr("aria-hidden","false"),t>s?(h="right",i=u,u=t):s>t&&(h="left",i=u,u=t),v?(d.eq(t).velocity({translateX:function(){return"left"===h?-a.translateX:a.translateX},translateY:function(){return"left"===h?-a.translateY:a.translateY},scale:function(){return"left"===h?a.scale-2*(a.scale-1):a.scale+(a.scale-1)},rotateX:function(){return"left"===h?-a.rotateX:a.rotateX},rotateY:function(){return"left"===h?-a.rotateY:a.rotateY},skewY:function(){return"left"===h?-a.skewY:a.skewY},skewX:function(){return"left"===h?-a.skewX:a.skewX},opacity:0},{duration:0}).velocity({translateX:0,translateY:0,scale:1,opacity:1,rotateY:0,rotateX:0,skewY:0,skewX:0},{easing:a.easing,duration:a.speed,delay:a.slideDelay,queue:!1,complete:function(){e(this).css("z-index",l)}}),d.eq(s).velocity({translateX:function(){return"left"===h?a.translateX:-a.translateX},translateY:function(){return"left"===h?a.translateY:-a.translateY},scale:function(){return"left"===h?a.scale+(a.scale-1):a.scale-2*(a.scale-1)},rotateX:function(){return"left"===h?a.rotateX:-a.rotateX},rotateY:function(){return"left"===h?a.rotateY:-a.rotateY},rotateZ:function(){return"left"===h?a.rotateZ:-a.rotateZ},skewX:function(){return"left"===h?a.skewX:-a.skewX},skewY:function(){return"left"===h?a.skewY:-a.skewY},opacity:0,delay:1e3},{easing:a.easing,duration:a.speed,queue:!1,complete:function(){e(this).css("z-index","-1")}})):(d.eq(s).hide(),d.eq(t).show()),a.animateHeight===!0&&v&&a.fixedHeight!==!0?n.find(".js-tabs-height").velocity({height:e(d).eq(t).outerHeight()},{easing:a.easing,duration:a.speed,queue:!1}):a.animateHeight===!1&&a.fixedHeight===!1&&n.find(".js-tabs-height").css("height",e(d).eq(t).outerHeight()),b(),void a.tabSwitched.call(this))};d.each(function(){v?e(this).index()!==i?e(this).velocity({opacity:0},{display:"block",duration:0,complete:function(){e(this).css({"z-index":"-1"})}}):e(this).css({opacity:"1","z-index":l}):e(this).hide()}),r.css({"z-index":l+1,position:"relative"}),a.useAnimations&&(e(".js-tabs-height").css({perspective:a.perspective,"perspective-origin":a.perspectiveOrigin}),d.css({"transform-origin":a.transformOrigin}));var b=function(){u===l-1?(f.addClass("disabled"),g.removeClass("disabled")):0===u?(g.addClass("disabled"),f.removeClass("disabled")):(f.removeClass("disabled"),g.removeClass("disabled"))};o.attr("aria-hidden","true").eq(i).addClass("active").attr("aria-hidden","false"),d.attr("aria-hidden","true").eq(i).addClass("active").attr("aria-hidden","false").css("display","block"),b()})}}(jQuery);