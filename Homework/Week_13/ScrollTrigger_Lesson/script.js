gsap.registerPlugin(ScrollTrigger)

// Animate every element with the .reveal class when it enters the viewport
gsap.utils.toArray('.reveal').forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%', // when the top of the element hits 80% down the viewport
      toggleActions: 'play none none reverse',
    //   markers: true,
    },
  })
})

// Scrollspy: highlight the nav link of whichever section is in view
gsap.utils.toArray('section[id]').forEach((section) => {
  const link = document.querySelector(
    `.spy-nav a[data-spy-link="${section.id}"]`
  )
  if (!link) return

  ScrollTrigger.create({
    trigger: section,
    start: 'top center', // section's top hits the middle of the viewport
    end: 'bottom center', // section's bottom hits the middle of the viewport
    onToggle: (self) => {
      link.classList.toggle('is-active', self.isActive)
    },
  })
})
