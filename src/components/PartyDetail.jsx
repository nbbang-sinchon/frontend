import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import dummyParty from '../dummies/dummyParty';
import HashTags from './HashTags';

const Container = styled.div``;

const Status = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

function PartyDetail() {
  const { id } = useParams();
  const party = dummyParty[id];

  return (
    <Container>
      <Status>
        <HashTags hashtags={party.hashtags} />
      </Status>
      <Title>{party.title}</Title>
      <Content>{party.content}</Content>
    </Container>
  );
}

export default PartyDetail;
