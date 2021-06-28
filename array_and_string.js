const readline = require("readline");

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const readInput = (question) => {
  return new Promise((resolve, reject) => {
    lineReader.question(question, (line) => {
      console.log(line);
      try {
        let number = Number(line);
        resolve(number);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  });
};
