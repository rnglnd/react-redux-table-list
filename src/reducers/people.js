import update from 'immutability-helper';

function people(state = [], action) {
  switch(action.type){
    case 'EDIT_PERSON':
    state.map(function (person) { 
      if(action.id == person.id){
          person.firstName = action.firstName,
          person.surname = action.surname
    }});
      return state;
    default:
      return state;
  }
  return state;
}

export default people;