import styled from 'styled-components';

export const AdCardWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;

  .card {
    width: 100%;
    max-width: 420px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 8px 28px 0 rgba(65, 80, 120, 0.09), 0 2px 8px 0 rgba(40, 42, 65, 0.09);
    transition: transform 0.19s, box-shadow 0.17s;
    border: 1.5px solid #f4f6fb;

    &:hover {
      transform: scale(1.035) translateY(-4px);
      box-shadow: 0 24px 56px 0 rgba(80, 80, 130, 0.13), 0 4px 16px 0 rgba(40, 42, 65, 0.12);
      border: 1.5px solid #d0d5e3;
    }

    .card-body {
      padding: 2rem 1.5rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card-title {
      font-size: 1.35rem;
      font-weight: bold;
      color: #3951a5;
      background: none;
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;
    }

    .badge-plain {
      background: transparent;
      color: #3951a5;
      font-weight: 600;
      font-size: 1.05em;
      padding: 0.2em 0.6em;
      border: 1.2px solid #e1e9fa;
      border-radius: 10px;
      margin-right: 0.5em;
      display: inline-flex;
      align-items: center;
      gap: 0.4em;
      box-shadow: none;
    }

    .badge-outline,
    .cta-badge,
    .bonus-badge {
      background: transparent;
      border: 1px solid #dde5fa;
      color: #294076;
      font-size: 1em;
      padding: 0.19em 0.7em;
      border-radius: 10px;
      margin-left: 0.5em;
      font-weight: 500;
      box-shadow: none;
      display: inline-block;
    }
    .cta-badge {
      border-color: #fcd770;
      color: #8a7018;
      background: #fffbe8;
    }
    .bonus-badge {
      border-color: #c8e6c9;
      color: #256029;
      background: #f3fcf6;
    }
    .status-badge {
      margin-left: 0.4em;
      margin-right: 0.4em;
      font-size: 0.96em;
      font-weight: 600;
      border-radius: 8px;
      letter-spacing: 0.03em;
      vertical-align: middle;
    }

    .deadline {
      color: #e74c3c;
      font-weight: 700;
      font-size: 1.09em;
      margin-left: 0.4em;
    }

    .platform-tip {
      font-style: italic;
      color: #348e54;
      font-size: 0.99em;
      margin-top: 0.7em;
      background: #f7faf7;
      border-radius: 6px;
      padding: 0.2em 0.6em;
    }

    .rating-stars {
      font-size: 1.07em;
      color: #ffd700;
      margin-top: 0.5em;
    }

    .earnings {
      font-weight: bold;
      color: #28a745;
      font-size: 1.09em;
      display: flex;
      align-items: center;
      gap: 0.4em;
    }

    .cta-button {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 600;
      background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
      border: none;
      padding: 0.65em 1.2em;
      border-radius: 12px;
      color: #222;
      box-shadow: 0 2px 12px rgba(0, 180, 120, 0.13);
      transition: transform 0.18s;

      &:hover {
        transform: scale(1.04);
        background: linear-gradient(90deg, #92fe9d, #00c9ff);
      }
    }
  }

  @media (max-width: 700px) {
    .card {
      max-width: 99vw;
      padding: 0.4em;
    }
    .card-body {
      padding: 1.1rem 0.7rem 0.7rem 0.7rem;
      gap: 0.7rem;
    }
    .card-title {
      font-size: 1.13rem;
    }
  }
`;

