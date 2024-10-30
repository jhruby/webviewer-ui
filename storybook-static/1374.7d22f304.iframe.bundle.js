"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[1374,8993,6136,3303,5684,8541,922],{"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Choice/Choice.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Choice});var tslib_es6=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/node_modules/tslib/tslib.es6.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");var tabObservable=new(function(){function AccessibleFocusObservable(){var _this=this;this._handleFirstTab=function(event){"Tab"===event.key&&(_this._setIsUserTabbing(!0),_this._tabToMouseListener())},this._handleFirstMouse=function(){_this._setIsUserTabbing(!1),_this._mouseToTabListener()},this._subscribers=[],this._isUserTabbing=!1}return Object.defineProperty(AccessibleFocusObservable.prototype,"value",{get:function(){return this._isUserTabbing},enumerable:!1,configurable:!0}),AccessibleFocusObservable.prototype.subscribe=function(subscriber){return 0===this._subscribers.length&&(this._isUserTabbing?this._tabToMouseListener():this._mouseToTabListener()),this._subscribers.includes(subscriber)||this._subscribers.push(subscriber),this._unsubscribe(subscriber)},AccessibleFocusObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s!==subscriber})),0===_this._subscribers.length&&_this._removeAllListeners()}},AccessibleFocusObservable.prototype._setIsUserTabbing=function(isUserTabbing){this._isUserTabbing=isUserTabbing,this._subscribers.forEach((function(subscriber){return subscriber()}))},AccessibleFocusObservable.prototype._tabToMouseListener=function(){window.removeEventListener("keydown",this._handleFirstTab),window.addEventListener("mousedown",this._handleFirstMouse)},AccessibleFocusObservable.prototype._mouseToTabListener=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.addEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable.prototype._removeAllListeners=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.removeEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable}()),useFocus=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useFocus.js"),useID=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js"),Icon=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Icon/Icon.js"),Choice=(0,react.forwardRef)((function(_a,ref){var label=_a.label,leftLabel=_a.leftLabel,className=_a.className,children=_a.children,id=_a.id,radio=_a.radio,isSwitch=_a.isSwitch,center=_a.center,disabledLabelChange=_a.disabledLabelChange,onChange=_a.onChange,onFocus=_a.onFocus,onBlur=_a.onBlur,props=(0,tslib_es6.Tt)(_a,["label","leftLabel","className","children","id","radio","isSwitch","center","disabledLabelChange","onChange","onFocus","onBlur"]),inputRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(function(){return inputRef.current}));var isUserTabbing=function useAccessibleFocus(observable){void 0===observable&&(observable=tabObservable);var _a=(0,react.useState)(observable.value),isUserTabbing=_a[0],setIsUserTabbing=_a[1];return(0,react.useEffect)((function(){return observable.subscribe((function(){return setIsUserTabbing(observable.value)}))}),[observable]),isUserTabbing}(),_b=(0,useFocus.i)(onFocus,onBlur),focused=_b.focused,handleOnFocus=_b.handleOnFocus,handleOnBlur=_b.handleOnBlur,choiceID=(0,useID.B)(id),_c=(0,react.useState)((function(){var _a,_b,_c;return null!==(_c=null!==(_a=props.checked)&&void 0!==_a?_a:null===(_b=inputRef.current)||void 0===_b?void 0:_b.checked)&&void 0!==_c&&_c})),checked=_c[0],setChecked=_c[1];(0,react.useEffect)((function(){void 0!==props.checked&&setChecked(props.checked)}),[props.checked]);(0,react.useEffect)((function(){if(props.name&&radio)return observable.subscribe(props.name,(function(){inputRef.current&&inputRef.current.checked!==checked&&setChecked(inputRef.current.checked)}))}),[checked,props.name,radio]);var choiceClass=classnames_default()("ui__base ui__choice",{"ui__choice--radio":radio,"ui__choice--leftLabel":leftLabel,"ui__choice--checked":checked,"ui__choice--center":center,"ui__choice--disabled":props.disabled},className),inputClass=classnames_default()("ui__choice__input",{"ui__choice__input--switch":isSwitch}),checkClass=isSwitch?classnames_default()("ui__choice__input__switch",{"ui__choice__input__switch--checked":checked,"ui__choice__input__switch--disabled":props.disabled,"ui__choice__input__switch--focus":isUserTabbing&&focused}):classnames_default()("ui__choice__input__check",{"ui__choice__input__check--checked":checked,"ui__choice__input__check--disabled":props.disabled,"ui__choice__input__check--focus":isUserTabbing&&focused}),labelClass=classnames_default()("ui__choice__label",{"ui__choice__label--disabled":props.disabled&&disabledLabelChange}),labelElement=(0,react.useMemo)((function(){if(label)return react.createElement("label",{className:labelClass,htmlFor:choiceID},label)}),[choiceID,label,labelClass]);return react.createElement("span",{className:choiceClass},leftLabel?labelElement:void 0,react.createElement("span",{className:inputClass},isSwitch?react.createElement("div",{className:checkClass},react.createElement("div",{className:"ui__choice__input__toggle"})):react.createElement("div",{className:checkClass},checked&&!radio?react.createElement(Icon.I,{icon:"Check",className:"ui__choice__input__icon"}):void 0),react.createElement("input",(0,tslib_es6.Cl)({},props,{id:choiceID,type:radio?"radio":"checkbox",onChange:function(event){void 0===props.checked&&setChecked(event.target.checked),null==onChange||onChange(event)},ref:inputRef,onFocus:handleOnFocus,onBlur:handleOnBlur}),children)),leftLabel?void 0:labelElement)})),observable=new(function(){function RadioObservable(){this._subscribers=[]}return RadioObservable.prototype.subscribe=function(name,subscriber){return this._trigger(name),this._subscribers.push({name,subscriber}),this._unsubscribe(subscriber)},RadioObservable.prototype._trigger=function(name){this._subscribers.forEach((function(s){name===s.name&&s.subscriber()}))},RadioObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s.subscriber!==subscriber}))}},RadioObservable}())},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useID});var react=__webpack_require__("./node_modules/react/index.js"),currentId=0;function getStringId(prefix){return void 0===prefix&&(prefix="id"),prefix+"_"+(currentId++).toString(16)}function useID(id){return(0,react.useMemo)((function(){return id||getStringId("label")}),[id])}},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/utils/domUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O1:()=>focusableElementDomString});var focusableElementDomString=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",")},"./node_modules/react-swipeable/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hx:()=>Swipeable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultProps={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},initialState={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},LEFT="Left",RIGHT="Right",UP="Up",DOWN="Down",touchStart="touchstart",touchMove="touchmove",touchEnd="touchend",mouseMove="mousemove",mouseUp="mouseup";function rotateXYByAngle(pos,angle){if(0===angle)return pos;var angleInRadians=Math.PI/180*angle;return[pos[0]*Math.cos(angleInRadians)+pos[1]*Math.sin(angleInRadians),pos[1]*Math.cos(angleInRadians)-pos[0]*Math.sin(angleInRadians)]}function getHandlers(set,handlerProps){var onStart=function onStart(event){event.touches&&event.touches.length>1||set((function(state,props){props.trackMouse&&(document.addEventListener(mouseMove,onMove),document.addEventListener(mouseUp,onUp));var _ref=event.touches?event.touches[0]:event,xy=rotateXYByAngle([_ref.clientX,_ref.clientY],props.rotationAngle);return _extends({},state,initialState,{eventData:{initial:[].concat(xy),first:!0},xy,start:event.timeStamp||0})}))},onMove=function onMove(event){set((function(state,props){if(!state.xy[0]||!state.xy[1]||event.touches&&event.touches.length>1)return state;var _ref2=event.touches?event.touches[0]:event,_rotateXYByAngle=rotateXYByAngle([_ref2.clientX,_ref2.clientY],props.rotationAngle),x=_rotateXYByAngle[0],y=_rotateXYByAngle[1],deltaX=state.xy[0]-x,deltaY=state.xy[1]-y,absX=Math.abs(deltaX),absY=Math.abs(deltaY),time=(event.timeStamp||0)-state.start,velocity=Math.sqrt(absX*absX+absY*absY)/(time||1);if(absX<props.delta&&absY<props.delta&&!state.swiping)return state;var dir=function getDirection(absX,absY,deltaX,deltaY){return absX>absY?deltaX>0?LEFT:RIGHT:deltaY>0?UP:DOWN}(absX,absY,deltaX,deltaY),eventData=_extends({},state.eventData,{event,absX,absY,deltaX,deltaY,velocity,dir});props.onSwiping&&props.onSwiping(eventData);var cancelablePageSwipe=!1;return(props.onSwiping||props.onSwiped||props["onSwiped"+dir])&&(cancelablePageSwipe=!0),cancelablePageSwipe&&props.preventDefaultTouchmoveEvent&&props.trackTouch&&event.cancelable&&event.preventDefault(),_extends({},state,{eventData:_extends({},eventData,{first:!1}),swiping:!0})}))},onEnd=function onEnd(event){set((function(state,props){var eventData;return state.swiping&&(eventData=_extends({},state.eventData,{event}),props.onSwiped&&props.onSwiped(eventData),props["onSwiped"+eventData.dir]&&props["onSwiped"+eventData.dir](eventData)),_extends({},state,initialState,{eventData})}))},cleanUpMouse=function cleanUpMouse(){document.removeEventListener(mouseMove,onMove),document.removeEventListener(mouseUp,onUp)},onUp=function onUp(e){cleanUpMouse(),onEnd(e)},attachTouch=function attachTouch(el){if(el&&el.addEventListener){var tls=[[touchStart,onStart],[touchMove,onMove],[touchEnd,onEnd]];return tls.forEach((function(_ref3){var e=_ref3[0],h=_ref3[1];return el.addEventListener(e,h)})),function(){return tls.forEach((function(_ref4){var e=_ref4[0],h=_ref4[1];return el.removeEventListener(e,h)}))}}},output={ref:function onRef(el){null!==el&&set((function(state,props){if(state.el===el)return state;var addState={};return state.el&&state.el!==el&&state.cleanUpTouch&&(state.cleanUpTouch(),addState.cleanUpTouch=null),props.trackTouch&&el&&(addState.cleanUpTouch=attachTouch(el)),_extends({},state,{el},addState)}))}};return handlerProps.trackMouse&&(output.onMouseDown=onStart),[output,attachTouch]}function updateTransientState(state,props,attachTouch){var addState={};return!props.trackTouch&&state.cleanUpTouch?(state.cleanUpTouch(),addState.cleanUpTouch=null):props.trackTouch&&!state.cleanUpTouch&&state.el&&(addState.cleanUpTouch=attachTouch(state.el)),_extends({},state,addState)}var Swipeable=function(_React$PureComponent){function Swipeable(props){var _this;return(_this=_React$PureComponent.call(this,props)||this)._set=function(cb){_this.transientState=cb(_this.transientState,_this.props)},_this.transientState=_extends({},initialState,{type:"class"}),_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(Swipeable,_React$PureComponent),Swipeable.prototype.render=function render(){var _this$props=this.props,className=_this$props.className,style=_this$props.style,_this$props$nodeName=_this$props.nodeName,nodeName=void 0===_this$props$nodeName?"div":_this$props$nodeName,innerRef=_this$props.innerRef,children=_this$props.children,trackMouse=_this$props.trackMouse,_getHandlers=getHandlers(this._set,{trackMouse}),handlers=_getHandlers[0],attachTouch=_getHandlers[1];this.transientState=updateTransientState(this.transientState,this.props,attachTouch);var ref=innerRef?function(el){return innerRef(el),handlers.ref(el)}:handlers.ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(nodeName,_extends({},handlers,{className,style,ref}),children)},Swipeable}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);Swipeable.propTypes={onSwiped:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwiping:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedUp:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedRight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedDown:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onSwipedLeft:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,delta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,preventDefaultTouchmoveEvent:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,nodeName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,trackMouse:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,trackTouch:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,innerRef:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,rotationAngle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number},Swipeable.defaultProps=defaultProps}}]);