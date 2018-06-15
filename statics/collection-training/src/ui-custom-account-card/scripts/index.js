/**
 * @module ui-custom-account-card
 * @description
 * UI component for displaying account card.
 *
 * @example
 * // In an extension:
 * // file: scripts/index.js
 * import uiBbAccountCard from 'ui-bb-account-card';
 *
 * export const dependencyKeys = [
 *   uiBbAccountCard,
 * ];
 *
 * // file: templates/template.ng.html
 * <ui-bb-account-card
 *   account-name="$ctrl.payment.from.name"
 *   account-number="$ctrl.payment.from.name.account"
 *   amount="$ctrl.payment.from.amount"
 *   currency="$ctrl.payment.from.currency"
 *   show-avatar="true">
 * </ui-bb-account-card>
 */
import angular from 'vendor-bb-angular';
import uiBbAvatarKey from 'ui-bb-avatar-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uiBbAccountCardComponent from './card.component';

/**
 * @name default
 * @type {string}
 * @description The angular module name
 */
export default angular.module('ui-bb-account-card', [
  uiBbFormatAmount,
  uiBbAvatarKey,
])
  .component('uiBbAccountCard', uiBbAccountCardComponent)
  .name;
