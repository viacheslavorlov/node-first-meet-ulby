import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('1. Название файла команда: path.basename(__filename): ', path.basename(__filename));

console.log('2. Путь к файлу (название самого файла отсутствует) команда: path.dirname(__filename) или __dirname: ', path.dirname(__filename))

console.log('3. Расширение файла, команда: path.extname(__filename) : ', path.extname(__filename));

console.log('4. Parse: path.parse(__filename): ', path.parse(__filename));
		//* output: {
		//*   root: 'D:\\',
		//*   dir: 'D:\\Програмирование\\node-first-meet-ulby\\demo',
		//*   base: 'path.js',
		//*   ext: '.js',
		//*   name: 'path'
		//* }
console.log(path.join(__dirname, 'server', 'index.html'))
