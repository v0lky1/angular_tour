import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainCharacterComponent } from './main-character/main-character.component';
import { MainCharacterDetailComponent } from './main-character-detail/main-character-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MainCharacterSearchComponent } from './main-character-search/main-character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCharacterComponent,
    MainCharacterDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MainCharacterSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent, MainCharacterComponent],
})
export class AppModule {}
