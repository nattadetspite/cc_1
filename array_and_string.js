const readline = require("readline");

const readInput = (question) => {
  const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    lineReader.question(question, (line) => {
      console.log(line);
      try {
        lineReader.close();
        resolve(line);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  });
};

exports.first = async () => {
  let input = await readInput("Enter Size: ");
  console.log(input);
  let matrix_size = input.split(" ");

  let num = 1;
  let matrix = {
    0: [],
    1: [],
  };
  for (let n = 0; n < 2; n++) {
    for (let i = 0; i < Number(matrix_size[0]); i++) {
      let row = [];
      for (let j = 0; j < Number(matrix_size[1]); j++) {
        row = [...row, num];
        num += 1;
      }
      matrix[n] = [...matrix[n], row];
    }
  }

  // sum
  console.log("Answer: ");
  for (let i = 0; i < Number(matrix_size[0]); i++) {
    let line = "";
    for (let j = 0; j < Number(matrix_size[1]); j++) {
      let sum = matrix[0][i][j] + matrix[1][i][j];
      line += sum.toString() + " ";
    }
    console.log(line);
  }
};
