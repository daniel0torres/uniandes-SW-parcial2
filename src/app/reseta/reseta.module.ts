import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetaComponent } from './reseta.component';
import { ResetaDetailComponent } from './reseta-detail/reseta-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResetaComponent, ResetaDetailComponent],
  exports: [ResetaComponent]
})
export class ResetaModule { }
