import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../environment/environment';
import { IPage } from '../model/plist';
import { IBlog } from '../model/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  
  constructor(private oHttp: HttpClient) {}

  getPage(page: number, rpp: number): Observable<IPage<IBlog>> {
    return this.oHttp.get<IPage<IBlog>>(serverURL + `/blog?page=${page}&size=${rpp}`);
  }

  get(id: number): Observable<IBlog> {
    return this.oHttp.get<IBlog>(serverURL + '/blog/' + id);
  }

}
