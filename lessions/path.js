import path from "path";
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const __dirname = path.resolve();

//?  path.join(first, second, ...) - соединяет участки пути к файлу
console.log(path.join(__dirname, 'second', 'third'))
//?  path.join(__dirname, '..') - поднимает на один уровень вверх (как в командной строке)
