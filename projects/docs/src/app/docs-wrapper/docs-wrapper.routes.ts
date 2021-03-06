import { Routes } from "@angular/router";
import { DocsWrapperComponent } from "./docs-wrapper.component";
import components from "../../assets/components-list.json";

function getComponentPageRoutes(): Routes {
    return components.map(({ path, filePath, module }: ComponentsListItem) => {
        const component: string = path.replace("/docs/", "");
        return {
            path: component,
            // This is the only way to trigger Angular to pre-process the file path import(`${filePath})
            loadChildren: () => import(`${filePath}`).then(m => m[module]),
        };
    });
}

export const DOCS_ROUTES: Routes = [
    {
        path: "docs",
        component: DocsWrapperComponent,
        children: [
            { path: "", redirectTo: "getting-started", pathMatch: "full" },
            {
                path: "getting-started",
                loadChildren: () => import("./getting-started/getting-started.module").then(m => m.GettingStartedModule),
            },
            ...getComponentPageRoutes(),
        ],
    },
];
