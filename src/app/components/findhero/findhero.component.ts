import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-findhero',
  templateUrl: './findhero.component.html',
  styleUrls: []
})
export class FindheroComponent implements OnInit {

  hero: Hero[] = [];
  busqueda: String = "";
  constructor(private _activeRoute: ActivatedRoute, private _heroService: HeroService, private _router: Router) {
    this._activeRoute.params.subscribe(params => {
      this.busqueda = params['palabra'];
      this.hero = this._heroService.buscarHeroe(params['palabra']);
    })
  }

  ngOnInit(): void {
    console.log(this.hero);
  }

  verHeroe(id: number) {
    this._router.navigate(['/detalles', id]);
  }

}