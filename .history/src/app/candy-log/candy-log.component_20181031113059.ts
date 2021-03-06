import { Component, OnInit } from "@angular/core";
import { BonbonlogService } from "../bonbonlog.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProfilesService } from "./../services/profiles.service";

@Component({
  selector: "app-candy-log",
  templateUrl: "./candy-log.component.html",
  styleUrls: ["./candy-log.component.css"]
})
export class CandyLogComponent implements OnInit {
  objectBonbon: object[];
  affichage: boolean = false;
  Users;
  varUser = 0;

  constructor(
    private service: BonbonlogService,
    private profilesservices: ProfilesService
  ) {}

  apiBonbec() {
    this.service.apiCall().subscribe((data: any) => {
      this.objectBonbon = data;
      this.affichage = true;
      console.log(this.objectBonbon);
    });
  }

  ngOnInit() {
    this.apiBonbec();
    this.Users = this.profilesservices.Users;
  }

  grisage(product) {
    console.log(product.product_name_fr, "||", this.Users[0].collection);
    this.Users[0].collection.forEach(bonbon => {
      if (bonbon.product_name_fr == product.product_name_fr) {
        return "gris";
      }
    });
  }
}
