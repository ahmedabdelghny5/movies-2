import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvMovies: any[] = [];
  imgPrefix = 'http://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) { 
    this._MoviesService.getTrending('tv').subscribe((data) => {
      this.tvMovies = data.results.slice(0,16);
    });
  }

  ngOnInit(): void {
  }

}
