import NavigationService from '../navigation/navigation-service';

const delay = time => new Promise(resolve => setTimeout(resolve, time));
export default {
  namespace: 'app',
  state: {
    text: '123',
    list: [],
  },
  reducers: {
    setList(state, { payload }) {
      // return { ...state, ...payload };
      const newState = state;
      newState.list = payload.list;
      newState.text = '321';
    },
  },
  effects: {
    *loadList(_, { call, put }) {
      const list = [{ name: '123', say: 'go' }];
      yield call(delay, 1000);
      yield put({ type: 'setList', payload: { list } });
      NavigationService.navigate('Home');
    },
  },
  subscriptions: {
    // setup({ dispatch }) {
    //   dispatch({ type: 'loadStorage' })
    // },
  },
};
