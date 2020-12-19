export function fetchThemes() {
    return (dispatch) => {
      fetch('http://localhost:3000/themes.json')
      .then(resp => resp.json())
      .then(themes => dispatch({
        type: 'FETCH_THEMES',
        payload: themes
      }))
    }
  }