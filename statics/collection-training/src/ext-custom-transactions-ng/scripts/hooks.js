/* eslint-disable import/prefer-default-export */
import debitCreditSign from './debit-credit-sign';
import setType from './set-type';

/**
 * @name defaultSortableColumn
 *
 * @description
 * defaultSortableColumn default hook
 *
 * @type {function}
 * @returns {string}
 */
export const defaultSortableColumn = () => 'bookingDate';

/**
 * @name defaultSortableDirection
 *
 * @description
 * defaultSortableDirection default hook
 *
 * @type {function}
 * @returns {string}
 */
export const defaultSortableDirection = () => 'DESC';

/**
 * @name defaultPaginationType
 * @type {function}
 * @description
 * defaultPaginationType default hook for setting load-more or pagination as default
 *
 * @param {string} pagination type
 * @returns {?string}
 */
export function defaultPaginationType() {
  return 'load-more';
}

/**
 * @name processTransactions
 * @description
 * Hook for process transactions
 *
 * Add debitCreditSign property to transaction
 *
 * Add customType field to transaction
 *
 * Sort transactions collection based on valueDate (descending)
 *
 * @type {function}
 * @param {object[]} transactions The source transactions from the widget controller
 * @returns {object} Processed transaction array
 */
export const processTransactions = (transactions) =>
  transactions
    .map(debitCreditSign)
    .map(setType)
    .reduce((groupedByDate, transaction) => {
      const datesObject = groupedByDate;
      // get only date part
      const bookingDateObj = new Date(transaction.bookingDate);
      const date = bookingDateObj.toISOString().slice(0, 10);

      if (datesObject[date]) {
        let clearToAdd = true;

        datesObject[date].forEach((element) => {
          if (element.id === transaction.id) {
            clearToAdd = false;
          }
        });

        if (clearToAdd) {
          datesObject[date].push(transaction);
        }
      } else {
        datesObject[date] = [transaction];
      }

      return datesObject;
    }, {});
