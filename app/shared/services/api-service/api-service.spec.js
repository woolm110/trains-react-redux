import axios from 'axios';
import ApiService from './api-service';

describe('Shared', () => {
  describe('Services', () => {
    describe('ApiService', () => {
      describe('get', () => {
        beforeEach(() => {
          axios.get = jest.fn();
        });

        it('should create a get request to the correct endpoint', () => {
          const requestURL = 'v3/uk/train/stations/bbox.json?app_id=a2f34086&app_key=08d9182a9680140326f756a23cb14749&minlon=-0.489&minlat=51.28&maxlon=0.236&maxlat=51.696';
          ApiService.get(requestURL);

          expect(axios.get).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object)
          );
        });
      });
    });
  });
});
