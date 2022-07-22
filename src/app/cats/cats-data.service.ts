import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrl: 'puszek1.jpg',
      vaccinated: true,
      funFact: 'Puszek jest superbohaterem',
      adopted: false,
      picUrls: ['puszek1.jpg', 'mruczek1.jpg','kiciek.jpg', 'klaczek.jpg', 'pimpus.jpg']
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: 'mruczek1.jpg',
      vaccinated: true,
      funFact: 'Mruczek widzi w ciemności',
      adopted: false,
      picUrls: ['mruczek1.jpg', 'puszek1.jpg', 'kiciek.jpg', 'klaczek.jpg', 'pimpus.jpg']
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: 'kiciek.jpg',
      vaccinated: false,
      funFact: 'Kiciek potrafi rozmawiać',
      adopted: false,
      picUrls: ['kiciek.jpg', 'puszek1.jpg', 'mruczek1.jpg', 'klaczek.jpg', 'pimpus.jpg']
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: 'klaczek.jpg',
      vaccinated: true,
      funFact: 'Kłaczek przemienia się w psa w nocy',
      adopted: false,
      picUrls: ['klaczek.jpg', 'puszek1.jpg', 'mruczek1.jpg','kiciek.jpg', 'pimpus.jpg']
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: 'pimpus.jpg',
      vaccinated: false,
      funFact: 'Pimpuś dużo je',
      adopted: false,
      picUrls: ['pimpus.jpg', 'puszek1.jpg', 'mruczek1.jpg','kiciek.jpg', 'klaczek.jpg']
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
