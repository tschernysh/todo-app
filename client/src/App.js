import s from './App.module.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import TodoContainer from './components/Main/TodoContainer';
import TodoAddContainer from './components/TodoAdd/TodoAddContainer';
import TodoEditContainer from './components/TodoEdit/TodoEditContainer';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main__block}>
        <div className={s.main__container}>
          <Route path='/todo' render= { ()  => <TodoContainer /> } />
          <Route path='/create' render= { ()  => <TodoAddContainer /> } />
          <Route path='/settings' render= { ()  => <Settings /> } />
          {/* <Route path='/editor/:todoId?' render= { ()  => <TodoEditContainer /> } /> */}
        </div>
      </div>
    </div>
  );
}

export default App;