import React from "react";
import { Container } from "react-bootstrap";
import { NavbarComponent } from "./components/NavbarComponent";
import { AdGrid } from "./components/AdGrid";
import { CreatorDashboard } from "./pages/CreatorDashboard";
import { LoginPage } from "./pages/LoginPage"; // <-- 1. Import
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { OrderPage } from "./pages/OrderPage";
import { BillingPage } from "./pages/BillingPage";
import { TariffCalculator } from "./pages/TariffCalculator";
import { HowItWorks } from "./pages/HowItWorks";
import { LandingPage } from "./pages/LandingPage";
import { AdvertiserUploadPage } from "./pages/AdvertiserUploadPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AdCardCreator } from "./pages/AdCardCreator";

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
    <Router>
      <PageWrapper>
        <GlobalStyle />
        <NavbarComponent />
        <Container>
          <Routes>
            <Route
              path="/market"
              element={
                <>
                  <Title>Discover Ad Promotions</Title>
                  <AdGrid />
                </>
              }
            />
              <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<CreatorDashboard />} />
            <Route
              path="/login"
              element={<LoginPage />} // <-- 2. Add Login route
            />
            {/* If you make a SignUpPage, add here as well: */}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/tarrif" element={<TariffCalculator />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/advertiser/:upload" element={  <AdvertiserUploadPage />} />
              <Route path="/profile" element={<ProfilePage />} />
                <Route path="/adcreator" element={  <AdCardCreator />} />
            
          
          </Routes>
        </Container>
      </PageWrapper>
    </Router>
  );
};

export default App;
