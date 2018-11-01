import { combineReducers } from 'redux';
import credentials from './credentials';
import feed from './feed';
import messages from './messages';
import profile from './profile';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  credentials,
  feed,
  messages,
  profile
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
