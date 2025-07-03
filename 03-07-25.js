/*
  🏗️ Problem: Cross the Bridge

  During a construction project, workers need to carry boxes across a narrow bridge.
  Each box has a specific weight (always a multiple of 25).

  A worker can carry:
    - At most 'carryCapacity' number of boxes per trip.
    - The total weight of boxes in a single trip must not exceed 'maxWeight'.

  Your task is to calculate the **minimum number of trips** required to move all the boxes
  for each test case.

  📥 Input:
    A single line containing multiple test cases separated by commas.

    Each test case consists of space-separated integers:
      - First N numbers represent box weights.
      - Last two numbers are: carryCapacity and maxWeight.

    Example:
      "25 50 75 100 2 150, 25 25 25 25 5 125, 100 100 100 100 1 150"

  📤 Output:
    For each test case, output a single integer on a new line
    representing the minimum number of trips needed.

  ✅ Constraints:
    - Box weights ∈ {25, 50, 75, 100}
    - 1 ≤ carryCapacity ≤ 5
    - 100 ≤ maxWeight ≤ 200
    - Number of boxes per test case ≤ 50
    - Up to 10 test cases per input

  🔎 Example Input:
    25 50 75 100 2 150, 25 25 25 25 5 125, 100 100 100 100 1 150

  ✅ Example Output:
    2
    1
    4
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter input: ", function (input) {
  const testCases = input.split(",").map(tc => tc.trim());

  for (let i = 0; i < testCases.length; i++) {
    const parts = testCases[i].split(" ").map(Number);
    const carryCapacity = parts[parts.length - 2];
    const maxWeight = parts[parts.length - 1];
    const boxWeight = parts.slice(0, parts.length - 2);

    const result = minTrips(boxWeight, carryCapacity, maxWeight);
    console.log(result);
  }

  rl.close();
});

function minTrips(boxes, carryCapacity, maxWeight) {
  boxes.sort((a, b) => b - a); // sort in descending order
  let trips = 0;

  while (boxes.length > 0) {
    let bestCombo = [];
    let maxSum = 0;
    const n = boxes.length;

    const tryCombos = (start, combo, sum, count) => {
      if (combo.length > 0 && sum <= maxWeight && combo.length <= carryCapacity) {
        if (sum > maxSum) {
          bestCombo = [...combo];
          maxSum = sum;
        }
      }
      if (combo.length >= carryCapacity || sum > maxWeight) return;

      for (let i = start; i < n; i++) {
        tryCombos(i + 1, [...combo, boxes[i]], sum + boxes[i], count + 1);
      }
    };

    tryCombos(0, [], 0, 0);

    // Remove used boxes from the list
    for (let val of bestCombo) {
      const index = boxes.indexOf(val);
      if (index !== -1) boxes.splice(index, 1);
    }

    trips++;
  }

  return trips;
}
