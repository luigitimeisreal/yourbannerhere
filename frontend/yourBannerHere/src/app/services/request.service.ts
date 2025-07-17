import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  urlApi: string = "http://localhost:5000/api"
  private httpClient = inject(HttpClient)

  constructor() { }

  testApi() {
    return this.httpClient.get(`${this.urlApi}/check`);
  }

}
