import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionPage } from './champion';

@NgModule({
  declarations: [
    ChampionPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionPage),
  ],
})
export class ChampionPageModule {}
