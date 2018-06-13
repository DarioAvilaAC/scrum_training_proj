import angular from 'vendor-bb-angular';
import 'angular-mocks';

import mainComponent from './index';

describe('ui-custom-avatar-ng', () => {
  let $compile;
  let $componentController;
  let scope;
  let element;

  const defaultTemplate = `
    <ui-bb-avatar image="image" name="name"></ui-bb-avatar>
  `;

  function createElement(template = defaultTemplate) {
    const compiled = $compile(template)(scope);
    scope.$digest();

    return compiled;
  }

  beforeEach(angular.mock.module(mainComponent));

  beforeEach(angular.mock.inject(($rootScope, _$compile_, _$componentController_) => {
    $compile = _$compile_;
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  describe('rendering', () => {
    it('should be defined', () => {
      element = createElement();
      expect(element).toBeDefined();
      expect(element.hasClass('ng-isolate-scope')).toBe(true);
    });

    it('should have correct attributes', () => {
      element = createElement();
      expect(element.attr('name')).toEqual('name');
      expect(element.attr('image')).toEqual('image');
    });

    it('should show text and no image', () => {
      scope.name = 'Srini Soundar';

      element = createElement();
      const textEl = element.find('span').eq(0);
      const imageEl = element.find('img').eq(1);

      expect(textEl.text()).toEqual('SS');
      expect(imageEl.length).toEqual(0);
    });

    it('should show display initials based on the first two words of the name', () => {
      scope.name = 'Albus Percival Wulfric Brian Dumbledore';

      element = createElement();
      const textEl = element.find('span').eq(0);

      expect(textEl.text()).toEqual('AP');
    });

    it('should display a single letter if the name has only one word', () => {
      scope.name = 'Albus';

      element = createElement();
      const textEl = element.find('span').eq(0);

      expect(textEl.text()).toEqual('A');
    });

    it('should ignore extra spaces', () => {
      scope.name = 'Albus  Dumbledore ';

      element = createElement();
      const textEl = element.find('span').eq(0);

      expect(textEl.text()).toEqual('AD');
    });

    it('should show image and no text', () => {
      scope.image = '/path/to/img';

      element = createElement();
      const textEl = element.find('span').eq(0);
      const imageEl = element.find('img').eq(1);

      expect(textEl.length).toEqual(0);
      expect(imageEl).toBeDefined()
    });

    it('should show image even text is defined', () => {
      scope.name = 'Srini Soundar';
      scope.image = '/path/to/img';

      element = createElement();
      const textEl = element.find('span').eq(0);
      const imageEl = element.find('img').eq(1);

      expect(textEl.length).toEqual(0);
      expect(imageEl).toBeDefined()
    });
  });
});
