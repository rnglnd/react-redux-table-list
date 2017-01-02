import React from 'react';
import { browserHistory } from 'react-router'

const Edit = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const id = this.refs.id.value;
    const firstName = this.refs.firstName.value;
    const surname = this.refs.surname.value;
    this.props.editPerson(id, firstName, surname);
    const path = `/`
    browserHistory.push(path)
  },
  render() {
    return (
      <form ref="editForm" onSubmit={this.handleSubmit}>
        {this.props.people.filter(x => x.id == this.props.location.query.id).map(person =>
            <div key={person.id}>
                <input type="hidden" ref="id" defaultValue={person.id} />
                <input type="text" ref="firstName" defaultValue={person.firstName} />
                <br />
                <input type="text" ref="surname" defaultValue={person.surname} />
            </div>
        )}
        <input type="submit" />
        </form>
    )
  }
});

export default Edit;