import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatDialogService } from './ng-mat-dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        DragDropModule,
    ],
    declarations: [],
    exports: [],
    providers: [NgMatDialogService, MatDialog, OverlayContainer, Overlay],
})
export class NgMatDialogModule {}
