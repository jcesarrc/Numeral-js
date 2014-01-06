/*! 
 * numeral.js language configuration
 * language : Norwegian (Norway) (nl-nl)
 * author : Dave Clayton : https://github.com/davedx
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mrd',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
            format: {
              full: '#,##0.00 $',
              negative_full: '(#,##0.00 $)',
              abbr: '0.00a $',
              negative_abbr: '(0.00-a $)',
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
            localCurrency: 'NOK',
            symbol: 'kr'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('no-no', language);
  }
}(this));