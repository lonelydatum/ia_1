


import {init} from '../../_common/js/common.js'


const tl = new TimelineMax( {onComplete:()=>{ }} )


tl.set(".frame1", {opacity:1})


tl.to(".t1", .4, {opacity:0}, "+=1.7")
tl.from(".t2", .4, {opacity:0})


tl.add("f2", "+=2")
tl.to(".t2", .6, {opacity:0}, "f2")
tl.from(".t3", .6, {opacity:0})

tl.add("f3", "+=1.8")
tl.to(".t3", .6, {opacity:0}, "f3")
tl.from(".t4", .6, {opacity:0})

tl.add("f4", "+=3.2")
tl.to(".t4", .6, {opacity:0}, "f4")

tl.from(".logo", .3, {opacity:0})
tl.from(".t5", .3, {opacity:0}, "+=.2")

tl.gotoAndPlay("t3")