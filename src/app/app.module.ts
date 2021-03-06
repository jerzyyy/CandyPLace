import { ProfilepageComponent } from "./profilepage/profilepage.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CandyLogComponent } from "./candy-log/candy-log.component";
import { BonbonlogService } from "./bonbonlog.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { CollectionComponent } from "./collection/collection.component";
import { ChasseComponent } from "./chasse/chasse.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { VitrineComponent } from "./vitrine/vitrine.component";
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: "hunt", component: ChasseComponent },
  { path: "collection", component: CollectionComponent },
  { path: "showcase", component: VitrineComponent },
  { path: "candylog", component: CandyLogComponent },
  { path: "profilepage", component: ProfilepageComponent },
  {
    path: "",
    redirectTo: "/collection",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CollectionComponent,
    ChasseComponent,
    NavbarComponent,
    VitrineComponent,
    CandyLogComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BonbonlogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
