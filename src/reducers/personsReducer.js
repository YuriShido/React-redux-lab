import {PERSON_ADD} from '../action/addPerson'
import {PERSON_DELETE} from '../action/deletePerson'
const initState = {
  personData: [
    {
      id: Math.random(), // not really unique but good enough here!
      name: 'Alex',
      age: Math.floor( Math.random() * 40 )
    }
  ]
}

const personReducer = (state = initState, action) => {
  console.log(state, action)
    switch(action.type) {
      case PERSON_ADD: 
        const newPersonState = [...state.personData]
        console.log(newPersonState)
        return {
          ...state,
          personData: action.payload.newPerson
                 
        }
      
      case PERSON_DELETE:
        newPersonState.filter(person => person.id !== action.payload.personId);
        return{
          newPersonState
        }
      default:
        return state
    }
};

export default personReducer;