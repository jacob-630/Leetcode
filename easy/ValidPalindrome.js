let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let strLength = cleanStr.length;
  let left = 0;
  let right = strLength - 1;

  while (left < right) {
    if (cleanStr[left++] !== cleanStr[right--]) {
      return false;
    }
  }

  return true;