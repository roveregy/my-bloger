!function(a){"use strict";a.fn.sociallocker_linkedin_share||a.onepress.widget("sociallocker_linkedin_share",{options:{},_defaults:{url:null,counter:"right",unlock:null},_create:function(){this._prepareOptions(),this._setupEvents(),this._createButton()},_prepareOptions:function(){var b=a.extend({},this._defaults);for(var c in this._defaults)void 0!==this.element.data(c)&&(b[c]=this.element.data(c));this.options=a.extend(b,this.options),this.url=URL.normalize(this.options.url||window.location.href)},_setupEvents:function(){var b=this;this.element.bind("onp-sl-button-created",function(){b.wrap.find(".IN-widget").click(function(){setTimeout(function(){if(a.onepress.sdk.linkedin._activePopup){var c=a.onepress.sdk.linkedin._activePopup;a.onepress.sdk.linkedin._activePopup=!1;var d=setInterval(function(){c&&c.closed===!1||(clearInterval(d),a(document).trigger("onp-sl-linkedin-share",[b.url]))},200)}},200)})}),a(document).bind("onp-sl-linkedin-share",function(a,c){console.log("onp-sl-linkedin-share"),b.url===URL.normalize(c)&&b.options.unlock&&b.options.unlock&&b.options.unlock(c,b)})},_createButton:function(){this.button=a('<script type="IN/Share" data-onsuccess="onepressLinkedInShareCallback" data-success="onepressLinkedInShareCallback" data-onSuccess="onepressLinkedInShareCallback"></script>'),this.options.counter&&this.button.attr("data-counter",this.options.counter),this.options.url&&this.button.attr("data-url",this.url),this.wrap=a("<div class='onp-social-button onp-linkedin-button'></div>").appendTo(this.element).append(this.button),a.onepress.connector.connect("linkedin",this.options,function(){IN.init()})}})}(jQuery);;

