import React from 'react';
import { Container } from 'react-bootstrap';
import { NavbarComponent } from './components/NavbarComponent';
import { AdGrid } from './components/AdGrid';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

const PageWrapper = styled.div`
  background-color: #fff6ed;
  min-height: 100vh;
  padding: 2rem 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

const App: React.FC = () => {
  return (
    <PageWrapper>
      <GlobalStyle />
      <NavbarComponent />
      <Container>
        <Title>Discover Ad Promotions</Title>
        <AdGrid />
      </Container>
    </PageWrapper>
  );
};

export default App;