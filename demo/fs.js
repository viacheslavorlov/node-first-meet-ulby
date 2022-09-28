//* FIle system

import fs from "fs";
import path  from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if (err) {
		throw err;
	}
	console.log('папка создана')
});
//* создание и запись файла
const filePath = path.join(__dirname, 'test', 'text.txt');

//* fs.writeFile
//! СОЗДАЁТ или ПЕРЕЗАПИСЫВАЕТ существующий файл!!!!!
//? если папки в которой должен находится файл не существует - выдаст ошибку
fs.writeFile(filePath, 'Hello NodeJS!', err => {
//* Аргументы: (путь/название-файла-с-расширением, данные для записи в файл, функция)
	if(err) {
		throw err;
	}
	console.log('файл записан')
});

fs.appendFile(filePath, '\nHello again!', err => {
	if(err) {
		throw err;
	}
	console.log('файл дописан')
})

//* Чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err) {
		throw err
	}
	//* без расшифровки content(содержимое файла) будет выведено в виде буфера %)
	// console.log('Content: ', content)
	// вывод: Content:  <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 4a 53 21 0a 48 65 6c 6c 6f 20 61 67 61 69 6e 21>

	//* вариант расшифровки content
	// const data = Buffer.from(content)
	// console.log('Content: ', data.toString())

	console.log('Content: ', content)
})