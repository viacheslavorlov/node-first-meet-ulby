import os from 'os';

console.log('Операционная система: ', os.platform());

console.log('Архитектура процессора: ', os.arch());

console.log('Информация по процессорам: ', os.cpus());

console.log('Сколько свободной памяти: ', os.freemem());

console.log('Сколько всего памяти: ', os.totalmem());

console.log('Домашняя директория: ', os.homedir());

console.log('Сколько компьютер включен: ', os.uptime());