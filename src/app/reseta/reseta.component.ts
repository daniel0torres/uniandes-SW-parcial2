import { Component, OnInit } from '@angular/core';
import { Reseta } from './reseta';
import { ResetaService } from './reseta.service';
@Component({
  selector: 'app-reseta',
  templateUrl: './reseta.component.html',
  styleUrls: ['./reseta.component.css']
})
export class ResetaComponent implements OnInit {

  resetas: Array<Reseta> = [];
  constructor(private resetaService: ResetaService) { }

  getResetas() {
    this.resetaService.getResetas().subscribe(resetas => {
      this.resetas = resetas;
    });
  }
  ngOnInit() {
    this.getResetas();
  }

}
