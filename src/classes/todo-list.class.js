import { Todo } from "./todo.class";

export class TodoList{

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarTodo(id){

        for(const todo of this.todos){

            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter( todo => todo.completado = false );
        //esto también puede escribirse como todo => !todo.completado
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todos', JSON.stringify(this.todos));
        //al guardar un objeto, se representará como [object Object], que es su representación como string
    }
   
    cargarLocalStorage(){

        // if(localStorage.getItem('todos')){

        //     this.todos = JSON.parse( localStorage.getItem('todos') );
        //     console.log(this.todos);

        // } else{
        //     this.todos = [];
        // }
        //lo de abajo es lo mismo pero con operador ternario
        this.todos = (localStorage.getItem('todos')) ?
                     (JSON.parse( localStorage.getItem('todos') )) :
                     [];
                         
        //el .map lo que hace es revisar todo lo que contiene un arreglo y devuelve otro arreglo con los objetos modificados
        this.todos = this.todos.map(Todo.fromJson);

    }
    


}