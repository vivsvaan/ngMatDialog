import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgMatDialogService } from './ng-mat-dialog/ng-mat-dialog.service';
import { NgMatDialogModule } from './ng-mat-dialog/ng-mat-dialog.module';
import { SomeComponent } from './some/some.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [AppComponent, SomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        NgMatDialogModule,
        DragDropModule,
    ],
    providers: [NgMatDialogService],
    bootstrap: [AppComponent],
})
export class AppModule {}
