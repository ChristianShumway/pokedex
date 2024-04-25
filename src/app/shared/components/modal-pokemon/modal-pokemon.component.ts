import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetailPokemonModel } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'shared-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss']
})
export class ModalPokemonComponent implements OnInit {

  public pokemon!: DetailPokemonModel;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if(this.config.data) {
      this.pokemon = this.config.data.pokemon;
    }
  }

  closeModal() {
    this.ref.close();
  }

}
