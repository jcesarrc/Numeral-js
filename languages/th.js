/*! 
 * numeral.js language configuration
 * language : thai (th)
 * author : Sathit Jittanupat : https://github.com/jojosati
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'พัน',
            million: 'ล้าน',
            billion: 'พันล้าน',
            trillion: 'ล้านล้าน'
        },
        ordinal: function (number) {
            return '.';
        },
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
            format: {
                full: '$ #,##0.00',
                negative_full: '($ #,##0.00)',
                abbr: '$0.00a',
                negative_abbr: '($0.00a)',
                rounded: '$#,###',
                negative_rounded: '($#,###)',
                exceptions : {
                  INR : {
                    full: '$ #,###',
                    negative_full: '($ #,##)'
                  },
                  JPY : {
                    full: '$ #,###',
                    negative_full: '($ #,##)'
                  },
                  USD : {
                    full: '$#,##0.00',
                    negative_full: '($#,##0.00)'
                  }
                }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', CZK: 'Kč', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'THB',
            symbol: '\u0E3F'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('th', language);
  }
}(this));