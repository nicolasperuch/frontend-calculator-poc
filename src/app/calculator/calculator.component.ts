import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  BASE_URL = "http://localhost:8080/sum"

  result;
  firstValue = '';
  secondValue = '';
  
  constructor(private calculatorService: CalculatorService,
              private http: HttpClient) { }

  ngOnInit() {
  }


  setFirstValue(event: any) {
    this.firstValue = event.target.value;
  }

  setSecondValue(event: any) {
    this.secondValue = event.target.value;
  }

  
  execute(a, b) : void{
    this.http.get(this.buildUrl(), {responseType: 'json'})
                    .subscribe(data => {
                        this.result = data
                    });
  }

  buildUrl(){
      return this.BASE_URL + "/" + this.firstValue + "/" + this.secondValue;
  }
}
