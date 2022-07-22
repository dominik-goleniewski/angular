import { Component, NgModule, OnInit } from '@angular/core';
import { Cat } from '../model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cats-overview',
  templateUrl: './cats-overview.component.html',
  styleUrls: ['./cats-overview.component.scss']
})

export class CatsOverviewComponent implements OnInit {
  cats: Cat[] = [];

  showPopup: boolean;
  sortedByName: boolean;
  sortedByBreed: boolean;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.showPopup = false;
    this.sortedByBreed = false;
    this.sortedByName = false;
  }

  ngOnInit(): void {
    this.loadCats();
  }

  sortCatsByName() {
    this.cats.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;

    });
  }

  sortCatsByBreed() {
    this.cats.sort((a, b) => {
      let fa = a.breed.toLowerCase(),
        fb = b.breed.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;

    });
  }

  private loadCats() {
    this.activatedRoute.data.subscribe(data => {
      this.cats = data['cats'];
    }
    );
  }


  onClick($event: Cat) {
    this.router.navigate(['cats', $event.name]);
  }
}
