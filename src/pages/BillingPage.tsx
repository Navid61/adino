// pages/BillingPage.tsx
import React from "react";
import {
  BillingWrapper,
  BalanceSection,
  PaymentMethodsSection,
  PaymentCard,
  SectionTitle,
  MethodsHeader,
  AddMethodButton,
  TransactionsSection,
  TransactionsTable,
  ActionButton,
  ActionsRow,
} from "../styles/BillingPageStyled";

const paymentMethods = [
  {
    id: 1,
    brand: "Visa",
    last4: "4592",
    expiry: "11/27",
  },
  {
    id: 2,
    brand: "Mastercard",
    last4: "4017",
    expiry: "05/29",
  },
];

const transactions = [
  {
    date: "2025/06/10",
    description: "Order #1244",
    amount: -40,
  },
  {
    date: "2025/06/06",
    description: "Balance Top-Up",
    amount: 100,
  },
  {
    date: "2025/06/01",
    description: "Order #1231",
    amount: -35,
  },
  {
    date: "2025/05/24",
    description: "Refund",
    amount: 15,
  },
];

export const BillingPage: React.FC = () => (
  <BillingWrapper>
    <SectionTitle>Billing & Payments</SectionTitle>

    <BalanceSection>
      <div>
        <span>Current Balance</span>
        <h2>$180.00</h2>
      </div>
      <ActionButton>Top Up Balance</ActionButton>
    </BalanceSection>

    <PaymentMethodsSection>
      <MethodsHeader>
        <span>Payment Methods</span>
        <AddMethodButton>+ Add Payment Method</AddMethodButton>
      </MethodsHeader>
      <div>
        {paymentMethods.map((pm) => (
          <PaymentCard key={pm.id}>
            <div>
              <strong>{pm.brand}</strong> **** {pm.last4} &nbsp;
              <span className="expiry">Exp: {pm.expiry}</span>
            </div>
            <div className="card-actions">
              <ActionButton $small>Edit</ActionButton>
              <ActionButton $small $danger>
                Remove
              </ActionButton>
            </div>
          </PaymentCard>
        ))}
      </div>
    </PaymentMethodsSection>

    <TransactionsSection>
      <SectionTitle as="h4">Recent Transactions</SectionTitle>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr key={i}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td
                style={{
                  textAlign: "right",
                  color: tx.amount > 0 ? "#23c16b" : "#ef4343",
                  fontWeight: "bold",
                }}
              >
                {tx.amount > 0 ? "+" : ""}
                ${Math.abs(tx.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsSection>

    <ActionsRow>
      <ActionButton $outline>Update Billing Details</ActionButton>
      <ActionButton $outline>Download Invoices</ActionButton>
    </ActionsRow>
  </BillingWrapper>
);
