import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = []

  constructor(private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    let todos = JSON.parse(localStorage.getItem('todos') as string)
    if(!todos){
      this.todos=[]
    }else{
      this.todos = todos
    }
  }

  addTodo(title: string) {
    const id = this.todos.length + 1
    this.todos.push({ id, title, done: false })
    console.log(this.todos)
    //força atualizar ngFor
    this.changeDetection.detectChanges();

    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  removeTodo(todo: Todo) {
    console.log('recebido para remover ', event)
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
    this.changeDetection.detectChanges();

  }

}
