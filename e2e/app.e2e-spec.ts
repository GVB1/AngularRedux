import { GPPADMINPage } from './app.po';

describe('gppadmin App', () => {
  let page: GPPADMINPage;

  beforeEach(() => {
    page = new GPPADMINPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
