import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {MatIconModule} from '@angular/material/icon';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MatButton, MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { NEVER } from 'rxjs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MatButtonModule,
    MatFabButton,
    MatButton,
    MatCommonModule,
    MatIconModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

}
