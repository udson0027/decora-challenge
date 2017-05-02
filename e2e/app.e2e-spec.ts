import { DecoraTestePage } from './app.po';

describe('decora-teste App', () => {
  let page: DecoraTestePage;

  beforeEach(() => {
    page = new DecoraTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
