import React from 'react';
import { FaGoogle, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { 
  AuthWrapper, 
  AuthCard, 
  AuthTitle, 
  SocialButtons, 
  SocialButton, 
  OrDivider, 
  AuthInput, 
  AuthButton, 
  AuthLink 
} from '../styles/AuthStyle';

export const SignUpPage: React.FC = () => (
  <AuthWrapper>
    <AuthCard>
      <AuthTitle>Sign Up</AuthTitle>
      <SocialButtons>
        <SocialButton $provider="google"><FaGoogle /> Google</SocialButton>
        <SocialButton $provider="instagram"><FaInstagram /> Instagram</SocialButton>
        <SocialButton $provider="facebook"><FaFacebookF /> Facebook</SocialButton>
        <SocialButton $provider="x"><FaXTwitter /> X</SocialButton>
      </SocialButtons>
      <OrDivider>OR</OrDivider>
      <form>
        <AuthInput type="text" placeholder="Name" required />
        <AuthInput type="email" placeholder="Email" required />
        <AuthInput type="password" placeholder="Password" required />
        <AuthInput type="password" placeholder="Confirm Password" required />
        <AuthButton type="submit">Sign Up</AuthButton>
      </form>
      <AuthLink href="/login">Already have an account? Login</AuthLink>
    </AuthCard>
  </AuthWrapper>
);
