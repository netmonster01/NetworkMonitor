import { async, TestBed } from '@angular/core/testing';
import { NewCommentDailogComponent } from './new-comment-dailog.component';
describe('NewCommentDailogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewCommentDailogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewCommentDailogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-comment-dailog.component.spec.js.map