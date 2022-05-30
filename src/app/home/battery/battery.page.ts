import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Station } from 'src/app/services/data.service';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.page.html',
  styleUrls: ['./battery.page.scss'],
})
export class BatteryPage implements OnInit {


   battery = [];

   id: string;
   stations: Station = {
     station: '',
     location: '',
   }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
    ) {
  
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log("STATION ID:", this.id);

    this.dataService.getBattery(this.id).subscribe(res => {
      console.log(res);
      this.battery = res;
    })

     this.dataService.getStationById(this.id).subscribe(stations => {
      console.log(stations);
      this.stations = stations as Station;
    })

  }

}
