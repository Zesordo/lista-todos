
export class Todo{


    //el siguiente método hace que los objetos vuelvan a recibir su instancia para, por ejemplo, volver a usar sus métodos
    static fromJson({id, tarea, completado, creado}){

        const todoTemp = new Todo( tarea );

        todoTemp.id         = id; 
        todoTemp.completado = completado;
        todoTemp.creado     = creado;

        return todoTemp;
    }


    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();


    }

    imprimirClase(){
        console.log(`${this.tarea}`);
    }


}