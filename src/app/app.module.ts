import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './components/cv/cv/cv.component';
import { ItemComponent } from './components/cv/item/item.component';
import { ListComponent } from './components/cv/list/list.component';
import { CardComponent } from './components/cv/card/card.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { DefaultImagePipe } from './components/cv/pipes/default-image.pipe';
import { Logger } from './services/logger.service';
import { HelperService } from './services/helper.service';
import { TodoComponent } from './todo/todo/todo.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
