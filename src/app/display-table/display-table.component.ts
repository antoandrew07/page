import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table'; 

@Component({
  selector: 'app-display-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule], 
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  httpClient = inject(HttpClient);
  listOfData: any[] = []; 

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        console.log(data);
        this.listOfData = data; 
      });
  }
}
