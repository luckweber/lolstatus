import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionSummaryPage } from './champion-summary';

@NgModule({
  declarations: [
    ChampionSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionSummaryPage),
  ],
})
export class ChampionSummaryPageModule {}
