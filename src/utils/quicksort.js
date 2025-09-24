export function quicksort(inputArray, compareFn = defaultCompare) {
  if (!Array.isArray(inputArray)) {
    throw new TypeError("quicksort expects an array as the first argument");
  }
  if (typeof compareFn !== "function") {
    throw new TypeError("quicksort expects a compare function as the second argument");
  }

  const arrayCopy = inputArray.slice();
  quicksortInPlace(arrayCopy, 0, arrayCopy.length - 1, compareFn);
  return arrayCopy;
}

function quicksortInPlace(array, left, right, compareFn) {
  if (left >= right) {
    return;
  }
  const pivotIndex = partition(array, left, right, compareFn);
  quicksortInPlace(array, left, pivotIndex - 1, compareFn);
  quicksortInPlace(array, pivotIndex + 1, right, compareFn);
}

function partition(array, left, right, compareFn) {
  const pivot = array[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (compareFn(array[j], pivot) <= 0) {
      swap(array, i, j);
      i++;
    }
  }
  swap(array, i, right);
  return i;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

export default quicksort;


