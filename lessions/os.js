import os from 'os';
import cluster from "cluster";


console.log(os.platform()) // название операционной системы
console.log(os.arch()) // архитектура
console.log(os.cpus().length) // количество процессоров



if (cluster.isMaster) {
	for (let i = 0; i < os.cpus().length - 1; i++) {
		cluster.fork();
	}
	cluster.on('exit', worker => {
		console.log(`процесс с pid = ${worker.process.pid} умер`)
		cluster.fork()
	})
} else {
	console.log(`Воркер c pid = ${process.pid} запущен`)

	setInterval(() => {
		console.log(`Воркер c pid = ${process.pid} всё еще работает`)
	}, 5000)
}



