export function editPerson(id, firstName, surname) {
  return {
    type: 'EDIT_PERSON',
    id,
    firstName,
    surname
  }
}