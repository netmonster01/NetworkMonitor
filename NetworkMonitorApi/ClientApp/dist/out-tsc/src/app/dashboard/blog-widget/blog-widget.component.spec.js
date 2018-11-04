import { async, TestBed } from '@angular/core/testing';
import { BlogWidgetComponent } from './blog-widget.component';
describe('BlogWidgetComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BlogWidgetComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BlogWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blog-widget.component.spec.js.map