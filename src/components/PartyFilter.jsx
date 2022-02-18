import styled from '@emotion/styled';
import React from 'react';
import { icons } from '../assets/assets';
import { COLORS, SIZES } from '../styles/constants';
import plainButton from '../styles/plainButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  box-sizing: border-box;
  padding: 0 5% 10px 5%;

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
    font-size: 0;
    padding-right: 0;
  }
`;

const Filter = styled.div`
  white-space: nowrap;
`;

const FilterRow = styled.div`
  display: flex;

  font-size: 12px;

  @media only screen and (max-width: ${SIZES.SMALL_WIDTH}) {
    font-size: 10px;
  }
`;

const FilterItem = styled.div`
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

  &:hover {
    cursor: pointer;
  }
`;

const CreatePartyBtn = styled(plainButton)`
  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 14px;
  }
  @media only screen and (max-width: ${SIZES.MIDDLE_WIDTH}) {
    font-size: 12px;
  }
`;

function PartyFilter() {
  return (
    <Container>
      <Column>
        <Title>파티목록</Title>
        <Filter>
          <FilterRow>
            <FilterItem>
              <icons.CheckIcon />
              <div> 모집중</div>
            </FilterItem>
            <FilterItem>
              <icons.HeartIcon />
              <div>위시리스트</div>
            </FilterItem>
          </FilterRow>
          <FilterRow>
            <FilterItem>
              <icons.CheckIcon />
              <div>신촌동</div>
            </FilterItem>
            <FilterItem>
              <icons.CheckIcon />
              <div>연희동</div>
            </FilterItem>
            <FilterItem>
              <icons.CheckIcon />
              <div>창천동</div>
            </FilterItem>
          </FilterRow>
        </Filter>
      </Column>
      <Column>
        <CreatePartyBtn> + 파티 만들기</CreatePartyBtn>
      </Column>
    </Container>
  );
}

export default PartyFilter;
