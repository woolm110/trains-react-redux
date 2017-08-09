import ApiService from '../../services/api-service/api-service';
import PlayerConstants from '../../../player.constants';
import SetFactory from './set-factory';

describe('Shared', () => {
  describe('Factories', () => {
    describe('SetFactory', () => {
      describe('Get Set by ID', () => {
        const uid = 'coll_9db6ab3c36734e61ac3f607e1f4352a8';

        beforeEach(() => {
          ApiService.get = jest.fn();
        });

        it('should get a set based on its uid', () => {
          const requestEndpoint = `/api/sets/${uid}/`;

          SetFactory.getSetByID(uid);

          expect(ApiService.get).toHaveBeenCalledWith(
            requestEndpoint,
            expect.any(Object)
          );
        });

        it('should get a set with a blank filters object when one is not passed', () => {
          SetFactory.getSetByID(uid);

          expect(ApiService.get).toHaveBeenCalledWith(
            expect.any(String),
            {}
          );
        });

        it('should get a set with passed filters', () => {
          const filters = {
            title: 'Daves Set'
          };

          SetFactory.getSetByID(uid, filters);

          expect(ApiService.get).toHaveBeenCalledWith(
            expect.any(String),
            filters
          );
        });
      });

      describe('Get the homepage set', () => {
        const uid = 'coll_9db6ab3c36734e61ac3f607e1f4352a8';

        beforeEach(() => {
          PlayerConstants.homepageUid = uid;
          SetFactory.getSetByID = jest.fn();
        });

        it('should get the homepage set', () => {
          SetFactory.getHomepage();

          expect(SetFactory.getSetByID).toHaveBeenCalledWith(
            uid,
            expect.any(Object)
          );
        });

        it('should get the homepage set with a blank filters object when one is not passed', () => {
          SetFactory.getHomepage();

          expect(SetFactory.getSetByID).toHaveBeenCalledWith(
            expect.any(String),
            {}
          );
        });

        it('should get the homepage set with passed filters', () => {
          const filters = {
            title: 'Daves Set'
          };

          SetFactory.getHomepage(filters);

          expect(SetFactory.getSetByID).toHaveBeenCalledWith(
            expect.any(String),
            filters
          );
        });
      });
    });
  });
});
