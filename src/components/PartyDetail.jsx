import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { icons, images } from '../assets/assets';
import dummyParty from '../dummies/dummyParty';
import { COLORS } from '../styles/constants';
import { convertStatus, convertPlace, convertDate } from '../utils/converter';
import HashTags from './HashTags';

const Container = styled.div``;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 15px 10px;

  border-bottom: 1px solid ${COLORS.GRAY};
`;

const StatusColumn = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;

  &: first-of-type {
    font-size: 14px;
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
  }
`;

const Image = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${COLORS.PRIMARY};
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

const ChattingButton = styled.button`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Profile = styled.div`
  margin-left: 15px;
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
          {`${party.joinNumber} / ${party.goalNumber} 명 | ${convertStatus(party.status)} | ${convertDate(
            party.createTime,
          )}`}
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
