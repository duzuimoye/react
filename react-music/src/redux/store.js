// 1 store 单一状态树 （树？ modules）
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
export default store;