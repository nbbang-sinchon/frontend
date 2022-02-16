import React, { useState } from 'react';
import styled from '@emotion/styled';
import Party from './Party';
import partiesinfo from './partiesinfo';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  align-items: flex-start;
  padding: 10px;
  margin; 10px;
`;

function Parties() {
  const [parties] = useState(partiesinfo);

  return (
    <div>
      <Container>
        {parties.map((party) => (
          <Party key={party.id} title={party.title} hashtags={party.hashtags} place={party.place} />
        ))}
      </Container>
    </div>
  );
}

export default Parties;
