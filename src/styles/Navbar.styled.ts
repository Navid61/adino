import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #8e44ad;
  padding: 1rem;

  .nav-link {
    color: #fff !important;
    margin-right: 1rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledLogo = styled.div`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
`;
