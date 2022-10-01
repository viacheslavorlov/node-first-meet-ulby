//* Readable -чтение
//* Eritable - запись
//* Duplex - чтение + запись
//* Transform - чтение + запись + изменение данных во время выполнения


import fs from "node:fs";
import path from "node:path";
import http from "http";
const __dirname = path.resolve();

// fs.readFile(path.join(__dirname, 'test.txt'), (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(data)
// });
//
//
// const stream = fs.createReadStream(path.join(__dirname, 'test.txt'), {encoding: 'utf-8'})
//
 //* chunk по дефолту 64Кб
// stream.on('data', (chunk) => {
// 	console.log(chunk)
// })
 //* подписка на события стрима
// stream.on("end", () => console.log('стрим прочитан'));
// stream.on('open', () => console.log('начало чтения стрима'));
// stream.on('error', (e) => console.log(e));
//* создание записывающего стрима
const writableStream = fs.createWriteStream(path.join(__dirname, 'test2.txt'))
for (let i = 0; i < 28; i++) {
	writableStream.write(i + '\n')
}
writableStream.end(() => console.log("стрим записан"))

// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on()

http.createServer((req, res) => {
	// req - readable stream
	// res - writable stream
	const stream = fs.createReadStream(path.join(__dirname, 'text.txt'))

	stream.pipe(res)
})