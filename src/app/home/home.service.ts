import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private apiUrl = "http://localhost:8080/MemberApp/test";
  constructor(private http: HttpClient) {}

  test(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
