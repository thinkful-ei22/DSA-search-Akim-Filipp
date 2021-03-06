const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];
//Quick sorts

let quickSortCounter = 0;
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
} 

function partition(array, start, end) {
  const pivot = array[end-1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

function qSort(array, start=0, end=array.length) {
  quickSortCounter++;
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

//Merge Sorting

let mergeSortCounter = 0;

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function mSort(array) {
  mergeSortCounter++;
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length /2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  

  return merge(left, right, array);
}

//Bucket Sort
// 1 and 98

function bucketSort(array, lowest, highest) {
  if (array.length === 0) {
    return array;
  }

  const bucketSize = 5;
  const minValue = lowest;
  const maxValue = highest;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  buckets.forEach(bucket => mSort(bucket));
  let resultArray = [];
  for (let i =0; i < buckets.length; i++) {
    resultArray = [...resultArray, ...buckets[i]];
  }

  return resultArray;
}


//TESTING

//console.log(qSort(data));
//console.log(mSort(data));
// qSort(data);
// console.log('Quick Sort operations:', quickSortCounter);
// mSort(data);
// console.log('Merge sort operations', mergeSortCounter);

console.log(bucketSort(data, 1, 98));