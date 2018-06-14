const helpers = (context) => {
  const i18nFilter = context.$filter('i18n');
  const productAdditions = [];

  return {
    /**
     * @description
     * Builds AdditionalInfo array out of ProductView object.
     * Result can be passed to account card component
     *
     * @name buildAdditionalInfo
     * @type {function}
     * @param {ProductView} product
     * @returns {AdditionalInfo[]}
     */
    buildAdditionalInfo: product => {
      if (productAdditions[product.id]) {
        return productAdditions[product.id];
      }

      const additional = [];
      const pushAddition = (name, amount, currency, alias) => {
        additional.push({
          name: i18nFilter(name),
          amount,
          currency,
          alias: i18nFilter(alias),
        });
      };

      if (product.secondaryLabel || product.secondaryValue) {
        pushAddition(product.secondaryLabel, product.secondaryValue, product.currency);
      }

      if (product.tertiaryLabel || product.tertiaryValue) {
        pushAddition(product.tertiaryLabel, product.tertiaryValue, product.currency);
      }

      productAdditions[product.id] = additional;
      return additional;
    },
    /**
     * @description
     * Filters products by visibility
     *
     * @name filterVisibleProducts
     * @type {function}
     * @param {object[]} products
     * @returns {object} products - filtered products
     */
    filterVisibleProducts: kinds => (kinds.filter(kind => kind.products.some(e => e.visible))),
    /**
     * @description
     * Handles displaying a value for alias depending on what is available
     * from the product.
     *
     * @name handleAlias
     * @type {function}
     * @param {string} name
     * @param {string} alias
     * @returns {string} alias || name || fallback message
     */
    handleAlias: (alias, name) => (alias || name || i18nFilter('product.label.no.alias')),
  };
};

export default helpers;

/**
 * @typedef {Object} AdditionalInfo
 * @property {?string} name Additional info label
 * @property {?number} amount Additional info row's amount
 * @property {?string} currency ISO currency code
 */
