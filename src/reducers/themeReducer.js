export default function themeReducer(state = {themes: []}, action) {
    switch (action.type) {
      case 'FETCH_THEMES':
        return {themes: action.payload}
      case 'ADD_THEME':
        return {...state, themes: [...state.themes, action.payload]}
      default:
        return state
    }
  }