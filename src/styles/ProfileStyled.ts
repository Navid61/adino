import styled from "styled-components";

// Layout Wrapper
export const PageWrapper = styled.div`
  background: linear-gradient(120deg, #e0ecff 0%, #f8f8ff 100%);
  min-height: 100vh;
  padding: 2.5rem 0 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Profile Banner
export const ProfileBanner = styled.div`
  background: linear-gradient(90deg, #7b2ff2 0%, #00c6ff 100%);
  border-radius: 20px;
  box-shadow: 0 4px 32px #7b2ff215;
  width: 100%;
  max-width: 680px;
  padding: 2rem 2.2rem 1.4rem 2.2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  position: relative;

  .profile-info {
    flex: 1;
  }

  .meta {
    color: #e3f0ff;
    font-size: 1rem;
    margin-top: 0.2rem;
    letter-spacing: 0.01em;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 1rem;
    gap: 0.7rem;
  }
`;

export const Avatar = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
  box-shadow: 0 2px 12px #5f87e62c;
  background: #f8f9fd;
`;

export const Name = styled.h2`
  font-family: 'Poppins', 'Vazirmatn', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Verified = styled.span`
  margin-left: 0.65rem;
  font-size: 1.2em;
  color: #28e285;
  display: flex;
  align-items: center;
`;

export const EditButton = styled.button`
  background: #5287ff;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 0.62rem 1.7rem;
  font-weight: 600;
  font-size: 1.09rem;
  box-shadow: 0 2px 10px #4465b512;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  cursor: pointer;
  transition: background 0.16s;

  &:hover {
    background: #3059b5;
  }

  @media (max-width: 600px) {
    position: static;
    margin-top: 0.7rem;
    width: 100%;
  }
`;

// Section Card
export const Section = styled.section`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px #ccd6ff24;
  width: 100%;
  max-width: 680px;
  margin-bottom: 2rem;
  padding: 1.7rem 2rem 1.6rem 2rem;

  h3 {
    margin-top: 0;
    font-size: 1.18rem;
    font-weight: 700;
    color: #3753a5;
    letter-spacing: 0.01em;
    margin-bottom: 1.1rem;
    font-family: 'Poppins', 'Vazirmatn', sans-serif;
  }

  @media (max-width: 600px) {
    padding: 1.15rem 0.7rem;
    margin-bottom: 1.1rem;
  }
`;

// Social Connections
export const SocialCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-bottom: 0.2rem;
`;

export const SocialRow = styled.div`
  background: #f6f7fb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.72rem 0.9rem;
  gap: 1rem;
  font-size: 1.05rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    font-size: 1rem;
  }
`;

export const SocialIcon = styled.span`
  font-size: 1.5em;
  display: flex;
  align-items: center;
`;

export const SocialName = styled.span`
  flex: 1;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.45rem;

  span {
    color: #6a7899;
    font-size: 0.97em;
  }
`;

export const SocialStatus = styled.span<{ connected?: boolean }>`
  color: ${({ connected }) => (connected ? "#28a745" : "#f59e42")};
  font-weight: 600;
`;

export const ConnectBtn = styled.button`
  background: #5287ff;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.39rem 1.1rem;
  font-weight: 600;
  font-size: 1.01rem;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover { background: #365bda; }
`;

export const DisconnectBtn = styled.button`
  background: #fff1f1;
  color: #c82c2c;
  border: 1.5px solid #ffd7d7;
  border-radius: 7px;
  padding: 0.39rem 1.1rem;
  font-weight: 600;
  font-size: 1.01rem;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover { background: #ffd7d7; }
`;

export const AddSocial = styled.div`
  margin: 0.75rem 0 0.25rem 0;
  color: #397cff;
  font-weight: 600;
  background: #f3f8ff;
  border: 2px dashed #c6dbff;
  border-radius: 8px;
  padding: 0.8rem 0;
  text-align: center;
  cursor: pointer;
  transition: background 0.17s;

  &:hover {
    background: #eaf3ff;
  }
`;

// Profile Details
export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem 2.1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #6a7899;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 0.14rem;
  }

  span {
    color: #233;
    font-size: 1.05rem;
    font-family: 'Poppins', 'Vazirmatn', sans-serif;
    font-weight: 500;
  }
`;

// Preferences
export const PrefsRow = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 0.4rem;
  flex-wrap: wrap;
  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 0.5rem;
  font-size: 1.01rem;

  input[type="checkbox"] {
    margin-right: 0.4rem;
    accent-color: #5287ff;
  }
`;
