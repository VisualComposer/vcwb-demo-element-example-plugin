// Script to initialize Slick Slider in Visual Composer editor
// and on View Page, this file is minified and located in the dist folder.
// Minified version of this file is included in settings.json under metaPublicJs property.

// To minify this file inside imageSlider/public folder a webpack.config.js file should be created
// next inside terminal enter imageSlider/public folder and run:
// ../../node_modules/.bin/webpack --config=webpack.config.js -p

(function ($) {
  // Get all settings from data attributes
  // Check if this element is already initialized, then destroy Slick slider
  // Initialize slider
  // vcSlick is a custom Visual Composer property on an element to control Slick
  function initSlider (slider) {
    const dots = slider.parent().find('.vce-image-slider-dots')
    const prevArrow = slider.find('.vce-image-slider-prev-arrow') || ''
    const nextArrow = slider.find('.vce-image-slider-next-arrow') || ''
    const settings = {
      autoplay: slider[0].dataset.slickAutoplay === 'on',
      autoplaySpeed: slider[0].dataset.slickAutoplayDelay,
      fade: slider[0].dataset.slickEffect === 'fade',
      arrows: slider[0].dataset.slickArrows === 'on',
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      appendDots: dots,
      dots: slider[0].dataset.slickDots === 'on',
      initialSlide: 0,
      respondTo: 'slider',
      swipe: slider[0].dataset.slickDisableSwipe !== 'on',
      swipeToSlide: slider[0].dataset.slickDisableSwipe !== 'on',
      touchMove: slider[0].dataset.slickDisableSwipe !== 'on'
    }
    if (slider.hasClass('slick-initialized')) {
      slider.vcSlick && slider.vcSlick('unslick')
    }
    slider.vcSlick && slider.vcSlick(settings)
  }

  // Selects all possible imageSlider element on the page
  // Iterates over each one and initialize it
  function initialize () {
    const sliders = $('.vce-image-slider-list')
    if (sliders.length) {
      // Use `function` keyword instead of arrow function for correct `this` keyword scope
      sliders.each(function () {
        const slider = $(this)
        initSlider(slider)
      })
    }
  }

  // window.vcv.on('ready', function () {}) is a global event listener
  // it is triggered each time element is added to the page or gets edited (in VC editor)
  window.vcv.on('ready', () => {
    initialize()
  })

  // window.vcv.on('reInit', function () {}) is a global event listener
  // it is triggered each time element is added to the page or gets edited (in VC editor)
  // Selects particular imageSlider elemnt (based on ID) and re-initialize it with timeout
  window.vcv.on('reInit', (action, id = '') => {
    const timeout = setTimeout(() => {
      const slider = $(`#el-${id} .vce-image-slider-list`)
      if (slider) {
        initSlider(slider)
      }
      clearTimeout(timeout)
    }, 0)
  })
})(window.jQuery)
