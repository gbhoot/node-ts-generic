import dotenv from "dotenv-safe";

dotenv.config();

console.log("hola");
console.log(`my name is: ${process.env.MY_NAME}`);
