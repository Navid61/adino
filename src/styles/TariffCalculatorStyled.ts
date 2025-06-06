// styles/TariffCalculatorStyled.ts
import styled from "styled-components";

export const CalculatorWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 32px rgba(245, 140, 71, 0.13);
  max-width: 530px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

export const TabButton = styled.button<{$active: boolean}>`
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(90deg,#ffbe88,#fe5cba)"
      : "#f5f5f7"};
  color: ${({ $active }) => ($active ? "#fff" : "#888")};
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 0.6rem 1.4rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 12px rgba(254,92,186,0.11)" : "none"};
  transition: background 0.18s, color 0.18s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  label {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.2rem;
    color: #666;
  }
  .range-value {
    font-weight: 700;
    font-size: 1.15rem;
    margin-top: 0.2rem;
    color: #e1306c;
  }
`;

export const StyledRange = styled.input`
  width: 100%;
  max-width: 350px;
  accent-color: #ffbe88;
  margin: 0.5rem 0;
`;

export const PriceTable = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-radius: 10px;
  background: #fffaf4;
  box-shadow: 0 2px 8px rgba(245, 140, 71, 0.05);
  overflow: hidden;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3e2c4;
  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.div`
  flex: 1;
  font-weight: 600;
  color: #353535;
`;

export const Value = styled.div`
  font-weight: 600;
  color: #ff791c;
`;

export const Icon = styled.span`
  font-size: 1.1em;
  margin-right: 0.3em;
  display: flex;
  align-items: center;
`;
