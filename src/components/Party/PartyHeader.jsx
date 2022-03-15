import styled from '@emotion/styled';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../../assets/assets';
import { COLORS, HOVER_CURSOR_PONTER, SIZES } from '../../styles/constants';
import plainButton from '../../styles/plainButton';
import { LoginStoreContext } from '../Stores/LoginStore';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;

  width: 100%;
  min-width: calc(${SIZES.MIN_WIDTH} - 60px);
  padding: 10px;
  box-sizing: border-box;

  div {
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bolder;
  padding-right: 20px;
  white-space: nowrap;

  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    padding-right: 15px;
    font-size: 20px;
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    ${(props) =>
      (props.isFiltered &&
        `
    font-size: 0;
    padding-right: 0;
    `) ||
      ''}
  }
`;

const Filter = styled.ul`
  white-space: nowrap;
`;

const FilterRow = styled.div`
  display: flex;

  font-size: 12px;

  .isActive {
    color: ${COLORS.PRIMARY};

    path {
      fill: ${COLORS.PRIMARY};
    }
  }

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 10px;
  }
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 3px;

  color: ${COLORS.DARK_GRAY};
  margin-right: 5px;

  path {
    fill: ${COLORS.DARK_GRAY};
  }

  svg {
    width: 14px;
    height: 14px;
    margin-right: 3px;

    @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
      width: 12px;
      height: 12px;
    }
  }

  ${HOVER_CURSOR_PONTER};
`;

const CreatePartyBtn = styled(plainButton)`
  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 14px;
  }
  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 12px;
  }
`;

function PartyHeader({ header, isFiltered, setOption }) {
  const { isLoggedin } = useContext(LoginStoreContext);
  const navigate = useNavigate();

  const clickFilterItem = ({ target }) => {
    const item = target.closest('li');

    if (!item) {
      return;
    }

    const place = item.dataset.place;
    const option = item.dataset.option;

    if (option === 'WISHLIST' && !isLoggedin) {
      navigate('/login');
    }

    item.classList.toggle('isActive');

    if (place) {
      setOption((prev) => ({ ...prev, place: { ...prev.place, [place]: !prev.place[place] } }));
    } else {
      setOption((prev) => ({ ...prev, [option]: !prev[option] }));
    }
  };

  return (
    <Container>
      <Column>
        <Title isFiltered={isFiltered}>{header}</Title>
        {isFiltered && (
          <Filter onClick={clickFilterItem}>
            <FilterRow>
              <FilterItem data-option="OPEN" className="isActive">
                <icons.CheckIcon />
                <div>모집중</div>
              </FilterItem>
              <FilterItem data-option="WISHLIST">
                <icons.HeartIcon />
                <div>위시리스트</div>
              </FilterItem>
            </FilterRow>
            <FilterRow>
              <FilterItem data-place="SINCHON" className="isActive">
                <icons.CheckIcon />
                <div>신촌동</div>
              </FilterItem>
              <FilterItem data-place="YEONHUI" className="isActive">
                <icons.CheckIcon />
                <div>연희동</div>
              </FilterItem>
              <FilterItem data-place="CHANGCHEON" className="isActive">
                <icons.CheckIcon />
                <div>창천동</div>
              </FilterItem>
            </FilterRow>
          </Filter>
        )}
      </Column>
      <Column>
        <Link to="/newparty">
          <CreatePartyBtn> + 파티 만들기</CreatePartyBtn>
        </Link>
      </Column>
    </Container>
  );
}

PartyHeader.propTypes = {
  header: PropTypes.string,
  isFiltered: PropTypes.bool,
  setOption: PropTypes.func,
};

export default PartyHeader;
