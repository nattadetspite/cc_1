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

exports.arr_first = async () => {
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

exports.arr_seccond = async () => {
  let num_el = await readInput("Enter number of element: ");
  let num_str = await readInput("Input Number: ");
  let num_arr = num_str.split(" ").length > num_el ? console.error("Error!") : num_str.split(" ");

  let minus = await readInput("Minus: ");
  for (let i = 0; i < num_el; i++) {
    num_arr[i] = num_arr[i] - minus;
  }
  console.log(num_arr);

  let min_zero = 99999;
  let ans = 0;
  let isError = false;
  for (let i = 0; i < num_arr.length; i++) {
    if (Math.abs(num_arr[i]) < min_zero) {
      min_zero = Math.abs(num_arr[i]);
      ans = num_arr[i];
      isError = false;
    } else if (Math.abs(num_arr[i]) === min_zero) {
      isError = true;
    }
  }
  if (isError) {
    console.log("Error to find most approximate to zero");
  } else {
    console.log("most approximate to zero: ", ans);
  }
};

exports.str_first = async () => {
  let p1 = await readInput("Persion 1: ");
  let p2 = await readInput("Persion 2: ");

  let p1_arr = p1.split(" ");
  let p2_arr = p2.split(" ");

  if (p1_arr[1].length - p2_arr[1].length > 0) {
    p1_arr[1] = p2_arr[1];
  } else {
    p2_arr[1] = p1_arr[1];
  }
  console.log("answer: ");
  console.log(p1_arr.join(" "));
  console.log(p2_arr.join(" "));
};

exports.str_seccond = async () => {
  let inputText = await readInput("Enter Text: ");

  let text_arr = inputText.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let not_vow = [];
  let all_letters = {
    Symbol: 0,
  };
  let vow_obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let upper = 0;
  let lower = 0;
  text_arr.map((c) => {
    if (!vowels.includes(c.toLowerCase())) {
      not_vow = [...not_vow, c];
    } else {
      vow_obj[c.toLowerCase()] += 1;
    }
    if (all_letters[c] > 0 && !c.match(/[$-/:-?{-~!"^_`\[\]]/)) {
      all_letters[c] += 1;
    } else if (c.match(/[$-/:-?{-~!"^_`\[\]]/)) {
      all_letters["Symbol"] += 1;
    } else {
      all_letters[c] = 1;
    }
    if (c === c.toLowerCase()) {
      lower += 1;
    } else {
      upper += 1;
    }
  });
  console.log(not_vow.reverse().join(""));
  console.log(vow_obj);
  console.log(all_letters);
  upper > lower
    ? console.log(text_arr.join("").toLowerCase())
    : console.log(text_arr.join("").toUpperCase());
};

exports.str_last = async () => {
  let inputText = await readInput("Enter Text: ");
  let key = await readInput("Enter key character: ");
  let replaceInput = await readInput("Enter replace character: ");
  let result = inputText.split("").map((w) => {
    if (w === w.toLowerCase()) {
      if (key === w) {
        return replaceInput.toLowerCase();
      }
      return w;
    } else {
      if (key === w) {
        return replaceInput.toUpperCase();
      }
      return w;
    }
  });
  console.log(result.join(""));
};
