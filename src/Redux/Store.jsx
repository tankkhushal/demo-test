
import Reducer from './Reducer';
import { legacy_createStore } from 'redux';

export const store = legacy_createStore(Reducer);

