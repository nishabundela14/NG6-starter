import postModule from '../posts';
import newpostController from './posts/new-post.controller';
import newpostComponent from './posts/new-post.component';
import newpostTemplate from './posts/new-post.html';

describe('new-post', () => {
  let $rootScope, makeController;

  beforeEach(window.module(postModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new newpostController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(newpostTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = newpostComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(newpostTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(newpostController);
    });
  });
});
