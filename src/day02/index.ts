import run from "aocrunner";


const parseInput = (rawInput: string): number[][] =>
  rawInput.split("\n").map((line) => line.split(" ").map(Number));

function isValidReport(report: number[]): boolean {
  const isDecreasing = report[0] > report[1];

  for (let i = 1; i < report.length; i++) {
    const difference = report[i] - report[i - 1];
    const isConsistent = isDecreasing ? difference < 0 : difference > 0;
    const isWithinRange = Math.abs(difference) >= 1 && Math.abs(difference) <= 3;

    if (!isConsistent || !isWithinRange) {
      return false;
    }
  }

  return true;
}

const part1 = (rawInput: string): number => {
  const reports = parseInput(rawInput);
  return reports.filter(isValidReport).length;
};


const part2 = (rawInput: string) => {
  // const input = parseInput(rawInput);
  return ;
};

run({
  part1: {
    tests: [
      {
        input: `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
        expected: 2,
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
  onlyTests: false,
});
