import styled from '@emotion/styled';
import React from 'react';
import { SIZES, COLORS } from '../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  aling-items: center
  max-width: ${SIZES.MAIN_MAX_WIDTH};
  padding: 5px 0px;
  margin: 30px;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.DARK_GRAY};
`;

const Content = styled.div`
  display: flex;
  align-self: flex-start;

  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 5px;
  }

  ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 3px;
    margin-bottom: 0;
  }

  ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
  }

  ul a:hover {
    opacity: 1;
  }
`;

function Footer() {
  return (
    <footer>
      <Container>
        <Content>
          <ul>
            <h3>소개</h3>
            <li>
              <a>이용방법</a>
            </li>
            <li>
              <a>뉴스룸</a>
            </li>
            <li>
              <a>투자자정보</a>
            </li>
            <li>
              <a>채용정보</a>
            </li>
          </ul>
        </Content>
        <Content>
          <ul>
            <h3>커뮤니티</h3>
            <li>
              <a>다양성 및 소속감</a>
            </li>
            <li>
              <a>접근성</a>
            </li>
            <li>
              <a>Associate</a>
            </li>
            <li>
              <a>광고</a>
            </li>
            <li>
              <a>의견</a>
            </li>
            <li>
              <a>Associate</a>
            </li>
            <li>
              <a>Associate</a>
            </li>
          </ul>
        </Content>
        <Content>
          <ul>
            <h3>지원</h3>
            <li>
              <a>코로나19 대응 방안</a>
            </li>
            <li>
              <a>도움말 센터</a>
            </li>
            <li>
              <a>신뢰와 안전</a>
            </li>
          </ul>
        </Content>
        <Content>
          <ul>
            <h3>이용약관</h3>
            <li>
              <a>개인정보취급방침</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
            <li>
              <a>취소 및 환불정책</a>
            </li>
          </ul>
        </Content>
      </Container>
    </footer>
  );
}
export default Footer;
