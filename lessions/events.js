import events from "events";

const emitter = new events.EventEmitter();

emitter.on('message', (data, second, third) => {
	console.log('вы прислали сообщение' + data);
	console.log('second argument' + second);
})

const MESSAGE = process.env.mesage || '';

if (MESSAGE) {
	emitter.emit('message', MESSAGE, 123)
} else {
	emitter.emit('message', 'Сообщение не указано')
}

