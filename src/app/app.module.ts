import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperDemoComponent } from './components/swiper-demo/swiper-demo.component';
import { DataTableComponent } from './components/data-table/data-table.componet';
import { JwtDecodeComponent } from './components/jwt-decode/jwt-decode.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    SwiperDemoComponent,
    DataTableComponent,
    JwtDecodeComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    NgxDatatableModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
