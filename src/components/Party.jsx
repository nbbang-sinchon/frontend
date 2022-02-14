import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from '../styles/constants';
import { icons } from '../assets/assets';
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;

  flex-flow: column wrap;
  padding: 10px;
  flex: 1 1 2;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
`;

const TagsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  padding: 5px;
`;


const Title = styled.div`
  
  display: flex;
  flex: auto;
  padding: 20px;


  font-color: ${COLORS.BLACK};
  font-size: 30px;
  font-weight: bolder;

  background : ${COLORS.PRIMARY};
  border-radius: 10px; 
`;

const Tag = styled.div`
display: flex;
margin: 2px;
padding: 2px;
align-items: flex-start;
color: ${COLORS.PRIMARY};

border: 1px solid ${COLORS.PRIMARY};
border-radius: 2px;

font-size: 10px;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  color: ${COLORS.BLACKBLACK};
  font-size: 1px;
`;


function Party({title, hashtags, place}) {
    return (
      <>
      <Container>
        <InnerContainer>
          <Title>{title}</Title>
        </InnerContainer>
        <TagsContainer>
          {hashtags.map(tag => (
          <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsContainer>
        <InnerContainer>
        <Info><icons.LocationIcon/>{place}&nbsp;&nbsp;<icons.TimeIcon/>&nbsp;방금</Info>
        </InnerContainer>
    
      </Container>
      </>
    );
  }

 Party.propTypes = {
    title: PropTypes.string.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    Info: PropTypes.string.isRequired,
  };

export default Party;
  