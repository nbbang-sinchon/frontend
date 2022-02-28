const hashTagStringToList = (hashTagesString) => {
  if (!hashTagesString || hashTagesString === null || typeof hashTagesString !== 'string') {
    return [];
  } else {
    return hashTagesString.split(' ');
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
