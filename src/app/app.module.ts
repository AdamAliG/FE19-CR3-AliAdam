import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: OrderComponent },
  { path: 'footer', component: FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutUsComponent,
    DetailsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
