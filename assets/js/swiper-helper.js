{const e=window.Swiper,t={boolean:{test:e=>"true"===e||"false"===e,convert:e=>"false"!==e,items:["centeredSlides","pagination-clickable","observer","observeParents","freeMode","watchSlidesVisibility","watchSlidesProgress","loop","centeredSlidesBounds","autoplay-disableOnInteraction","autoHeight","fraction-zeros","cssMode","fadeEffect-crossFade","mousewheel"]},number:{test:e=>!isNaN(parseFloat(e)),convert:e=>parseFloat(e),items:["spaceBetween","autoplay-delay","initialSlide","slidesPerView","speed"]},string:{test:()=>!0,convert:e=>e,items:[]}},s={items:"slidesPerView",sets:"slidesPerGroup",center:"centeredSlides","center-bounds":"centeredSlidesBounds",gap:"spaceBetween",next:"navigation-nextEl",prev:"navigation-prevEl","disable-class":"navigation-disabledClass",active:"initialSlide",connect:"thumbs-connect",offset:"slidesOffsetAfter",dots:"pagination-el","dots-type":"pagination-type","dots-click":"pagination-clickable","auto-height":"autoHeight",autoplay:"autoplay-delay","autoplay-int":"autoplay-disableOnInteraction",fade:"fadeEffect-crossFade"},n="\n        gap: 48;\n        next: .swiper-next;\n        prev: .swiper-prev;\n        disable-class: uk-invisible;\n        dots: .swiper-dotnav;\n        dots-click: true;\n        fraction-zeros: true;\n        observer: true;\n        observeParents: true;\n        watchSlidesVisibility: true;\n        watchSlidesProgress: true;\n    ",a=(e,a,i=!1)=>{const o={};((i?n+";":"")+e).split(";").filter((e=>e.trim())).map((e=>e.split(":").map((e=>e.trim())))).forEach((([e,n])=>{s[e]&&(e=s[e]);e:{for(const s in t)if(t[s].items.includes(e)&&(!t[s].test||t[s].test(n))){n=t[s].convert(n);break e}"string"==typeof n&&(/^(true|false)$/.test(n)&&console.warn("swiper option",e,n,"maybe be boolean."),/^(\d+(\.\d+)?)$/.test(n)&&console.warn("swiper option",e,n,"maybe be number."))}const a=e.split("-");let i=o;a.forEach(((e,t)=>{t<a.length-1?(i[e]=i[e]||{},i=i[e]):i[e]=n}))}));{let e=a.closest(o.parent||".swiper-parent");e||(e=a),o.navigation&&(o.navigation.nextEl&&(o.navigation.nextEl=[...e.querySelectorAll(o.navigation.nextEl)]),o.navigation.prevEl&&(o.navigation.prevEl=[...e.querySelectorAll(o.navigation.prevEl)])),o.pagination&&o.pagination.el&&(o.pagination.el=[...e.querySelectorAll(o.pagination.el)]),o.thumbs&&o.thumbs.connect&&(o.thumbs.connect=[...e.querySelectorAll(o.thumbs.connect)]),o.progress&&o.progress.bar&&(o.progress.bar=[...e.querySelectorAll(o.progress.bar)]),delete o.parent}if(o.progress&&o.progress.bar){const e=$(o.progress.bar);delete o.progress,o.on={init(){e.removeClass("animate"),e.removeClass("active"),e.eq(0).addClass("animate"),e.eq(0).addClass("active")},slideChangeTransitionStart(){e.removeClass("animate"),e.removeClass("active"),e.eq(0).addClass("active")},slideChangeTransitionEnd(){e.eq(0).addClass("animate")}}}if(o.fraction&&o.fraction.zeros){const e=2,t="0";delete o.fraction,Object.assign(o.pagination,{formatFractionCurrent:s=>String(s).padStart(e,t),formatFractionTotal:s=>String(s).padStart(e,t)})}return o},i={xs:480,s:640,m:960,l:1200,xl:1600};$("[data-swiper]").each((function(){let t={};try{t=a(this.getAttribute("data-swiper"),this,!0);for(const e in i){const s=this.getAttribute("data-swiper-"+e);if(s){t.breakpoints=t.breakpoints||{};const n=i[e];t.breakpoints[n]=a(s,this)}}}catch(e){console.warn(e)}const s=()=>{const s=new e(this,t);s.update(),window.addEventListener("load",(()=>s.update()),{once:!0})};if(t.thumbs&&t.thumbs.connect){const e=t.thumbs.connect;delete t.thumbs.connect,setTimeout((()=>{const n=e[0];n?(t.thumbs.swiper=n.swiper,t.thumbs.swiper?s():console.warn(`thumbs connect with selector "${e}" not setup!`)):console.warn(`thumbs connect with selector "${e}" not exist!`)}))}else s()}))}