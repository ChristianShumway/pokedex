export interface PokemonModel {
  name: string;
  url: string;
}

export interface ResponsePokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonModel[];
}
