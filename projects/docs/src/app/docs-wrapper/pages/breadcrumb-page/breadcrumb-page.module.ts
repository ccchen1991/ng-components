import { NgModule } from "@angular/core";
import { BreadcrumbModule } from "@sebgroup/ng-components/breadcrumb";
import { BreadcrumbPageComponent } from "./breadcrumb-page.component";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DocPageModule } from "../../doc-page/doc-page.module";
import { FormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: BreadcrumbPageComponent }];

@NgModule({
    declarations: [BreadcrumbPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FormsModule, DocPageModule, BreadcrumbModule],
})
export class BreadcrumbPageModule {}
