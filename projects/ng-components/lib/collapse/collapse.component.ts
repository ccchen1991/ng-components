import { Component, Input, ViewChild, ElementRef, EventEmitter, Output, OnChanges, SimpleChanges } from "@angular/core";

/** A helper component for collapsing any content placed inside of it */
@Component({
    selector: "sebng-collapse",
    template: `
        <div
            #collapseRef
            [ngStyle]="{ display: this.display, height: this.height, opacity: this.opacity }"
            (transitionend)="transitionEnd.emit()"
            [attr.id]="id"
            [ngClass]="class"
            class="custom-collapse"
        >
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            div.custom-collapse {
                overflow: hidden;
                transition: height 200ms linear, opacity 200ms linear;
            }
        `,
    ],
})
export class CollapseComponent implements OnChanges {
    /** Collapse toggle */
    @Input() toggle?: boolean = true;
    /** Element class */
    @Input() class?: string;
    /** Element id */
    @Input() id?: string;
    /** This method will be triggered after the transition has ended */
    @Output() transitionEnd: EventEmitter<void> = new EventEmitter();

    @ViewChild("collapseRef") collapseRef: ElementRef<HTMLDivElement>;

    display: string = "block";
    height: string = "auto";
    opacity: "0" | "1" = "1";

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.toggle) {
            this.toggle ? this.uncollapse() : this.collapse();
        }
    }

    /** Collapse the content */
    collapse(): void {
        /** Since height `auto` will not transition, we need to change it to pixels */
        this.height = this.collapseRef.nativeElement.scrollHeight + "px";
        /** This async delay is needed for the height change to take effect */
        setTimeout(() => {
            this.height = 0 + "px";
            this.opacity = "0";
        }, 10);
    }

    /** Uncollapse the content */
    uncollapse(): void {
        /** Cannot transition when display is set to `none`, we need to change it to `block` */
        this.display = "block";
        /** This async delay is needed for the height change to take effect */
        setTimeout(() => {
            this.height = this.collapseRef.nativeElement.scrollHeight + "px";
            this.opacity = "1";
        }, 10);
    }

    /**
     * An event handler triggered after collapse/uncollapse transition ends
     * @param e The transition event
     */
    afterTransition(e: TransitionEvent): void {
        if (e.propertyName === "height") {
            switch (true) {
                /** After expand, the height is set to auto to enable responsiveness */
                case this.toggle && this.height && this.height !== "auto":
                    this.height = "auto";
                    break;
                /** After collapse, the display is set to none to disable tab navigation inside the hidden collapse */
                case !this.height && !this.toggle:
                    this.display = "none";
                    break;
            }
        }
        this.transitionEnd.emit();
    }
}
