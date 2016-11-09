import { FortuneCookiesPage } from './app.po';

describe('fortune-cookies App', function() {
  let page: FortuneCookiesPage;

  beforeEach(() => {
    page = new FortuneCookiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
