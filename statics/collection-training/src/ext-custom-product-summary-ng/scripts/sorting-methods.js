/**
 * Sorting methods for products
 */
export default {
  /**
   * @name productNameAsc
   * @description
   * Sort products alphabetically by name, ascending
   * @type {function}
   * @param {Object} productA
   * @param {Object} productB
   * @returns {('-1'|'0'|'1')} result
   */
  productNameAsc: (productA, productB) => {
    if (productA.name < productB.name) return -1;
    if (productA.name > productB.name) return 1;
    return 0;
  },
};
