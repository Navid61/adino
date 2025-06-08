// styles/OrderPageStyled.ts
import styled from 'styled-components';

export const OrderWrapper = styled.div`
  max-width: 720px;
  margin: 2rem auto;
  background: linear-gradient(120deg, #fff7ec 80%, #f0d8ff 100%);
  border-radius: 18px;
  padding: 2.2rem 1.5rem 2.5rem 1.5rem;
  box-shadow: 0 8px 32px rgba(135, 60, 182, 0.12);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 1rem 0.3rem 1.2rem 0.3rem;
  }
`;

export const OrderTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
  color: #922be1;
  letter-spacing: 0.5px;
`;

export const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  gap: 1.1rem 0.7rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const PlatformLabel = styled.label`
  cursor: pointer;
  border: 2.3px solid #eee;
  border-radius: 12px;
  background: #fff;
  color: #7e35a3;
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 1.02rem;
  transition: box-shadow 0.13s, border 0.13s, background 0.18s;
  box-shadow: 0 2px 7px rgba(160, 80, 245, 0.03);

  &.selected {
    background: #f3e6ff;
    border: 2.5px solid #a167ff;
    color: #4e1380;
    box-shadow: 0 5px 22px rgba(138, 43, 226, 0.10);
  }

  span {
    margin-top: 0.6rem;
  }
`;

export const PlatformCheckbox = styled.input`
  display: none;
`;

export const PlatformIcon = styled.span`
  font-size: 2.1rem;
  display: flex;
  align-items: center;
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  color: #554e4e;
  margin-bottom: 0.2rem;
`;

export const FormInput = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 7px;
  border: 1.5px solid #e0cfff;
  background: #fff;
  font-size: 1.07rem;
  transition: border 0.2s;

  &:focus {
    border-color: #922be1;
    outline: none;
  }
`;

export const MorePlatformsSelect = styled.select`
  padding: 0.65rem 1rem;
  border-radius: 8px;
  border: 1.4px solid #ece2ff;
  background: #f9f6ff;
  font-size: 1.06rem;
  margin-top: 0.3rem;
`;

export const FormTextarea = styled.textarea`
  padding: 0.7rem 1rem;
  border-radius: 7px;
  border: 1.5px solid #e0cfff;
  background: #fff;
  font-size: 1.07rem;
  transition: border 0.2s;

  &:focus {
    border-color: #922be1;
    outline: none;
  }
`;

export const FormButton = styled.button`
  margin-top: 1rem;
  background: linear-gradient(90deg, #922be1 40%, #fd5e53 100%);
  color: white;
  border: none;
  border-radius: 7px;
  padding: 0.9rem 0;
  font-size: 1.09rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.22s;

  &:hover {
    background: linear-gradient(90deg, #fd5e53 0%, #922be1 100%);
  }
`;

export const SummaryCard = styled.div`
  margin-top: 1.8rem;
  background: #fffbe9;
  border-radius: 13px;
  padding: 1.2rem 1rem;
  box-shadow: 0 1px 8px rgba(254, 179, 68, 0.08);

  h5 {
    margin-bottom: 0.8rem;
    color: #ff6600;
    font-size: 1.09rem;
    font-weight: bold;
  }
  ul {
    margin: 0;
    padding: 0 1rem;
    list-style: disc;
    color: #7a4a1f;
    font-size: 1rem;
  }
  li + li {
    margin-top: 0.3rem;
  }
`;
