import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todoservice {
  todos : Observable<Todo[]>
  
  constructor(private http : HttpClient) {
   }

   getTodos(){
     this.todos = this.http.get<Todo[]>('http://localhost:8080/todos');
   }
   getTodo(id): Observable<Todo> {
    return this.http
      .get<Todo>("http://localhost:8080/Todos/" + id);
  }
}