import { DoYouDarePage } from './app.po';

describe('do-you-dare App', function() {
  let page: DoYouDarePage;

  beforeEach(() => {
    page = new DoYouDarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
