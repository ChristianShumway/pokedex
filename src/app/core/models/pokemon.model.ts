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

export interface DetailPokemonModel {
  img: string;
  descripcion?: string;
  nombre: string;
  tipo: TypesPokemonModel[];
  hp: string;
  ataque: string;
  defensa: string;
  ataqueEspecial: string;
  defensaEspecial: string;
  velocidad: string;
}

export interface TypesPokemonModel {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
