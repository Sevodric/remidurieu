'use strict'

/*
 * Adds an event to #arrow-down that scrolls down to #projects.
 */
let arrow = document.getElementById('arrow-down')
let target = document.getElementById('projects')
arrow.addEventListener('click', function() {
  target.scrollIntoView({
    behavior: 'smooth'
  })
})
