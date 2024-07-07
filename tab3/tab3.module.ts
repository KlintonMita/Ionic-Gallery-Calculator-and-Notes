import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIcon,
    MatGridListModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
