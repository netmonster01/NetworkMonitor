import { TestBed } from '@angular/core/testing';
import { LoggerServiceService } from './logger-service.service';
describe('LoggerServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoggerServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=logger-service.service.spec.js.map