import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';
import { PrimengModule } from '../primeng/primeng.module';
import { DateMx } from './pipes/mx.date.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalPokemonComponent,
    DateMx
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalPokemonComponent,
    DateMx
  ]
})
export class SharedModule { }
