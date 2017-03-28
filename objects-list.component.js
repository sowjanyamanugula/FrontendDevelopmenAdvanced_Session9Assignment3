"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myservice_service_1 = require('./myservice.service');
var ObjComponent = (function () {
    function ObjComponent(_objserice) {
        this._objserice = _objserice;
        this.objects = [];
    }
    ObjComponent.prototype.ngOnInit = function () {
        this.objects = this._objserice.getobjects();
    };
    ObjComponent = __decorate([
        core_1.Component({
            selector: 'obj-app',
            template: "<ul *ngFor=\"let obj of objects\">\n                <li>{{obj.name}}</li>\n             </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [myservice_service_1.MyService])
    ], ObjComponent);
    return ObjComponent;
}());
exports.ObjComponent = ObjComponent;
//# sourceMappingURL=objects-list.component.js.map