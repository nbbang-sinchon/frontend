import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { icons, images } from '../assets/assets';
import dummyParty from '../dummies/dummyParty';
import { COLORS, SIZES } from '../styles/constants';
import { convertStatus, convertPlace, convertDate } from '../utils/converter';
import HashTags from './HashTags';
import plainButton from '../styles/plainButton';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 10px 15px 10px;
  border-bottom: 1px solid ${COLORS.GRAY};
`;

const StatusColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 14px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 12px;

    &: nth-of-type(2) {
      flex-direction: column;

      font-size: 10px;
    }
  }

  svg {
    margin-right: 20px;
    transform: scale(1.5, 1.5) translateY(-2px);

    path {
      fill: ${COLORS.PRIMARY};
    }

    &:hover {
      cursor: pointer;
    }

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      transform: scale(1.2, 1.2) translateY(-2px);
      margin-right: 15px;
    }
  }
`;

const Bar = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${COLORS.BLACK};
  margin: 0 10px;

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    display: none;
  }
`;

const Image = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${COLORS.PRIMARY};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    width: 36px;
    height: 36px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  padding-top: 20px;
`;

const Content = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${COLORS.GRAY};

  > div:first-of-type {
    padding-bottom: 20px;
  }
`;

const ChattingButton = styled(plainButton)`
  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 14px;
  }
`;

const Profile = styled.div`
  margin-left: 15px;
  font-size: 14px;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 12px;
    margin-left: 10px;
  }

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 12px;
  }
`;

function PartyDetail() {
  const { id } = useParams();
  const party = dummyParty[id];

  return (
    <Container>
      <Status>
        <StatusColumn>
          <Image src={images.logo} />
          <Profile>
            <div>{party.ownerNickname}</div>
            <div> {convertPlace(party.place)}</div>
          </Profile>
        </StatusColumn>
        <StatusColumn>
          <div>{`${party.joinNumber} / ${party.goalNumber} 명`}</div>
          <Bar />
          <div>{convertStatus(party.status, party.joinNumber, party.goalNumber)}</div>
          <Bar />
          <div>{convertDate(party.createTime)}</div>
        </StatusColumn>
        <StatusColumn>
          <icons.HeartIcon />
          <ChattingButton>채팅입장</ChattingButton>
        </StatusColumn>
      </Status>
      <Title>{party.title}</Title>
      <Content>
        <div>{party.content}</div>
        <HashTags hashtags={party.hashtags} />
      </Content>
    </Container>
  );
}

export default PartyDetail;
