import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CardComponent } from './cv/card/card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RoutingSimulatorComponent } from './components/routing-simulator/routing-simulator.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './components/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthInterceptorOProvider } from './auth/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    NgstyleComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    BtcToUsdPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RoutingSimulatorComponent,
    DetailCvComponent,
    BackComponent,
    FrontComponent,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    TestHttpComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [AuthInterceptorOProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
