import fs from "fs"
import path from "path";
const __dirname = path.resolve();
import fsPromise from 'fs/promises';


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
fs.writeFile(path.join(__dirname, 'test.txt'), 'TEST test TEST', (err) => {
	if (err) {
		console.log(err)
		throw err
	}
	console.log('file created')
})
//?  дописать данные в существующий файл
fs.appendFile(path.join(__dirname, 'test.txt'), '\nsecond Test@2', (err) => {
	if (err) {
		console.log(err)
		throw err
	}
	console.log('file: data added into file')
})


//? асинхронная функция для создания или перезаписи файла на основании Promise
const writeFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
		if (err) {
			return reject(err.message);
		}
		resolve();
	}));
}

//? асинхронная функция для дописывания файла на основании Promise
const addDataToFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
		if (err) {
			return reject(err.message);
		}
		resolve();
	}));
}

writeFileAsync(path.join(__dirname, 'testAsync.txt'), 'Test ASYNC')
	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 1-ASYNC'))
	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 2-ASYNC'))
	.then(() => addDataToFileAsync(path.join(__dirname, 'testAsync.txt'), '\n 3-ASYNC'))
	.catch(err => console.log(err))

fsPromise.mkdir(path.join(__dirname, 'testPromise')).then().catch(err => console.log(err));
fsPromise.writeFile(path.join(__dirname, 'testPromise', 'testPromise.txt'))