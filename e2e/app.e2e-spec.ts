import { Angular8SpringbootClientPage } from './app.po';

describe('angular8-springboot-client App', function() {
  let page: Angular8SpringbootClientPage;

  beforeEach(() => {
    page = new Angular8SpringbootClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
