import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  
})
export class TodoItemComponent implements OnInit {

  @Input()todo = <Todo>{}
  @Output() remove = new EventEmitter
  done = false
  constructor(private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  removeTodo(){
    console.log(this.todo,' sendo removido')
    this.remove.emit(this.todo)
  }
  markAsDone(){
    this.todo.done = true
    this.changeDetection.detectChanges();
    console.log(this.todo.done)
  }

}
