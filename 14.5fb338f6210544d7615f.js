(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"11B/":function(t,i,n){"use strict";n.d(i,"a",(function(){return h}));var e=n("kZht"),o=n("An66");function s(t,i){if(1&t&&(e.Rb(0,"h5",6),e.Gc(1),e.Qb()),2&t){var n=e.cc();e.yb(1),e.Hc(n.title)}}function a(t,i){if(1&t&&(e.Rb(0,"p",7),e.Gc(1),e.Qb()),2&t){var n=e.cc();e.yb(1),e.Hc(n.message)}}function c(t,i){if(1&t&&(e.Pb(0),e.Rb(1,"div",10),e.Rb(2,"button",11),e.Yb("click",(function(){return i.$implicit.action()})),e.Gc(3),e.Qb(),e.Qb(),e.Ob()),2&t){var n=i.$implicit;e.yb(3),e.Ic(" ",n.text," ")}}function r(t,i){if(1&t&&(e.Rb(0,"div",8),e.Ec(1,c,4,1,"ng-container",9),e.Qb()),2&t){var n=e.cc();e.Db("partitioned",2===n.actions.length&&"slide-in"===n.style),e.yb(1),e.kc("ngForOf",n.actions)}}function l(t,i){1&t&&e.Nb(0)}function p(t,i){if(1&t){var n=e.Sb();e.Rb(0,"div",12),e.Yb("click",(function(){return e.uc(n),e.cc().dismissNotification()})),e.Ec(1,l,1,0,"ng-container",13),e.Qb()}if(2&t){e.cc();var o=e.tc(8);e.yb(1),e.kc("ngTemplateOutlet",o)}}function m(t,i){1&t&&(e.bc(),e.Rb(0,"svg",14),e.Mb(1,"path",15),e.Qb())}var f=["*"],h=function(){function t(){this.dismissable=!0,this.persist=!1,this.notificationClick=new e.n,this.dismiss=new e.n,this.showNotificationBody=!1,this.showNotificationTitle=!1,this.timerRef={current:null},this.defaultTimeout=5e3}return t.prototype.getStyleClass=function(){var t=this,i="style-";this.style&&["slide-in","bar"].some((function(i){return i===t.style}))?i+=this.style:i+="slide-in",this.notificationClassNames+=" "+i,this.showNotificationTitle=this.title&&"style-slide-in"===i,this.showNotificationBody="style-slide-in"===i&&this.actions&&this.actions.length&&this.actions.length<3},t.prototype.getThemeClass=function(){var t=this,i="theme-";this.theme&&["purple","primary","danger","success","warning","inverted"].some((function(i){return i===t.theme}))?i+=this.theme:i+="purple",this.notificationClassNames+=" "+i},t.prototype.getPositionClass=function(){var t,i=this,n=this.position;if(this.style&&["slide-in","bar"].some((function(t){return t===i.style})))switch(this.style){case"slide-in":t=n&&["bottom-left","bottom-right","top-left","top-right"].some((function(t){return t===n}))?n:"bottom-left";break;case"bar":t=n&&["top","bottom"].some((function(t){return t===n}))?n:"top"}else t=n&&["bottom-left","bottom-right","top-left","top-right"].some((function(t){return t===n}))?n:"bottom-left";this.notificationClassNames+=" "+t},t.prototype.startTimer=function(){var t=this;this.clearTimer(),this.timerRef.current=setTimeout((function(){t.dismissNotification()}),this.dismissTimeout||this.defaultTimeout)},t.prototype.dismissNotification=function(){this.clearTimer(),this.dismiss.emit()},t.prototype.clearTimer=function(){this.timerRef.current&&(clearTimeout(this.timerRef.current),this.timerRef.current=null)},t.prototype.setClassNames=function(){this.notificationClassNames="custom-notification",this.getStyleClass(),this.getThemeClass(),this.getPositionClass(),this.notificationClassNames+=this.toggle?" open":"",this.notificationClassNames+=this.className?" "+this.className:""},t.prototype.ngOnInit=function(){this.setClassNames(),this.toggle&&!this.persist&&this.startTimer()},t.prototype.ngOnChanges=function(t){t.toggle&&(this.toggle&&!this.persist?this.startTimer():this.clearTimer(),this.setClassNames()),(t.style||t.position||t.className||t.actions||t.theme)&&this.setClassNames(),t.persist&&this.clearTimer()},t.prototype.ngOnDestroy=function(){this.clearTimer()},t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Fb({type:t,selectors:[["sebng-notification"]],inputs:{className:"className",dismissable:"dismissable",dismissTimeout:"dismissTimeout",persist:"persist",position:"position",style:"style",theme:"theme",title:"title",message:"message",toggle:"toggle",actions:"actions"},outputs:{notificationClick:"notificationClick",dismiss:"dismiss"},features:[e.wb],ngContentSelectors:f,decls:9,vars:9,consts:[[1,"content-wrapper",3,"click"],["class","notification-title",4,"ngIf"],["class","notification-message",4,"ngIf"],["class","actions-wrapper",3,"partitioned",4,"ngIf"],["class","dismiss-btn",3,"click",4,"ngIf"],["closeIcon",""],[1,"notification-title"],[1,"notification-message"],[1,"actions-wrapper"],[4,"ngFor","ngForOf"],[1,"action-wrapper"],[1,"btn","btn-sm","btn-secondary","notification-action",3,"click"],[1,"dismiss-btn",3,"click"],[4,"ngTemplateOutlet"],["name","times","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 384 512"],["d","M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z"]],template:function(t,i){1&t&&(e.jc(),e.Rb(0,"div"),e.Rb(1,"div",0),e.Yb("click",(function(t){return i.notificationClick.emit(t)})),e.Ec(2,s,2,1,"h5",1),e.Ec(3,a,2,1,"p",2),e.ic(4),e.Ec(5,r,2,3,"div",3),e.Qb(),e.Ec(6,p,2,1,"div",4),e.Qb(),e.Ec(7,m,2,0,"ng-template",null,5,e.Fc)),2&t&&(e.Bb(i.notificationClassNames),e.yb(1),e.Db("clickable",!!i.notificationClick.observers.length),e.yb(1),e.kc("ngIf",i.title),e.yb(1),e.kc("ngIf",i.message),e.yb(2),e.kc("ngIf",i.actions),e.yb(1),e.kc("ngIf",i.dismissable))},directives:[o.t,o.s,o.A],styles:[".custom-notification{position:fixed;display:block;z-index:1070;opacity:0;will-change:transform,opacity;transition:transform .6s cubic-bezier(.65,-.15,.47,1.16),opacity .8s ease-in-out}.custom-notification .content-wrapper{min-height:30px;position:relative;box-shadow:0 4px 4px -2px rgba(0,0,0,.25),3px 4px 15px rgba(0,0,0,.5);padding:8px 13px;color:#fff}.custom-notification .content-wrapper.clickable{cursor:pointer}.custom-notification .content-wrapper .notification-title{color:#fff;font-weight:500;padding-right:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}.custom-notification .content-wrapper .notification-message{color:#fff;font-size:12px;padding-right:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0}.custom-notification .content-wrapper .actions-wrapper{margin-top:10px}.custom-notification .content-wrapper .actions-wrapper .action-wrapper{text-align:center}.custom-notification .content-wrapper .actions-wrapper .action-wrapper .notification-action{background-color:transparent;width:100%;border:1px solid #fff;border-radius:3px;will-change:background-color,color;transition:background-color .2s,color .2s;color:#fff}.custom-notification .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{background-color:#fff}.custom-notification .content-wrapper .actions-wrapper .action-wrapper .notification-action:focus{box-shadow:none}.custom-notification .content-wrapper .actions-wrapper.partitioned .action-wrapper{display:inline-block;width:50%}.custom-notification .content-wrapper .actions-wrapper.partitioned .action-wrapper:first-child{padding-right:2px}.custom-notification .content-wrapper .actions-wrapper.partitioned .action-wrapper:last-child{padding-left:2px}.custom-notification .dismiss-btn{position:absolute;top:10px;right:8px;cursor:pointer;will-change:top,right}.custom-notification .dismiss-btn svg{fill:#fff;position:relative;display:block;width:16px;height:16px}.custom-notification.style-slide-in{width:300px}.custom-notification.style-slide-in.bottom-left{-ms-transform:translateX(-300px) translateX(-50px);transform:translateX(calc(-300px - 50px));left:20px;bottom:15px}.custom-notification.style-slide-in.bottom-right{-ms-transform:translateX(-300px) translateX(-50px);transform:translateX(calc(300px + 50px));right:20px;bottom:15px}.custom-notification.style-slide-in.top-left{-ms-transform:translateX(-300px) translateX(-50px);transform:translateX(calc(-300px - 50px));left:20px;top:15px}.custom-notification.style-slide-in.top-right{-ms-transform:translateX(-300px) translateX(-50px);transform:translateX(calc(300px + 50px));right:20px;top:15px}.custom-notification.style-slide-in.open{transform:translateX(0);opacity:1}.custom-notification.style-slide-in .content-wrapper{border-radius:4px;will-change:box-shadow,top,left;transition:box-shadow 80ms linear,top .1s ease,left .1s ease,background-color .2s ease}.custom-notification.style-slide-in .content-wrapper.clickable:active{box-shadow:0 0 0 0 transparent,1px 2px 11px rgba(0,0,0,.5);top:1px;left:1px}.custom-notification.style-slide-in .content-wrapper.clickable:active+.dismiss-btn{top:9px;right:7px}.custom-notification.style-bar{width:100vw;left:0;right:0}.custom-notification.style-bar .content-wrapper{display:flex;align-items:center}.custom-notification.style-bar .content-wrapper .notification-title{margin-bottom:0}.custom-notification.style-bar .content-wrapper .actions-wrapper{display:flex;margin:0}.custom-notification.style-bar .content-wrapper .actions-wrapper>.action-wrapper:first-child:not(:last-child){margin-right:10px}.custom-notification.style-bar.top{top:0;transform:translateY(-150%)}.custom-notification.style-bar.bottom{bottom:0;transform:translateY(150%)}.custom-notification.style-bar.open{transform:translateY(0);opacity:1}.custom-notification.theme-purple .content-wrapper{background-color:#4f2c99}.custom-notification.theme-purple .content-wrapper.clickable:hover{background-color:#5f35b9}.custom-notification.theme-purple .content-wrapper.clickable:active{background-color:#4f2c99}.custom-notification.theme-purple .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#4f2c99}.custom-notification.theme-purple .dismiss-btn svg:hover{fill:#000}.custom-notification.theme-inverted .content-wrapper{background-color:#000}.custom-notification.theme-inverted .content-wrapper.clickable:hover{background-color:#141414}.custom-notification.theme-inverted .content-wrapper.clickable:active{background-color:#000}.custom-notification.theme-inverted .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#000}.custom-notification.theme-inverted .dismiss-btn svg:hover{fill:#868686}.custom-notification.theme-primary .content-wrapper{background-color:#007ac7}.custom-notification.theme-primary .content-wrapper.clickable:hover{background-color:#0093f0}.custom-notification.theme-primary .content-wrapper.clickable:active{background-color:#007ac7}.custom-notification.theme-primary .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#007ac7}.custom-notification.theme-primary .dismiss-btn svg:hover{fill:#000}.custom-notification.theme-success .content-wrapper{background-color:#379d00}.custom-notification.theme-success .content-wrapper.clickable:hover{background-color:#45c600}.custom-notification.theme-success .content-wrapper.clickable:active{background-color:#379d00}.custom-notification.theme-success .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#379d00}.custom-notification.theme-success .dismiss-btn svg:hover{fill:#000}.custom-notification.theme-danger .content-wrapper{background-color:#d81a1a}.custom-notification.theme-danger .content-wrapper.clickable:hover{background-color:#e73434}.custom-notification.theme-danger .content-wrapper.clickable:active{background-color:#d81a1a}.custom-notification.theme-danger .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#d81a1a}.custom-notification.theme-danger .dismiss-btn svg:hover{fill:#000}.custom-notification.theme-warning .content-wrapper{background-color:#ffb400}.custom-notification.theme-warning .content-wrapper.clickable:hover{background-color:#ffc029}.custom-notification.theme-warning .content-wrapper.clickable:active{background-color:#ffb400}.custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{color:#ffb400}.custom-notification.theme-warning .dismiss-btn svg:hover{fill:#fff}.custom-notification.theme-warning .content-wrapper{color:#000}.custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action{border-color:#000;color:#000}.custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover{border-color:#fff;color:#000}.custom-notification.theme-warning .dismiss-btn svg{fill:#000}@media only screen and (max-width:420px){.custom-notification.style-slide-in{opacity:0;width:90%;right:auto}.custom-notification.style-slide-in.bottom-left,.custom-notification.style-slide-in.bottom-right,.custom-notification.style-slide-in.top-left,.custom-notification.style-slide-in.top-right{left:50%}.custom-notification.style-slide-in.bottom-left,.custom-notification.style-slide-in.bottom-right{transform:translate(-50%,150%);bottom:15px;top:auto}.custom-notification.style-slide-in.top-left,.custom-notification.style-slide-in.top-right{transform:translate(-50%,-150%);bottom:auto;top:15px}.custom-notification.style-slide-in.open{transform:translate(-50%);opacity:1}}"],encapsulation:2}),t}()},"3pz0":function(t,i,n){"use strict";n.r(i),n.d(i,"NotificationPageComponent",(function(){return f}));var e=n("kZht"),o=n("uvI4"),s=n("11B/"),a=n("qCN4"),c=n("3kIJ"),r=n("An66"),l=n("+Miz");function p(t,i){if(1&t){var n=e.Sb();e.Rb(0,"sebng-dropdown",15),e.Yb("ngModelChange",(function(t){return e.uc(n),e.cc().position=t})),e.Qb()}if(2&t){var o=e.cc();e.kc("ngModel",o.position)("list",o.positionList)}}function m(t,i){if(1&t){var n=e.Sb();e.Rb(0,"sebng-dropdown",16),e.Yb("ngModelChange",(function(t){return e.uc(n),e.cc().positionBar=t})),e.Qb()}if(2&t){var o=e.cc();e.kc("ngModel",o.positionBar)("list",o.positionBarList)}}var f=function(){function t(){var t=this;this.themeList=[{label:"purple",value:"purple",key:"purple"},{label:"primary",value:"primary",key:"primary"},{label:"danger",value:"danger",key:"danger"},{label:"success",value:"success",key:"success"},{label:"warning",value:"warning",key:"warning"},{label:"inverted",value:"inverted",key:"inverted"}],this.positionList=[{label:"bottom-left",value:"bottom-left",key:"bottom-left"},{label:"bottom-right",value:"bottom-right",key:"bottom-right"},{label:"top-left",value:"top-left",key:"top-left"},{label:"top-right",value:"top-right",key:"top-right"}],this.positionBarList=[{label:"top",value:"top",key:"top"},{label:"bottom",value:"bottom",key:"bottom"}],this.styleList=[{label:"slide-in",value:"slide-in",key:"slide-in"},{label:"bar",value:"bar",key:"bar"}],this.actions=[{text:"Remind me later",action:function(){return t.toggle=!1}},{text:"Dismiss",action:function(){return t.toggle=!1}}],this.importString=n("m0df"),this.snippet='<sebng-notification\n    [toggle]="toggle"\n    title="Notification Title"\n    message="message"\n    (onDismiss)="toggle = false"\n></sebng-notification>',this.style=this.styleList[0],this.theme=this.themeList[0],this.position=this.positionList[0],this.positionBar=this.positionBarList[0],this.dismissable=!1,this.persist=!1,this.showActions=!1,this.showTitle=!0,document.title="Notification - SEB Angular Components"}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Fb({type:t,selectors:[["app-notification-page"]],decls:20,vars:23,consts:[[3,"importString","centered"],["example",""],[1,"btn","btn-primary",3,"click"],[3,"toggle","title","message","theme","position","dismissable","persist","actions","dismiss"],["controls",""],[1,"form-group"],["label","Style",3,"ngModel","list","ngModelChange"],["label","Theme",3,"ngModel","list","ngModelChange"],["label","Position (slide-in style only)",3,"ngModel","list","ngModelChange",4,"ngIf"],["label","Position (bar style only)",3,"ngModel","list","ngModelChange",4,"ngIf"],["label","Show/hide title",3,"ngModel","ngModelChange"],["label","Dismissable","description","Shows a close button for the user to dismiss it",3,"ngModel","ngModelChange"],["label","Persist","description","Persists the notification until its dismissed manually",3,"ngModel","ngModelChange"],["label","Actions","description","You can add up to 2 actions inside the notification",3,"ngModel","ngModelChange"],["code",""],["label","Position (slide-in style only)",3,"ngModel","list","ngModelChange"],["label","Position (bar style only)",3,"ngModel","list","ngModelChange"]],template:function(t,i){1&t&&(e.Rb(0,"app-doc-page",0),e.Pb(1,1),e.Rb(2,"button",2),e.Yb("click",(function(){return i.toggle=!0})),e.Gc(3,"Toggle notification"),e.Qb(),e.Rb(4,"sebng-notification",3),e.Yb("dismiss",(function(){return i.toggle=!1})),e.Qb(),e.Ob(),e.Pb(5,4),e.Rb(6,"div",5),e.Rb(7,"sebng-dropdown",6),e.Yb("ngModelChange",(function(t){return i.style=t})),e.Qb(),e.Qb(),e.Rb(8,"div",5),e.Rb(9,"sebng-dropdown",7),e.Yb("ngModelChange",(function(t){return i.theme=t})),e.Qb(),e.Qb(),e.Rb(10,"div",5),e.Ec(11,p,1,2,"sebng-dropdown",8),e.Ec(12,m,1,2,"sebng-dropdown",9),e.Qb(),e.Rb(13,"div",5),e.Rb(14,"sebng-checkbox",10),e.Yb("ngModelChange",(function(t){return i.showTitle=t})),e.Qb(),e.Rb(15,"sebng-checkbox",11),e.Yb("ngModelChange",(function(t){return i.dismissable=t})),e.Qb(),e.Rb(16,"sebng-checkbox",12),e.Yb("ngModelChange",(function(t){return i.persist=t})),e.Qb(),e.Rb(17,"sebng-checkbox",13),e.Yb("ngModelChange",(function(t){return i.showActions=t})),e.Qb(),e.Qb(),e.Ob(),e.Pb(18,14),e.Gc(19),e.Ob(),e.Qb()),2&t&&(e.kc("importString",i.importString)("centered",!0),e.yb(4),e.Cc(i.style.value),e.kc("toggle",i.toggle)("title",i.showTitle?"Notification title":void 0)("message","Notification message")("theme",i.theme.value)("position","bar"===i.style.value?i.positionBar.value:i.position.value)("dismissable",i.dismissable)("persist",i.persist)("actions",i.showActions?i.actions:void 0),e.yb(3),e.kc("ngModel",i.style)("list",i.styleList),e.yb(2),e.kc("ngModel",i.theme)("list",i.themeList),e.yb(2),e.kc("ngIf","slide-in"===i.style.value),e.yb(1),e.kc("ngIf","bar"===i.style.value),e.yb(2),e.kc("ngModel",i.showTitle),e.yb(1),e.kc("ngModel",i.dismissable),e.yb(1),e.kc("ngModel",i.persist),e.yb(1),e.kc("ngModel",i.showActions),e.yb(2),e.Hc(i.snippet))},directives:[o.DocPageComponent,s.a,a.a,c.n,c.q,r.t,l.a],encapsulation:2}),t}()},m0df:function(t,i,n){"use strict";n.r(i),i.default='import {\n    OnChanges,\n    Component,\n    ViewEncapsulation,\n    Input,\n    Output,\n    EventEmitter,\n    OnInit,\n    SimpleChanges,\n    OnDestroy,\n    HostListener,\n} from "@angular/core";\n\nexport type NotificationStyle = "slide-in" | "bar";\nexport type NotificationPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "bottom";\nexport type NotificationTheme = "purple" | "primary" | "danger" | "success" | "warning" | "inverted";\n\nexport interface NotificationAction {\n    text: string;\n    action: () => void;\n}\n\n/** An alert which pops up on the page to inform the user of an event which occured and optionally provide actions to perform. */\n@Component({\n    selector: "sebng-notification",\n    templateUrl: "./notification.component.html",\n    styleUrls: ["./notification.component.scss"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class NotificationComponent implements OnChanges, OnInit, OnDestroy {\n    /** Element class name */\n    @Input() className?: string;\n    /** Property sets whether the notification is dismissable */\n    @Input() dismissable?: boolean = true;\n    /** Interval for the notification to be dismissed */\n    @Input() dismissTimeout?: number;\n    /** Persist notification until dismissed (default: false) */\n    @Input() persist?: boolean = false;\n    /** Notification position, "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "bottom" */\n    @Input() position?: NotificationPosition;\n    /** Notification style, "slide-in" | "bar" */\n    @Input() style?: NotificationStyle;\n    /** Notification theme, "purple" | "primary" | "danger" | "success" | "warning" | "inverted" */\n    @Input() theme?: NotificationTheme;\n    /** Notification title */\n    @Input() title?: string;\n    /** Notification content */\n    @Input() message?: string;\n    /** Property sets whether the notification is toggled */\n    @Input() toggle: boolean;\n    /** Display action buttons - max: 2 actions */\n    @Input() actions?: Array<NotificationAction>;\n    /** Callback when notification is clicked */\n    @Output() notificationClick?: EventEmitter<MouseEvent> = new EventEmitter();\n    /** Callback when notification is dismissed */\n    @Output() dismiss?: EventEmitter<void> = new EventEmitter();\n\n    public notificationClassNames: string;\n    public showNotificationBody: boolean = false;\n    public showNotificationTitle: boolean = false;\n    private timerRef: { current: any } = { current: null };\n    private defaultTimeout: any = 5000;\n\n    // helper functions\n\n    /**\n     * Get the style class based on the theme passed through the props\n     * @param {string} style The style passed through the props\n     */\n    private getStyleClass(): void {\n        let styleClass: string = "style-";\n        if (this.style && ["slide-in", "bar"].some((s: string) => s === this.style)) {\n            styleClass += this.style;\n        } else {\n            styleClass += "slide-in";\n        }\n\n        this.notificationClassNames += " " + styleClass;\n\n        this.showNotificationTitle = this.title && styleClass === "style-slide-in";\n        this.showNotificationBody = styleClass === "style-slide-in" && this.actions && this.actions.length && this.actions.length < 3;\n    }\n\n    /** Get the theme class based on the theme passed though the props */\n    private getThemeClass(): void {\n        let themeClass: string = "theme-";\n        if (\n            this.theme &&\n            ["purple", "primary", "danger", "success", "warning", "inverted"].some((t: NotificationTheme) => t === this.theme)\n        ) {\n            themeClass += this.theme;\n        } else {\n            themeClass += "purple";\n        }\n        this.notificationClassNames += " " + themeClass;\n    }\n\n    /** Get the position class based on the position and style passed through the props */\n    private getPositionClass(): void {\n        let positionClass: string;\n        const position: string = this.position;\n        if (this.style && ["slide-in", "bar"].some((s: string) => s === this.style)) {\n            switch (this.style) {\n                case "slide-in":\n                    if (position && ["bottom-left", "bottom-right", "top-left", "top-right"].some((p: string) => p === position)) {\n                        positionClass = position;\n                    } else {\n                        positionClass = "bottom-left";\n                    }\n                    break;\n                case "bar":\n                    if (position && ["top", "bottom"].some((p: string) => p === position)) {\n                        positionClass = position;\n                    } else {\n                        positionClass = "top";\n                    }\n                    break;\n            }\n        } else {\n            // Should default back to `slide-in`\n            if (position && ["bottom-left", "bottom-right", "top-left", "top-right"].some((p: string) => p === position)) {\n                positionClass = position;\n            } else {\n                positionClass = "bottom-left";\n            }\n        }\n\n        this.notificationClassNames += " " + positionClass;\n    }\n\n    /** Start the timer to dismiss the notification */\n    private startTimer(): void {\n        this.clearTimer();\n        this.timerRef.current = setTimeout(() => {\n            this.dismissNotification();\n        }, this.dismissTimeout || this.defaultTimeout);\n    }\n\n    /** Dismiss the notification */\n    public dismissNotification(): void {\n        this.clearTimer();\n        this.dismiss.emit();\n    }\n\n    /** Clear the timer that dismisses the notification */\n    private clearTimer(): void {\n        if (this.timerRef.current) {\n            clearTimeout(this.timerRef.current);\n            this.timerRef.current = null;\n        }\n    }\n\n    private setClassNames(): void {\n        this.notificationClassNames = "custom-notification";\n        this.getStyleClass();\n        this.getThemeClass();\n        this.getPositionClass();\n\n        this.notificationClassNames += this.toggle ? " open" : "";\n        this.notificationClassNames += this.className ? ` ${this.className}` : "";\n    }\n\n    // events\n    ngOnInit(): void {\n        this.setClassNames();\n        if (this.toggle && !this.persist) {\n            this.startTimer();\n        }\n    }\n\n    ngOnChanges(changes: SimpleChanges): void {\n        if (changes.toggle) {\n            if (this.toggle && !this.persist) {\n                this.startTimer();\n            } else {\n                this.clearTimer();\n            }\n\n            this.setClassNames();\n        }\n\n        if (changes.style || changes.position || changes.className || changes.actions || changes.theme) {\n            this.setClassNames();\n        }\n\n        if (changes.persist) {\n            this.clearTimer();\n        }\n    }\n\n    ngOnDestroy(): void {\n        this.clearTimer();\n    }\n}\n'}}]);