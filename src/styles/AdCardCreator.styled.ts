import styled from "styled-components";

export const CreatorContainer = styled.div`
  background: linear-gradient(120deg, #e0eaff 0%, #f7f2fb 100%);
  border-radius: 18px;
  max-width: 920px;
  margin: 2.5rem auto;
  padding: 2.5rem 2.2rem;
  box-shadow: 0 8px 40px #b6b1f370;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1000px) {
    max-width: 99vw;
    padding: 1.6rem 0.7rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0.7rem 0.1rem;
    border-radius: 12px;
    gap: 1.1rem;
  }
`;

export const FormSection = styled.div`
  flex: 1 1 360px;
  min-width: 270px;
  max-width: 500px;

  @media (max-width: 700px) {
    max-width: 100vw;
    min-width: 0;
    padding: 0 2vw;
  }
`;

// Only define PreviewSection once!
export const PreviewSection = styled.div`
  flex: 1 1 320px;
  min-width: 290px;
  background: transparent;

  position: sticky;
  top: 32px;           /* Adjust as needed for your header */
  align-self: flex-start;
  z-index: 2;

  @media (max-width: 900px) {
    position: static;
    top: unset;
  }
`;

export const Field = styled.div`
  margin-bottom: 1.05rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 600;
    color: #43369d;
    margin-bottom: 0.39em;
    font-size: 1.02rem;
    letter-spacing: 0.01em;
  }
  input, select, textarea {
    border: 1.2px solid #dde3ff;
    border-radius: 7px;
    padding: 0.55rem 0.95rem;
    font-size: 1rem;
    background: #fafcff;
    transition: border-color 0.17s;
    outline: none;
    &:focus {
      border-color: #7884ef;
    }
  }
  textarea {
    resize: vertical;
    min-height: 42px;
    max-height: 140px;
  }

  @media (max-width: 700px) {
    label {
      font-size: 0.97rem;
    }
    input, select, textarea {
      font-size: 0.99rem;
      padding: 0.49rem 0.73rem;
    }
  }
`;

export const PlatformTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.57rem;
  margin-bottom: 1rem;
`;

export const TabBtn = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? "#5287ff" : "#eceffd")};
  color: ${({ $active }) => ($active ? "#fff" : "#403c78")};
  border: none;
  border-radius: 7px;
  font-weight: 600;
  padding: 0.54rem 1.24rem;
  cursor: pointer;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.44em;
  box-shadow: 0 1px 5px #bbb6e010;
  transition: background 0.16s, color 0.16s, box-shadow 0.16s;

  &:hover,
  &:focus-visible {
    background: #cbe1fc;
    color: #2b2b51;
    box-shadow: 0 2px 12px #b6b1f025;
  }

  @media (max-width: 500px) {
    padding: 0.38rem 0.65rem;
    font-size: 0.97rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 1.3rem;
  flex-wrap: wrap;

  button {
    flex: 1;
    font-size: 1.04rem;
    font-weight: 600;
    border-radius: 7px;
    border: none;
    padding: 0.76rem 0;
    background: linear-gradient(90deg, #7f7fd5 0%, #86a8e7 60%, #91eac9 100%);
    color: #fff;
    cursor: pointer;
    transition: background 0.13s, transform 0.13s;
    &:hover {
      background: linear-gradient(90deg, #91eac9 0%, #7f7fd5 100%);
      transform: scale(1.035);
    }
    @media (max-width: 500px) {
      font-size: 0.97rem;
      padding: 0.62rem 0;
    }
  }
  @media (max-width: 500px) {
    gap: 0.8rem;
  }
`;
