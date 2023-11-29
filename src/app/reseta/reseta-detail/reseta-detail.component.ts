import { Component, Input,OnInit } from '@angular/core';
import { Reseta } from '../reseta';

@Component({
  selector: 'app-reseta-detail',
  templateUrl: './reseta-detail.component.html',
  styleUrls: ['./reseta-detail.component.css']
})
export class ResetaDetailComponent implements OnInit {

  @Input() resetaDetail!: Reseta;

  constructor() { }

  ngOnInit() {
  }

}
