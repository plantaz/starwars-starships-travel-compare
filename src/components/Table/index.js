import React from 'react';
import {
  TableContainer,
  TableRow,
  Th,
  Td,
  Link
} from './style';

const Table = ({ starships }) => {
  const ifNullable = (attr) => {
    const nullables = ['unknown', null, undefined];
    const ifIndexOf = nullables.indexOf(attr) !== -1;

    return ifIndexOf || Number.isNaN(attr) ? '--' : attr;
  };

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
                  <Td>{ifNullable(starship.consumables)}</Td>
                  <Td>{ifNullable(starship.MGLT)}</Td>
                  <Td>{ifNullable(starship.stops)}</Td>
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

