import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  personMovies: any[] = [];
  imgPrefix = 'http://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.personMovies=response.results
    })
  }

  ngOnInit(): void {
  }

}
