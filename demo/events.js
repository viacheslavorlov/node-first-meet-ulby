import EventEmitter from "events";
import data from "../data.js";

// const emitter = new EventEmitter;
//
// emitter.on('anything', data => {
// 	console.log('ON: anything', data)
// })
//
// emitter.emit('anything', {a: 1})
//
//
// setTimeout(() => {
// 	emitter.emit('anything', {b: 2})
// }, 1500)

class Dicpatcher extends EventEmitter {
	subscribe(eventName, cb) {
		console.log('[subscribe...]')
		this.on(eventName, cb)
	}

	dipatch(eventName, data) {
		console.log('[Dispatching...]')
		this.emit(eventName, data)
	}
}

const dis = new Dicpatcher();

dis.subscribe('aa', data => {
	console.log('ON: aa ', data)
})

dis.dipatch('aa', {aa: 22})
