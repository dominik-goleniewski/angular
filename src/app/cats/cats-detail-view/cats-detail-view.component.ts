import { Component, OnInit } from '@angular/core';
import { Cat } from '../model';
import { CatsDataService } from '../cats-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-cats-detail-view',
  templateUrl: './cats-detail-view.component.html',
  styleUrls: ['./cats-detail-view.component.scss']
})
export class CatsDetailViewComponent implements OnInit {

  constructor(private catsDataService: CatsDataService, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
    this.index = 0;
  }

  index: number;
  cat: Cat;
  adoptionFormActive: boolean;
  showConfirmMsg: boolean;
  private route: ActivatedRouteSnapshot;

  increment(): void {
    if(this.index<4) {
      this.index = this.index + 1;
    }
    else
    {
      this.index = 0;
    }
  }

  decrement(): void {
    if(this.index>0) {
      this.index = this.index - 1;
    }
    else
    {
      this.index = 4;
    }
  }

  ngOnInit(): void {
    const catName = this.route.params['catName'];
    this.catsDataService.getCat(catName).subscribe(data => this.cat = data);
  }

  openAdoptionForm(): void {
    this.adoptionFormActive = true;
  }

  onFormClose(success: boolean) {
    this.adoptionFormActive = false;
    this.showConfirmMsg = success;
    this.cat.adopted = true;
  }
}
