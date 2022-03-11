import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { images } from '../assets/assets';
import { Link } from 'react-router-dom';
import plainButton from '../styles/plainButton';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
`;

const Image = styled.img`
  position: absolute;
  height: 800px;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  z-index: 2;
  margin: 350px 80px 0 0;
  height: 250px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  white-space: pre-line;
`;

const Back = styled(plainButton)`
  margin-top: 50px;

  font-size: 24px;
  font-weight: bold;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Image src={images.breadBoardError} />
          <Content>
            <Title>{'이런 세상에! \n뭔가 잘못됐어요!!'}</Title>
            <Link to="/">
              <Back>메인 페이지로 돌아가기</Back>
            </Link>
          </Content>
        </Container>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ErrorBoundary;
