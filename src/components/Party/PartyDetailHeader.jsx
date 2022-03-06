import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../../styles/constants';
import { convertStatus, convertPlace, convertDate } from '../../utils/converter';
import { icons, images } from '../../assets/assets';
import plainButton from '../../styles/plainButton';

const Container = styled.div`
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
    }
  }

  svg {
    margin-right: 30px;
    transform: scale(1.8, 1.8);

    path {
      fill: ${COLORS.PRIMARY};
    }

    ${HOVER_CURSOR_PONTER};

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      transform: scale(1.5, 1.5);
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
  border-radius: ${(props) => props.isProfile && `50%`};
  border: ${(props) => props.isProfile && `1px solid ${COLORS.PRIMARY}`};
  ${(props) => !props.isProfile && HOVER_CURSOR_PONTER};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    width: 36px;
    height: 36px;
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

function PartyDetailHeader({ party, isPartyPage, toggleMenu }) {
  if (!party?.owner) {
    return <Container />;
  }
  return (
    <Container>
      <StatusColumn>
        <Image src={party.owner.avatar || images.logo} isProfile />
        <Profile>
          <div>{party.owner.nickname}</div>
          <div> {convertPlace(party.owner.place)}</div>
        </Profile>
      </StatusColumn>
      <StatusColumn>
        <div>{`${party.joinNumber} / ${party.goalNumber} 명`}</div>
        <Bar />
        <div>{convertStatus(party.status, party.joinNumber, party.goalNumber)}</div>
        <Bar />
        <div>{convertDate(party.createTime)}</div>
      </StatusColumn>
      <StatusColumn isChatPage={!isPartyPage}>
        <icons.HeartIcon />
        {(isPartyPage && (
          <Link to={'/chats/' + party.id}>
            <ChattingButton>채팅 입장</ChattingButton>
          </Link>
        )) || (
          <>
            <Image src={images.bread} onClick={toggleMenu('BREADBOARD')} />{' '}
            <Image src={images.bread} onClick={toggleMenu('CHATMENU')} />
          </>
        )}
      </StatusColumn>
    </Container>
  );
}

PartyDetailHeader.propTypes = {
  party: PropTypes.object,
  isPartyPage: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default PartyDetailHeader;
