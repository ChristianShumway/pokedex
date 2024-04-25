import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    MainPageComponent,
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
    CoreModule,
    PrimengModule
  ],
  providers: [DialogService, DynamicDialogRef, DynamicDialogConfig]
})
export class PokemonModule { }
