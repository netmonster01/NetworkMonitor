import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Log} from '../models'
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  log: Log

  addLog(log: Log): void {

    let options = {
      headers: this.headers
    };
    this.http.post('/api/Logs', log).subscribe();

  }

  handleError(handleError: any): any {
    console.log(handleError);
  }
}
