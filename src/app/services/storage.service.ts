import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    // console.log('Storage created:', this._storage);
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  public async get(key: string) {
    return (await this._storage?.get(key)) || null;
  }

  public async remove(key: string) {
    this._storage.remove(key);
  }
  public async clear(key: string) {
    this._storage.clear();
  }
  public async keys() {
    return await this._storage.keys();
  }
  public async length() {
    return await this._storage.length();
  }
}