!function(a){"use strict";a.fn.sociallocker||(a.onepress.widget("sociallocker",{options:{},_isLocked:!1,_defaults:{_iPhoneBug:!1,url:null,text:{header:a.onepress.sociallocker.lang.defaultHeader,message:a.onepress.sociallocker.lang.defaultMessage},theme:"starter",cssClass:null,demo:!1,buttons:{layout:"horizontal",order:["twitter-tweet","facebook-like","google-plus"],counter:!0},googleAnalytics:!1,locker:{close:!1,timer:0,mobile:!0,expires:!1,useCookies:!1,scope:!1},content:null,effects:{flip:!1,highlight:!0},facebook:{url:null,appId:null,lang:"en_US",colorScheme:"light",font:"tahoma",ref:null,like:{title:a.onepress.sociallocker.lang.facebook_like,theConfirmIssue:!1},share:{title:a.onepress.sociallocker.lang.facebook_share}},twitter:{url:null,via:null,text:null,related:null,lang:"en",counturl:null,tweet:{title:a.onepress.sociallocker.lang.twitter_tweet},follow:{title:a.onepress.sociallocker.lang.twitter_follow}},google:{url:null,lang:"en-US",annotation:null,recommendations:!0,plus:{title:a.onepress.sociallocker.lang.google_plus},share:{title:a.onepress.sociallocker.lang.google_share}},linkedin:{url:null,counter:"right",share:{title:a.onepress.sociallocker.lang.linkedin_share}}},getState:function(){return this._isLocked?"locked":"unlocked"},_create:function(){var b=this;if(this.events={lock:function(a,c){b.element.trigger("lock.sociallocker.onp",[a,c])},unlock:function(a,c,d){if(b.element.trigger("unlock.sociallocker.onp",[a,c]),b.options.googleAnalytics&&(window._gaq||window.ga)&&"button"===a){var e=null,f=null;"facebook-like"===c?(f="Facebook Like",e="Got a Like on Facebook"):"facebook-share"===c?(f="Facebook Share",e="Shared on Facebook"):"twitter-tweet"===c?(f="Twitter Tweet",e="Shared on Twitter"):"twitter-follow"===c?(f="Twitter Follow",e="Got a Follower on Twitter"):"google-plus"===c?(f="Google Plus",e="Got +1 on Google"):"google-share"===c?(f="Google Share",e="Shared on Google"):"linkedin-share"===c&&(f="Linkedin Share",e="Shared on Linkedin"),window.ga?window.ga("send","event","Social Locker (Leakages)","Unlocked by Social Button",f):window._gaq.push(["_trackEvent","Social Locker (Leakages)","Unlocked by Social Button",f]),window.ga?window.ga("send","event","Social Locker (Activity)",e,d):window._gaq.push(["_trackEvent","Social Locker (Activity)",e,d])}},unlockByClose:function(){b.element.trigger("unlockByClose.sociallocker.onp",[]),b.options.googleAnalytics&&(window._gaq||window.ga)&&(window.ga?window.ga("send","event","Social Locker (Leakages)","Unlocked by Close Icon",null):window._gaq.push(["_trackEvent","Social Locker (Leakages)","Unlocked by Close Icon",null]))},unlockByTimer:function(){b.element.trigger("unlockByTimer.sociallocker.onp",[]),b.options.googleAnalytics&&(window._gaq||window.ga)&&(window.ga?window.ga("send","event","Social Locker (Leakages)","Unlocked by Timer",null):window._gaq.push(["_trackEvent","Social Locker (Leakages)","Unlocked by Timer",null]))}},this._processOptions(),a.onepress.browser.msie&&7===parseInt(a.onepress.browser.version,10))return this._unlock("ie7"),void 0;if(!this.options.locker.mobile&&this._isMobile())return this._unlock("mobile"),void 0;if(/iPhone/i.test(navigator.userAgent)&&this.options._iPhoneBug){var c=a.inArray("twitter-tweet",this.options.buttons.order);c>=0&&this.options.buttons.order.splice(c,1)}if(a.onepress.browser.opera||a.onepress.browser.msie||this._isTabletOrMobile()){var d=a.inArray("google-share",this.options.buttons.order);d>=0&&this.options.buttons.order.splice(d,1)}return 0===this.options.buttons.order.length?(this._unlock("nobuttons"),void 0):(this._controller=this._createProviderController(),this._controller.getState(function(a){a?b._unlock("provider"):b._lock()}),b.options.locker.scope&&a(document).bind("unlockByScope.sl.onp",function(a,c,d){c!==b.element&&b.options.locker.scope===d&&b._unlock("scope")}),void 0)},_createProviderController:function(){var b=this;this._providers={};var c=0;for(var d in this.options.buttons.order){var e=this.options.buttons.order[d];if("string"==typeof e){if(!this._isValidButton(e))return this._setError("The button '"+e+"' not found."),void 0;if("#"!=e){var f=e.split("-"),g=f[0],h=f[1],i=a.extend({},this.options[g]);this.options[g][h]&&(i=a.extend(i,this.options[g][h]));var j=i.url||this.options.url||window.location.href;this._providers[e]||(this._providers[e]=new a.onepress.providers.clientStoreStateProvider(g,h,j,b.options),c++)}}}return{getState:function(a){var d=c,e=!1;for(var f in b._providers){var g=b._providers[f];g.getState(function(b){d--,e=e||b,0==d&&a(e,g)})}}}},_processOptions:function(){var b=this.options.theme||this._defaults.theme,c=a.extend(!0,{},this._defaults);a.onepress.sociallocker.presets[b]&&(c=a.extend(!0,{},c,a.onepress.sociallocker.presets[b]),a.onepress.sociallocker.presets[b].buttons&&a.onepress.sociallocker.presets[b].buttons.order&&(c.buttons.order=a.onepress.sociallocker.presets[b].buttons.order)),c=a.extend(!0,c,this.options),this.options.buttons&&this.options.buttons.order&&(c.buttons.order=this.options.buttons.order),c.effects.flip=c.effects.flip||"onp-sociallocker-secrets"==c.style,c.buttons.layout||(c.buttons.layout="horizontal"),"vertical"===c.buttons.layout&&(c.facebook.like.layout="box_count",c.facebook.share.layout="box_count",c.twitter.count="vertical",c.twitter.size="medium",c.google.plus.size="tall",c.google.share.annotation="vertical-bubble",c.linkedin.share.counter="top",c.buttons.counter=!0),"horizontal"===c.buttons.layout&&(c.facebook.layout="button_count",c.twitter.count="horizontal",c.twitter.size="medium",c.google.size="medium",c.google.annotation="bubble",c.linkedin.share.counter="right",c.buttons.counter||(c.twitter.count="none",c.twitter.showCount=!1,c.google.annotation="none",c.facebook.count="none",c.linkedin.share.counter="none")),"object"!=typeof c.text&&(c.text={message:c.text}),c.text.header&&(c.text.header="function"==typeof c.text.header&&c.text.header(this)||"string"==typeof c.text.header&&a("<div>"+c.text.header+"</div>")||"object"==typeof c.text.header&&c.text.header.clone()),c.text.message&&(c.text.message="function"==typeof c.text.message&&c.text.message(this)||"string"==typeof c.text.message&&a("<div>"+c.text.message+"</div>")||"object"==typeof c.text.message&&c.text.message.clone()),c.locker.timer=parseInt(c.locker.timer),0==c.locker.timer&&(c.locker.timer=null),this.options=c,this.style="onp-sociallocker-"+b},_isMobile:function(){return/webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?!0:/Android/i.test(navigator.userAgent)&&/Mobile/i.test(navigator.userAgent)?!0:!1},_isTabletOrMobile:function(){return/webOS|iPhone|iPad|Android|iPod|BlackBerry/i.test(navigator.userAgent)?!0:!1},_isValidButton:function(b){for(var c in a.onepress.sociallocker.buttons)if(a.onepress.sociallocker.buttons[c]==b)return!0;return!1},_setError:function(a){this._error=!0,this._errorText=a,this.locker&&this.locker.hide(),this.element.html("<strong>[Error]: "+a+"</strong>"),this.element.show().addClass("onp-sociallocker-error")},_createMarkup:function(){this.element.addClass("onp-sociallocker-content");var b=a.onepress.browser.mozilla&&"mozilla"||a.onepress.browser.opera&&"opera"||a.onepress.browser.webkit&&"webkit"||"msie";this.locker=a("<div class='onp-sociallocker onp-sociallocker-"+b+"' style='display: none;'></div>"),this.outerWrap=a("<div class='onp-sociallocker-outer-wrap'></div>").appendTo(this.locker),this.innerWrap=a("<div class='onp-sociallocker-inner-wrap'></div>").appendTo(this.outerWrap),"fixed"===this.options.buttons.size&&this.locker.addClass("onp-sociallocker-buttons-fixed"),this.locker.addClass(this.style),this.locker.addClass("onp-sociallocker-"+this.options.buttons.layout),this.options.buttons.counter?this.locker.addClass("onp-sociallocker-has-counters"):this.locker.addClass("onp-sociallocker-no-counters"),a.onepress.isTouch()?this.locker.addClass("onp-sociallocker-touch"):this.locker.addClass("onp-sociallocker-no-touch"),this.options.cssClass&&this.locker.addClass(this.options.cssClass);var c=a("<div class='onp-sociallocker-text'></div>");this.options.text.header&&c.append(this.options.text.header.addClass("onp-sociallocker-strong").clone()),this.options.text.message&&c.append(this.options.text.message.addClass("onp-sociallocker-message").clone()),this.innerWrap.append(c.addClass()),c.prepend(a("<div class='onp-sociallocker-before-text'></div>")),c.append(a("<div class='onp-sociallocker-after-text'></div>")),this._createButtonMarkup(),this.options.bottomText&&this.innerWrap.append(this.options.bottomText.addClass("onp-sociallocker-bottom-text")),this.options.locker.close&&this._createClosingCross(),this.options.locker.timer&&this._createTimer();var d=this.element.parent().is("a")?this.element.parent():this.element;this.locker.insertAfter(d),this._markupIsCreated=!0,a.inArray("facebook-like",this.options.buttons.order)>=0&&this._startTrackIFrameSizes()},_createButtonMarkup:function(){var b=this;this.buttonsWrap=a("<div class='onp-sociallocker-buttons'></div>").appendTo(this.innerWrap);var c=50;a.each(this.options.buttons.order,function(d,e){if("string"!=typeof e)return!0;if("#"===e)return b.buttonsWrap.append("<div class='onp-button-separator'></div>"),!0;if(b.options.buttons.unsupported&&jQuery.inArray(e,b.options.buttons.unsupported)>=0){var f='The button "'+e+'" is not supported by this theme.',g=a("<div class='onp-sociallocker-button onp-sociallocker-button-unsupported'></div>"),h=a("<div class='onp-sociallocker-button-inner-wrap'>"+f+"</div>").appendTo(g);return b.buttonsWrap.append(g),!0}var i=e.split("-"),j=i[0],k=i[1],l="sociallocker_"+j+"_"+k,m=a.extend({},b.options[j]);b.options[j][k]&&(m=a.extend(m,b.options[j][k])),m.url=m.url||b.options.url,m._provider=b._providers[e],m.unlock=function(){b._unlock("button",m._provider)};var g=a("<div class='onp-sociallocker-button onp-sociallocker-button-"+e+" onp-sociallocker-state-loading'></div>");g.addClass("onp-sociallocker-button-"+j),g.data("name",e),b.buttonsWrap.append(g);var h=a("<div class='onp-sociallocker-button-inner-wrap'></div>").appendTo(g);h[l](m);var n=a.onepress.sdk[j],o=!1;setTimeout(function(){o||(g.removeClass("onp-sociallocker-state-loading").addClass("onp-sociallocker-state-error"),b._createErrorMarkup(a.onepress.sociallocker.lang.unableToLoadSDK,j).appendTo(h))},n.timeout),a.onepress.connector.connect(j,m,function(c){o=!0;var d=5e3,f=function(){return 0===g.find(c.container).length&&d>=0?(setTimeout(function(){f()},500),d-=500,void 0):(g.removeClass("onp-sociallocker-state-loading"),0>=d?(g.addClass("onp-sociallocker-state-error"),b._createErrorMarkup(a.onepress.sociallocker.lang.unableToCreateButton,e).appendTo(h),void 0):(h.trigger("onp-sl-button-created"),void 0))};f()});var p=b.options.effects.flip,q=a.onepress.tools.has3d();if(p&&q&&g.addClass("onp-sociallocker-flip")||g.addClass("onp-sociallocker-no-flip"),!p)return!0;var r=b.options.triggers&&b.options.triggers.overlayRender?b.options.triggers.overlayRender(m,j,k,a.onepress.isTouch()):a("<a class='onp-sociallocker-button-overlay' href='#'></a>");r.prependTo(h),q||g.hover(function(){var b=a(this).find(".onp-sociallocker-button-overlay");b.stop().animate({opacity:0},200,function(){b.hide()})},function(){var b=a(this).find(".onp-sociallocker-button-overlay").show();b.stop().animate({opacity:1},200)}),a.onepress.isTouch()&&(q?r.click(function(){var b=a(this).parents(".onp-sociallocker-button");return b.hasClass("onp-sociallocker-flip-hover")?b.removeClass("onp-sociallocker-flip-hover"):(a(".onp-sociallocker-flip-hover").removeClass("onp-sociallocker-flip-hover"),b.addClass("onp-sociallocker-flip-hover")),!1}):r.click(function(){var b=a(this);return b.stop().animate({opacity:0},200,function(){b.hide()}),!1})),r&&(r.css("z-index",c),r.find(".onp-sociallocker-overlay-front").css("z-index",c),r.find(".onp-sociallocker-overlay-back").css("z-index",c-1),r.find(".onp-sociallocker-overlay-header").css("z-index",c-1)),c-=5})},_createErrorMarkup:function(b,c){var d=this,e=a("<div class='onp-sociallocker-error-body'><a href='#' class='onp-sociallocker-error-title'>"+a.onepress.sociallocker.lang.error+"</a><div class='onp-sociallocker-error-text'>"+b.replace("{0}",c)+"</div></div>"),f=e.find(".onp-sociallocker-error-text"),g=e.find(".onp-sociallocker-error-title");return g.click(function(){return d.locker.find(".onp-sociallocker-shown-error").remove(),e.hasClass("onp-sociallocker-active")?e.removeClass("onp-sociallocker-active"):(d.locker.find(".onp-sociallocker-active").removeClass("onp-sociallocker-active"),e.addClass("onp-sociallocker-active"),d.buttonsWrap.after(f.clone().addClass("onp-sociallocker-shown-error"))),!1}),e},_createClosingCross:function(){var b=this;a("<div class='onp-sociallocker-cross' title='"+a.onepress.sociallocker.lang.close+"' />").prependTo(this.locker).click(function(){b.close&&b.close(b)||b._unlock("cross",!0)})},_createTimer:function(){this.timer=a("<span class='onp-sociallocker-timer'></span>");var b=a.onepress.sociallocker.lang.orWait,c=a.onepress.sociallocker.lang.seconds;this.timerLabel=a("<span class='onp-sociallocker-timer-label'>"+b+" </span>").appendTo(this.timer),this.timerCounter=a("<span class='onp-sociallocker-timer-counter'>"+this.options.locker.timer+c+"</span>").appendTo(this.timer),this.timer.appendTo(this.locker),this.counter=this.options.locker.timer,this._kickTimer()},_kickTimer:function(){var b=this;setTimeout(function(){if(b._isLocked)if(b.counter--,b.counter<=0)b._unlock("timer");else{if(b.timerCounter.text(b.counter+a.onepress.sociallocker.lang.seconds),a.onepress.browser.opera){var c=b.timerCounter.clone();c.insertAfter(b.timerCounter),b.timerCounter.remove(),b.timerCounter=c}b._kickTimer()}},1e3)},_startTrackIFrameSizes:function(){if(!this.options.facebook.like.theConfirmIssue){var b=this;this._trackIFrameTimer=null,this.locker.hover(function(){var c=b.locker.find(".onp-facebook-like-button"),d=c.find("iframe");d.length&&(b._trackIFrameTimer=setInterval(function(){var e=parseInt(d[0].style.height);if(e||(e=d.height()),e>200){b._stopTrackIFrameSizes();var f=c.find(".fake-fb-like").data("url-to-verify");a(document).trigger("onp-sl-facebook-like",[f])}},500))},function(){b._stopTrackIFrameSizes()})}},_stopTrackIFrameSizes:function(){this._trackIFrameTimer&&clearInterval(this._trackIFrameTimer)},_lock:function(a,b){this._isLocked||this._stoppedByWatchdog||(this._markupIsCreated||this._createMarkup(),"button"===a&&b.setState("locked"),this.element.hide(),this.isInline?this.locker.css("display","inline-block"):this.locker.fadeIn(1e3),this._isLocked=!0,this.events.lock&&this.events.lock(a,b&&b.name))},_unlock:function(b,c){var d=this;return this._isLocked?("button"===b&&(c.setState("unlocked"),d.options.locker.scope&&a(document).trigger("unlockByScope.sl.onp",[d.element,d.options.locker.scope])),this._showContent(!0),"scope"!==b&&(this._isLocked=!1,"timer"===b&&this.events.unlockByTimer&&this.events.unlockByTimer(),"cross"===b&&this.events.unlockByClose&&this.events.unlockByClose(),this.events.unlock&&this.events.unlock(b,c&&c.name,c&&c.url)),void 0):(this._showContent("button"!==b),!1)},lock:function(){this._lock("user")},unlock:function(){this._unlock("user")},_showContent:function(b){var c=this;this._stopTrackIFrameSizes();var d=function(){return c.locker&&c.locker.hide(),b?(c.element.fadeIn(1e3,function(){c.options.effects.highlight&&c.element.effect&&c.element.effect("highlight",{color:"#fffbcc"},800)}),void 0):(c.element.show(),void 0)};if(this.options.content)if("string"==typeof this.options.content)this.element.html(this.options.content),d();else if("object"!=typeof this.options.content||this.options.content.url)if("object"==typeof this.options.content&&this.options.content.url){var e=a.extend(!0,{},this.options.content),f=e.success,g=e.complete,h=e.error;e.success=function(a,b,e){f?f(c,a,b,e):c.element.html(a),d()},e.error=function(a,b,d){c._setError("An error is triggered during the ajax request! Text: "+b+" "+d),h&&h(a,b,d)},e.complete=function(a,b){g&&g(a,b)},a.ajax(e)}else d();else this.element.append(this.options.content.clone().show(;)),d();else d()}}),a.fn.socialLock=function(b){b=a.extend({},b),a(this).sociallocker(b)})}(jQuery);

