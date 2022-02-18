const convertPlace = (placeString) => {
  const upper = placeString.toUpperCase();

  if (upper === 'SINCHON') {
    return '신촌동';
  } else if (upper === 'CHANGCHEON') {
    return '창천동';
  } else if (upper === 'YEONHUI') {
    return '연희동';
  } else {
    return 'ERROR';
  }
};

const convertDate = (dateString) => {
  const TIME_ZONE = 9;
  const MILLI_TO_SECOND = 1000;
  const SECOND_TO_MINUTE = 60;
  const MINUTE_TO_HOUR = 60;
  const HOUR_TO_DAY = 24;

  const date = new Date(dateString);
  date.setHours(date.getHours() - TIME_ZONE);

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

const convertStatus = (statusString) => {
  const upper = statusString.toUpperCase();

  if (upper === 'OPEN') {
    return '모집중';
  } else if (upper === 'FULL') {
    return '모집완료';
  } else if (upper === 'CLOSED') {
    return '종료';
  } else {
    return 'ERROR';
  }
};

export { convertPlace, convertDate, convertStatus };
