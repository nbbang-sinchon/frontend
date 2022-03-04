import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../assets/assets';
import { COLORS, SCROLL_PRIMARY } from '../styles/constants';
import { convertPrice } from '../utils/converter';
import BreadBoardPrice from './BreadBoardPrice';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isShown && '-40px') || '-500px'};
  transition: right ease-in-out 0.3s;
  width: 500px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 270px;
  z-index: 1;
  margin: 150px 0 0 80px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid ${COLORS.GRAY};
  margin-bottom: 10px;
  padding-bottom: 10px;

  > div:first-of-type {
    font-size: 16px;
  }

  > input {
    font-size: 16px;
    width: 35%;

    &:last-of-type {
      text-align: right;
      width: 65%;
    }
  }
`;

const Users = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;

  width: 100%;
  max-height: 200px;
  padding-right: 15px;
  overflow-y: auto;
  overflow-x: hidden;

  ${SCROLL_PRIMARY};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0;
  border-top: ${(props) => props.isDelivery && `1px solid ${COLORS.GRAY}`};
  padding-top: ${(props) => props.isDelivery && `20px`};

  > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: ${(props) => !props.isDelivery && `1px solid ${COLORS.PRIMARY}`};
  }
`;

function BreadBoard({ isShown, breadBoard }) {
  const getTotal = (breadBoard) =>
    breadBoard?.members?.reduce((total, member) => total + member.price, 0) + breadBoard.deliveryFee;

  return (
    <Container isShown={isShown}>
      <Image src={images.breadBoard} />
      <Content>
        <Info>
          <div>TOTAL</div>
          <div>{convertPrice(getTotal(breadBoard))}</div>
        </Info>
        <Info>
          <input placeholder="은행이름" />
          <input placeholder="계좌번호" />
        </Info>
        <Users>
          {breadBoard.members?.map((member) => (
            <User key={member.id || member.nickname}>
              <img src={member.avatar || images.logo} />
              <div>{member.nickname}</div>
              <BreadBoardPrice price={member.price} />
            </User>
          ))}
        </Users>
        <User isDelivery>
          <img src={images.delivery} />
          <div>배달비</div>
          <BreadBoardPrice price={breadBoard.deliveryFee} />
        </User>
      </Content>
    </Container>
  );
}

BreadBoard.propTypes = {
  isShown: PropTypes.bool,
  breadBoard: PropTypes.object,
  setBreadBoard: PropTypes.func,
};

export default BreadBoard;
