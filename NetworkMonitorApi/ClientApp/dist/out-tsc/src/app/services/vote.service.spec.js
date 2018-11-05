import { TestBed } from '@angular/core/testing';
import { VoteService } from './vote.service';
describe('VoteService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(VoteService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vote.service.spec.js.map