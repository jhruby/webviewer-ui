(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[3430],{"./src/components/ModularComponents/CustomButton/CustomButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CancelButton:()=>CancelButton,ConfirmButton:()=>ConfirmButton,DefaultButton:()=>DefaultButton,DefaultButtonOnHover:()=>DefaultButtonOnHover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_CustomButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ModularComponents/CustomButton/CustomButton.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/initialState.js"),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CustomButton",component:_CustomButton__WEBPACK_IMPORTED_MODULE_1__.A};var store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.U1)({reducer:function(){return src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A}}),BasicComponent=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomButton__WEBPACK_IMPORTED_MODULE_1__.A,props))},DefaultButton=BasicComponent.bind({});DefaultButton.args={dataElement:"button-data-element",title:"Button title",disabled:!1,label:"Click",img:"icon-save",onClick:function(){alert("Clicked!")}};var DefaultButtonOnHover=BasicComponent.bind({});DefaultButtonOnHover.args={dataElement:"button-data-element",title:"Button title",disabled:!1,label:"Click",img:"icon-save",onClick:function(){alert("Clicked!")}},DefaultButtonOnHover.parameters={pseudo:{hover:!0}};var ConfirmButton=BasicComponent.bind({});ConfirmButton.args={dataElement:"button-data-element",title:"Apply Fields",label:"Apply Fields",preset:"confirm",onClick:function(){alert("Apply Fields button clicked!")}};var CancelButton=BasicComponent.bind({});CancelButton.args={dataElement:"button-data-element",title:"Cancel",label:"Cancel",preset:"cancel",onClick:function(){alert("Cancel button clicked!")}},DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:"props => {\n  return <Provider store={store}>\n      <CustomButton {...props} />\n    </Provider>;\n}",...DefaultButton.parameters?.docs?.source}}},DefaultButtonOnHover.parameters={...DefaultButtonOnHover.parameters,docs:{...DefaultButtonOnHover.parameters?.docs,source:{originalSource:"props => {\n  return <Provider store={store}>\n      <CustomButton {...props} />\n    </Provider>;\n}",...DefaultButtonOnHover.parameters?.docs?.source}}},ConfirmButton.parameters={...ConfirmButton.parameters,docs:{...ConfirmButton.parameters?.docs,source:{originalSource:"props => {\n  return <Provider store={store}>\n      <CustomButton {...props} />\n    </Provider>;\n}",...ConfirmButton.parameters?.docs?.source}}},CancelButton.parameters={...CancelButton.parameters,docs:{...CancelButton.parameters?.docs,source:{originalSource:"props => {\n  return <Provider store={store}>\n      <CustomButton {...props} />\n    </Provider>;\n}",...CancelButton.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultButton","DefaultButtonOnHover","ConfirmButton","CancelButton"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModularComponents/CustomButton/CustomButton.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CustomButton:hover{cursor:pointer;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.CustomButton:active,.CustomButton:hover{border:none;background-color:var(--faded-component-background)}.CustomButton:active{box-shadow:inset 0 0 0 1px var(--blue-5);color:var(--blue-5)}.CustomButton:active .Icon{color:var(--blue-5)}.CustomButton{padding:5px;width:-moz-fit-content;width:fit-content;min-width:32px}.CustomButton:active{cursor:default}.CustomButton:active .Icon svg path{fill:var(--view-header-icon-active-fill)}.CustomButton.confirm-button{background-color:var(--primary-button);border:1px solid var(--primary-button);color:var(--primary-button-text);padding:7px 14px;width:-moz-fit-content;width:fit-content;border-radius:5px;height:30px;cursor:pointer}.CustomButton.confirm-button:hover{background:var(--primary-button-hover)!important;border:1px solid var(--primary-button-hover)!important;border-radius:5px!important}.CustomButton.cancel-button{color:var(--secondary-button-text);background-color:transparent;padding:7px 14px;width:-moz-fit-content;width:fit-content;border-radius:5px;height:30px;cursor:pointer}.CustomButton.cancel-button:hover{color:var(--secondary-button-hover);background:transparent}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/ModularComponents/CustomButton/CustomButton.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModularComponents/CustomButton/CustomButton.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ModularComponents/CustomButton/CustomButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/Button/Button.scss"),__webpack_require__("./src/components/ModularComponents/CustomButton/CustomButton.scss"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/index.js"),constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants/customizationVariables.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var CustomButton=function(props){var forceTooltipPosition,_obj,title=props.title,dataElement=props.dataElement,label=props.label,img=props.img,onClick=props.onClick,disabled=props.disabled,className=props.className,preset=props.preset,headerPlacement=props.headerPlacement,ariaLabel=props.ariaLabel;return[constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.LEFT,constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.RIGHT].includes(headerPlacement)?forceTooltipPosition=headerPlacement===constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.LEFT?constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.RIGHT:constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.LEFT:[constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.TOP,constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.BOTTOM].includes(headerPlacement)&&(forceTooltipPosition=headerPlacement===constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.TOP?constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.BOTTOM:constants_customizationVariables__WEBPACK_IMPORTED_MODULE_5__.El.TOP),react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Button__WEBPACK_IMPORTED_MODULE_4__.A,{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()((_obj={CustomButton:!0,Button:!0},_define_property(_obj,className,className),_define_property(_obj,"confirm-button","confirm"===preset),_define_property(_obj,"cancel-button","cancel"===preset),_obj)),img,label,title,dataElement,onClick,disabled,forceTooltipPosition,ariaLabel})};CustomButton.propTypes={dataElement:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,img:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func,disabled:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};const __WEBPACK_DEFAULT_EXPORT__=CustomButton;CustomButton.__docgenInfo={description:"",methods:[],displayName:"CustomButton",props:{dataElement:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},img:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}}}]);