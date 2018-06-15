const MAX_INITIALS_LENGTH = 2;

/**
 * @name uiBbAvatarComponent
 * @type {object}
 *
 * @property {string} image Image url
 * @property {string} name Name of the contact
 */
const uiBbAvatarComponent = {
  bindings: {
    image: '<',
    name: '<',
  },
  template: `
    <span data-ng-if="!$ctrl.image"
      data-role="avatar-initials"
      data-ng-bind="$ctrl.initials"
      aria-hidden="true">
    </span>
    <img class="img-responsive"
      data-role="avatar-image"
      data-ng-if="$ctrl.image"
      data-ng-src="{{$ctrl.image}}"
      data-ng-cloak="true"
      aria-hidden="true"
      alt=""
    />
  `,
  controller: class UiBbAvatarController {
    get initials() {
      return (this.name || '')
        .split(' ')
        .reduce((initials, word) => `${initials}${word.charAt(0)}`, '')
        .substr(0, MAX_INITIALS_LENGTH)
        .toUpperCase();
    }
  },
};

export default uiBbAvatarComponent;
