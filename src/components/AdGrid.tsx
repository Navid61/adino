
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { AdCard } from './AdCard';

import { adDataFa } from './adData/fa';
import { adDataEn } from './adData/en';

function sanitizeMediaType(mediaType: string): string {
  // Example: sanitize or normalize the mediaType string
  return mediaType.trim().toLowerCase();
}

export const AdGrid: React.FC = () => {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const ads = lang === 'fa' ? adDataFa : adDataEn;

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Button variant={lang === 'fa' ? 'secondary' : 'outline-secondary'} onClick={() => setLang('fa')}>فارسی</Button>
        <Button variant={lang === 'en' ? 'secondary' : 'outline-secondary'} onClick={() => setLang('en')} className="ms-2">English</Button>
      </div>

      <Row>
        {ads.map((ad, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
           <AdCard
  {...ad}
  language={lang}
  mediaType={
    // Cast to the correct union type after sanitization
    sanitizeMediaType(ad.mediaType) as "Video" | "Reel" | "Post" | "Story"
  }
  status={
    // Ensure status is one of the allowed values or undefined
    (["Open", "Almost Full", "Closed", "Ended"].includes(ad.status)
      ? (ad.status as "Open" | "Almost Full" | "Closed" | "Ended")
      : undefined)
  }
/>

          </Col>
        ))}
      </Row>
    </>
  );
};

