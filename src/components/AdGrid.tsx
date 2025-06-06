
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { AdCard } from './AdCard';

import { adDataFa } from './adData/fa';
import { adDataEn } from './adData/en';

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
            <AdCard {...ad} language={lang} />
          </Col>
        ))}
      </Row>
    </>
  );
};

