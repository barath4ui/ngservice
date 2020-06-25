import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Herosdata } from '../data/herosinteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivedataService {

  public Url:string="https://barath4ui.github.io/json/herosdata.json";
  
  constructor(private http : HttpClient) { }

  getHerosData(): Observable<Herosdata[]> {
    return this.http.get<Herosdata[]>(this.Url);
  }
}
