const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// _.throttle(함수, 함수가 몇초에 작동하면 되는지 시간을 추가)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0  //요소(=window창) 스크롤 위치를 0 위치로 옮기겠다.
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1 ) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  //슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,  //한번에 몇개의 슬라이드를 보일 것인가
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //isHidePrmotion 값이 true라면 어쩔거냐?  숨기겠다!
    promotionEl.classList.add('hide');
  } else {
    //isHidePromotion 값이 false면 어쩔거냐?  보이겠다!
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max-min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,  //반복하겠다
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8  // 뷰포트 기준으로 0.8 에 해당되는 위치에 트리거 지정
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});