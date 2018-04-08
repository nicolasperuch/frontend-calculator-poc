import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  SUM_URL = "http://localhost:8080/health"
  SUB_URL = "http://localhost:8081/health"

  sumStatus=''
  subStatus=''

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.checkHealthService();
  }

  checkHealthService() : void{
    IntervalObservable.create(5000)
    .subscribe(() => {
      this.http.get(this.SUM_URL, {responseType: 'json'})
                    .toPromise()
                    .then(data => {
                      this.sumStatus = data.toString(); 
                    })
                    .catch(data => {
                      this.sumStatus = 'Down'
                    });
      this.http.get(this.SUB_URL, {responseType: 'json'})
                    .toPromise()
                    .then(data => {
                      this.subStatus = data.toString(); 
                    })
                    .catch(data => {
                      this.subStatus = 'Down'
                    });
    })
  }
}
