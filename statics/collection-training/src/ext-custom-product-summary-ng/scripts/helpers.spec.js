import helpersGenerator from './helpers';

describe('helpers', () => {
  const secondaryLabel = 'label';
  const tertiaryLabel = 'label';
  const translation = 'translation';
  const secondaryValue = 100;
  const tertiaryValue = 150;
  const currency = 'EUR';
  const $filter = (filter) => {
    switch (filter) {
      case 'i18n':
      default:
        return () => translation;
    }
  }

  const helpers = helpersGenerator({
    $filter,
  });

  let productLight, productFull, productWithAlias, productWithNoAlias;
  let actual;
  let expected;
  let productAliasValue;

  describe('buildAdditionalInfo() should return', () => {
    beforeEach(() => {
      productLight = {
        id: '1',
        secondaryLabel,
        secondaryValue,
        currency
      };

      productFull = {
        id: '2',
        secondaryLabel,
        secondaryValue,
        tertiaryLabel,
        tertiaryValue,
        currency
      };
    });

    it('Array with one object in case we have secondary labels and values only', () => {
      actual = helpers.buildAdditionalInfo(productLight);
      expect(actual.length).toEqual(1);
      expect(actual[0].name).toEqual(translation);
    });

    it('Array with two objects in case we have secondary and tertiary labels and values', () => {
      actual = helpers.buildAdditionalInfo(productFull);
      expect(actual.length).toEqual(2);
      expect(actual[1].name).toEqual(translation);
    });
  });
  describe('handleAlias() should return', () => {
    beforeEach(() => {
      productWithAlias = {
        id: '1',
        name:'productName',
        alias: 'productAlias',
        secondaryLabel,
        secondaryValue,
        currency
      };

      productWithNoAlias = {
        id: '2',
        name:'productName',
        secondaryLabel,
        secondaryValue,
        tertiaryLabel,
        tertiaryValue,
        currency
      };
    });

    it('Alias if product.alias is present on the product object', () => {
      productAliasValue = helpers.handleAlias(productWithAlias.alias, productWithAlias.name);
      expect(productAliasValue).toEqual(productWithAlias.alias);
    });

    it('Name if product.alias is not present and product.name is present on the product object', () => {
      productAliasValue = helpers.handleAlias(productWithNoAlias.alias, productWithNoAlias.name);
      expect(productAliasValue).toEqual(productWithAlias.name);
    });
  });
});
