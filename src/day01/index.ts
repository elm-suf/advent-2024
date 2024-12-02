import run from "aocrunner";

const part1 = (rawInput: string) => {
  const left: number[] = [];
  const right: number[] = [];

  rawInput
    .split("\n")
    .map((line) => line.split("   "))
    .forEach(([l, r]) => {
      right.push(+r);
      left.push(+l);
    });

  const sortedLeft = left.sort();
  const sortedRight = right.sort();

  const res = sortedLeft
    .map((el, i) => [el, sortedRight[i]])
    .map(([l, r]) => Math.abs(l - r))
    .reduce((acc, curr) => acc + curr, 0);

  return res;
};

const part2 = (rawInput: string) => {
  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
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
  onlyTests: false,
});
