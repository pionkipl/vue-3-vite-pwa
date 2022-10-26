import anime from 'animejs/lib/anime.es.js';


function useFadeIn(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    scale: [0, 1],
    easing: 'easeInOutSine',
    translateY: [550, 0],
    duration: 500,
    complete: done,
  })
}

function useFadeOut(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    scale: [1, 0],
    translateY: [0, 550],
    easing: 'easeInOutSine',
    duration: 500,
    complete: done,
  })
}

export {
  useFadeIn, useFadeOut,
}
