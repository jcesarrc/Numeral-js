/*!
 * numeral.js language configuration
 * language : Arabic (ar)
 */
(function (root) {
    var language = {
        isRtl: true,
        delimiters: {
            thousands: ',',
            decimal: '.'
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
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', CZK: 'Kč', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'CZK',
            symbol: 'Kč'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }

    if (root.numeral && root.numeral.language) {
      root.numeral.language('ar-ae', language);
    }
}(this));

/*!
 * numeral.js language configuration
 * language : Arabic (ar)
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
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
        number : {
          defaultFormat : '#,##0[.]00'
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
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', CZK: 'Kč', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'CZK',
            symbol: 'Kč'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }

    if (root.numeral && root.numeral.language) {
      root.numeral.language('ar', language);
    }
}(this));

/*!
 * numeral.js language configuration
 * language : belgium-dutch (be-nl)
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : ' mln',
            billion  : ' mld',
            trillion : ' bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
        },
        currency: {
            format: {
                full: '$#,##0.00',
                negative_full: '-$#,##0.00',
                abbr: '$0.00a',
                negative_abbr: '-$0.00a',
                rounded: '$#,###',
                negative_rounded: '-$#,###'
            },
            exceptions: {AUD: 'A$', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', DKK: 'kr', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: '\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', THB: '\u0E3F', TWD: 'NT$', USD: '$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('be-nl', language);
  }
}(this));

/*!
 * numeral.js language configuration
 * language : czech (cs)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
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
        number : {
          defaultFormat : '#,##0[.]00'
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
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', CZK: 'Kč', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'CZK',
            symbol: 'Kč'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }

    if (root.numeral && root.numeral.language) {
      root.numeral.language('cs', language);
    }
}(this));

/*! 
 * numeral.js language configuration
 * language : danish denmark (dk)
 * author : Michael Storgaard : https://github.com/mstorgaard
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        },
        ordinal: function (number) {
            return '.';
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
            localCurrency: 'DKK',
            symbol: 'kr'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }

    if (root.numeral && root.numeral.language) {
      root.numeral.language('da-dk', language);
    }
}(this));
/*! 
 * numeral.js language configuration
 * language : German in Switzerland (de-ch)
 * author : Michael Piefel : https://github.com/piefel (based on work from Marco Krage : https://github.com/sinky)
 */ 
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            format: {
              full: '$ #,##0.00',
              negative_full: '$-#,##0.00',
              abbr: '$ 0.00a',
              negative_abbr: '$-0.00a',
              rounded: '$ #,###',
              negative_rounded: '$-#,###'
            },
            exceptions: {ATS: '\u00F6S', AUD: 'AU$', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: '\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', THB: '\u0E3F', TWD: 'NT$', USD: '$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'CHF',
            symbol: 'CHF'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }
  if (root.numeral && root.numeral.language) {
    root.numeral.language('de-ch', language);
  }

}(this));

