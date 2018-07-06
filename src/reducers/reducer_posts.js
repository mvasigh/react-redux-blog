import { FETCH_POSTS } from '../actions';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce(
        (obj, post) => (obj[post.id] = post),
        {}
      );
    default:
      return state;
  }
}
