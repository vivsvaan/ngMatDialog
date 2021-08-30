import { Component } from '@angular/core';
import { NgMatDialogService } from './ng-mat-dialog/ng-mat-dialog.service';
import { SomeComponent } from './some/some.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ngMatDialog';

    constructor(private dialogService: NgMatDialogService) {}

    openDialog() {
        const injectData = {
            cdkDrag: true,
        };
        const dialogRef = this.dialogService.open(SomeComponent, {
            panelClass: ['some-panel-class'],
            data: injectData,
            hasBackdrop: false,
        });
    }
}
