import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #ffffffcc;
  border: 2px solid #2186ff;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(33,134,255,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  min-width: 300px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.12s, box-shadow 0.18s;
  &:hover {
    transform: translateY(-5px) scale(1.025);
    box-shadow: 0 12px 32px rgba(33,134,255,0.18);
  }

  .icon {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.45rem;
    color: #2186ff;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .headline {
    font-size: 1.25rem;
    color: #1563b7;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
  .desc {
    font-size: 1.02rem;
    color: #333;
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 1.45;
  }
`;

export const CardButton = styled.button`
  background: linear-gradient(90deg, #21d4fd 0%, #2186ff 100%);
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 2.2rem;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(33,134,255,0.14);
  transition: background 0.15s;
  &:hover {
    background: linear-gradient(90deg, #2186ff 0%, #21d4fd 100%);
  }
`;
