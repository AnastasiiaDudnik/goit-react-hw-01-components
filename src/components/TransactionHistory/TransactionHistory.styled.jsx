import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  height: 50px;
  text-align: centre;
  background-color: lightblue;
`;

export const Tbody = styled.tbody`
  width: 100%;
`;

export const Td = styled.td`
  text-align: center;
  padding: 15px;
  text-transform: capitalize;
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: lightgrey;
  }
`;
