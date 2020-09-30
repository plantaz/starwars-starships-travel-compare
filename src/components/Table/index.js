import React from 'react';
import {
  TableContainer,
  TableRow,
  Th,
  Td,
  Link
} from './style';

const Table = ({ starships }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableContainer>
        <thead>
          <TableRow>
            <Th>name</Th>
            <Th>consumables</Th>
            <Th>MGLT</Th>
            <Th>Stops</Th>
          </TableRow>
        </thead>
        <tbody>
          {
            starships.map((starship, idx) => {
              return (
                <TableRow key={idx}>
                  <Td>
                    <Link href={starship.url}>
                      {starship.name}
                    </Link>
                  </Td>
                  <Td>{starship.consumables}</Td>
                  <Td>{starship.MGLT}</Td>
                  <Td>{starship.stops}</Td>
                </TableRow>
              )
            })
          }
        </tbody>
      </TableContainer>
    </div>
  );
};

export default Table;

