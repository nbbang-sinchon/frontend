import React, { useState } from 'react';
import Party from './Party';
import partiesinfo from './partiesinfo';

import styled from '@emotion/styled';


const Container = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;

align-items: flex-start;
padding: 10px;
`;


function Parties() {
  const [parties] = useState(partiesinfo);

  // const getParties = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_Parties.json?minimum_rating=8.8&sort_by=year`
  //     )
  //   ).json();
  //   setParties(json.data.Parties);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getParties();
  // }, []);

  return (
    <div>
      <Container>
      {parties.map((party)=>(
      // eslint-disable-next-line react/jsx-key
      <Party 
        key={party.id}
        title = {party.title}
        hashtags = {party.hashtags} 
        place = {party.place}
      />
      ))}
      </Container>
      
    </div>
  );
}

export default Parties;
