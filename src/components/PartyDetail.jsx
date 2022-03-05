import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../styles/constants';

import HashTags from './HashTags';

import PartyStatus from './PartyStatus';

const Container = styled.div`
  margin-bottom: 20px;
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

function PartyDetail({ party, isPartyPage }) {
  if (!party) {
    return <Container />;
  }
  return (
    <Container>
      <PartyStatus party={party} isPartyPage={isPartyPage} />
      <Title>{party.title}</Title>
      <Content>
        <div>{party.content}</div>
        <HashTags hashtags={party.hashtags} color={COLORS.BLACK} />
      </Content>
    </Container>
  );
}

PartyDetail.propTypes = {
  party: PropTypes.object,
  isPartyPage: PropTypes.bool,
};

export default PartyDetail;
