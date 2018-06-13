/**
 * @module ext-custom-user-menu-ng
 *
 * @description
 * Default extension for User Menu widget.
 *
 * @requires ui-bb-avatar-ng
 * @requires ui-bb-i18n-ng
 * @requires vendor-bb-angular-ng-aria
 *
 * @example
 * <!-- User Menu widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-user-menu-ng</value>
 * </property>
 */
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import i18nKey from 'ui-bb-i18n-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

import extHooks from './hooks';

export const dependencyKeys = [
  uiBbAvatarKey,
  i18nKey,
  ngAriaModuleKey,
];

export const hooks = extHooks;
export default dependencyKeys;

/**
 * @typedef {object} User
 * @property {string} name Name that should be displayed on page
 * @property {?string} username Internal user identifier
 */

/**
 * @typedef {object} Portal
 * @property {string} loggedInUserId Internally used unique identification of the user
 */
