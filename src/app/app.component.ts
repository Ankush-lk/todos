import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos-App';
  todo = [];

  currentPriority: number = 0;

  addTodos(newTodosLabel){
    this.currentPriority++;
    var newTodos = {
      
      Label: newTodosLabel,
      Priority:this.currentPriority,

    };
    this.todo.push(newTodos);
  }
  
  deleteTodos(todos){
    this.todo=this.todo.filter( t=> t.Label != todos.Label );
  }
}
