export const PERSON_ADD = "PERSON_ADD";

export const personAddAction = (newPerson) => {
    return {
      type: PERSON_ADD,
      payload: { newPerson },
    }
}

export default personAddAction