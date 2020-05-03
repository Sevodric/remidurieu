'use strict'

/*
 * Adds an event to #arrow-down that scrolls down to #projects.
 */
const arrow = document.getElementById('arrow-down')
const target = document.getElementById('projects')
arrow.addEventListener('click', function() {
  target.scrollIntoView({
    behavior: 'smooth'
  })
})
