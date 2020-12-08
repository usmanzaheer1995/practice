// https://adventofcode.com/2020/day/2

const readline = require('readline');
const fs = require('fs');

function part1() {
  function validPassword(min, max, value, input) {
    min = parseInt(min);
    max = parseInt(max);
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (value === input[i]) {
        count++;
      }
      if (count > max) {
        return false;
      }
    }
    if (count < min) {
      return false;
    }
    return true;
  }

  const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false
  });
  
  let count = 0;
  readInterface.on('line', function(line) {
    line = line.split(' ');
    const [min, max] = line[0].split('-');
    const value = line[1].split(':')[0];
    const input = line[2];
    if (validPassword(min, max, value, input)) {
      count++;
    }
    console.log(count);
  });
}

function part2() {
  function validPassword(pos1, pos2, value, input) {
    pos1 = parseInt(pos1) - 1;
    pos2 = parseInt(pos2) - 1;
    const inputLength = input.length;
    if (inputLength < parseInt(pos2)) {
      return false;
    }
    if(input[pos1] === value && input[pos2] === value) {
      return false;
    }
    if(input[pos1] === value || input[pos2] === value) {
      return true;
    }
    return false;
  }

  const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false
  });
  
  let count = 0;
  readInterface.on('line', function(line) {
    line = line.split(' ');
    const [pos1, pos2] = line[0].split('-');
    const value = line[1].split(':')[0];
    const input = line[2];
    if (validPassword(pos1, pos2, value, input)) {
      count++;
    }
    console.log(count);
  });
}

// part1();
part2()