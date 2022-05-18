// Curtain effect

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger-second',
    triggerHook: 'onEnter'
  })
  .setClassToggle('#main-content', 'is-relative')
  .addTo(controller);

var blackoutTweenFirst = TweenMax.to('#main-content .blackout', 1, {
  opacity: 0,
  ease: Linear.easeNone
});

var scene = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '#blackout-first',
    triggerHook: 'onEnter'
  })
  .setClassToggle('#main-content .blackout', 'is-visible')
  .setTween(blackoutTweenFirst)
  .addTo(controller);



var contentHeight = document.getElementById('main-content').clientHeight;
// alert(contentHeight);

// document.getElementById('header').style.marginBottom = contentHeight;

// $('#header').css({
// 	'margin-bottom': contentHeight
// });