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
        let number = Number(line);
        lineReader.close();
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
};

exports.seccond = async () => {
  let input = 0;
  while (input < 5 || input > 10) {
    input = await readInput("Enter Number: ");
  }
  console.log("STOP !!");
};

exports.third = async () => {
  let input = await readInput("Enter Number: ");
  for (let i = 1; i < 13; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
  }
};

exports.forth = async () => {
  let num = await readInput("Enter Number: ");
  let multi = await readInput("Enter Multipiler: ");

  for (let i = 2; i < num + 1; i++) {
    for (let j = 1; j < multi + 1; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
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
};

exports.eleventh = async () => {
  let size = await readInput("Enter Size: ");
  let col = size % 2 === 0 ? size - 1 : size;
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < col; j++) {
      if (i + 1 < size / 2) {
        if (j < col / 2 - 1) {
          if (Math.abs(j - Math.ceil(col / 2)) === i + 1) {
            line += "* ";
          } else {
            line += "- ";
          }
        } else if (j >= Math.ceil(col / 2)) {
          if (i - 1 === j - Math.ceil(col / 2)) {
            line += "* ";
          } else {
            line += "- ";
          }
        } else {
          if (i === 0) {
            line += "* ";
          } else {
            line += "- ";
          }
        }
      } else if (i > size / 2) {
        if (j < Math.ceil(col / 2) - 1) {
          // console.log(i, j, i - Math.ceil(size / 2), Math.abs(j - Math.ceil(col / 2)));
          if (j - (size % 2 === 0 ? 0 : 1) === i - Math.ceil(size / 2)) {
            line += "* ";
          } else {
            line += "- ";
          }
          // line += "0 ";
        } else if (j >= Math.ceil(col / 2)) {
          if (j > i - Math.ceil(col / 2)) {
            if (
              i - Math.ceil(size / 2) + j - Math.ceil(col / 2) + (size % 2 === 0 ? 0 : 1) ===
              Math.ceil(col / 2) - 2
            ) {
              line += "* ";
            } else {
              line += "- ";
            }
          } else {
            line += "- ";
          }
        } else {
          if (i === size - 1) {
            line += "* ";
          } else {
            line += "- ";
          }
        }
      } else {
        if (j === 0 || j === col - 1) {
          line += "* ";
        } else {
          line += "- ";
        }
      }
    }
    console.log(line.trim());
  }
};

exports.twelfth = async () => {
  let factorialInput = 0;
  while (true) {
    factorialInput = await readInput("Enter Number: ");
    if (factorialInput > 0) {
      break;
    }
  }

  let result = () => {
    sum = 1;
    while (true) {
      sum *= factorialInput;
      factorialInput -= 1;
      if (factorialInput === 0) break;
    }
    return sum;
  };
  console.log("factorail result: ", result());
};

exports.thirteen = async () => {
  let brickInput = 0;
  while (true) {
    brickInput = await readInput("Enter block: ");
    if (brickInput > 0) {
      break;
    }
  }

  let avail_bricks = Number(brickInput);

  let levelBrick = 0;
  while (true) {
    levelBrick += 1;
    let brickuse = levelBrick ** 2;
    if (avail_bricks - brickuse > 0) {
      avail_bricks = avail_bricks - brickuse;
    } else {
      levelBrick -= 1;
      break;
    }
  }
  console.log(`Pyramid high ${levelBrick} level, Remain ${avail_bricks} Bricks`);
};

exports.fourteen = async () => {
  let neg_buff = 0;
  let odd = [];
  let even = [];
  while (true) {
    let numInput = await readInput("Enter number: ");
    if (Number(numInput) < 0) {
      neg_buff += 1;
    }
    if (Number(numInput) % 2 === 0) {
      even.push(Number(numInput));
    } else {
      odd.push(Number(numInput));
    }
    if (neg_buff >= 3) {
      break;
    }
  }
  console.log(odd, even);
  let sum_odd = odd.length ? odd.reduce((a, b) => a + b) : 0;
  let sum_even = even.length ? even.reduce((a, b) => a + b) : 0;
  console.log("sum of odd number = ", sum_odd);
  console.log("sum of even number = ", sum_even);
};
