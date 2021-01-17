import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from './share/ng-zorro-antd/ng-zorro-antd.module';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    RoutesModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