(function($){
    if ( !window.onpsl ) window.onpsl = {};
    if ( !window.onpsl.lockerOptions ) window.onpsl.lockerOptions = {};
    
    window.onpsl.lockers = function() {
        
        // shortcodes
        
        $(".onp-sociallocker-call").each(function(){
            var $target = $(this);
            var lockId = $target.data('lock-id');

            var data = window.onpsl.lockerOptions[lockId] 
                ? window.onpsl.lockerOptions[lockId] 
                : $.parseJSON( $target.next().text() );
            
            window.onpsl.createLocker( $target, data, lockId );
        });
        
        // css selectors from bulk locking
        
        if ( window.onpsl.bulkCssSelectors ) {
            for(var index in window.onpsl.bulkCssSelectors) {
                var selector = window.onpsl.bulkCssSelectors[index]['selector'];
                var lockId = window.onpsl.bulkCssSelectors[index]['lockId'];
                
                var limitCounter = 0;
                $(selector).each(function(){
                    
                    limitCounter++;
                    if ( limitCounter > 20 ) return false;
                    
                    var $target = $(this);
                    var data = window.onpsl.lockerOptions[lockId];
                    window.onpsl.createLocker( $target, data, lockId );
                });
            }
            window.onpsl.bulkCssSelectors = [];
        } 
    };
    
    window.onpsl.createLocker = function( $target, data, lockId ) {

        var options = data.options;

        if ( data.ajax ) {
            options.content = {
                url: data.ajaxUrl, type: 'POST', data: {
                    lockerId: data.lockerId,
                    action: 'sociallocker_loader',
                    hash: data.contentHash
                }
            }
        }

        if ( data.postId && data.tracking ) {
            $target.bind('unlock.sociallocker.onp', function(e, sender, senderName){
                if ( $.inArray(sender, ['cross', 'button', 'timer']) === -1 ) return;

                $.ajax({ url: data.ajaxUrl, type: 'POST', data: {
                    action: 'sociallocker_tracking',
                    targetId: data.postId,
                    sender: sender,
                    senderName: senderName
                    }
                });
            });
        }

        $target.removeClass("onp-sociallocker-call");
        if ( !window.onpsl.lockerOptions[lockId] ) $target.next().remove();

        $target.sociallocker( options );
    };    
    
    // adding support for dynamic themes
    
    var bindFunction = function(){
        $(document).ajaxComplete(function() {
            window.onpsl.lockers();
        });
            
        if ( !window.onpsl.dynamicThemeSupport ) return;

        if ( window.onpsl.dynamicThemeEvent != '' ) {
            $(document).bind(window.onpsl.dynamicThemeEvent, function(){
                window.onpsl.lockers();
            });
        }
    };

    if ( window.onpsl.dynamicThemeSupport ) {
        bindFunction();
    } else {
        $(function(){ bindFunction(); });
    }

})(jQuery);;
