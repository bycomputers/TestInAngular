import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './pipes/sanitizer-pipe';
import { SafeurlPipe } from './pipes/safeurl';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { TranslatePipe } from './pipes/translate';
import { HttpGeneralService } from './services/httpGeneralService.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AlertModule } from './services/_alert';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './services/dialogs/confirm-dialog/confirm-dialog.component';
import { ServicesModule } from './services/services.module';
import { OutsideService } from './services/outside.service';
import { _s } from './services/global';
import { HttpClientJsonpModule } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { HebMessegeService } from "./services/hebMessege";


@NgModule({
  imports: [
    ServicesModule,
  
    HttpClientModule, // <============ (Perform HTTP requests with this module)
    NgHttpLoaderModule.forRoot(), // <============ Don't forget to call 'forRoot()'!
    //DragulaModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
    AppRoute,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    SafeurlPipe,
    YesNoPipe,
    TranslatePipe,
    PageNotFoundComponent,
    FooterComponent
  ],
  providers: [
    OutsideService,
    _s,
    DatePipe,
    HttpGeneralService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// setTimeout(() => {debugger;}, 4000)
