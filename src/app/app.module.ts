import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { bodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonasComponent } from './components/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    bodyComponent,
    FooterComponent,
    PersonaComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
