export interface Cat {
  name: string;
  ageMonths : number;
  breed: string;
  picUrl: string;
  picUrls: string[];
  vaccinated: boolean;
  funFact: string;
  adopted: boolean;
}

export interface AdoptionData {
  catsName: string;
  personName: string;
  personPhone: string;
}

