import styled from 'styled-components';

export const AuthWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #fdeff9 0%, #ec38bc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 32px rgba(80, 0, 80, 0.07);
  padding: 2.5rem 2rem 1.5rem 2rem;
  min-width: 340px;
  max-width: 380px;
  width: 100%;
  text-align: center;
`;

export const AuthTitle = styled.h2`
  margin-bottom: 1.2rem;
  font-size: 2.1rem;
  font-weight: bold;
  color: #7700ff;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

export const SocialButton = styled.button<{ $provider: string }>`
  flex: 1 1 45%;
  min-width: 120px;
  max-width: 48%;
  padding: 0.65rem 0.6rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: #fff;
  cursor: pointer;
  background: ${({ $provider }) =>
    $provider === 'google'    ? '#ea4335' :
    $provider === 'facebook'  ? '#1877f3' :
    $provider === 'instagram' ? 'linear-gradient(135deg,#f9ce34 0%,#ee2a7b 60%,#6228d7 100%)' :
    $provider === 'x'         ? '#000' :
    '#666'
  };
  box-shadow: 0 1px 8px rgba(80,0,80,0.05);
`;

export const OrDivider = styled.div`
  margin: 1.3rem 0 1.1rem 0;
  color: #aaa;
  font-weight: 500;
  letter-spacing: 0.07em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: #eee;
    margin: 0 8px;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.07rem;
  background: #fafaff;
  transition: border 0.2s;
  &:focus {
    border-color: #ec38bc;
    outline: none;
    background: #fff;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  padding: 0.9rem 0;
  border: none;
  border-radius: 10px;
  background: linear-gradient(120deg, #7700ff, #ec38bc);
  color: #fff;
  font-weight: bold;
  font-size: 1.11rem;
  margin-bottom: 0.6rem;
  box-shadow: 0 2px 18px rgba(80,0,80,0.11);
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(120deg, #ec38bc, #7700ff);
  }
`;

export const AuthLink = styled.a`
  color: #a700b3;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-top: 0.6rem;
  &:hover {
    text-decoration: underline;
    color: #ec38bc;
  }
`;
