<<<<<<< HEAD

import { ToptoolbarComponent } from './../components/toptoolbar/toptoolbar';
=======
>>>>>>> 9ecb9f689d63fd442354acdf5a4dd2f56d688bf1
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { ResumePage } from '../pages/resume/resume';
import { TabsPage } from '../pages/tabs/tabs';
import { ImageModalPage } from './../pages/image-modal/image-modal';

import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectsPage,
    ResumePage,
    TabsPage,
    ImageModalPage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    PdfViewerModule
=======
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    ComponentsModule
>>>>>>> 9ecb9f689d63fd442354acdf5a4dd2f56d688bf1
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsPage,
    ResumePage,
    TabsPage,
    ImageModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
