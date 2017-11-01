import { NewappPage } from './app.po';

describe('newapp App', () => {
  let page: NewappPage;

  beforeEach(() => {
    page = new NewappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
