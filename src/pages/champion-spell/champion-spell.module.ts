import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionSpellPage } from './champion-spell';

@NgModule({
  declarations: [
    ChampionSpellPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionSpellPage),
  ],
})
export class ChampionSpellPageModule {}
