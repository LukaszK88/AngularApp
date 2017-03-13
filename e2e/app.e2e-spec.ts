import { ArtbookPage } from './app.po';

describe('artbook App', function() {
  let page: ArtbookPage;

  beforeEach(() => {
    page = new ArtbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
