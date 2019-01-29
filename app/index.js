import React from 'react';
import { create } from 'dva-core';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';
import createImmer from 'dva-immer';

import Router from './navigation';
import appModels from './model';

const app = create({
  initialState: {},
  onAction: __DEV__ ? [createLogger()] : [],
});

appModels.forEach(model => app.model(model));

app.use(createLoading());
app.use(createImmer());

app.start();

const store = app._store; // eslint-disable-line no-underscore-dangle

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
