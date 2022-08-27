import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SteamComponent } from './components/steam/steam.component';

const routes: Routes = [
    { path: '', component: SteamComponent }
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SteamRoutingModule {}