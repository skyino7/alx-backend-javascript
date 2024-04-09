export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arr = array;
  for (const value of array) {
    arr[i] = appendString + value;
    i += 1;
  }

  return arr;
}
