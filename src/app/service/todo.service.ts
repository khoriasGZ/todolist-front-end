import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todoservice {
  todos : Todo[]
  
  constructor(private http : HttpClient) {
   }

   getTodos(){
    this.http.get<Todo[]>('http://localhost:8080/Todo_180913/api/todos').subscribe(data =>  {this.todos = data.sort((a:any,b:any) => a.id_todo - b.id_todo)} );
   }
   getTodo(id): Observable<Todo> {
    return this.http
      .get<Todo>("http://localhost:8080/api/Todos/" + id);
  }
  deleteTodo(id) {
    this.http.delete<Todo[]>('http://localhost:8080/Todo_180913/api/todos/'+id)
    .subscribe(_ =>  {   this.getTodos() }
  );
  }
  createTodo(todo: Todo) {
   this.http.post<Todo>('http://localhost:8080/Todo_180913/api/todos',todo)
   .subscribe(_ =>  {   this.getTodos() })  }
}