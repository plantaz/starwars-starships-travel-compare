import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 800px;
  table-layout: fixed;
  border-collapse: collapse;
  margin: 1.5rem;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Th = styled.th`
  text-transform: capitalize;
  height: 45px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Link = styled.a`
  text-decoration: none;
  color: tomato;
`;
