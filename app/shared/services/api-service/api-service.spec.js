import axios from 'axios';
import ApiService from './api-service';
import fixture from './api-service.fixures';

describe('Shared', () => {
  describe('Services', () => {
    describe('ApiService', () => {
      describe('get', () => {
        beforeEach(() => {
          axios.get = jest.fn();
        });

        it('should create a get request to the correct endpoint', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          ApiService.get(requestURL);

          expect(axios.get).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object)
          );
        });

        it('should default to empty config when requested without one', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          ApiService.get(requestURL);

          expect(axios.get).toHaveBeenCalledWith(
            expect.any(String),
            {}
          );
        });

        it('should make a request with the supplied config', () => {
          const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
          const requestConfig = {
            order: 'title'
          };
          ApiService.get(requestURL, requestConfig);

          expect(axios.get).toHaveBeenCalledWith(
            expect.any(String),
            requestConfig
          );
        });
      });

      describe('post', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.post = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post).toHaveBeenCalledWith(
            requestURL,
            expect.any(Object),
            expect.any(Object)
          );
        });

        it('should post data', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post).toHaveBeenCalledWith(
            expect.any(String),
            requestObject,
            expect.any(Object)
          );
        });

        it('should post data to the correct endpoint with {} if one is not supplied', () => {
          ApiService.post(requestURL, requestObject);
          expect(axios.post.mock.calls[0][2]).toEqual({});
        });

        it('should post data to the correct endpoint with config if one is not supplied', () => {
          const config = {
            lang: 'fr'
          };

          ApiService.post(requestURL, requestObject, config);
          expect(axios.post)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              config
            );
        });
      });

      describe('put', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.put = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put)
            .toHaveBeenCalledWith(
              requestURL,
              expect.any(Object),
              expect.any(Object),
            );
        });

        it('should post data', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put)
            .toHaveBeenCalledWith(
              expect.any(String),
              requestObject,
              expect.any(Object)
            );
        });

        it('should post data to the correct endpoint with {} if one is not supplied', () => {
          ApiService.put(requestURL, requestObject);
          expect(axios.put)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              {}
            );
        });

        it('should post data to the correct endpoint with config if one is not supplied', () => {
          const config = {
            lang: 'de'
          };

          ApiService.put(requestURL, requestObject, config);
          expect(axios.put)
            .toHaveBeenCalledWith(
              expect.any(String),
              expect.any(Object),
              config
            );
        });
      });

      describe('patch', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';
        const requestObject = fixture.data;

        beforeEach(() => {
          axios.patch = jest.fn();
        });

        it('should post to the correct endpoint', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch)
            .toHaveBeenCalledWith(
              requestURL,
              expect.any(Object),
              expect.any(Object)
            );
        });

        it('should post data', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch)
            .toHaveBeenCalledWith(
              expect.any(String),
              requestObject,
              expect.any(Object)
            );
        });

        it('should post data to the correct endpoint with {} if one is not supplied', () => {
          ApiService.patch(requestURL, requestObject);
          expect(axios.patch).toHaveBeenCalledWith(
            expect.any(String),
            expect.any(Object),
            {}
          );
        });

        it('should post data to the correct endpoint with config if one is not supplied', () => {
          const config = {
            lang: 'de'
          };

          ApiService.patch(requestURL, requestObject, config);
          expect(axios.patch).toHaveBeenCalledWith(
            expect.any(String),
            expect.any(Object),
            config
          );
        });
      });

      describe('delete', () => {
        const requestURL = '/api/brand/bran_5442aaff3d5340019d2e674087ee42b5';

        beforeEach(() => {
          axios.delete = jest.fn();
        });

        it('should delete an object on an endpoint', () => {
          ApiService.delete(requestURL);
          expect(axios.delete).toHaveBeenCalledWith(
            requestURL
          );
        });
      });
    });
  });
});
