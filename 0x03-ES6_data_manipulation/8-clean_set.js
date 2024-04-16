function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string'){
    return '';
  }
  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((str) => str.slice(startString.length)).join('-');
}

export default cleanSet;
