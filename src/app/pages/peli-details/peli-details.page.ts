import { Component, OnInit } from '@angular/core';
import {PeliService} from '../../services/peli.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {
 
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: PeliService) { }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }
}
