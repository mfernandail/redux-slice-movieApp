import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
