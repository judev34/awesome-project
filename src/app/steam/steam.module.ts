import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamRoutingModule } from './steam-routing.module'
import { SteamComponent } from './components/steam/steam.component';
import { SteamService } from './services/steam.service';



@NgModule({
  declarations: [
    SteamComponent,
  ],
  imports: [
    CommonModule,
    SteamRoutingModule,
  ],
  exports: [
    SteamComponent
  ],
  providers: [
    SteamService
  ]
})
export class SteamModule { }
