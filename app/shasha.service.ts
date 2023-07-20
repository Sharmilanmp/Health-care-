import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{MatTableDataSource}from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class ShashaService {
  couchDBUrl: string = 'https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud'
  couchDBUsername: string = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry'
  couchDBPassword: string = '69c1d2737d371d9f6b7f6009287e6ccc'
  databaseName: string = 'doctor'
  user: Array<any> = [];
  employees:Array<any>=[];
  dataSource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) Paginator ! : MatPaginator;
  @ViewChild(MatSort) Sort ! : MatSort;
  constructor(public httpClient: HttpClient) { }
  getDocument(id: string) {
    this.httpClient.get(this.couchDBUrl + '/' + this.databaseName + '/' + id, {
      headers: {
        'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
      }
    }).subscribe(res => {
      console.log("getDocument", res);
    })
  }
  
  updateDocument(requests: Array<any>) {
    this.httpClient.post(this.couchDBUrl + '/' + this.databaseName + '/_bulk_docs', { 'docs': requests }, {
      headers: {
        'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
      }
    }).subscribe((res: any) => {
      if (res[0]['ok']) {
        alert('saved Successfully')
      }
      console.log("updateDocument", res);
    })
  }
  async searchDocument(query: string) {
    return this.httpClient.post(this.couchDBUrl + '/' + this.databaseName + '/_design/doctor/_search/doctor_search',
      { 'q': query, 'include_docs': true }, {
      headers: {
        'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
      }
    }).subscribe((res: any) => {
      console.log("searchDocument", res);
    this.employees = res['rows'].map((row: any) => row['doc']);
      this.dataSource=new MatTableDataSource(this.employees)
      this.dataSource.paginator=this.Paginator
      this.dataSource.sort=this.Sort
      return res;
    })

  }
  deleteDocument(id: string, rev: string) {
    this.httpClient.delete(this.couchDBUrl + '/' + this.databaseName + '/' + id + '?rev=' + rev, {
      headers: {
        'Authorization': 'Basic ' + btoa(this.couchDBUsername + ':' + this.couchDBPassword)
      }
    }).subscribe(res => {
      console.log("deleteDocument", res);
    })
  }
  
}
