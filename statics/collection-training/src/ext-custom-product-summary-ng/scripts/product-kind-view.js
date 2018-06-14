import sortingBy from './sorting-methods';

const maskCardNumber = (suffix) => suffix && `XXXX-XXXX-XXXX-${suffix}`;

const defaultViewModel = (product) => ({
  id: product.id,
  name: product.name,
  alias: product.alias,
});

/**
 * @description
 * List of product kinds that will be expanded on widget initialization
 *
 * @type {string[]}
 */
export const importantProductKinds = [
  'currentAccounts',
//  'savingsAccounts',
];

const viewModelFactories = {
  currentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    identifier: product.IBAN || product.BBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.availableBalance,
    secondaryLabel: 'label.availableBalance',
    tertiaryValue: product.creditLimit,
    tertiaryLabel: 'label.creditLimit',
    currency: product.currency,
    visible: product.visible,
  }),

  savingsAccounts: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    identifier: product.IBAN || product.BBAN,
    primaryValue: product.bookedBalance,
    secondaryValue: product.accruedInterest,
    secondaryLabel: 'label.accruedInterestAmount',
    currency: product.currency,
    visible: product.visible,
  }),

  termDeposits: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    primaryValue: product.principalAmount,
    secondaryValue: product.accruedInterest,
    secondaryLabel: 'label.accruedInterestAmount',
    currency: product.currency,
    visible: false,
  }),

  creditCards: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    identifier: maskCardNumber(product.cardNumberSuffix),
    primaryValue: product.bookedBalance,
    secondaryValue: product.creditLimit,
    secondaryLabel: 'label.creditLimit',
    tertiaryValue: product.availableBalance,
    tertiaryLabel: 'label.availableBalance',
    currency: product.currency,
    visible: product.visible,
  }),

  debitCards: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    identifier: maskCardNumber(product.cardNumberSuffix),
    visible: product.visible,
  }),

  loans: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    primaryValue: product.bookedBalance,
    currency: product.currency,
    visible: product.visible,
  }),

  investmentAccounts: (product) => ({
    id: product.id,
    name: product.name,
    alias: product.alias,
    primaryValue: product.currentInvestmentValue,
    currency: product.currency,
    visible: false,
  }),
};

/**
 * @description
 * Prepare the fields of a Product into a form ready for display to the User
 *
 * @inner
 * @type {function}
 * @param {object} product The source Product from the API
 * @returns {ProductView}
 */
const productKindView = (product) =>
  viewModelFactories[product.kind](product) || defaultViewModel(product);

/**
 * @description
 * Check important kind option and determine which ProductKind should be opened on init
 *
 * @inner
 * @type {function}
 * @param {ProductKind[]} Array of ProductKinds
 * @returns {ProductKind[]}
 */
export function openImportantKinds(kinds) {
  const openAll =
    kinds.filter((kind) => importantProductKinds.indexOf(kind.id) >= 0).length === 0;

  kinds.forEach((kind) => {
    if (openAll || !!(importantProductKinds.indexOf(kind.id) + 1)) {
      Object.assign(kind, { isOpen: true });
    }
  });
  return kinds;
}

/**
 * @description
 * Prepare the fields of a Product Kind into a form ready for display to the User
 *
 * @private
 * @type {function}
 * @param {object} kind The source ProductKind from the API
 * @returns {ProductKindView}
 */
export default (kind) => ({
  id: kind.id,
  name: kind.name,
  alias: kind.alias,
  products: kind.products
    .map(productKindView)
    .sort(sortingBy.productNameAsc),
  aggregatedBalance: kind.aggregatedBalance,
  currency: kind.currency,
  isOpen: kind.isOpen,
  visible: kind.products.visible,
});

/**
 * @typedef {Object} ProductKindView
 * @property {string} id The Product Kind identifier
 * @property {string} name The name of the Kind, suitable for display to users
 * @property {Array.<ProductView>} products The products of this Kind
 */

/**
 * @typedef {Object} ProductView
 * @property {string} id The internal Product Identifier
 * @property {string} name The product's name, suitable for display to users
 * @property {?string} identifier The identifier of the Product from the user's perspective
 * @property {?string} primaryValue The most important associated value to be displayed
 * @property {?string} secondaryValue A secondary associated value to be displayed
 * @property {?string} secondaryLabel A label to describe the secondary value
 * @property {?string} tertiaryValue A tertiary associated value to be displayed
 * @property {?string} tertiaryLabel A label to describe the tertiary value
 * @property {?string} currency ISO currency code
 */
