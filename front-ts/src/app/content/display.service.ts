import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http: HttpClient) {}

  displayProducts(){
    this.Http.get(this.JavaServer+"/products");
  }
}
