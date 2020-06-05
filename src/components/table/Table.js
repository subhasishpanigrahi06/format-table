import React from 'react';


const getRow = (line, delimiter) => {
  // splitting limit set to 4, as 4 columns need to be shown
  return line.data.split(delimiter, 4).map((word, index) => {
    return (
      <td key={index}>
        {word}
      </td>
    )
  })
}

export function Table({lines, delimiter, noOfLines}) {
  return (
      <table>
        <tbody>
          {
          lines.map((line, index) => (
            !!line.id && (index < noOfLines) && (
            <tr key={line.id}>
              {!!delimiter ? getRow(line, delimiter) : <td>{line.data}</td>}
            </tr>
            )
          ))
          }
        </tbody>
      </table>
  );
}