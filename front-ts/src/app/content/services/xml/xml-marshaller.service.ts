import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {iOrderList} from "../display/iDisplayContents";

@Injectable({
  providedIn: 'root'
})
export class XmlMarshallerService {

  private JavaServer = "http://localhost:8001";
  constructor(private Http :HttpClient) { }

  downloadXml(order :iOrderList){
    return this.Http.post(
      this.JavaServer + "/marshall/to_xml", order,
      {
        responseType: "blob",
        headers: new HttpHeaders().append("Content-Type", "application/json")
      })
  }
}
