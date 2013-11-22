/*!
 * numeral.js language configuration
 * language : turkish (tr)
 * author : Ecmel Ercan : https://github.com/ecmel, Erhan Gundogan : https://github.com/erhangundogan, Burak Yiğit Kaya: https://github.com/BYK
 */
 (function () {
  var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',

    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',

    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',

    6: '\'ncı',

    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',

    60: '\'ıncı',
    90: '\'ıncı'
  },
  language = {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    abbreviations: {
      thousand: 'bin',
      million: 'milyon',
      billion: 'milyar',
      trillion: 'trilyon'
    },
    ordinal: function (number) {
      if (number === 0) {  // special case for zero
        return '\'ıncı';
      }

      var a = number % 10,
      b = number % 100 - a,
      c = number >= 100 ? 100 : null;

      return suffixes[a] || suffixes[b] || suffixes[c];
    },
    number : {
      defaultFormat : '#,##0[.]00[0]'
    },
    currency: {
      format: {
        full: '#,##0.00 $',
        negative_full: '(#,##0.00 $)',
        abbr: '0.00a $',
        negative_abbr: '(0.00a $)',
        rounded: '#,### $',
        negative_rounded: '(#,### $)',
        exceptions : {
          INR : {
            full: '#,### $',
            negative_full: '(#,## $)'
          },
          JPY : {
            full: '#,### $',
            negative_full: '(#,## $)'
          }
        }
      },
      exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
      localCurrency: 'TRY',
      symbol: 'TL'
    }
  };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }
  // Browser
  if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
    this.numeral.language('tr', language);
  }
}());
