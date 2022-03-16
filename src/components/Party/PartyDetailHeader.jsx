import styled from '@emotion/styled';
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../../styles/constants';
import { convertStatus, convertPlace, convertDate } from '../../utils/converter';
import { icons, images } from '../../assets/assets';
import plainButton from '../../styles/plainButton';
import useFetch from '../../hooks/useFetch';
import Modal from '../Modal';
import { LoginStoreContext } from '../Stores/LoginStore';

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
    padding: 0 15px;
    width: 40px;
    height: 40px;

    path {
      fill: ${COLORS.PRIMARY};
    }

    ${HOVER_CURSOR_PONTER};

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      padding: 0 10px;
      width: 32px;
      height: 32px;
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

const JoinButton = styled(plainButton)`
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

const ModalText = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 25px;
  padding-bottom: 40px;
`;

function PartyDetailHeader({ party, isPartyPage, toggleMenu }) {
  const { customFetch } = useFetch();
  const navigate = useNavigate();
  const [isWishlist, setIsWishlist] = useState(false);
  const [modalState, setModalState] = useState({
    visible: false,
    content: '파티에 참여하시겠습니까?',
    type: 'CONFIRM',
  });
  const { isLoggedin } = useContext(LoginStoreContext);

  const makeButton = (party, isPartyPage) => {
    if (!isPartyPage) {
      return (
        <>
          <icons.MenuIcon onClick={toggleMenu('CHATMENU')} />
          <Image src={images.bread} onClick={toggleMenu('BREADBOARD')} />
        </>
      );
    }
    if (!isLoggedin) {
      return (
        <Link to={'/login'}>
          <JoinButton>파티 참여</JoinButton>
        </Link>
      );
    } else if (party?.isMember) {
      return (
        <Link to={'/chats/' + party.id}>
          <JoinButton>채팅 입장</JoinButton>
        </Link>
      );
    } else {
      return (
        <JoinButton onClick={() => setModalState((prev) => ({ ...prev, visible: !prev.visible }))}>
          파티 참여
        </JoinButton>
      );
    }
  };

  const joinParty = async () => {
    const json = await customFetch(`/parties/${party.id}/join`, 'POST');

    if (json?.statusCode === 200) {
      navigate(`/chats/${party.id}`);
    } else if (json?.statusCode) {
      setModalState(() => ({ visible: true, content: json.message, type: 'ALERT' }));
    }
  };

  const toggleWishList = async (isWishlist) => {
    if (!isLoggedin) {
      navigate('/login');
      return;
    }

    let json;
    if (isWishlist) {
      json = await customFetch(`/parties/${party.id}/wishlist`, 'DELETE');
    } else {
      json = await customFetch(`/parties/${party.id}/wishlist`, 'POST');
    }

    if (json.statusCode === 200) {
      setIsWishlist((prev) => !prev);
    }
  };

  useEffect(() => {
    setIsWishlist(party?.isWishlist);
  }, [party]);

  if (!party?.owner) {
    return <Container />;
  }
  return (
    <>
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
          {isWishlist ? (
            <icons.FilledHeartIcon onClick={() => toggleWishList(isWishlist)} />
          ) : (
            <icons.HeartIcon onClick={() => toggleWishList(isWishlist)} />
          )}

          {makeButton(party, isPartyPage)}
        </StatusColumn>
      </Container>
      <Modal
        type={modalState.type}
        visible={modalState.visible}
        onConfirm={joinParty}
        onDisconfirm={() => setModalState((prev) => ({ ...prev, visible: false }))}
        onClose={() => setModalState((prev) => ({ ...prev, visible: false }))}>
        <ModalText>{modalState.content}</ModalText>
      </Modal>
    </>
  );
}

PartyDetailHeader.propTypes = {
  party: PropTypes.object,
  isPartyPage: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default PartyDetailHeader;
