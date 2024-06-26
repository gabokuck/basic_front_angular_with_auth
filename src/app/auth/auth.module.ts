import { CommonModule } from "@angular/common";
import { NgModule, NgZone } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: []
})
export class AuthModule { }
