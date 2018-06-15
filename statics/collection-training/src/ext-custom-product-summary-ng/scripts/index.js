/**
 * @module ext-custom-product-summary-ng
 *
 * @description
 * Default extension for product summary widget.
 *
 * @requires vendor-bb-uib-accordion
 * @requires ui-bb-account-card
 * @requires ui-bb-substitute-error-ng
 * @requires ui-bb-format-amount
 * @requires vendor-bb-uib-popover
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-product-summary-ng</value>
 * </property>
 *
 * Usage of ui-bb-account-card component in template
 *
 * <ui-bb-account-card
 *   account-name="$ctrl.payment.from.name"
 *   account-number="$ctrl.payment.from.identifier"
 *   amount="$ctrl.payment.from.amount"
 *   currency="$ctrl.payment.from.currency"
 *   show-avatar="true">
 * </ui-bb-account-card>
 *
 * Usage of ui-bb-format-amount component in template
 *
 * <ui-bb-format-amount
 * amount="$option.amount"
 * currency="$option.currency"
 * wrap-decimals
 * no-map
 * ></ui-bb-format-amount>
 *
 * where
 * amount {string} Amount string
 * currency {string} Currency code string
 * wrapDecimals Condition to process values as HTML or not
 * noMap Condition to stop looking for currency mapping in the currency-map
 */
import uibAccordionKey from 'vendor-bb-uib-accordion';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbAccountCard from 'ui-custom-account-card';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import uiBbFormatAmount from 'ui-bb-format-amount';
import uibPopoverKey from 'vendor-bb-uib-popover';
import uiBbElementDimensions from 'ui-bb-element-dimensions-ng';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import i18nNgKey from 'ui-bb-i18n-ng';

import extHelpers from './helpers';
import * as extHooks from './hooks';

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-product-summary-ng
 */
export const hooks = extHooks;
export const helpers = extHelpers;

export const dependencyKeys = [
  uibAccordionKey,
  ngAriaModuleKey,
  uiBbAccountCard,
  uiBbSubstituteErrorNgKey,
  uiBbFormatAmount,
  uibPopoverKey,
  uiBbElementDimensions,
  uiBbLoadingIndicatorKey,
  i18nNgKey,
];
