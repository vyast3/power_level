import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { PowerComponentComponent } from './power-component/power-component.component';
import { HumanComponent } from './power-component/human/human.component';
import { SaiyanComponent } from './power-component/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power-component/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './power-component/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './power-component/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './power-component/supersaiyanfour/supersaiyanfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponentComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
