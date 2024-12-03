import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const regex = new RegExp(/mul\([0-9]+,[0-9]+\)/gm);
  if (!regex.global) {
    console.warn("Regex should have the global flag to return all matches.");
    return rawInput.match(regex) ?? [];
  }
  const matches = [...rawInput.matchAll(regex)];

  return matches.map((match) => match[0]);
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input
    .map((el) => el.substring(4, el.length - 1).split(","))
    .map(([a, b]) => +a * +b)
    .reduce((acc, curr) => (curr += acc), 0);
};

// =============================================================== \\
// ===================      part 2    ============================ \\
// =============================================================== \\

function isValidPrefixToken(token: string, pattern: string) {
  return pattern.startsWith(token);
}

const parseInput2 = (rawInput: string) => {
  let newInput = "";
  let startToken = "";
  let endToken = "";
  let ignore = false;
  for (let index = 0; index < rawInput.length; index++) {
    const element = rawInput[index];

    if (ignore) {
      endToken += element;
    } else {
      startToken += element;
    }

    if (endToken === `do()`) {
      ignore = false;
      endToken = "";
      startToken = "";
    } else if (!isValidPrefixToken(endToken, `do()`)) {
      endToken = "";
    }

    if (startToken === `don't()`) {
      ignore = true;
      endToken = "";
      startToken = "";
    } else if (!isValidPrefixToken(startToken, `don't()`)) {
      startToken = "";
    }

    if (!ignore) newInput += element;
  }

  // let index = rawInput.indexOf(`don't()`);
  // let index1 = rawInput.indexOf(`do()`);
  // do {
  // console.log("index", index, index1);
  // } while (index !== -1);

  return parseInput(newInput);
};

const part2 = (rawInput: string) => {
  const input = parseInput2(rawInput);

  return input
    .map((el) => el.substring(4, el.length - 1).split(","))
    .map(([a, b]) => +a * +b)
    .reduce((acc, curr) => (curr += acc), 0);
};

run({
  part1: {
    tests: [
      {
        input: `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
        expected: 161,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
        expected: 48,
      },
    ],

    solution: part2,
  },

  trimTestInputs: true,
  // onlyTests: true,
});
