import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import TaskEditorContainer from './components/TaskEditor/TaskEditorContainer';
import Settings from './components/Settings/Settings';
import TodoContainer from './components/Main/TodoContainer';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main__block}>
        <div className={s.main__container}>
          <Route path='/todo' render= { ()  => <TodoContainer /> } />
          <Route path='/editor' render= { ()  => <TaskEditorContainer /> } />
          <Route path='/settings' render= { ()  => <Settings /> } />
        </div>
      </div>
    </div>
  );
}

export default App;
