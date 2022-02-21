const hashTagStringToList = (hashTagesString) => {
  if (!hashTagesString) {
    return [];
  } else {
    let hashtags = hashTagesString
      .replace(/(\s*)/g, '')
      .split('#')
      .map((s) => '#' + s);
    hashtags.shift();
    return hashtags;
  }
};

export default hashTagStringToList;
