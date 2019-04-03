const initialState = { savedBalises: [{key: 0,nom: 'balise 0',tph: '0'}] }

function toggleBalise(state = initialState,action) {
  let nextState
  switch (action.type){
    case 'SAVE_BALISE_NEW': //on fait une copie du state
      nextState = {
        ...state,
        savedBalises: [...state.savedBalises, action.value]
      }
      return nextState || state
    case 'SAVE_BALISE_EDIT':
      newSavedBalises = state.savedBalises
      newSavedBalises[action.id] = action.value
      nextState = {
        ...state,
        savedBalises: newSavedBalises
      }
      return nextState || state
    case 'DEL_BALISE':
      newSavedBalises = state.savedBalises
      newSavedBalises.splice(action.id,1)
      nextState = {
        ...state,
        savedBalises: newSavedBalises
      }
      return nextState || state
    case 'RESET_MEMORY':
      console.log('RESET_MEMORY')
      return initialState
    default:
      return state
  }
}

export default toggleBalise
