import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getDataDona() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataTransformed() {
    return this.getDataDona().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const datos = Object.values(data);
        return { labels, datos };
      })
    );
  }
}
