import { Injectable } from '@angular/core';
import { collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Account } from '../models/user';

export interface Station {
  id?: string;
  station: string;
  location: string;
}

export interface Battery {
  batteryId?: string;
  battery: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private firestore: Firestore) {   }

   getStations(): Observable<Station[]> {
      const stationsRef = collection(this.firestore, 'stations');
      return collectionData(stationsRef, { idField: 'id'}) as Observable<Station[]>;
    }

    getStationById(id): Observable<Station> {
      const stationDocRef = doc(this.firestore, `stations/${id}`);
      return docData(stationDocRef, { idField: 'id'}) as Observable<Station>;
    }

    getBattery(id): Observable<Battery[]> {
      const batteryRef = collection(this.firestore, `stations/${id}/battery`);
      return collectionData(batteryRef, {idField: 'batteryId'}) as  Observable<Battery[]>
    }

    getUser(uid: string): Observable<Account> {
    const accountDocRef = doc(this.firestore, `users/${uid}`);
    return docData(accountDocRef, { idField: 'uid' }) as Observable<Account>;
  }
}
