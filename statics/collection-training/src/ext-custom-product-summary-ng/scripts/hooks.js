/* eslint-disable import/prefer-default-export */
import productKindView, { openImportantKinds } from './product-kind-view';

/**
 * @name processKinds
 * @description
 * Hook for processing product kinds after initialization.
 *
 * @type {function}
 * @param kinds {ProductKind[]} ProductKinds to process
 * @returns {ProductKindView[]}
 */
export const processKinds = (kinds) => openImportantKinds(kinds).map(productKindView);
