import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';

import './styles.css';

export const listaTodo = new TodoList();

//como solo envio y uso un parámetro, puedo omitir el: todo => crearTodoHTML(todo)
listaTodo.todos.forEach(crearTodoHTML);



// const tarea = new Todo('Completar las weas de cursos de UDEMI :(');
// tarea.completado = true;

// listaTodo.nuevoTodo(tarea);
// console.log(listaTodo);
// crearTodoHTML(tarea);

//localStorage.setItem('mi-key', 'esta es la string juasjuas SOLO SE PUEDEN GUARDAR STRINGS');
