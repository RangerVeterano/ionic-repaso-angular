import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any = [];

  constructor(private ds: DataService) { }

  ngOnInit(): void {

    this.mensajes = this.ds.getPost()
  }

  escuchaClick(id: number) {
    console.log('Click en: ', id);
  }

}
