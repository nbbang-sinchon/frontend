const hashTagStringToList = (hashTagesString) => {
  if (!hashTagesString || hashTagesString === null) {
    return [];
  } else {
    return hashTagesString.split(' ');
  }
};

export default hashTagStringToList;
