import path from 'path';
import chalk from 'chalk';
import text from "./data.js";
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const __dirname = path.resolve();
const crypto = require('crypto');

console.log(chalk.red(text));
console.log(__dirname, require)


const start = Date.now();

crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('1 end ', Date.now() - start))
crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('2 end ', Date.now() - start))
crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('3 end ', Date.now() - start))
crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('4 end ', Date.now() - start))
crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('5 end ', Date.now() - start))
crypto.pbkdf2('123ttt', '5',
	1000000, 64, 'sha512',
	() => console.log('6 end ', Date.now() - start))

console.log(process.pid);