// ng build --prod --output-path docs --base-href /ccu-website/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TabsComponent } from './tabs/tabs.component';
import { GroupComponent } from './group/group.component';
import { DescriptionComponent } from './description/description.component';
import { ProjectComponent } from './project/project.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
		TabsComponent,
    GroupComponent,
    DescriptionComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
		MatTabsModule,
		MatCardModule,
    MatTreeModule,
		MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
