import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClientModule }    from '@angular/common/http';

@Injectable()

export class loginPageServices {
    sampleAPIURL = 'https://jsonplaceholder.typicode.com/posts/1';

    //Create constructor to get Http instance

    constructor(private http: Http) {

    }

    getdatafromAPI(): Observable<{userId:any}> {
        return(this.http.get(this.sampleAPIURL)).map(this.extractData).catch(this.handleErrors);
    }


    private handleErrors (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

    private extractData(res: Response){
        let returnData = res.json();
        return returnData;
    }
}