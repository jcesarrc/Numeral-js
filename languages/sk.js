/*!
 * numeral.js language configuration
 * language : slovak (sk)
 * author : Ahmed Al Hafoudh : http://www.freevision.sk
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            format: {
                full: '#,##0.00 $',
                negative_full: '-#,##0.00 $',
                abbr: '0.00a $',
                negative_abbr: '-0.00a $',
                rounded: '#,### $',
                negative_rounded: '-#,### $'
            },
            exceptions: {ILS: '\u20AA', MXN: 'Mex$', NZD: 'NZ$', PLN: 'zl', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: 'EUR'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('sk', language);
  }
}(this));