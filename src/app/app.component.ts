import { Component } from '@angular/core';
import { ZipOperator } from 'rxjs/internal/observable/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'operators-task';

  num1 : number;
  num2 : number; 
   result:number;
  
  add()
  { 
  
      this.result=this.num1+this.num2;
  }
  sub()
  { 
  
      this.result=this.num1-this.num2;
  }
  mul()
  { 
  
      this.result=this.num1*this.num2;
  }
  div()
  { 
  
      this.result=this.num1/this.num2;
  }
  mod()
  { 
  
      this.result=this.num1%this.num2;
  }
}
  
    
