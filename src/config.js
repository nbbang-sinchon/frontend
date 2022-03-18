const SERVER_URL = 'https://www.nbbang.shop/api';
const FRONT_URL = 'https://www.nbbang.shop';
const CHAT_PAGE_SIZE = '20';
const PARTY_PAGE_SIZE = '10';

const LOGIN_URLS = {
  GOOGLE_LOGIN_URL: `https://www.nbbang.shop/api/oauth2/authorization/google?redirect_uri=${window.location}`,
  KAKAO_LOGIN_URL: `https://www.nbbang.shop/api/oauth2/authorization/kakao?redirect_uri=${window.location}`,
  NAVER_LOGIN_URL: `https://www.nbbang.shop/api/oauth2/authorization/naver?redirect_uri=${window.location}`,
};

export { FRONT_URL, SERVER_URL, CHAT_PAGE_SIZE, PARTY_PAGE_SIZE, LOGIN_URLS };
