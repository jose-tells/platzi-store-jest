import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks(); // Clear previously set mocks so they do not bleed into other mocks
  });

  test('Call an API and return data', (done) => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' })); // Mock each fetch call independently

    getData('https://google.com')
      .then((data) => {
        expect(data.data).toEqual('12345');
        done(); // Jest will wait until the done callback is called before finishing the test.
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
