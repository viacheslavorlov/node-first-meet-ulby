import dotenv from  'dotenv';
dotenv.config({path: '../.env'}); //?  в Windows - не требуется указывать путь к корневой папке с .env
				 //?  в Linux нужно указывать путь к файлу  example: dotenv.config({path: '../.env'});
console.log(process.pid)

console.log(process.env);

console.log(process.env.PORT)

console.log(process.env.NODE_ENV)

console.log(process.argv)

if (Math.random() > 0.5) {
	while (true) {

	}
} else {
	console.log('Finished!')
	process.exit()
}