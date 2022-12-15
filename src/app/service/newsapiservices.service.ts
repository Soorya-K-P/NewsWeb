import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

// newsapiurl

newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=c28c8cedf627486a837655745cb27c64";

// technewsapiurl

techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c28c8cedf627486a837655745cb27c64";

// businessnewsapiurl

businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c28c8cedf627486a837655745cb27c64";




// topheading()

topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl)
}

// technews()

techNews():Observable<any>
{
  return this._http.get(this.techApiUrl);
}

// businessnews()

businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl)
}

}
