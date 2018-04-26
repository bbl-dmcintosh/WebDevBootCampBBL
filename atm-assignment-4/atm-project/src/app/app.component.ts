import { Component } from '@angular/core';
import {AtmInterface}  from './interfaces/atm.interface';
import { AtmserviceService } from './services/atmservice.service';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Belize Bank ATM Web Application';
  account = '';
  balance = 0;
  withdrawBalance = 0;
  depositBalance = 0;
  atmInter : AtmInterface;

  constructor(public atmService : AtmserviceService){

    atmService.getCurrentBalance("23232-1").subscribe(value => { 
      this.account = value.accountNumber;  
      this.balance = value.currentBalance;
        
    });

    atmService.withdraw("23232-1", 50.00).subscribe(value => { 
      this.account = value.accountNumber;  
      this.withdrawBalance = value.currentBalance;
        
    });

    atmService.deposit("23232-1", 20.00).subscribe(value => { 
      this.account = value.accountNumber;  
      this.depositBalance = value.currentBalance;
        
    });

  }

}
