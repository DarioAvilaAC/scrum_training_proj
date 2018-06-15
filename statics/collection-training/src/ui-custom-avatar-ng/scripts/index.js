/**
 * @module ui-custom-avatar-ng
 * @description
 * UI component for creating contact's avatar.
 * It can display initials based on a name or image.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbAvatarKey from 'ui-bb-avatar-ng';
 *
 * export const dependencyKeys = [
 *   uiBbAvatarKey,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-avatar
 *   name="name"
 *   image="imageAvatar">
 * </ui-bb-avatar>
 */

import angular from 'vendor-bb-angular';

import uiBbAvatarComponent from './avatar.component';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bb-avatar-ng', [])
  .component('uiBbAvatar', uiBbAvatarComponent)
  .name;
