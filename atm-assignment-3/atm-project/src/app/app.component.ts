import { Component } from '@angular/core';
import { AtmserviceService } from './services/atmservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atm App';

 
  constructor (public atmService: AtmserviceService){
    
  }
  
}
