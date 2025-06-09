import styled from "styled-components";

export const WorkspaceWrapper = styled.div`
  max-width: 1000px;
  margin: 32px auto;
  padding: 32px 24px;
  background: #f9fafd;
  border-radius: 18px;
  box-shadow: 0 3px 32px rgba(80,110,200,0.08);
`;

export const WorkspaceHeader = styled.div`
  margin-bottom: 18px;
  h2 { font-size: 2.2rem; margin-bottom: 7px;}
`;

export const Tabs = styled.div`
  display: flex; gap: 8px; margin-bottom: 15px;
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 0.4em 1.5em; font-weight: 600; font-size: 1.07em;
  border: none; border-radius: 9px;
  background: ${({ $active }) => ($active ? "#e7eefe" : "#e3ecf7")};
  color: ${({ $active }) => ($active ? "#246ca3" : "#5e6ba8")};
  cursor: pointer;
`;

export const FilterBar = styled.div`
  display: flex; gap: 13px; margin-bottom: 16px;
  input, select { font-size: 1em; }
`;

export const ContentGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px; margin-bottom: 26px;
`;

export const ContentCard = styled.div`
  position: relative; padding: 1.3em 1em 1em 1em;
  background: #fff; border-radius: 14px;
  box-shadow: 0 2px 8px rgba(120,150,200,0.08);
  min-height: 110px;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  font-size: 0.92em; font-weight: 600; padding: 0.22em 1.1em;
  border-radius: 7px; margin-top: 6px;
  background: ${({ $status }) =>
    $status === "approved" ? "#e7faef"
      : $status === "pending" ? "#fff6d5"
      : "#ffeaea"};
  color: ${({ $status }) =>
    $status === "approved" ? "#169245"
      : $status === "pending" ? "#b68c03"
      : "#cf2727"};
`;

export const BatchActionBar = styled.div`
  display: flex; gap: 18px; align-items: center;
  background: #f6faff; padding: 0.8em 1.2em;
  border-radius: 11px; margin-top: 10px;
  font-size: 1.06em;
`;
