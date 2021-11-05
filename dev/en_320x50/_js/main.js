


import {init} from '../../_common/js/common.js'


const tl = new TimelineMax( {onComplete:()=>{ }} )


tl.set(".frame1", {opacity:1})


tl.to(".t1", .4, {opacity:0}, "+=2")
tl.from(".t2", .4, {opacity:0})


tl.add("f3", "+=5.3")
tl.to(".t2", .6, {opacity:0}, "f3")
tl.from(".t4", .6, {opacity:0}, "f3")

tl.from(".t3", .5, {opacity:0}, "+=.3")