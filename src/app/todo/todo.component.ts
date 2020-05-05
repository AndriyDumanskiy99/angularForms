import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
