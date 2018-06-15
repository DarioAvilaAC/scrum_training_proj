/**
 * @name uiBbAccountCard
 * @type {object}
 *
 * @property {string} account-name Account name
 * @property {string} account-image Image url, shown in avatar field (if it is enabled)
 * @property {string} account-number Account number
 * @property {number} amount Account's balance
 * @property {string} currency Currency's ISO 4217 code
 * @property {AdditionalInfo[]} additional-info Array with additional card info objects
 * @property {boolean} show-avatar Display avatar field with image or name initials
 */

/**
 * @typedef {Object} AdditionalInfo
 * @property {?string} name Additional info label
 * @property {?number} amount Additional info row's amount
 * @property {?string} currency Currency's ISO 4217 code
 */

const uiBbAccountCard = {
  bindings: {
    accountName: '<',
    accountImage: '<',
    accountNumber: '<',
    amount: '<',
    currency: '<',
    additionalInfo: '<',
    showAvatar: '<',
  },
  template: `
    <div class="bb-account-card-content">
      <div
        data-ng-if="$ctrl.showAvatar"
        class="bb-account-card-avatar"
      >
        <ui-bb-avatar
          class="bb-avatar media img-circle img-thumbnail no-padding text-center"
          data-name="$ctrl.accountName"
          data-image="$ctrl.accountImage">
        </ui-bb-avatar>
      </div>
      <div class="bb-account-card-info">
        <div class="bb-account-card-long-name">{{ $ctrl.accountName }}</div>
        <div class="bb-account-card-amount pull-right">
          <ui-bb-format-amount
            data-amount="$ctrl.amount"
            data-currency="$ctrl.currency"
            data-wrap
          ></ui-bb-format-amount>
        </div>
        <div><p>I am Darth Vader</p></div>
        <div class="bb-account-card-long-number text-muted">{{ $ctrl.accountNumber }}</div>
        <div
          class="bb-account-card-additional"
          data-ng-repeat="additional in $ctrl.additionalInfo track by additional.name"
        >
          <div class="bb-account-card-additional-name text-muted">{{ additional.name }}</div>
          <ui-bb-format-amount
            class="bb-account-card-additional-amount amount-regular-color text-muted"
            data-amount="additional.amount"
            data-currency="additional.currency"
            data-wrap
          ></ui-bb-format-amount>
        </div>
      </div>
    </div>
  `,
};

export default uiBbAccountCard;
