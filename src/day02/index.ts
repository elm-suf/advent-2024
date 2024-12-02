import run from "aocrunner";

const parseInput = (rawInput: string): number[][] =>
  rawInput.split("\n").map((line) => line.split(" ").map(Number));

function isValidReport(report: number[], skipIndex = -1): boolean {
  const isDecreasing =
    report[0 === skipIndex ? 1 : 0] > report[1 === skipIndex ? 2 : 1];

  for (let i = 0; i < report.length - 1; i++) {
    if (skipIndex === i) continue;

    const currr = i === skipIndex ? i + 1 : i;
    const next = i + 1 === skipIndex ? i + 2 : i + 1;

    const difference = report[currr] - report[next];
    const isConsistent = isDecreasing ? difference > 0 : difference < 0;
    const isWithinRange =
      Math.abs(difference) >= 1 && Math.abs(difference) <= 3;

    if (!isConsistent || !isWithinRange) {
      return false;
    }
  }

  return true;
}

const part1 = (rawInput: string): number => {
  const reports = parseInput(rawInput);
  return reports.filter((report) => isValidReport(report)).length;
};

function isValidReport2(report: number[]): boolean {
  if (isValidReport(report)) return true;

  for (let i = 0; i < report.length; i++) {
    if (isValidReport(report, i)) return true;
  }

  // for (let i = 0; i < report.length; i++) {
  //   const newReport = [...report];
  //   newReport.splice(i, 1);
  //   if (isValidReport(newReport)) return true;
  // }

  return false;
}

const part2 = (rawInput: string) => {
  const reports = parseInput(rawInput);
  return reports.filter(isValidReport2).length;
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
      {
        input: `
  7 6 4 2 1
  1 2 7 8 9
  9 7 6 2 1
  1 3 2 4 5
  8 6 4 4 1
  1 3 6 7 9`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
