// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

interface Object {
    [key: string]: any;
}

interface IStyleEquivalents {
    cssName: string;
    scriptName: string;
}

interface IStyleEquivalentsMap {
    [key: string]: IStyleEquivalents;
}

declare module WinJS {
    
    interface IPosition {
        left: number;
        top: number;
        width: number;
        height: number;
    }

    class _Signal<T> {
        constructor(oncancel?: Function);
        promise: Promise<T>;
        cancel();
        complete(value?: T);
        error(value?: any);
        progress(value?: any);
    }

    module Utilities {
        function _bubbleEvent(element: HTMLElement, type: string, eventObject: any): void;
        function _setImmediate(func: () => any): void;
        export function _getPositionRelativeTo(element: HTMLElement, ancestor: HTMLElement): IPosition;

        module _resizeNotifier {
            function subscribe(element: HTMLElement, handler): void;
            function unsubscribe(element: HTMLElement, handler): void;
            function _handleResize(): void;
        }

        var _browserStyleEquivalents: IStyleEquivalentsMap;

        function _setActive(element: HTMLElement, scroller?: HTMLElement);
        function _trySetActive(element: HTMLElement, scroller?: HTMLElement);
        function _setActiveFirstFocusableElement(rootEl: HTMLElement, scroller?: HTMLElement);
        function _setActiveLastFocusableElement(rootEl: HTMLElement, scroller?: HTMLElement);

        function _traceAsyncOperationStarting();
        function _traceAsyncOperationCompleted();
        function _traceAsyncCallbackStarting();
        function _traceAsyncCallbackCompleted();

        function _require(dep: string, callback);
        function _require(deps: string[], callback);
        function _uniqueID(e: HTMLElement):string;
        function _isDOMElement(e: HTMLElement): boolean;

        function _yieldForEvents(handler: Function);
        function _merge(a: any, b: any): any;
        function _mergeAll(list: any): any;
        var _isiOS;
        function _setIsiOS(isiOS: boolean);

        class _PointerEventProxy {
            constructor(eventObject, overrideProperties);
        }

        function _linkedListMixin(name: string);

        module Scheduler {
            var _usingWwaScheduler: boolean;
            var _MSApp;
            var _isEmpty;
            var _TIME_SLICE: number;
        }

        function _now();

        function _setHasWinRT(value: boolean);
        var _selectionPartsSelector;

        function _writeProfilerMark(mark: string);

        var _browserEventEquivalents: { [key: string]: string };

        var _DOMWeakRefTable_sweepPeriod: number;
        var _DOMWeakRefTable_timeout: number;
        var _DOMWeakRefTable_noTimeoutUnderDebugger: boolean;
        function _createWeakRef(element, id: string);
        function _getWeakRefElement(id: string): any;
        var _DOMWeakRefTable_tableSize: number;

        function _matchesSelector(element, selector: string): boolean;

        var _MutationObserver;
        function _isSelectionRendered(itemBox): boolean;
        var _getHighestTabIndexInList;
        var _getLowestTabIndexInList;
        var _MSPointerEvent;
        var _supportsSnapPoints: boolean;
    }

    module Resources {
        function _getWinJSString(resourceId: string): { value: string; empty?: boolean; lang?: string; };
        function _getStringJS(resourceId: string): { value: string; empty?: boolean; lang?: string; };
    }

    module Application {
        var _terminateApp: (data: any, e: any) => void;
        function _dispatchEvent(eventRecord: any): void;
        function _loadState(e: any);
    }

    module UI {
        var _optionsLexer;
        var optionsParser;
        var _optionsParser;
        var _CallExpression;
        var _IdentifierExpression;
        var _GroupFocusCache;

        class _ParallelWorkQueue {
            constructor(maxRunning: number);
            sort(sortFunc: (a: any, b: any) => number);
            queue(f:()=>WinJS.Promise<any>, data?:any, first?:boolean);
        }

