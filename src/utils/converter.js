const convertPlace = (placeString) => {
  const upper = placeString.toUpperCase();

  if (upper === 'SINCHON') {
    return '신촌동';
  } else if (upper === 'CHANGCHEON') {
    return '창천동';
  } else if (upper === 'YEONHUI') {
    return '연희동';
  } else {
    return '';
  }
};

const convertDate = (dateString) => {
  const MILLI_TO_SECOND = 1000;
  const SECOND_TO_MINUTE = 60;
  const MINUTE_TO_HOUR = 60;
  const HOUR_TO_DAY = 24;

  const date = new Date(dateString);
  date.setHours(date.getHours());

  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / MILLI_TO_SECOND;

  if (diff / SECOND_TO_MINUTE < 1) {
    return '방금';
  } else if (diff / SECOND_TO_MINUTE < MINUTE_TO_HOUR) {
    return `${Math.floor(diff / SECOND_TO_MINUTE)}분 전`;
  } else if (diff / SECOND_TO_MINUTE < MINUTE_TO_HOUR * HOUR_TO_DAY) {
    return `${Math.floor(diff / (SECOND_TO_MINUTE * MINUTE_TO_HOUR))}시간 전`;
  } else {
    return `${Math.floor(diff / (SECOND_TO_MINUTE * MINUTE_TO_HOUR * HOUR_TO_DAY))}일 전`;
  }
};

const convertStatus = (statusString, joinNumber, goalNumber) => {
  const upper = statusString.toUpperCase();

  if (upper === 'OPEN' && goalNumber - joinNumber === 1) {
    return '마감임박';
  } else if (upper === 'OPEN') {
    return '모집중';
  } else if (upper === 'FULL') {
    return '모집완료';
  } else if (upper === 'CLOSED') {
    return '종료';
  } else {
    return 'ERROR';
  }
};

const convertDateToTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
};

const convertOptionToParam = (option) => {
  const params = [];
  const places = Object.entries(option.place).filter((entry) => entry[1]);

  if (option.search) {
    params.push(`search=${option.search}`);
  }
  if (option.WISHLIST) {
    params.push(`isWishlist=true`);
  }

  if (option.OPEN) {
    params.push(`status=OPEN`);
  } else {
    params.push(`status=CLOSED`);
    params.push(`status=FULL`);
  }

  if (places.length === 0) {
    params.push(`place=NONE`);
  } else {
    places.forEach((place) => {
      params.push(`place=${place[0]}`);
    });
  }

  return params;
};

const convertPrice = (priceString) => Number(priceString).toLocaleString() + '원';

export { convertPlace, convertDate, convertStatus, convertDateToTime, convertOptionToParam, convertPrice };
