import { Component, OnInit, ViewChild } from '@angular/core';
//import { Platform, NavController } from 'ionic-angular';
import { Platform } from '@ionic/angular';


import{
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  GoogleMapOptions,
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.page.html',
  styleUrls: ['./showmap.page.scss'],
})
export class ShowmapPage implements OnInit {
  
  map: GoogleMap;
  // address:string;
  constructor(
    public platform: Platform
  ) {}
  initMap() {
    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802,
        },
        zoom: 18,
        tilt: 30,
      },
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

  ngOnInit() {
    console.log('show map');
    this.platform.ready().then(() => {
      this.initMap();
    })
    
  }
}
