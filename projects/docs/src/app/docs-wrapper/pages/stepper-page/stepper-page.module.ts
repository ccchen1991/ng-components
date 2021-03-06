import { NgModule } from "@angular/core";
import { StepperModule } from "@sebgroup/ng-components/stepper";
import { StepperPageComponent } from "./stepper-page.component";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DocPageModule } from "../../doc-page/doc-page.module";
import { FormsModule } from "@angular/forms";
import { DynamicFormModule } from "../../../common/dynamic-form/dynamic-form.module";

const routes: Routes = [{ path: "", component: StepperPageComponent }];

@NgModule({
    declarations: [StepperPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule, DocPageModule, StepperModule, DynamicFormModule],
})
export class StepperPageModule {}
