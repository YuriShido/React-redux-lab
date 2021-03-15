export const PERSON_DELETE = 'PERSON_DELETE'

const personDeleteAction = (personId) => {
    return {
      type: PERSON_DELETE,
      payload: { personId },
    }
}

export default personDeleteAction