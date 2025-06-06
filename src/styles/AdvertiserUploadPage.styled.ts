import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: #fafbff;
  min-height: 100vh;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 700px) {
    padding: 1.2rem 0;
  }
`;

export const UploadCard = styled.div`
  background: #fff;
  border-radius: 18px;
  max-width: 780px;
  width: 100%;
  box-shadow: 0 6px 30px #ccd6ff40;
  padding: 2.2rem 2rem 2rem 2rem;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  @media (max-width: 900px) {
    max-width: 98vw;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
  }

  @media (max-width: 600px) {
    margin: 1rem 0.3rem;
    border-radius: 12px;
    gap: 1rem;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.35rem;
  }
`;

export const Tab = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? '#5287ff' : '#eef2fa')};
  color: ${({ $active }) => ($active ? '#fff' : '#374151')};
  border: none;
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.18s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #c3dafe;
    color: #374151;
  }

  @media (max-width: 600px) {
    font-size: 0.97rem;
    padding: 0.45rem 0.85rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  text-align: left;
  color: #3951a5;
  font-family: 'Poppins', 'Vazirmatn', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.13rem;
    margin-bottom: 0.55rem;
  }
`;

export const DropZone = styled.label<{ $error?: boolean }>`
  border: 2px dashed ${({ $error }) => ($error ? '#e53e3e' : '#5287ff')};
  background: #f4f8ff;
  border-radius: 12px;
  padding: 1.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  cursor: pointer;
  margin-bottom: 0.7rem;
  transition: border-color 0.22s;

  &:hover {
    border-color: #3951a5;
  }

  @media (max-width: 600px) {
    padding: 1rem 0.6rem;
    min-height: 70px;
    font-size: 0.97rem;
  }
`;

export const FilePreview = styled.div`
  margin: 0.7rem 0;
  text-align: center;

  img, video {
    max-width: 170px;
    max-height: 110px;
    border-radius: 8px;
    box-shadow: 0 2px 12px #b4b9cd1a;
  }

  @media (max-width: 600px) {
    img, video {
      max-width: 115px;
      max-height: 70px;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.7rem;

  label {
    font-weight: 500;
    color: #294076;
    margin-bottom: 0.2rem;
    font-size: 0.96rem;
  }

  input, textarea {
    border: 1.4px solid #dbeafe;
    border-radius: 5px;
    padding: 0.48rem 0.7rem;
    font-size: 1rem;
    background: #f9faff;
    transition: border-color 0.2s;
    outline: none;
    resize: none;
    &:focus {
      border-color: #5287ff;
    }
  }

  @media (max-width: 600px) {
    label {
      font-size: 0.94rem;
    }
    input, textarea {
      font-size: 0.97rem;
      padding: 0.35rem 0.5rem;
    }
  }
`;

export const Guidelines = styled.div`
  background: #f0f7ff;
  border-radius: 7px;
  padding: 0.8rem 1.1rem;
  font-size: 0.96rem;
  color: #4a587a;
  margin-bottom: 0.5rem;
  line-height: 1.7;

  strong {
    color: #405ac0;
  }

  @media (max-width: 600px) {
    font-size: 0.91rem;
    padding: 0.58rem 0.4rem;
  }
`;

export const Tip = styled.div`
  background: #e7fbe8;
  color: #2e7d32;
  padding: 0.5rem 0.9rem;
  border-radius: 7px;
  font-size: 0.97rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Poppins', 'Vazirmatn', sans-serif;

  @media (max-width: 600px) {
    font-size: 0.93rem;
    padding: 0.35rem 0.5rem;
  }
`;

export const Status = styled.div<{ $error?: boolean; $success?: boolean }>`
  color: ${({ $error, $success }) =>
    $error ? '#e53e3e' : $success ? '#21994d' : '#42598e'};
  font-weight: 600;
  margin: 0.6rem 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 1.1rem;

  button {
    flex: 1;
    font-weight: 600;
    font-size: 1.03rem;
    border-radius: 7px;
    border: none;
    padding: 0.7rem 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  .upload {
    background: linear-gradient(90deg, #5287ff, #2ec47d);
    color: #fff;
  }
  .cancel {
    background: #f3f6fa;
    color: #36517c;
    border: 1px solid #ccd6ff;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.65rem;
    button {
      font-size: 1rem;
      padding: 0.58rem 0;
    }
  }
`;
