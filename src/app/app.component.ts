import { Component } from '@angular/core';
import {Todo} from './model/Todo';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;


  todos: Todo[] = [];
  constructor( private fb: FormBuilder) {
   this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', [Validators.required, Validators.pattern('[a-z]')], Validators.max(6)],
      body: ['', [Validators.required, Validators.pattern('[A-Z]')]] ,
      type: ['', Validators.required]


    });
  }

    save(){
console.log(this.form.value);

    }


}
