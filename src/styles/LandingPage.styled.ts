import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #ffe7f7 0%, #b9eaff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.6rem;
    color: #4d1d79;
    margin-bottom: 0.4rem;
    font-weight: 800;
    letter-spacing: -1px;
    text-align: center;
  }

  .subtitle {
    color: #555;
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;
