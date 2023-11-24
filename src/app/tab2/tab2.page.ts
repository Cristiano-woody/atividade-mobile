import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pokeInfo = {
    name: '???????',
    id: 0,
    image: '',
    weight: 0,
    height: 0,
    Abilities: 0
  }

  constructor(private photoService: PhotoService, private pokeService: PokeApiService) {
    this.buscarPokemon()
  }

  addPhotoToGallery() {
    this.photoService.addBewToGallery();
  }

  buscarPokemon() {
    this.pokeService.getPokemon().subscribe(
    res => {
      this.pokeInfo.name = res.name.toUpperCase()
      this.pokeInfo.id = res.id
      this.pokeInfo.image = res.sprites.front_default
      this.pokeInfo.weight = res.weight
      this.pokeInfo.height = res.height
      this.pokeInfo.Abilities = res.abilities.length
      console.log(res)
    },
    err => {
      console.log(err)
    })
  }
}
