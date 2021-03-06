import { Component, Input } from "@angular/core";

@Component({
    selector: "app-bars-icon",
    template: `
        <svg [attr.width]="size" [attr.height]="size" [attr.fill]="fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
            <path
                id="menu"
                fill-rule="evenodd"
                d="M947,253H925a1,1,0,0,1,0-2h22A1,1,0,0,1,947,253Zm0-6H925a1,1,0,0,1,0-2h22A1,1,0,0,1,947,247Zm-22,10h22a1,1,0,0,1,0,2H925A1,1,0,0,1,925,257Z"
                transform="translate(-924 -245)"
            />
        </svg>
    `
})
export class BarsIconComponent {
    @Input() size: string = "1em";
    @Input() fill: string = "currentColor";
}
