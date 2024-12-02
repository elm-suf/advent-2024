import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const left: number[] = [];
  const right: number[] = [];
  rawInput.split("\n").forEach((line) => {
    const [l, r] = line.split("   ").map(Number);
    left.push(l);
    right.push(r);
  });
  return { right, left };
};

const part1 = (rawInput: string) => {
  const { left, right } = parseInput(rawInput);

  const sortedLeft = left.sort((a, b) => a - b);
  const sortedRight = right.sort((a, b) => a - b);

  const res = sortedLeft
    .map((el, i) => [el, sortedRight[i]])
    .map(([l, r]) => Math.abs(l - r))
    .reduce((acc, curr) => acc + curr, 0);

  return res;
};

const part2 = (rawInput: string) => {
  const { left, right } = parseInput(rawInput);

  const count = right.reduce((map, el) => {
    map.set(el, (map.get(el) || 0) + 1);
    return map;
  }, new Map<number, number>());

  return left.reduce((sum, el) => sum + el * (count.get(el) ?? 0), 0);
};

run({
  part1: {
    tests: [
      {
        input: `
3   4
4   3
2   5
1   3
3   9
3   3        
        `,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
3   4
4   3
2   5
1   3
3   9
3   3
        `,
        expected: 31,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
