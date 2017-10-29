import EditPostModule from './editPost';
import EditPostController from './editPost.controller';
import EditPostComponent from './editPost.component';
import EditPostTemplate from './editPost.html';

describe('EditPost', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditPostModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditPostController();
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
      expect(EditPostTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EditPostComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EditPostTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EditPostController);
    });
  });
});
