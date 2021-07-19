import '../css/componentes.css';
import {Todo} from '../classes';
import {listaTodo} from '../index';
//Referencias
const divListaTodo = document.querySelector('.todo-list');  
const txtInput = document.querySelector('.new-todo');
const btnEliminarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const cuadroFiltro = document.querySelectorAll('.filtro');
const txtPendientes = document.querySelector('strong');
let todosPendientes = 0;
export const crearTodoHTML = (todo) => {

    const htmlTodo = 
    ` <li class="${todo.completado ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.completado ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    if(!todo.completado)
    todosPendientes++;
    txtPendientes.innerText = todosPendientes;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divListaTodo.append(div.firstElementChild);

    return div.firstElementChild;

};

//Evento
txtInput.addEventListener('keyup', (event) => {

    if( event.keyCode == 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo( txtInput.value );
        listaTodo.nuevoTodo(nuevoTodo);
        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    }

});

divListaTodo.addEventListener('click', (event) => {
    const nombreElemento =(event.target.localName); //input, label, button
    const liTodo = event.target.parentElement.parentElement;
    const idTodo = liTodo.getAttribute('data-id');
    console.log(nombreElemento);

    switch(nombreElemento){
        
        case 'input':
            listaTodo.marcarTodo(idTodo);
            liTodo.classList.toggle('completed');
            if(liTodo.classList.contains('completed')){
                todosPendientes--;
                txtPendientes.innerText = todosPendientes;
            }else{
                todosPendientes++;
                txtPendientes.innerText = todosPendientes;
            }
            
            break;

        case 'button':
            listaTodo.eliminarTodo(idTodo);
            divListaTodo.removeChild(liTodo);
            break;

    }

});

//cuando solo quiero saber si clickean el elemento, no es necesario agregar un event
btnEliminarCompletados.addEventListener('click', ()=> {

    listaTodo.eliminarCompletados();
    
    //abajo hay un for inverso. Lo contrario sería: 
    //for(let i = 0; i < divListaTodo.children.length; i++){
    for( let i = divListaTodo.children.length-1; i >= 0; i--){

        const elemento = divListaTodo.children[i];

        if(elemento.classList.contains('completed')){
        divListaTodo.removeChild(elemento);
        }

    }

});

ulFiltros.addEventListener('click', (event)=> {

    const opcionSeleccionada = event.target.text;
    if(!opcionSeleccionada){return;};

    cuadroFiltro.forEach( elemento => elemento.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divListaTodo.children){

        elemento.classList.remove('hidden');

        switch (opcionSeleccionada){

            case 'Pendientes':

                if(elemento.classList.contains('completed')){
                elemento.classList.add('hidden');

                }
                
            break;
    
            case 'Completados':
    
                if(!elemento.classList.contains('completed')){
                    elemento.classList.add('hidden');
                }
    
            break;
        }
    }

});