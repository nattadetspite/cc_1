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

exports.first = async () => {
  let input = 0;
  do {
    input = await readInput("Enter Number: ");
  } while (input < 5 || input > 10);
  console.log("STOP !!");
  lineReader.close();
};

exports.seccond = async () => {
  let input = 0;
  while (input < 5 || input > 10) {
    input = await readInput("Enter Number: ");
  }
  console.log("STOP !!");
  lineReader.close();
};

exports.third = async () => {
  let input = await readInput("Enter Number: ");
  for (let i = 1; i < 13; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
  }
  lineReader.close();
};

exports.forth = async () => {
  let num = await readInput("Enter Number: ");
  let multi = await readInput("Enter Multipiler: ");

  for (let i = 2; i < num + 1; i++) {
    for (let j = 1; j < multi + 1; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
  lineReader.close();
};

exports.fifth = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      line += "X ";
    }
    console.log(line.trim());
  }
  lineReader.close();
};

exports.sixth = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size + 2; i++) {
    let line = "";
    for (let j = 0; j < size + 2; j++) {
      i === 0 || i === size + 1 || j === 0 || j === size + 1 ? (line += "O ") : (line += "X ");
    }
    console.log(line.trim());
  }
  lineReader.close();
};

/**
 * this is hard
 * 3, 0
 * 2, 1
 * 1, 2
 * 0, 3
 */
exports.seventh = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      Math.abs(j - size) === i + 1 ? (line += "O ") : (line += "X ");
    }
    console.log(line.trim());
  }
  lineReader.close();
};

exports.eight = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      if (j - i > 0) {
        line += "X ";
      } else {
        line += j + 1 + " ";
      }
    }
    console.log(line.trim());
  }
  lineReader.close();
};

/**
 *  4,0 4,1 4,2
 *  5,0 5,1
 *  6,0
 */
exports.ninth = async () => {
  let num = await readInput("Enter Number: ");
  for (let i = 0; i < num * 2 - 1; i++) {
    let line = "";
    for (let j = 0; j < num; j++) {
      if (i === j) {
        line += "O ";
      } else if (i > j && i < num) {
        line += "X ";
      } else if (i >= num) {
        if (i + j === num * 2 - 2) {
          line += "O ";
        }
        if (j < num * 2 - 2 - i) {
          line += "X ";
        }
      }
    }
    console.log(line.trim());
  }
  lineReader.close();
};

/**
 * 0,0 0,1 0,2
 * 1,0 1,1
 * 2,0
 *
 * 4,0
 * 5,0 5,1
 * 6,0 6,1 6,2
 */
exports.tenth = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size * 2 - 1; i++) {
    let line = "";
    for (let j = 0; j < size * 2 - 1; j++) {
      if (j === size - 1) {
        line += "O ";
      } else if (i === size - 1) {
        line += "O ";
      } else if (j < size && i < size) {
        if (i + j >= size - 1) {
          line += "O ";
        } else {
          line += "x ";
        }
      } else if (j < size && i >= size) {
        if (i - size - j >= 0) {
          line += "x ";
        } else {
          line += "O ";
        }
      } else if (j >= size && i < size) {
        if (j - size - i >= 0) {
          line += "x ";
        } else {
          line += "O ";
        }
      } else if (j >= size && i >= size) {
        if (i - size + j - size >= size - 2) {
          line += "x ";
        } else {
          line += "O ";
        }
      } else {
        line += "O ";
      }
    }
    console.log(line.trim());
  }
  lineReader.close();
};

exports.eleventh = async () => {
  let size = await readInput("Enter Size: ");
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < (size % 2 === 0 ? size - 1 : size); j++) {
      if (i + 1 < size / 2) {
        if (j < size / 2 - 1) {
          // if() {

          // };
          line += "+ ";
        } else if (j > size / 2) {
          line += "* ";
        } else {
          line += "- ";
        }
      } else if (i > size / 2) {
        line += "x ";
      } else {
        line += "- ";
      }
    }
    console.log(line.trim());
  }
  lineReader.close();
};
