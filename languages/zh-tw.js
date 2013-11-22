/*!
 * numeral.js language configuration
 * language : Chinese Traidional (zh-tw)
 * author : Dan Hagman (https://github.com/hagmandan)
 */
 (function () {
  var language = {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'G',
      trillion: 'T'
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
        abbr: '$ 0.00a',
        negative_abbr: '($ 0.00a)',
        rounded: '$ #,###',
        negative_rounded: '($ #,###)',
        exceptions : {
          INR : {
            full: '$ #,###',
            negative_full: '($ #,##)'
          },
          JPY : {
            full: '$ #,###',
            negative_full: '($ #,##)'
          },
          USD : {
            full: '$#,##0.00',
            negative_full: '($#,##0.00)'
          }
        }
      },
      exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
      localCurrency: 'CNY',
      symbol: '\u00A5'
    }
  };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
      this.numeral.language('zh-tw', language);
    }
  }());
