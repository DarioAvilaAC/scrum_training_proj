import { Types } from './constants';

/**
 * @description
 * Adds "customType" field to transaction item according to custom logic.
 * This custom type is used to define the rendering layout in template file
 *
 * @param {Object} transaction Transaction object
 */
export default (transaction) => {
  if (transaction.counterPartyName) {
    Object.assign(transaction, { customType: Types.TYPE_1 });
  } else if (transaction.counterPartyName) {
    Object.assign(transaction, { customType: Types.TYPE_2 });
  } else if (transaction.description) {
    Object.assign(transaction, { customType: Types.TYPE_3 });
  } else {
    Object.assign(transaction, { customType: Types.TYPE_4 });
  }
  return transaction;
};
