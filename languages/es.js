/*! 
 * numeral.js language configuration
 * language : spanish
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                   (b === 2) ? 'do' :
                   (b === 7 || b === 0) ? 'mo' : 
                   (b === 8) ? 'vo' :
                   (b === 9) ? 'no' : 'to';
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
            localCurrency: 'USD',
            symbol: '$'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('es', language);
    }
}());
