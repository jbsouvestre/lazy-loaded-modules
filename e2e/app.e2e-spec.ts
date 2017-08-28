import { LazyLoadedModulesPage } from './app.po';

describe('lazy-loaded-modules App', () => {
  let page: LazyLoadedModulesPage;

  beforeEach(() => {
    page = new LazyLoadedModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
