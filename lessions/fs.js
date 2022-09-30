import fs from "fs"
import path from "path";
import dotenv from  'dotenv';
dotenv.config({path: '../.env'});

const __dirname = path.resolve();
import fsPromise from 'fs/promises';
import data from "../data.js";


//? создание папки
// fs.mkdirSync(path.resolve(__dirname, 'dir'))

//? рекурсивное создание несколько вложенных папок
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true})

//? создание папки асинхронно
// fs.mkdir(path.join(__dirname, 'dir'), (err) => {
// 	if (err) {
// 		console.log(err)
// 	}
// 	console.log('папка создана ')
// });
//? удаление папки асинхронно
// fs.rmdir(path.join(__dirname, 'dir'), (err) => {
// 	if (err) {
// 		console.log(err)
//         throw err;
// 	}
// 	console.log('папка удалена')
// });

//? создание файла  (при существовании файла с этим названием и адресом - перезапишет его с указанными данными -
//? предыдущие данные будут удалены)
// fs.writeFile(path.join(__dirname, 'test.txt'), 'TEST test TEST', (err) => {
// 	if (err) {
// 		console.log(err)
// 		throw err
// 	}
// 	console.log('file created')
// })
//?  дописать данные в существующий файл
// fs.appendFile(path.join(__dirname, 'test.txt'), '\nsecond Test@2', (err) => {
// 	if (err) {
// 		console.log(err)
// 		throw err
// 	}
// 	console.log('file: data added into file')
// })


//? асинхронная функция для СОЗДАНИЯ ИЛИ ПЕРЕЗАПИСИ файла на основании Promise
const writeFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
		if (err) {
			return reject(err.message);
		}
		resolve();
	}));
}

//? асинхронная функция для ДОПИСЫВАНИЯ файла на основании Promise
const addDataToFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
		if (err) {
			return reject(err.message);
		}
		resolve();
	}));
}

//? асинхронная функция для ЧТЕНИЯ файла на основании Promise
const readFileAsync = async (path) => {
	return new Promise((resolve, reject) => {
		return fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
			//? 1 аргумент - ошибка, 2 аргумент - данные файла
			//? (буфер - если не указана кодировка, иначе - строка)
			if (err) {
				return reject(err.message);
			}
			resolve(data);
		});
	});
};

//? асинхронная функция для УДАЛЕНИЯ файла на основании Promise
const removeFileAsync = async (path) => {
	return new Promise((resolve, reject) => fs.rm(path, (err) => {
		if (err) {
			return reject(err.message);
		}
		resolve()
	}))
};

//? вызов асинхронной функции создания и дописывания файла

// writeFileAsync(path.join(__dirname, 'testAsync.txt'), 'Test ASYNC')
// 	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 1-ASYNC'))
// 	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 2-ASYNC'))
// 	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 3-ASYNC'))
// 	.then(() => readFileAsync(path.join(__dirname, 'testAsync.txt')))
// 	.then(data => console.log(data))
// 	.then(() => removeFileAsync(path.join(__dirname, 'testAsync.txt')))
// 	.catch(err => console.log(err))


//? работа на встроенных промисах нужно импортировать !!!!fsPromise!!!!!
// fsPromise.mkdir(path.join(__dirname, 'testPromise'))
// 	.then(() => console.log('папка создана'))
// 	.catch(err => console.log(err));
// fsPromise.writeFile(path.join(__dirname, 'testPromise', 'testPromise.txt'), 'testPromise TEST TEST Test')
// 	.then(() => console.log('файл создан'))
// 	.then(() => fsPromise.appendFile(path.join(__dirname, 'testPromise', 'testPromise.txt'), '\n2222222 test'))
// 	.catch(err => console.log(err))

// Задача: через переменную окружения передать текст. записать его в файл, считать, посчитать количество слов,
// записать количество слов в новый файл. Первый файл удалить.

const lorem = process.env.TEXT || '';
console.log(lorem)

writeFileAsync(path.join(__dirname, 'lorem.txt'), lorem)
	.then(() => readFileAsync(path.join(__dirname, 'lorem.txt')))
	.then(data => data.split(' ').length.toString())
	.then((len) => writeFileAsync(path.join(__dirname, 'count.txt'), len))
	.then(() => removeFileAsync(path.join(__dirname, 'lorem.txt')))
//решено верно самостоятельно
