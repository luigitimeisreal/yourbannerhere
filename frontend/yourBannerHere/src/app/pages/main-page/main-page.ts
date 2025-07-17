import { Component, inject, OnInit } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { RequestService } from '../../services/request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [NavBar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit {

  constructor(private requestService:RequestService) {}

  ngOnInit(): void {
    this.checkAPI()
  }

  checkAPI() {
    this.requestService.testApi()
      .subscribe((data) => {
        console.log("Data received", data);
      })
  }
  
  
}
