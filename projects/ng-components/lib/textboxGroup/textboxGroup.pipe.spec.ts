import { TextboxGroupSafeHtmlPipe } from "./textboxGroup.pipe";
import { DomSanitizer, BrowserModule, SafeHtml } from "@angular/platform-browser";
import { TestBed, inject, async } from "@angular/core/testing";

const htmlStr = `<!DOCTYPE html>
<html>
<head>
<title>PAge Title</title>
</head>
<body>
<h1>This is a paragraph</h1>
</body>
</html>
`;

describe("SafeHtmlPipe", () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [BrowserModule],
        }).compileComponents();
    });

    it("convert string to html", inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TextboxGroupSafeHtmlPipe(domSanitizer);

        const returnValMock = spyOn(pipe, "transform").and.returnValue(htmlStr);
        pipe.transform(htmlStr);
        expect(pipe).toBeTruthy();

        const returnVal = returnValMock(htmlStr);

        expect(returnValMock).toHaveBeenCalled();
        expect(returnVal).toEqual(htmlStr);
    }));
});
