import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoritesComponent } from './components/addToFavorites.component';
import { AddToFavoritesServise } from './services/addToFavorites.service';
import { EffectsModule } from '@ngrx/effects';
import { addToFavoritesEffect } from './store/effects/addToFavorites.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([addToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesServise],
})
export class AddToFavoritesModule {}
