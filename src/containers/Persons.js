import React, { Component } from 'react';

import Person from '../components/Person/Person';
import {bindActionCreators} from 'redux'

import AddPerson from '../components/AddPerson/AddPerson';
import addPerson from '../action/addPerson';
import deletePerson from '../action/deletePerson';

class Persons extends Component {
   

    personAddedHandler = () => {

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.addPerson(newPerson)
       
    }

    personDeletedHandler = (personId) => {
        this.deletePerson(personId)
       
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPerson: addPerson,
        deletePerson: deletePerson,
    }, dispatch) 
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);