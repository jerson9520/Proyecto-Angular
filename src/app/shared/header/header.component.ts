import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainRoute } from '../../main/main';
import { MainInfo } from '../../core/interface/main_info.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  mainItems: MainInfo[]=[]

  ngOnInit(): void {
    this.mainItems = MainRoute;
    //console.log(this.mainItems); 
  }

}
