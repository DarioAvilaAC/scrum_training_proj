/**
 * @module ext-custom-transactions-ng
 *
 * @description
 * Default extension for transactions widget.
 *
 * @requires vendor-bb-uib-accordion
 * @requires vendor-bb-uib-alert
 * @requires ui-bb-format-amount
 *
 * @example
 * <!-- payment widget model.xml -->
 * <property name="extension" viewHint="text-input,admin">
 *  <value type="string">ext-bb-transactions-ng</value>
 * </property>
 */
import uibAccordionKey from 'vendor-bb-uib-accordion';
import uiBbFormatAmountKey from 'ui-bb-format-amount';
import uiBbLoadingIndicatorKey from 'ui-bb-loading-indicator-ng';
import vendorBbUibAlertKey from 'vendor-bb-uib-alert';
import i18nNgKey from 'ui-bb-i18n-ng';
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';
import ngAriaModuleKey from 'vendor-bb-angular-ng-aria';
import uiBbTransactionSearchFilterKey from 'ui-bb-transaction-search-filter-ng';
import uiBbNotificationStripeKey from 'ui-bb-notification-stripe-ng';
import uiBbLoadMoreKey from 'ui-bb-load-more-ng';
import uiBbPaginatorKey from 'ui-bb-paginator-ng';
import uiBbEmptyStateNg from 'ui-bb-empty-state-ng';

import * as extHelpers from './helpers';
import * as extHooks from './hooks';

export const helpers = extHelpers;

/**
 * @name Hooks
 * @type {object}
 *
 * @description
 * Hooks for widget-bb-transactions-ng
 */
export const hooks = extHooks;

export const dependencyKeys = [
  uiBbFormatAmountKey,
  uibAccordionKey,
  uiBbLoadingIndicatorKey,
  vendorBbUibAlertKey,
  i18nNgKey,
  uiBbSubstituteErrorNgKey,
  ngAriaModuleKey,
  uiBbTransactionSearchFilterKey,
  uiBbNotificationStripeKey,
  uiBbLoadMoreKey,
  uiBbPaginatorKey,
  uiBbEmptyStateNg,
];
