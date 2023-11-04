import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { ViaCepService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokeInfo = {
    name: '???????',
    id: 0,
    image: '',
    weight: 0,
    height: 0,
    Abilities: 0
  }
  areaBuscarPokemon = ''
  areaBusca = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  }
  constructor(
    private pokeService: PokeApiService,
    private viaCepService: ViaCepService
  ) {}

  buscarPokemon() {
    this.viaCepService.getViaCep(this.areaBuscarPokemon).subscribe(
      res => {
        this.areaBusca.logradouro = res.logradouro
        this.areaBusca.bairro = res.bairro
        this.areaBusca.localidade = res.localidade
        this.areaBusca.uf = res.uf
      },
      err => {
        console.log(err)
      }
    )
    this.pokeService.getPokemon().subscribe(
    res => {
      this.pokeInfo.name = res.name
      this.pokeInfo.id = res.id
      this.pokeInfo.image = res.sprites.front_default
      this.pokeInfo.weight = res.weight
      this.pokeInfo.height = res.height
      this.pokeInfo.Abilities = 3
    },
    err => {
      console.log(err)
    })
  }
}
