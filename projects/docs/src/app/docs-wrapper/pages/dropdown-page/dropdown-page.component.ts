import { Component, OnInit } from "@angular/core";
import { DropdownItem, DropdownModule } from "@sebgroup/ng-components/dropdown";

@Component({
    selector: "app-dropdown-page",
    templateUrl: "./dropdown-page.component.html",
})
export class DropdownPageComponent implements OnInit {
    importString: string = require("!raw-loader!@sebgroup/ng-components/dropdown/dropdown.component");
    snippet: string = `<sebng-dropdown [list]="list"></sebng-dropdown>`;
    list: Array<DropdownItem> = [
        { key: "1", label: "Item 1", value: "value-1" },
        { key: "2", label: "Item 2", value: "value-2" },
        { key: "3", label: "Item 3", value: "value-3" },
        { key: "4", label: "Item 4", value: "value-4" },
    ];
    list2 = [...this.list];

    selectedValue: DropdownModule = { ...this.list[2] };
    selectedValue2: DropdownModule[] = [{ ...this.list[0] }, { ...this.list[3] }];

    // controls
    isNative: boolean = false;
    isEllipsisMode: boolean = false;
    disabled: boolean = false;
    searchable: boolean = false;
    clearable: boolean = false;
    placeholder: string;

    constructor() {
        document.title = "Dropdown - SEB Angular Components";
    }

    ngOnInit(): void {}
}
