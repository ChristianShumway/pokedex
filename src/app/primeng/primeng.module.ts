import { NgModule } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  exports: [
    DynamicDialogModule,
    PaginatorModule
  ]
})

export class PrimengModule { }
