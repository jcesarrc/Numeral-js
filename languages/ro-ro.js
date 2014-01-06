/*! 
 * numeral.js language configuration
 * language : Romanian (Romania) (ro-ro)
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
          format: {
            full: '#,##0.00 $',
            negative_full: '(#,##0.00 $)',
            abbr: '0.00a $',
            negative_abbr: '(0.00a $)',
            rounded: '#,### $',
            negative_rounded: '(#,### $)',
            exceptions : {
              INR : {
                full: '#,### $',
                negative_full: '(#,## $)'
              },
              JPY : {
                full: '#,### $',
                negative_full: '(#,## $)'
              }
            }
          },
          exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
          localCurrency: 'RON',
          symbol: 'LEI'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ro-ro', language);
  }
}(this));