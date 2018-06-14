const sortBy = 'valueDate';

/**
 * @description
 * Sort transactions collection based on valueDate (descending)
 *
 * @param {Object} a transaction item
 * @param {Object} b transaction item
 * @returns {number}
 */
export default (a, b) => new Date(b[sortBy]) - new Date(a[sortBy]);
