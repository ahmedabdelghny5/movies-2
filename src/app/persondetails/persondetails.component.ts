import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {
  id:string=''
  trendingPerson: any = {};
  imgPrefix = 'http://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTrendingPerson(this.id).subscribe((response)=>{
      this.trendingPerson=response
    })
  }

  ngOnInit(): void {
  }

}
