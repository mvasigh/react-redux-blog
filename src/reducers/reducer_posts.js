import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce((obj, post) => {
        obj[post.id] = post;
        return obj;
      }, {});
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
