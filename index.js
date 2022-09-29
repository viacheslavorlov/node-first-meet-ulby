import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import text from './data.js';
import {createRequire} from 'module';
import http from "http";

const require = createRequire(import.meta.url);
const __dirname = path.resolve();
const crypto = require('crypto');

// console.log(chalk.red(text));
// console.log(__dirname, require)

//* проверка многопоточности node.js

// const start = Date.now();

// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('1 end ', Date.now() - start))
// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('2 end ', Date.now() - start))
// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('3 end ', Date.now() - start))
// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('4 end ', Date.now() - start))
// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('5 end ', Date.now() - start))
// crypto.pbkdf2('123ttt', '5',
// 	1000000, 64, 'sha512',
// 	() => console.log('6 end ', Date.now() - start))

console.log(process.env.PORT);


//* создание сервера

const server = http.createServer((request, response) => {
	//* неоптимизированный вариант передачи файов от сервера
	// if (request.url === '/') {
	// 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		response.writeHead(200, {
	// 			'Content-Type': 'text/html'
	// 		})
	// 		response.end(data);
	// 	})
	// } else if (request.url === '/contact'){
	// 	fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		response.writeHead(200, {
	// 			'Content-Type': 'text/html'
	// 		})
	// 		response.end(data);
	// 	})
	// }
	let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
	const ext = path.extname(filePath)
	console.log(ext);

	let contentType;
	switch (ext) {
		case '.css':
			contentType = 'text/css';
			break;
		case '.js':
			contentType = 'text/javascript';
			break;
		default:
			contentType = 'text/html';
	}

	if (!ext) {
		filePath += '.html';
	}
	console.log(filePath)
	fs.readFile(filePath, (err, content) => {
		if (err) {
			fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
				if (err) {
					response.writeHead(500)
					response.end('Error...')
				} else {
					response.writeHead(200, {
						'Content-Type': contentType
					})
					response.end(data);
				}
			})
		} else {
			response.writeHead(200, {
				'Content-Type': contentType
			})
			response.end(content);
		}
	})
});

// const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
	console.log(`server has been started on port: ...`)
})
