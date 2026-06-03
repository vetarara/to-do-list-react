// главная точка входа приложения react

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';

// массив с тестовыми данными
const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое задание',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе задание',
    isDone: true
  },
  {
    id: 2,
    text: 'Третье задание',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвёртое задание',
    isDone: true
  }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // компоненты - функции, которые возвращают вместо себя блок вёрстки
  // React.StrictMode реализует стиль разработки в строгом режиме
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos}/>}></Route>
        <Route path='/list/:id' element={<ItemDescription todos={todos}/>}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
