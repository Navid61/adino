import styled from "styled-components";

import { Table } from 'react-bootstrap';

export const CampaignTable = styled(Table)`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  font-size: 1rem;

  thead tr {
    background: linear-gradient(90deg, #fceabb 0%, #f8b500 100%);
    color: #5f0a87;
    font-weight: bold;
    font-size: 1.02rem;
  }

  th, td {
    vertical-align: middle;
    text-align: center;
    padding: 0.85rem 0.5rem;
  }

  tbody tr {
    transition: background 0.2s;
    &:hover {
      background: #fffbe7;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;

    th, td {
      padding: 0.5rem 0.3rem;
    }
  }
`;


export const DashboardWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #5f0a87;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: #ffffff;
  color: #32325d;
  padding: 1.4rem 1.2rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 4px 20px 0 rgba(50,50,93,0.07), 0 1.5px 4px rgba(0,0,0,0.06);
  border: 1.5px solid #f3f5fa;
  transition: box-shadow 0.15s, transform 0.15s;

  h4 {
    font-size: 1.13rem;
    margin: 0 0 0.2rem 0;
    font-weight: 500;
    color: #8a8d9f;
    letter-spacing: 0.01em;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    color: #20204a;
    display: block;
  }

  &:hover, &:focus-within {
    box-shadow: 0 8px 32px 0 rgba(50,50,93,0.13), 0 3px 12px rgba(0,0,0,0.10);
    transform: translateY(-2px) scale(1.015);
    background: #f7faff;
  }

  @media (max-width: 576px) {
    padding: 1rem 0.6rem;
    h4 { font-size: 1rem; }
    span { font-size: 1.3rem; }
  }
`;


export const CampaignList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CampaignCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .details {
    flex: 1;
    min-width: 200px;

    h5 {
      margin: 0 0 0.3rem;
      color: #333;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: #666;
    }
  }

  .status {
    font-weight: 600;
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    font-size: 0.9rem;
    text-align: center;
  }

  .approved {
    background: #d1f7c4;
    color: #2f7a1e;
  }

  .in-progress {
    background: #e6f0ff;
    color: #245dbf;
  }

  .upload-btn {
    margin-top: 0.5rem;
    padding: 0.4rem 0.9rem;
    font-size: 0.9rem;
    border: none;
    background: #5f0a87;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.4rem 0.9rem;
  background: #ffc107;
  color: #222;
  border-radius: 6px;
  font-size: 0.9rem;
`;
