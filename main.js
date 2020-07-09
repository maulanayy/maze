const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukan ukuran maze : ", (size) => {
  if (size > 0) {
    createMaze(size);
  } else {
    console.log("INPUT CANT BE MINUS !!");
  }

  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});

function createMaze(size) {
  const newSize = 4 * size - 1;
  let start = false;
  let end = false;
  for (let y = 0; y < newSize; y++) {
    let str = "";
    for (let x = 0; x < newSize; x++) {
      if (y % 2 == 1) {
        if (x == 0 || x == newSize - 1) {
          str += "@";
        } else {
          str += " ";
        }
      } else {
        if (x == 1 && !end) {
          start = true;
        }
        if ((x == 1 && start) || (x == newSize - 2 && !start)) {
          str += " ";
        } else {
          str += "@";
        }
        if (x == newSize - 1) end = false;
      }
    }
    if (y % 2 == 0 && start == true) {
      start = false;
      end = true;
    }

    console.log(str);
  }
}
