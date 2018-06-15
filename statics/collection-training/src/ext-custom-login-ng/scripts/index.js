/**
 * @module ext-custom-login-ng
 *
 * @description
 * Login extension for login widget.
 *
 * @requires ui-bb-i18n-ng
 * @requires vendor-bb-angular-ng-aria
 *
 * @example
 * <!-- login widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-login-ng</value>
 * </property>
 */
import i18nNgKey from 'ui-bb-i18n-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';

let myItem = document.getElementById('myInput');
console.log(myItem.type);

export const dependencyKeys = [
  i18nNgKey,
  ngAriaModuleKey,
];

export const hooks = {};

export const helpers = {};

export const events = {};
