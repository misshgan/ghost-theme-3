// const scrollContainer = document.querySelector(".hz-section");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });
gsap.registerPlugin(ScrollTrigger);

if (window.location.pathname = '/') {
	window.addEventListener('load', function(){
		let headerHeight = document.querySelector('header').offsetHeight;
		let hzPanel = document.querySelectorAll('.hz-frame');
		hzPanel.forEach(element => {
			element.style.paddingTop = headerHeight + 'px'
		});

		let header = document.querySelector('.header');
		header.style.position = `
			position: fixed;
			top: 0;
			left: 0;
		`
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
	})
}



// //# sourceMappingURL=main.js.map