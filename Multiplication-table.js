/*
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:
  1 2 3
  2 4 6
  3 6 9

For the given example, the return value should be:
  [[1,2,3],[2,4,6],[3,6,9]]
*/


// Solution

multiplicationTable = function(size) {
  let result = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];
    for(let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  return result
}

// or

const multiplicationTableTwo = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}