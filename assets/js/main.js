// const scrollContainer = document.querySelector(".hz-section");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.hz-frame');

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '.hz-wrapper',
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		end: () => "+=" + document.querySelector('.hz-wrapper').offsetWidth
	}
})
// //# sourceMappingURL=main.js.map