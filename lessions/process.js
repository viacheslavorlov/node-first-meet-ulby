import dotenv from  'dotenv';
dotenv.config(); //?  в Windows - не требуется указывать путь к корневой папке с .env
				 //?  в Linux нужно указывать путь к файлу  example: dotenv.config({path: '../.env'});


console.log(process.env.PORT)

console.log(process.env.NODE_ENV)