        class PrivateToggleSwitch extends WinJS.UI.ToggleSwitch {
            _pointerDownHandler(ev: any);
            _pointerUpHandler(ev: any);
            _pointerMoveHandler(ev: any);
        }

        class PrivateTabContainer extends WinJS.UI.TabContainer {
            _elementTabHelper;
            _hasMoreElementsInTabOrder;
        }

        class PrivateTooltip extends WinJS.UI.Tooltip {
            _disposed: boolean;
            _domElement: HTMLElement;

            static _DELAY_INITIAL_TOUCH_SHORT: number;
            static _DELAY_INITIAL_TOUCH_LONG: number;
            static _DEFAULT_MOUSE_HOVER_TIME: number;
            static _DEFAULT_MESSAGE_DURATION: number;
            static _DELAY_RESHOW_NONINFOTIP_TOUCH: number;
            static _DELAY_RESHOW_NONINFOTIP_NONTOUCH: number;
            static _DELAY_RESHOW_INFOTIP_TOUCH: number;
            static _DELAY_RESHOW_INFOTIP_NONTOUCH: number;
            static _RESHOW_THRESHOLD: number;
        }
        
        interface IContentDialogDom {
            root: HTMLElement;
            backgroundOverlay: HTMLElement;
            startBodyTab: HTMLElement;
            dialog: HTMLElement;
            title: HTMLElement;
            scroller: HTMLElement;
            commandContainer: HTMLElement;
            commands: HTMLElement;
            endBodyTab: HTMLElement;
            content: HTMLElement;
        }
        
        class PrivateContentDialog extends WinJS.UI.ContentDialog {
            static _ClassNames: any;
            _playEntranceAnimation(): Promise<any>;
            _playExitAnimation(): Promise<any>;
            _disposed: boolean;
            _state: any;
            _dom: IContentDialogDom;
            _updateTabIndices();
            _updateTabIndicesImpl();
        }
        
        class PrivateSplitView extends WinJS.UI.SplitView {
            static _ClassNames: {
                splitView: string;
                pane: string;
                content: string;
                // hidden/shown
                paneHidden: string;
                paneShown: string;
            }
            
            _playShowAnimation(): Promise<any>;
            _playHideAnimation(): Promise<any>;
            _prepareAnimation(paneRect: any, contentRect: any): void;
            _clearAnimation(): void;
            _disposed: boolean;
            _machine: { _state: { name: string } };
        }

        interface ISelect {
            value;
            index: number;
            _domElement;
        }

        interface ITimePicker extends WinJS.UI.TimePicker {
            _domElement: HTMLElement;
            _disposed: boolean;
            _ampmControl: ISelect;
            _ampmElement: HTMLSelectElement;
            _hourControl: ISelect;
            _hourElement: HTMLSelectElement;
            _minuteControl: ISelect;
            _minuteElement: HTMLSelectElement;
        }

        interface ISemanticZoom extends WinJS.UI.SemanticZoom {
            _showSemanticZoomButton();
            _onMouseWheel(evt);
            _pinching: boolean;
            _viewportIn;
            _viewportOut;
            _canvasIn;
            _canvasOut;
            _disposed;
        }

        var _listViewClass: string;
        var _viewportClass: string;
        var _horizontalClass: string;
        var _verticalClass: string;
        var _scrollableClass: string;
        var _containerClass: string;
        var _headerContainerClass: string;

        module _ListViewAnimationHelper {
            function fadeInElement(element): Promise<any>;
            function fadeOutElement(element): Promise < any>;
            function animateEntrance(canvas, firstEntrance): Promise<any>;
        }

        module _VirtualizeContentsView {
            var _maxTimePerCreateContainers;
            var _chunkSize;
            var _disableCustomPagesPrefetch;
            var _defaultPagesToPrefetch;
            var _createContainersJobTimeslice;
            var _startupChunkSize;
            var _iOSMaxLeadingPages;
            var _iOSMaxTrailingPages;
        }

