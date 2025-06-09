// CreatorDashboard.tsx
import React from 'react';
import { Row, Col, ProgressBar, Button, Badge } from 'react-bootstrap';
import {
  DashboardWrapper,
  StatCard,
  CampaignTable
} from '../styles/CreatorDashboardStyled';

// 1. Define allowed status values
type CampaignStatus = 'approved' | 'in-progress' | 'rejected';

// 2. Type for a campaign/ad row
type ApprovedAd = {
  id: number;
  title: string;
  platform: string;
  earnings: number;
  totalEarnings: number;
  postsCompleted: number;
  totalPosts: number;
  status: CampaignStatus;
};

// 3. Sample data
const approvedAds: ApprovedAd[] = [
  {
    id: 1,
    title: 'Instagram Beauty Campaign',
    platform: 'Instagram',
    earnings: 40,
    totalEarnings: 120,
    postsCompleted: 2,
    totalPosts: 3,
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'TikTok Comedy Skit Sponsorship',
    platform: 'TikTok',
    earnings: 90,
    totalEarnings: 90,
    postsCompleted: 3,
    totalPosts: 3,
    status: 'approved',
  },
];

// 4. Status color mapping
const statusColor: Record<CampaignStatus, string> = {
  approved: 'success',
  'in-progress': 'info',
  rejected: 'danger',
};

export const CreatorDashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <h2 className="mb-4">My Dashboard</h2>
      <Row className="mb-4">
        <Col md={4} sm={6} xs={12} className="mb-3">
          <StatCard>
            <h4>Total Earnings</h4>
            <span>$230</span>
          </StatCard>
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-3">
          <StatCard>
            <h4>Posts Submitted</h4>
            <span>5</span>
          </StatCard>
        </Col>
        <Col md={4} sm={6} xs={12} className="mb-3">
          <StatCard>
            <h4>Approved Post</h4>
            <span>1</span>
          </StatCard>
        </Col>
      </Row>

      <h4 className="mb-3">Approved Campaigns</h4>
      <CampaignTable responsive bordered hover>
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Platform</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Earnings</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedAds.map(ad => (
            <tr key={ad.id}>
              <td>{ad.title}</td>
              <td>{ad.platform}</td>
              <td>
                <ProgressBar
                  variant={statusColor[ad.status]}
                  now={(ad.postsCompleted / ad.totalPosts) * 100}
                  label={`${ad.postsCompleted}/${ad.totalPosts}`}
                  style={{ minWidth: 70 }}
                />
              </td>
              <td>
                <Badge bg={statusColor[ad.status]} style={{ fontSize: '0.95rem' }}>
                  {ad.status.replace('-', ' ')}
                </Badge>
              </td>
              <td>
                ${ad.earnings} / <small>${ad.totalEarnings}</small>
              </td>
              <td>
                <Button variant="outline-primary" size="sm">
                  Upload Proof
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </CampaignTable>
    </DashboardWrapper>
  );
};
