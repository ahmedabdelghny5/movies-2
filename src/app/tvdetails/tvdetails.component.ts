import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {

  id:string=''
  trendingTv: any = {};
  imgPrefix = 'http://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) {
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTrendingTv(this.id).subscribe((response)=>{
      this.trendingTv=response;
    })
   }

  ngOnInit(): void {
  }

}