        class PrivateAutoSuggestBox extends WinJS.UI.AutoSuggestBox {
            _disposed: boolean;
            _inputElement: HTMLInputElement;
            _isFlyoutPointerDown: boolean;
            _flyoutElement: HTMLDivElement;
            _lastKeyPressLanguage: string;
            _repeater: WinJS.UI.Repeater;
            _repeaterElement: HTMLDivElement;

            _inputOrImeChangeHandler(eventArg: Event);
            _tryGetInputContext(): MSInputMethodContext;

            static _sortAndMergeHits(hitsProvided?);
            static _EventNames: {
                querychanged;
                querysubmitted;
                resultsuggestionchosen;
                suggestionsrequested;
            };
        }

        class PrivateDatePicker extends DatePicker {
            _domElement;
            _disposed: boolean;
            static _getInformationJS;
            static _getInformationWinRT;
            static getInformation;
        }

        class PrivateFlipView<T> extends FlipView<T> {
            _pageManager;
            _animating: boolean;
        }

        class PrivateSemanticZoom extends SemanticZoom {
        }

        interface IPrivateSelection<T> extends ISelection<T> {
            _isIncluded(i: number): boolean;
            _pivot;
            _selected;
        }

        interface IPrivateListDataSource<T> extends IListDataSource<T> {
            list?: WinJS.Binding.List<T>;
            _list?: WinJS.Binding.List<T>;
        }

        interface IListViewEntity {
            type: WinJS.UI.ObjectType;
            index: number;
        }

        class PrivateListView<T> extends ListView<T> {
            _onMSElementResize();
            _animationsDisabled;
            _view;
            _ariaStartMarker;
            _ariaEndMarker;
            selection: IPrivateSelection<T>
            itemDataSource: IPrivateListDataSource<T>;
            _canvas;
            _viewport;
            _getViewportLength;
            _groups;
            _raiseViewLoading;
            _element;
            _horizontal(): boolean;
            _updateLayout;
            _affectedRange;
            _onFocusOut;
            _onFocusIn;
            _selection;
            _tabManager;
            _layout;
            _deleteWrapper;
            _mode;
            _itemsManager;
            _raiseViewComplete;
            _changeFocus;
            _keyboardFocusInbound: boolean;
            _currentMode;
            _dispose;
            _onMSManipulationStateChanged;
            _beginZoom;
            _endZoom;
            _versionManager;
            _scrollLength;
            _onPropertyChange;

            ensureVisible(itemIndex: number): void;
            ensureVisible(itemIndex: IListViewEntity): void;
            maxTrailingPages: number;
            maxLeadingPages: number;
        }

        class PrivateListLayout extends ListLayout {
            static _numberOfItemsPerItemsBlock: number;
            _itemsPerBar;
            initialize();
            initialize(layout, groupsEnabled);
            layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): any;
            itemsFromRange(firstPixel: number, lastPixel: number): any;
            _measuringPromise;
            _envInfo;
            _sizes;
        }

