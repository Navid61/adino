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

export const LoginPage: React.FC = () => (
  <AuthWrapper>
    <AuthCard>
      <AuthTitle>Login</AuthTitle>
      <SocialButtons>
        <SocialButton $provider="google"><FaGoogle /> Google</SocialButton>
        <SocialButton $provider="instagram"><FaInstagram /> Instagram</SocialButton>
        <SocialButton $provider="facebook"><FaFacebookF /> Facebook</SocialButton>
        <SocialButton $provider="x"><FaXTwitter /> X</SocialButton>
      </SocialButtons>
      <OrDivider>OR</OrDivider>
      <form>
        <AuthInput type="email" placeholder="Email" required />
        <AuthInput type="password" placeholder="Password" required />
        <AuthButton type="submit">Login</AuthButton>
      </form>
      <AuthLink href="#">Forgot password?</AuthLink>
      <AuthLink href="/signup">Don&apos;t have an account? Sign up</AuthLink>
    </AuthCard>
  </AuthWrapper>
);
