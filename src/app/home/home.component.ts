import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as  iohook  from 'iohook'
import { ElectronService } from 'app/core/services';
 
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor(private router: Router, private electron : ElectronService) { }


 
 
  ngOnInit(): void { 
   
    this.electron.onMouse();
  
    
  }

}