        class PrivateGridLayout extends GridLayout {
            initialize();
            initialize(layout, groupsEnabled);
            layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): any;
            itemsFromRange(firstPixel: number, lastPixel: number): any;
            _itemsPerBar;
            _measuringPromise;
            _envInfo;
            _sizes;
            _lastItemFromRange;
            _firstItemFromRange;
            _measureElements;
        }

        class PrivateCellSpanningLayout extends CellSpanningLayout {
            initialize();
            initialize(layout, groupsEnabled);
            layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): any;
            itemsFromRange(firstPixel: number, lastPixel: number): any;
            _itemsPerBar;
            _measuringPromise;
            _envInfo;
            _sizes;
        }

        class PrivateCommandingSurface extends WinJS.UI._CommandingSurface {
            _disposed: boolean;
            _primaryCommands: ICommand[];
            _secondaryCommands: ICommand[];
            _getCommandWidth(command: ICommand): number;
            _contentFlyout: WinJS.UI.Flyout;
            _contentFlyoutInterior: HTMLElement;
            _dom: {
                root: HTMLElement;
                actionArea: HTMLElement;
                spacer: HTMLDivElement;
                overflowButton: HTMLButtonElement;
                overflowArea: HTMLElement;
            };
        }

        class PrivateToolBar extends WinJS.UI.ToolBar {
            _disposed: boolean;
            _primaryCommands: ICommand[];
            _secondaryCommands: ICommand[];
            _overflowButton: HTMLButtonElement;
            _mainActionArea: HTMLElement;
            _menu: WinJS.UI.Menu;
            _separatorWidth: number;
            _standardCommandWidth: number;
            _overflowButtonWidth: number;
            _getCommandWidth(command: ICommand): number;
            _customContentFlyout: WinJS.UI.Flyout;
            _customContentContainer: HTMLElement;
            _inlineOverflowArea: HTMLElement;
        }

        class PrivateCommand extends WinJS.UI.AppBarCommand implements ICommand {
            priority: number;
            winControl: ICommand;
            _commandBarIconButton;
            _disposed;
            _tooltipControl;
            _lastElementFocus;
        }

        // Move to WinJS.d.ts after the ToolBar API review
        export interface ICommand {
            addEventListener(type: string, listener: Function, useCapture?: boolean): void;
            dispose(): void;
            removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
            disabled: boolean;
            element: HTMLElement;
            extraClass: string;
            firstElementFocus: HTMLElement;
            flyout: WinJS.UI.Flyout;
            hidden: boolean;
            icon: string;
            id: string;
            label: string;
            lastElementFocus: HTMLElement;
            onclick: Function;
            section: string;
            selected: boolean;
            tooltip: string;
            type: string;
            priority: number;
            winControl: ICommand
        }

        class PrivateAppBar extends AppBar {
            getCommandById(id: string): PrivateCommand;
            showCommands(commands: any[], immediate?: boolean): void;
            showCommands(commands: any, immediate?: boolean): void;
            hideCommands(commands: any[], immediate?: boolean): void;
            hideCommands(commands: any, immediate?: boolean): void;
            showOnlyCommands(commands: any[], immediate?: boolean): void;
            showOnlyCommands(commands: any, immediate?: boolean): void;
            commands: any[];
            _disposed;
            _getCommands;
            _uniqueId;
            _updateFirstAndFinalDiv;
            _layout;
            _visiblePosition;

            static _currentAppBarId;
            static _appBarsSynchronizationPromise;
        }

        class PrivateFlyout extends Flyout {
            _disposed;
            _previousFocus;

            static _cascadeManager;
        }

        class PrivateMenuCommand extends MenuCommand {
            _disposed;
            _toggleSpan;
            _labelSpan;
            _flyoutSpan;
            _invoke;
            static _activateFlyoutCommand;
        }

        class PrivateMenu extends Menu {
            _disposed;
        }

        class PrivateSettingsFlyout extends SettingsFlyout {
            _disposed;
        }

        class PrivateNavBar extends NavBar {
            _disposed;
        }

        class PrivateNavBarCommand extends NavBarCommand {
            _buttonEl;
            _disposed;
            _splitButtonEl;
            static _EventName;
        }

        class PrivateNavBarContainer extends NavBarContainer {
            _surfaceEl;
            _measured;
            _scrollPosition
            _sizes;
            _disposed;

            static _EventName;
        }

        class PrivateHub extends Hub {
            sections: WinJS.Binding.List<PrivateHubSection>;
            _viewportElement;

            static _EventName;
            static _ClassName;
            static LoadingState;
            static AnimationType;
        }

        class PrivateHubSection extends HubSection {
            _headerContentElement;
            _setHeaderTemplate;
            _headerTabStopElement;

            static _ClassName;
            static _Constants;
        }

        class PrivateBackButton extends BackButton {
            static _getReferenceCount(): number;
        }

        class PrivateRating extends Rating {
            _ensureTooltips;
            _toolTips;
            _disposed;
        }

        class PrivatePivot extends Pivot {

            _viewportElement;
            _goNext;
            _goPrevious;
            _headersContainerElement;
            _headersState;
            forceLayout();
            _navMode;
            _currentScrollTargetLocation;
            _viewportWidth;

            static _ClassName;
            static _EventName;
            static _NavigationModes;
        }

        class PrivatePivotItem extends PivotItem {
            static _ClassName;
        }
        
        class _CommandingSurface {
            public element: HTMLElement;
            public data: WinJS.Binding.List<ICommand>;
            constructor(element?: HTMLElement, options?: any);
            public dispose(): void;
            public forceLayout(): void;
            public closedDisplayMode: string;
            public static ClosedDisplayMode: {
                none: string;
                minimal: string;
                compact: string;
                full: string;
            };
        }

        class ToolBar {
            public element: HTMLElement;
            public shownDisplayMode: string;
            public data: WinJS.Binding.List<ICommand>;
            public extraClass: string;
            constructor(element?: HTMLElement, options?: any);
            public dispose(): void;
            public forceLayout(): void;
        }

        class PrivateItemContainer extends WinJS.UI.ItemContainer {
            _selectionMode: WinJS.UI.SelectionMode;
            _onFocusIn();
            _onFocusOut();
            _onKeyDown(e);
            _itemEventsHandler;
            _itemBox;
            _disposed: boolean;
            static _ClassName;
        }

        var _ItemEventsHandler;
        var _LEFT_MSPOINTER_BUTTON;
        var _RIGHT_MSPOINTER_BUTTON;
        var _selectedClass;
        var _keyboardSeenLast;
        var _itemFocusOutlineClass;
        var _itemBoxClass;
        var _itemClass;
        var _headerClass;
        var _itemFocusClass;
        var _pressedClass;
        var _itemsContainerClass;
        var _laidOutClass;
        var _cellSpanningGridLayoutClass;
        var _listLayoutClass;
        var _gridLayoutClass;
        var _uniformGridLayoutClass;
        var _selectionModeClass;
        var _itemsBlockClass;
        var _structuralNodesClass;
        var _progressClass;
        var _nonDraggableClass;
        var _nonSelectableClass;
        var _INVALID_INDEX;

        var _seenUrlsMaxSize: number;
        var _seenUrlsMRUMaxSize: number;
        function _seenUrl(url:string);
        function _getSeenUrlsMRU(): string[];
        function _getSeenUrls(): string[];

        function _animationTimeAdjustment(time: number);

        function _rotationTransform3d(angle, axis);
        function _tiltTransform(clickX, clickY, elementRect);

        var ListDataSource;
        var _SelectionMode;
        var _SelectionManager;
        var _NoGroups;
        var _VersionManager;
        var _getMargins;
        var _ItemSet;
        var _Selection;
        var _LayoutCommon;
        var _LISTVIEW_PROGRESS_DELAY;
        var _Overlay;
        var _AppBarCommandsLayout;

        module XYFocus {
            function _xyFocus(direction: string, referenceRect?: IRect): void;
        }

        module Pages {
            function _remove(frag);
            var _cacheStore;
        }

        module Fragments {
            var _cacheStore;
            function clearCache();
            var _forceLocal;
            var _getFragmentContents;
            var _writeProfilerMark;
        }
    }

    module Binding {
        class PrivateList<T> extends List<T> {
            _getKey(index: number): string;
            _getFromKey(key: string): T;
            _spliceFromKey(key: string, howMany: number, ...items: T[]): T[];
            _notifyMutatedFromKey(key: string);
        }
        function _bindingParser(input, context);
        function getValue(obj: any, path: string[]);

        class PrivateTemplate extends Template {
            static _interpretAll: boolean;
            _shouldCompile: boolean;
            _renderImpl;
            _compileTemplate;
            _reset;
        }

        var _TemplateCompiler;
    }
}