import path from "path";
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const __dirname = path.resolve();

//?  path.join(first, second, ...) - соединяет участки пути к файлу
console.log(path.join(__dirname, 'second', 'third'))
//?  path.join(__dirname, '..') - поднимает на один уровень вверх (как в командной строке)

//? получить абсолютный путь к файлу (указывает __dirname  по умолчанию)
console.log(path.resolve('second', 'third'))

//? парсинг пути
const fullPath = path.resolve(__dirname, 'first', 'second', 'third');
console.log(path.parse(fullPath))

//? разделитель пути в ОС
console.log('разделитель пути в ОС:', path.sep)
//? проверка на абсолютный путь
console.log(path.isAbsolute('first/second'))
//? название файла
console.log(path.basename(fullPath))
//? расширение файла
console.log(path.extname(fullPath))

//* -----------------------------------------------

const siteUrl = 'http://localhost:8000/users?id=5555'

const url = new URL(siteUrl);

console.log(url)
