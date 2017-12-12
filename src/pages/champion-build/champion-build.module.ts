import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionBuildPage } from './champion-build';

@NgModule({
  declarations: [
    ChampionBuildPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionBuildPage),
  ],
})
export class ChampionBuildPageModule {}
