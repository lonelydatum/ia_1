const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeOut


const {w, h} = size










function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})


	tl.set(".frame1", {opacity:1})

	TweenLite.defaultEase = Power2.easeOut

	TweenLite.to(".bg", 13, {x:-size.w/2, y:-size.h/2, scale:.5, ease:Linear.easeNone, onComplete:()=>{
		// alert("sldkfj")
	}})

	const IN = .5
	const OUT = .3

	// tl.from(".t1", IN, {opacity:0})
	tl.to(".t1", OUT, {opacity:0}, "+=2.3")

	tl.from(".t2", IN, {opacity:0}, "+=.2")
	tl.to(".t2", OUT, {opacity:0}, "+=2")

	tl.from(".t3", IN, {opacity:0})
	tl.to(".t3", OUT, {opacity:0}, "+=3.7")

	tl.from(".t4", IN, {opacity:0})

	

	

	

	return tl
}





export {size, init}