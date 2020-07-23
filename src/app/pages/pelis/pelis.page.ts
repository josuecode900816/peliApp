import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PeliService, SearchType } from '../../services/peli.service';
//import {IPelis} from '../../model/IPelis.interface';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private peliService:PeliService) { }

  ngOnInit() {
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.peliService.searchData(this.searchTerm, this.type);
  }

}
