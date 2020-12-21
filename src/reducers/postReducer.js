export default function postReducer(state = {posts: []}, action) {
    switch (action.type) {
      case 'FETCH_POSTS':
        return {posts: action.payload}
      case 'ADD_POST':
        return {...state, posts: [...state.posts, action.payload]}
        case 'DELETE_POST':
        let postTwo = state.posts.map(post => {
          if (post.id === action.payload.id) {
            return action.payload
          } else {
            return post
          }
        })
      
    default:
        return state
    }
  }

  
  