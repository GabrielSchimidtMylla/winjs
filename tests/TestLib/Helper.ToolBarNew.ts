// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
///<reference path="Helper.ts" />
///<reference path="../TestLib/winjs.dev.d.ts" />

module Helper.ToolBarNew {
    "use strict";

    export function verifyRenderedOpened(toolBar: WinJS.UI.PrivateToolBarNew): void {

        //TODO Verify Auto overflowdirection?

        //TODO Verify that we are in the Body, absolutely positioned. and that based on our overflowdirection, we are correctly positioned over the proper edge of our placeholder.
        
        //TODO Verify that we are just as wide as our placeholder.

        //TODO Verify that the placeHolder has a parent element

        Helper._CommandingSurface.verifyRenderedOpened(toolBar._commandingSurface);
    }

    export function verifyRenderedClosed(toolBar: WinJS.UI.PrivateToolBarNew): void {
        //TODO Verify we have a parent element and our placeHolder element does not.

        Helper._CommandingSurface.verifyRenderedClosed(toolBar._commandingSurface);
    }

}