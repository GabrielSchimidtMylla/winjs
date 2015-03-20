// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
import _CommandingSurfaceConstants = require("../CommandingSurface/_Constants");

// toolbar class names
export var ClassNames = {
    controlCssClass: "win-toolbarnew",
    disposableCssClass: "win-disposable",
    actionAreaCssClass: "win-toolbarnew-actionarea",
    overflowButtonCssClass: "win-toolbarnew-overflowbutton",
    spacerCssClass: "win-toolbarnew-spacer",
    ellipsisCssClass: "win-toolbarnew-ellipsis",
    overflowAreaCssClass: "win-toolbarnew-overflowarea",
    contentFlyoutCssClass: "win-toolbarnew-contentflyout",
    emptytoolbarCssClass: "win-toolbarnew-empty",
    menuCssClass: "win-menu",
    menuContainsToggleCommandClass: "win-menu-containstogglecommand",
    menuContainsFlyoutCommandClass: "win-menu-containsflyoutcommand",
    openingClass: "win-toolbarnew-opening",
    openedClass: "win-toolbarnew-opened",
    closingClass: "win-toolbarnew-closing",
    closedClass: "win-toolbarnew-closed",
    compactClass: "win-toolbarnew-closeddisplaycompact",
    fullClass: "win-toolbarnew-closeddisplayfull",
    overflowTopClass: "win-toolbarnew-overflowtop",
    overflowBottomClass: "win-toolbarnew-overflowbottom",
    placeHolderCssClass: "win-toolbar-placeholder",
};

export var EventNames = {
    beforeOpen: "beforeopen",
    afterOpen: "afteropen",
    beforeClose: "beforeclose",
    afterClose: "afterclose"
};

export var controlMinWidth: number = _CommandingSurfaceConstants.controlMinWidth;

export var defaultClosedDisplayMode = "compact";
export var defaultOpened = false;

// Constants for commands
export var typeSeparator = "separator";
export var typeContent = "content";
export var typeButton = "button";
export var typeToggle = "toggle";
export var typeFlyout = "flyout";

export var commandSelector = ".win-command";

export var primaryCommandSection = "primary";
export var secondaryCommandSection = "secondary";