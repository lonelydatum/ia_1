


import {init} from '../../_common/js/common.js'


const tl = new TimelineMax({onComplete:()=>{
	
}})


tl.set(".frame1", {opacity:1})


tl.to(".t1", .3, {opacity:0}, "+=2")
tl.from(".t2", .5, {opacity:0}, "+=.1")

tl.to(".t2", .3, {opacity:0}, "+=5.3")
tl.from(".t4", .3, {opacity:0}, "+=.1")

tl.from(".t3", .5, {opacity:0}, "+=.1")