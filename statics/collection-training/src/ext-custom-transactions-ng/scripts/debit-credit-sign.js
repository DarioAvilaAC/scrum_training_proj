export const positiveSignKey = 'CRDT';
export const negativeSignKey = 'DBIT';

const creditDebitKeysToSign = {};
creditDebitKeysToSign[positiveSignKey] = '+';
creditDebitKeysToSign[negativeSignKey] = '-';

/**
 * @description
 * Adds debitCreditSign property to transaction object based on debitCreditIndicator key
 *
 * @param {Object} transaction Transaction object
 * @returns {Object} new copy of Transaction object
 */
export default (transaction) =>
  Object.assign({
    debitCreditSign: creditDebitKeysToSign[transaction.creditDebitIndicator],
  }, transaction);
