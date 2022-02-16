import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import dummyParties from '../dummies/dummyParties';

const Container = styled.div``;

function PartyDetail() {
  const { id } = useParams();
  const party = dummyParties[id];

  return (
    <Container>
      {party.title}, {party.hashtags}, {party.place}, {party.createTime}, {party.joinNumber}, {party.goalNumber},
      {party.status}
    </Container>
  );
}

export default PartyDetail;
