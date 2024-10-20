let scores = [35, 78, 92, 45, 88, 33, 56, 91, 67, 40];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;
  } else if (scores[i] > 90) {
    scores[i] = 90;
  }
}

let passedCount = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 50) {
    passedCount++;
  }
}

console.log("Number of students who passed:", passedCount);
console.log("Final adjusted scores:", scores);
