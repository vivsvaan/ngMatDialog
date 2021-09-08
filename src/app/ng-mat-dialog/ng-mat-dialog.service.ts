import { ComponentType, OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable()
export class NgMatDialogService {
    currentClickedElement: HTMLElement | Node | null | undefined;

    constructor(
        private _matDialog: MatDialog,
        private _overlay: OverlayContainer
    ) {}

    open(component: ComponentType<any>, properties: MatDialogConfig) {
        const dialogRef = this._matDialog.open(component, properties);
        setTimeout(() => {
            this._addClickListener(dialogRef.id);
            this._dialogFocusHandler(dialogRef.id);
        }, 1000);
    }

    private _bringToFront(element?: Node) {
        if (element === undefined) {
            element = this.currentClickedElement as Node;
        }

        this._overlay.getContainerElement().removeChild(element);
        this._overlay.getContainerElement().appendChild(element);
    }

    private _dialogFocusHandler(dialogId: string, event?: Event) {
        let focusTarget = null;
        if (event && event.target) {
            focusTarget = <HTMLInputElement>event.target;
        }

        const clickedDialog = document.getElementById(dialogId);

        if (!clickedDialog) {
            return;
        }

        this.currentClickedElement = clickedDialog?.parentNode?.parentNode;

        if (
            (this._overlay.getContainerElement().lastChild as Node) ==
            this.currentClickedElement
        ) {
            return;
        }

        if (document.getElementsByClassName('cdk-overlay-backdrop').length) {
            return;
        }

        this._bringToFront();

        if (focusTarget) {
            focusTarget.focus();
        }
    }

    private _addClickListener(dialogId: string) {
        document
            .getElementById(dialogId)
            ?.addEventListener('click', (event) => {
                this._dialogFocusHandler(dialogId, event);
            });
    }
}
