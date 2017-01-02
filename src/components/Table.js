import React from 'react';
import { Link } from 'react-router';

const Table = ({people}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>
                    First Name
                </th>
                <th>
                    Surname
                </th>
            </tr>
        </thead>
        <tbody>
        {people.map((person) => 
            <tr key={person.id}>
                <Link to={{pathname: '/details/' + person.id, query: {id: person.id}}}>
                    <td>
                        {person.firstName}
                    </td>
                    <td>
                        {person.surname}
                    </td>
                </Link>
            </tr>
        )}
        </tbody>
    </table>
  );
};

export default Table;