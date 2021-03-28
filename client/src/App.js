import s from './App.module.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import TodoContainer from './components/Main/TodoContainer';
import TodoAddContainer from './components/TodoAdd/TodoAddContainer';
import LoginContainer from './components/Login/LoginContainer';
import ProfileSettingsContainer from './components/ProfileSettings/ProfileSettingsContainer';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main__block}>
        <div className={s.main__container}>
          <Route path='/todo' render= { ()  => <TodoContainer /> } />
          <Route path='/create' render= { ()  => <TodoAddContainer /> } />
          <Route path='/settings' render= { ()  => <ProfileSettingsContainer /> } />
          <Route path='/login' render= { ()  => <LoginContainer /> } />
        </div>
      </div>
    </div>
  );
}

export default App;
