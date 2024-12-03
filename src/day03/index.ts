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

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
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
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
