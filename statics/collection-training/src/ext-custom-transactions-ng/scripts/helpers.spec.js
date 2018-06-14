import { positiveSignKey, negativeSignKey } from './debit-credit-sign';
import CATEGORY_CLASS_PREFIX from './constants';
import * as transactionHelpers from './helpers';

describe('helpers', () => {

  describe('getSignedAmount() should return', () => {
    it('positive value if sign is ' + positiveSignKey, () => {
      const transaction = {
        creditDebitIndicator: positiveSignKey,
        amount: 1.23,
      };

      const actual = transactionHelpers.getSignedAmount(transaction);
      const expected = 1.23;

      expect(actual).toEqual(expected);
    });

    it('negative value if sign is ' + negativeSignKey, () => {
      const transaction = {
        creditDebitIndicator: negativeSignKey,
        amount: 1.23,
      };

      const actual = transactionHelpers.getSignedAmount(transaction);
      const expected = -1.23;

      expect(actual).toEqual(expected);
    });
  });

  describe('getCategoryIconClass() should return', () => {
    it('lowercase version of category name', () => {
      const transactionCategory = 'Home';
      const actual = transactionHelpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}home`;

      expect(actual).toEqual(expected);
    });

    it('dashes instead of all non-word and non-digit characters', () => {
      const transactionCategory = 'Video games';
      const actual = transactionHelpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}video-games`;

      expect(actual).toEqual(expected);
    });

    it('names with trimmed dashes after initial conversion', () => {
      const transactionCategory = 'Food & Drinks 2';
      const actual = transactionHelpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}food-drinks-2`;

      expect(actual).toEqual(expected);
    });

    it('converts empty values to "uncategorized" class', () => {
      const transactionCategory = '';
      const actual = transactionHelpers.getCategoryIconClass(transactionCategory);
      const expected = `${CATEGORY_CLASS_PREFIX}uncategorized`;

      expect(actual).toEqual(expected);
    });
  });

  describe('showNoResults(ctrl) should return', () => {
    it('false after is called when searchTransactions have results', () => {
      const ctrl = {
        searching: true,
        searchTransactions: {"2018-01-21":[{"id":1,"arrangementId":"02c0cae4-168c-48ff-bb17-f2c7e4ba9aeb"}]},
        loading: false
      };

      const actual = transactionHelpers.showNoResults(ctrl);
      expect(actual).toEqual(false);
    });

    it('true after is called when searchTransactions is empty object ', () => {
      const ctrl = {
        searching: true,
        searchTransactions: {},
        loading: false
      };

      const actual = transactionHelpers.showNoResults(ctrl);
      expect(actual).toEqual(true);
    });

    it('null after is called when searchTransactions is null ', () => {
      const ctrl = {
        searching: true,
        searchTransactions: null,
        loading: false
      };

      const actual = transactionHelpers.showNoResults(ctrl);
      expect(actual).toEqual(null);
    });
  });

});