/*! 
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
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
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = language;
    }

    if (root.numeral && root.numeral.language) {
      root.numeral.language('de', language);
    }
}(this));
/*! 
 * numeral.js language configuration
 * language : english united kingdom (uk)
 * author : Dan Ristic : https://github.com/dristic
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            format: {
                full: '$#,##0.00',
                negative_full: '-$#,##0.00',
                abbr: '$0.00a',
                negative_abbr: '-$0.00a',
                rounded: '$#,###',
                negative_rounded: '-$#,###'
            },
            exceptions: {AUD: 'AU$', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: '\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', THB: '\u0E3F', TWD: 'NT$', USD: '$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'GBP',
            symbol: '\u00A3'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('en-gb', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : spanish Spain
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function (root) {
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
        currency: {
            format: {
                full: '#,##0.00 $',
                negative_full: '-#,##0.00 $',
                abbr: '0.00a $',
                negative_abbr: '-0.00a $',
                rounded: '#,### $',
                negative_rounded: '-#,### $'
            },
            exceptions: {AFN: 'Af', ANG: 'NAf.', AOA: 'Kz', ARS: 'AR$', AUD: 'AU$', AWG: 'Afl.', AZN: 'man.', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', ESP: '\u20A7', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: 'JP\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('es', language);
  }
}(this));

/*! 
 * numeral.js language configuration
 * language : spanish
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function (root) {
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

  if (root.numeral && root.numeral.language) {
    root.numeral.language('es', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : Finnish
 * author : Sami Saada : https://github.com/samitheberber
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal: function (number) {
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
            exceptions: {EUR: '\u20AC', GBP: '\u00A3', JPY: '\u00A5', USD: '$', XAF: 'FCFA', XOF: 'CFA'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('fi', language);
  }
}(this));

/*!
 * numeral.js language configuration
 * language : french (Canada) (fr-CA)
 * author : Léo Renaud-Allaire : https://github.com/renaudleo
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            format: {
                full: '#,##0.00 $',
                negative_full: '(#,##0.00 $)',
                abbr: '0.00 a$',
                negative_abbr: '(0.00 a$)',
                rounded: '#,### $',
                negative_rounded: '(#,### $)'
            },
            exceptions: {ADP: '\u20A7A', ANG: 'f.NA', AUD: '$AU', BEF: 'FB', BND: '$BN', BRL: 'R$', CAD: '$', CNY: 'CN\u00A5', CYP: '\u00A3CY', EEK: 'krE', ESP: '\u20A7', EUR: '\u20AC', FJD: '$FJ', FRF: 'F', GBP: '\u00A3UK', HKD: '$HK', IEP: '\u00A3IE', ILP: '\u00A3IL', ILS: '\u20AA', INR: '\u20B9', ITL: '\u20A4IT', JPY: '\u00A5JP', KRW: '\u20A9', LKR: 'RsSL', MTP: '\u00A3MT', MXN: '$MEX', NPR: 'RsNP', NZD: '$NZ', PKR: 'RsPK', RHD: '$RH', SBD: '$SB', SGD: '$SG', SVB: '\u20A1SV', THB: '\u0E3F', TWD: 'NT$', USD: '$US', VND: '\u20AB', XAF: 'FCFA', XCD: '$EC', XOF: 'F CFA', XPF: 'FCFP', ZWD: '$Z'},
            localCurrency: 'CAD',
            symbol: '$'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('fr-CA', language);
  }
}(this));

/*!
 * numeral.js language configuration
 * language : french (fr-ch)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            format: {
                full: '$ #,##0.00',
                negative_full: '$-#,##0.00',
                abbr: '$ 0.00a',
                negative_abbr: '$-0.00a',
                rounded: '$ #,###',
                negative_rounded: '$-#,###'
            },
            exceptions: {ADP: '\u20A7A', AFN: 'Af', ANG: 'f.NA', AUD: '$AU', BAM: 'KM', BDT: 'Tk', BEF: 'FB', BND: '$BN', BRL: 'R$', CAD: '$CA', CNY: '\u00A5CN', CYP: '\u00A3CY', DJF: 'FDj', EEK: 'krE', ESP: '\u20A7', EUR: '\u20AC', FJD: '$FJ', FRF: 'F', GBP: '\u00A3UK', HKD: '$HK', IDR: 'Rp', IEP: '\u00A3IE', ILP: '\u00A3IL', ILS: '\u20AA', INR: '\u20B9', ITL: '\u20A4IT', JPY: '\u00A5JP', KRW: '\u20A9', LKR: 'RsSL', MMK: 'KMm', MNT: 'Tug', MTP: '\u00A3MT', MVR: 'Rf', MXN: '$MEX', MYR: 'RM', NPR: 'RsNP', NZD: '$NZ', PKR: 'RsPK', RHD: '$RH', SBD: '$SB', SGD: '$SG', SVC: '\u20A1SV', THB: '\u0E3F', TOP: 'T$', TWD: 'NT$', USD: '$US', VND: '\u20AB', VUV: 'VT', WST: 'WS$', XAF: 'FCFA', XCD: '$EC', XOF: 'CFA', XPF: 'FCFP', ZWD: '$Z'},
            localCurrency: 'CHF',
            symbol: 'CHF'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('fr-ch', language);
  }
}(this));

/*! 
 * numeral.js language configuration
 * language : french (fr)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
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
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('fr', language);
  }
}(this));
/*!
 * numeral.js language configuration
 * language : Hungarian (hu)
 * author : Peter Bakondy : https://github.com/pbakondy
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'E',  // ezer
            million: 'M',   // millió
            billion: 'Mrd', // milliárd
            trillion: 'T'   // trillió
        },
        ordinal: function (number) {
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
            exceptions: {HUF: 'Ft', JPY: '\u00A5', USD: '$', XAF: 'FCFA', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'HUF',
            symbol: 'Ft'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('hu', language);
  }
}(this));

/*! 
 * numeral.js language configuration
 * language : indonesian (indonesia) (in-id)
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
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
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                },
                USD : {
                  full: '$ #,##0.00',
                  negative_full: '($ #,##0.00)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'IDR',
            symbol: 'Rp'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('in-id', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : italian Italy (it)
 * author : Giacomo Trombi : http://cinquepunti.it
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
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
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('it', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : japanese
 * author : teppeis : https://github.com/teppeis
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '千',
            million: '百万',
            billion: '十億',
            trillion: '兆'
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
            localCurrency: 'JPY',
            symbol: '\u00A5'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ja', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : Korean (South Korea) (ko-kr)
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
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
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'KRW',
            symbol: '\uFFE6'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ko-kr', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : Malay (Malaysia) (ms-my)
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        },
        ordinal: function (number) {
            return '.';
        },
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
            format: {
              full: '$ #,##0.00',
              negative_full: '($ #,##0.00)',
              abbr: '$ 0.00a',
              negative_abbr: '($ 0.00a)',
              rounded: '$ #,###',
              negative_rounded: '($ #,###)',
              exceptions : {
                INR : {
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                },
                JPY : {
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                },
                USD : {
                  full: '$ #,##0.00\n',
                  negative_full: '($ #,##0.00\n)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'MYR',
            symbol: 'RM'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ms-my', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : netherlands-dutch (nl-nl)
 * author : Dave Clayton : https://github.com/davedx
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: '.',
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
                full: '$ #,###',
                negative_full: '($ #,##)'
              }
            }
          },
          exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
          localCurrency: 'EUR',
          symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('nl-nl', language);
  }
}(this));
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
/*! 
 * numeral.js language configuration
 * language : polish (pl)
 * author : Dominik Bulaj : https://github.com/dominikbulaj
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tys.',
            million: 'mln',
            billion: 'mld',
            trillion: 'bln'
        },
        ordinal: function (number) {
            return '.';
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
              },
              USD : {
                full: '#,##0.00 $',
                negative_full: '(#,##0.00 $)'
              }
            }
          },
          exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
          localCurrency: 'PLN',
          symbol: 'z\u0142'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('pl', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : portuguese brazil (pt-br)
 * author : Ramiro Varandas Jr : https://github.com/ramirovjr
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
                  full: '$ #,###',
                  negative_full: '($ #,##)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'BRL',
            symbol: 'R$'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('pt-br', language);
  }
}(this));
/*! 
 * numeral.js language configuration
 * language : portuguese (pt-pt)
 * author : Diogo Resende : https://github.com/dresende
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return 'º';
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
            exceptions: {AUD: 'AU$', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: 'JP\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', PTE: 'Esc.', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('pt-pt', language);
  }
}(this));

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
// numeral.js language configuration
// language : Russian for the Ukraine (ru-UA)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
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
            exceptions: {AUD: 'A$', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: '\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', RUB: '\u0440\u0443\u0431.', RUR: '\u0440.', SDG: '\u0441\u0443\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0424\u0443\u043D\u0442\u0430*', SSP: '\u044E\u0436\u043D\u043E\u0441\u0443\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0444\u0443\u043D\u0442\u0430', THB: '\u0E3F', TND: '\u0442\u0443\u043D\u0438\u0441\u0441\u043A\u043E\u0433\u043E \u0434\u0438\u043D\u0430\u0440\u0430*', TWD: 'NT$', UAH: '\u20B4', USD: '$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF', XXX: 'XXXX'},
            localCurrency: 'UAH',
            symbol: '\u20B4'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ru-UA', language);
  }
}(this));

/*!
 * numeral.js language configuration
 * language : russian (ru)
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
 (function (root) {
  var language = {
    delimiters: {
      thousands: ' ',
      decimal: ','
    },
    abbreviations: {
      thousand: 'тыс.',
      million: 'млн',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
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
            localCurrency: 'RUB',
            symbol: '\u0440\u0443\u0431.'
          }
        };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('ru', language);
  }
 }(this));
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
/*!
 * numeral.js language configuration
 * language : Swedish (sv-se)
 * author : Dan Hagman (https://github.com/hagmandan)
 */
 (function (root) {
  var language = {
    delimiters: {
      thousands: ' ',
      decimal: ','
    },
    abbreviations: {
      thousand: 'tn',
      million: 'mn',
      billion: 'md',
      trillion: 'bn'
    },
    ordinal: function () {
      return '.';
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
      localCurrency: 'SEK',
      symbol: 'kr'
    }
  };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('sv-se', language);
  }
}(this));
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
/*!
 * numeral.js language configuration
 * language : Tagalog (Philippine) (tl-ph)
 * author : Dan Hagman (https://github.com/hagmandan)
 */
 (function (root) {
  var language = {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
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
            full: '$ #,###',
            negative_full: '($ #,##)'
          },
          USD : {
            full: '$#,##0.00',
            negative_full: '($#,##0.00)'
          }
        }
      },
      exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
      localCurrency: 'PHP',
      symbol: '\u20B1'
    }
  };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('tl-ph', language);
  }
}(this));
/*!
 * numeral.js language configuration
 * language : turkish (tr)
 * author : Ecmel Ercan : https://github.com/ecmel, Erhan Gundogan : https://github.com/erhangundogan, Burak Yiğit Kaya: https://github.com/BYK
 */
 (function (root) {
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
        full: '$ #,##0.00',
        negative_full: '($ #,##0.00)',
        abbr: '$ 0.00a',
        negative_abbr: '($ 0.00a)',
        rounded: '$ #,###',
        negative_rounded: '($ #,###)',
        exceptions : {
          INR : {
            full: '$ #,##',
            negative_full: '($ #,##)'
          },
          JPY : {
            full: '$ #,##',
            negative_full: '($ #,##)'
          },
          USD : {
            full: '#,##0.00 $',
            negative_full: '(#,##0.00 $)'
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

  if (root.numeral && root.numeral.language) {
    root.numeral.language('tr', language);
  }
}(this));
// numeral.js language configuration
// language : Ukrainian for the Ukraine (uk-UA)
// author : Michael Piefel : https://github.com/piefel (with help from Tetyana Kuzmenko)
(function (root) {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тис.',
            million: 'млн',
            billion: 'млрд',
            trillion: 'блн'
        },
        ordinal: function () {
            // not ideal, but since in Ukrainian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return ''; 
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
            exceptions: {AUD: 'AU$', AZN: '\u043C\u0430\u043D.', BRL: 'R$', CAD: 'CA$', CNY: 'CN\u00A5', EUR: '\u20AC', GBP: '\u00A3', HKD: 'HK$', ILS: '\u20AA', INR: '\u20B9', JPY: '\u00A5', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZ$', RSD: '\u0434\u0438\u043D.', RUB: '\u0440\u0443\u0431.', THB: '\u0E3F', TWD: 'NT$', UAH: '\u20B4', UAK: '\u043A\u0440\u0431.', USD: '$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'UAH',
            symbol: '\u20B4'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('uk-UA', language);
  }
}(this));
/*!
 * numeral.js language configuration
 * language : Chinese Simplified (zh-cn)
 * author : Dan Hagman (https://github.com/hagmandan)
 */
 (function (root) {
  var language = {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: '万',
      million: '亿',
      billion: '万亿',
      trillion: '亿亿'
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
            full: '$ #,###',
            negative_full: '($ #,##)'
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

  if (root.numeral && root.numeral.language) {
    root.numeral.language('zh-cn', language);
  }
}(this));
/*!
 * numeral.js language configuration
 * language : Chinese Traidional (zh-tw)
 * author : Dan Hagman (https://github.com/hagmandan)
 */
 (function (root) {
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
            full: '$ #,###',
            negative_full: '($ #,##)'
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

  if (root.numeral && root.numeral.language) {
    root.numeral.language('zh-tw', language);
  }
}(this));