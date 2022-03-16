import styled from '@emotion/styled';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';
import { SERVER_URL } from '../config';
import Modal from './Modal';
import useProfile from '../hooks/useProfile';
import useFetch from '../hooks/useFetch';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 40px 200px;
  min-width: ${SIZES.HEADER_MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    padding: 40px 50px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  font-weight: 700;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: ${COLORS.DARK_GRAY};
    margin-bottom: 4px;
  }
`;

const Profile = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 70%;
  border: 2px solid ${COLORS.GRAY};
  overflow: hidden;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }

  button {
  }
`;

const UserInfo = styled.div`
  width: 100%;

  h3 {
    font-size: 12px;
    font-weight: 600;
    color: ${COLORS.DARK_GRAY};
    margin-top: 10px;
    margin-botton: 4px;
  }

  input {
    font-size: 20px;
    font-weight: 600;
    width: 100%;

    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }

  select {
    width: 100%;

    padding: 5px 30px 5px 10px;
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }

  select option {
    background-color: ${COLORS.WHITE};
    width: 100%;
  }
`;

const SaveButton = styled.button`
  font-size: 15px;
  font-weight: 400;
  border: 1.5px solid;
  border-radius: 6px;

  color: ${COLORS.WHITE};
  background-color: ${COLORS.PRIMARY};
  width: 100%;
  text-align: center;
  padding: 15px 0px;
  margin-top: 30px;

  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SecessionButton = styled.div`
  font-size: 15px;
  font-weight: 400;
  border: 1.5px solid;
  border-radius: 6px;

  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK_GRAY};

  width: 100%;
  text-align: center;
  padding: 15px 0px;
  margin-top: 30px;

  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 30px;
  padding-right: 10px;
  @media only screen and (max-width: ${SIZES.HEADER_MIDDLE_WIDTH}) {
    height: 40px;
  }
`;

const ModalText = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 25px;
  padding-bottom: 40px;
`;

function MyProfile() {
  const navigate = useNavigate();
  const { customFetch } = useFetch();
  const { profile, setProfile } = useProfile();
  const inputRef = useRef();

  const [preview, setPreview] = useState();
  const [files, setFiles] = useState();

  const [modalState, setModalState] = useState({
    visible: false,
    content: '',
    type: 'CONFIRM',
    isPatchProfilebutton: true,
  });

  const onChange = (event) => {
    const { value, name } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalState((prev) => ({ ...prev, visible: !prev.visible, content: '프로필을 수정하시겠습니까?' }));
  };

  const LeaveNbbang = () => {
    customFetch(`/members`, 'DELETE');
    navigate('/');
  };

  const PatchProfile = async () => {
    PatchAvatar();

    const body = profile;
    const json = await customFetch(`/members`, 'PATCH', JSON.stringify(body));

    if (json.statusCode === 200) {
      navigate('/');
    }
  };

  const onImgChange = (e) => {
    const file = e.target.files;
    setFiles(file);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const PatchAvatar = () => {
    const formData = new FormData();
    formData.append('imgFile', files[0]);

    const options = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: formData,
    };
    fetch(`${SERVER_URL}/members/avatar`, options);
  };

  return (
    <>
      <Container>
        <Profile>
          <input
            ref={inputRef}
            type="file"
            name="profile_avatar"
            accept="image/png, image/jpeg"
            onChange={onImgChange}
          />
          <img
            src={preview ? preview : profile.avatar || images.logo}
            onClick={() => {
              inputRef.current.click();
            }}
          />
        </Profile>
        <form onSubmit={handleSubmit}>
          <UserInfo>
            <h3>닉네임</h3>
            <input name="nickname" onChange={onChange} value={profile.nickname}></input>
            <h3>지역</h3>
            <select name="place" onChange={onChange} value={profile.place}>
              <option value="SINCHON">신촌동</option>
              <option value="YEONHUI">연희동</option>
              <option value="CHANGCHEON">창천동</option>
            </select>
            <h3>닉네임</h3>
            <h3>받은 추천 수</h3>
            <InnerContainer>
              <Image src={images.bread} />
              <h3>{profile.breadNumber === null ? 0 : profile.breadNumber}개</h3>
            </InnerContainer>
          </UserInfo>
          <SaveButton type="submit">저장하기</SaveButton>
          <SecessionButton
            onClick={() =>
              setModalState((prev) => ({
                ...prev,
                visible: !prev.visible,
                content: '엔빵을 떠나시겠습니까?',
                isPatchProfilebutton: false,
              }))
            }>
            탈퇴하기
          </SecessionButton>
        </form>
      </Container>
      <Modal
        type={modalState.type}
        visible={modalState.visible}
        onConfirm={modalState.isPatchProfilebutton ? PatchProfile : LeaveNbbang}
        onDisconfirm={() => setModalState((prev) => ({ ...prev, visible: false }))}
        onClose={() => setModalState((prev) => ({ ...prev, visible: false }))}>
        <ModalText>{modalState.content}</ModalText>
      </Modal>
    </>
  );
}

export default MyProfile;
