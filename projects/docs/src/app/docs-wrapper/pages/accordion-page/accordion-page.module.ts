import { NgModule } from "@angular/core";
import { AccordionModule } from "@sebgroup/ng-components/accordion";
import { CheckboxModule } from "@sebgroup/ng-components/checkbox";
import { StepperModule } from "@sebgroup/ng-components/stepper";
import { AccordionPageComponent } from "./accordion-page.component";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DocPageModule } from "../../doc-page/doc-page.module";
import { FormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: AccordionPageComponent }];

@NgModule({
    declarations: [AccordionPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule, DocPageModule, AccordionModule, CheckboxModule, StepperModule],
})
export class AccordionPageModule {}
