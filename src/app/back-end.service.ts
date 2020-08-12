import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackEndService {
  constructor(private http: HttpClient) {}

  uploadAndCompileFile(file: File) {
    const formData = new FormData();
    formData.append('uploadFile', file, file.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post(`${environment.backEnd}/uploadAndCompile`, formData, {
      headers,
    });
  }
}
