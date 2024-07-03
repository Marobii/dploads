"use strict";

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 300,
  reset: false,
});


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      return "mobile";
  }
  return "desktop";
};

console.log(deviceType());

if (deviceType() == "tablet" || deviceType() == "mobile") {
  sr.reveal();
} else {
  sr.reveal(
    `.btn-mobile-nav, .section-intro, .heading-primary, .culture-left, .culture-title, .culture-Description, .culture-btn, .btn, .social-txt, .app__data, .app__img, .social-facebook, .carousel, .calendar-heading, .flex-container, .gallery-title, .gallery, .calendar-heading, .space, .flex-items, .footer, .footer-info, .footer-info-desc`,
    {
      interval: 50,
    }
  );
}