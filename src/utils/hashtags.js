const hashTagStringToList = (hashTagesString) => {
  if (!hashTagesString || hashTagesString === null || typeof hashTagesString !== 'string') {
    return [];
  } else {
    return hashTagesString
      .trim()
      .replace(/ /gi, ',')
      .split(',')
      .filter((e) => e !== '');
  }
};

const hashTagListToString = (hashTagesList) => {
  if (!hashTagesList || hashTagesList === null || !Array.isArray(hashTagesList)) {
    return [];
  } else {
    return hashTagesList.join(' ');
  }
};

export { hashTagStringToList, hashTagListToString };
