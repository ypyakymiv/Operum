import { FETCH_FEED } from '../actions';

const initialState = [
  {
    title: "BasketBall 4 Ballers",
    image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/58271943/901604624.jpg.0.jpg",
    locationName: "Thorpe Park",
    author: "Nancy Pelosi"
  }
]

export default function feed(state = initialState, action) {
  switch(action.type) {
    case FETCH_FEED:
      return Object.assign([], action.payload);
      break;
    default:
      return state;
  }
}
