// styles/BillingPageStyled.ts
import styled from "styled-components";

export const BillingWrapper = styled.div`
  max-width: 720px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 20px;
  padding: 2.2rem 1.7rem;
  box-shadow: 0 8px 24px 0 rgba(76, 68, 162, 0.11);
  @media (max-width: 768px) {
    padding: 1.1rem 0.4rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #333366;
  margin-bottom: 1.3rem;
`;

export const BalanceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #fceabb 0%, #f8b500 100%);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;

  span {
    font-size: 1.05rem;
    color: #8b7c3c;
  }

  h2 {
    margin: 0.2rem 0 0;
    color: #633c01;
    font-size: 2.1rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.2rem;
    gap: 0.6rem;
  }
`;

export const PaymentMethodsSection = styled.div`
  margin-bottom: 2.2rem;
`;

export const MethodsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1rem;

  span {
    font-size: 1.18rem;
    font-weight: 600;
    color: #3d436b;
  }
`;

export const AddMethodButton = styled.button`
  background: #7b5cfa;
  color: #fff;
  padding: 0.46rem 1.1rem;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: #3b22a2;
  }
`;

export const PaymentCard = styled.div`
  background: #f5f7fa;
  border-radius: 10px;
  padding: 1rem 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 1.08rem;

  .expiry {
    color: #888;
    font-size: 0.97rem;
    margin-left: 0.6rem;
  }
  .card-actions {
    display: flex;
    gap: 0.6rem;
  }
`;

export const TransactionsSection = styled.div`
  margin-bottom: 2.1rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 6px 0 rgba(44, 62, 80, 0.06);
  font-size: 1.04rem;

  th,
  td {
    padding: 0.68rem 0.85rem;
    border-bottom: 1px solid #f1f1f1;
  }
  th {
    background: #f7f8fa;
    font-weight: 700;
    color: #333366;
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

export const ActionButton = styled.button<{ $small?: boolean; $danger?: boolean; $outline?: boolean }>`
  background: ${({ $danger, $outline }) =>
    $danger
      ? "#ef4343"
      : $outline
      ? "#fff"
      : "#6c53c6"};
  color: ${({ $danger, $outline }) =>
    $danger ? "#fff" : $outline ? "#6c53c6" : "#fff"};
  border: ${({ $outline }) => ($outline ? "1.8px solid #6c53c6" : "none")};
  border-radius: 6px;
  font-size: ${({ $small }) => ($small ? "0.98rem" : "1.07rem")};
  font-weight: 500;
  padding: ${({ $small }) => ($small ? "0.33rem 0.87rem" : "0.5rem 1.1rem")};
  margin-left: 0.3rem;
  transition: background 0.18s;
  cursor: pointer;
  &:hover {
    background: ${({ $danger, $outline }) =>
      $danger
        ? "#c70000"
        : $outline
        ? "#f2f2ff"
        : "#3b22a2"};
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 1.1rem;
  justify-content: flex-end;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    button {
      width: 100%;
    }
  }
`;
