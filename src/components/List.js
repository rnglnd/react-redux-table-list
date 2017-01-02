import React from 'react';
import { Link } from 'react-router';

const List = ({people, location}) => {
  return (
    <ul>
    {people.filter(x => x.id == location.query.id).map(person =>
        <div key={person.id}>
          <Link to={{pathname: '/edit/' + person.id, query: {id: person.id}}}>
              <p>{person.firstName} {person.surname}</p>
            </Link>
        </div>
      )}
    </ul>
  );
};

export default List;