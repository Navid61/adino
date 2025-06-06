import styled from 'styled-components';

export const AdCardWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;

  .card {
    width: 100%;
    max-width: 410px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(6px);
    border-radius: 20px;
    box-shadow: 0 12px 36px 0 rgba(130, 46, 222, 0.12), 0 2px 8px 0 rgba(40, 42, 65, 0.12);
    transition: transform 0.19s cubic-bezier(0.44, 0.13, 0.48, 0.87), box-shadow 0.17s;

    &:hover {
      transform: scale(1.035) translateY(-4px);
      box-shadow: 0 24px 56px 0 rgba(130, 46, 222, 0.18), 0 4px 16px 0 rgba(40, 42, 65, 0.18);
      border: 1.5px solid #8e44ad33;
    }

    .card-body {
      padding: 2rem 1.7rem 1.7rem 1.7rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.04em;
      color: #9b59b6;
      background: linear-gradient(90deg, #a4508b, #5f0a87 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .badge,
    .cta-badge {
      display: inline-block;
      padding: 0.38em 0.8em;
      font-size: 1em;
      border-radius: 1em;
      background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
      color: #fff;
      font-weight: bold;
      box-shadow: 0 2px 10px 0 rgba(255, 80, 90, 0.13);
      margin-right: 0.7em;
    }

    .cta-badge {
      background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
      color: #222;
      font-size: 1.08em;
      box-shadow: 0 2px 16px 0 rgba(255, 180, 40, 0.14);
    }

    .info-row {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 1.08em;
    }

    .info-label {
      font-weight: 600;
      color: #4d2067;
      margin-right: 0.4em;
    }

    .info-value {
      font-weight: 500;
      color: #282841;
    }

    .deadline {
      color: #e74c3c;
      font-weight: 700;
      font-size: 1.09em;
      margin-left: 0.4em;
    }

    .platform-tip {
      font-style: italic;
      color: #2193b0;
      font-size: 0.97em;
      margin-top: 0.7em;
    }

    .rating-stars {
      font-size: 1.15em;
      color: #ffd700;
      margin-top: 0.5em;
    }

    .earnings {
      font-weight: bold;
      color: #28a745;
      font-size: 1.1em;
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
      box-shadow: 0 2px 12px rgba(0, 180, 120, 0.2);
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.04);
        background: linear-gradient(90deg, #92fe9d, #00c9ff);
      }
    }
  }

  @media (max-width: 700px) {
    .card {
      max-width: 97vw;
      padding: 0.7em;
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
