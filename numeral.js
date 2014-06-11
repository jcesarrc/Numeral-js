/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function () {

    /************************************
        Constants
    ************************************/

    var numeral,
        VERSION = '1.5.3',
        // internal storage for language config files
        languages = {},
        currentLanguage = 'en',
        zeroFormat = null,
        defaultFormat = '0,0',
        defaultCurrencies = ['ADP','AED','AFA','AFN','ALK','ALL','AMD','ANG','AOA','AOK','AON','AOR','ARA','ARL','ARM','ARP','ARS','ATS','AUD','AWG','AZM','AZN','BAD','BAM','BAN','BBD','BDT','BEC','BEF','BEL','BGL','BGM','BGN','BGO','BHD','BIF','BMD','BND','BOB','BOL','BOP','BOV','BRB','BRC','BRE','BRL','BRN','BRR','BRZ','BSD','BTN','BUK','BWP','BYB','BYR','BZD','CAD','CDF','CHE','CHF','CHW','CLE','CLF','CLP','CNX','CNY','COP','COU','CRC','CSD','CSK','CUC','CUP','CVE','CYP','CZK','DDM','DEM','DJF','DKK','DOP','DZD','ECS','ECV','EEK','EGP','ERN','ESA','ESB','ESP','ETB','EUR','FIM','FJD','FKP','FRF','GBP','GEK','GEL','GHC','GHS','GIP','GMD','GNF','GNS','GQE','GRD','GTQ','GWE','GWP','GYD','HKD','HNL','HRD','HRK','HTG','HUF','IDR','IEP','ILP','ILR','ILS','INR','IQD','IRR','ISJ','ISK','ITL','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRH','KRO','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL','LTT','LUC','LUF','LUL','LVL','LVR','LYD','MAD','MAF','MCF','MDC','MDL','MGA','MGF','MKD','MKN','MLF','MMK','MNT','MOP','MRO','MTL','MTP','MUR','MVP','MVR','MWK','MXN','MXP','MXV','MYR','MZE','MZM','MZN','NAD','NGN','NIC','NIO','NLG','NOK','NPR','NZD','OMR','PAB','PEI','PEN','PES','PGK','PHP','PKR','PLN','PLZ','PTE','PYG','QAR','RHD','ROL','RON','RSD','RUB','RUR','RWF','SAR','SBD','SCR','SDD','SDG','SDP','SEK','SGD','SHP','SIT','SKK','SLL','SOS','SRD','SRG','SSP','STD','SUR','SVC','SYP','SZL','THB','TJR','TJS','TMM','TMT','TND','TOP','TPE','TRL','TRY','TTD','TWD','TZS','UAH','UAK','UGS','UGX','USD','USN','USS','UYI','UYP','UYU','UZS','VEB','VEF','VND','VNN','VUV','WST','XAF','XAG','XAU','XBA','XBB','XBC','XBD','XCD','XDR','XEU','XFO','XFU','XOF','XPD','XPF','XPT','XRE','XSU','XTS','XUA','XXX','YDD','YER','YUD','YUM','YUN','YUR','ZAL','ZAR','ZMK','ZRN','ZRZ','ZWD','ZWL','ZWR'],
        defaultCurrencyExceptions = {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'US$', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports);


    /************************************
        Constructors
    ************************************/


    // Numeral prototype object
    function Numeral (number) {
        this._value = number;
    }

    /**
     * Implementation of toFixed() that treats floats more like decimals
     *
     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
     * problems for accounting- and finance-related software.
     */
    function toFixed (value, precision, roundingFunction, optionals) {
        var power = Math.pow(10, precision),
            optionalsRegExp,
            output;
            
        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
        // Multiply up by precision, round accurately, then divide and use native toFixed():
        output = (roundingFunction(value * power) / power).toFixed(precision);

        if (optionals) {
            optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
            output = output.replace(optionalsRegExp, '');
        }

        return output;
    }

    /************************************
        Formatting
    ************************************/

    // determine what type of formatting we need to do
    function formatNumeral (n, format, roundingFunction, config) {
        var output, currencyType, currencyFormatType, lang;

        if(!format){
          lang = languages[currentLanguage];
          if(lang.number && lang.number.defaultFormat) {
            format = lang.number.defaultFormat;
          } else {
            format = defaultFormat;
          }
        }

        // figure out what kind of format we are dealing with
        if (format.indexOf('$') > -1) { // currency!!!!!
            currencyType = (config && config.currency) || null;
            currencyFormatType = (config && config.currencyFormatType) || null;
            if (!currencyFormatType) {
                currencyFormatType = (/a/.test(format)) ? 'abbr' : (/[\d#]+\.[\d#]+/.test(format)) ? 'full' : 'rounded';
            }
            output = formatCurrency(n, currencyType, currencyFormatType, roundingFunction);
        } else if (format.indexOf('%') > -1) { // percentage
            output = formatPercentage(n, format, roundingFunction);
        } else if (format.indexOf(':') > -1) { // time
            output = formatTime(n, format);
        } else { // plain ol' numbers or bytes
            output = formatNumber(n._value, format, roundingFunction);
        }

        // return string
        return output;
    }

    // revert to number
    function unformatNumeral (n, string) {
        var stringOriginal = string,
            thousandRegExp,
            millionRegExp,
            billionRegExp,
            trillionRegExp,
            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            bytesMultiplier = false,
            power;

        if (string.indexOf(':') > -1) {
            n._value = unformatTime(string);
        } else {
            if (string === zeroFormat) {
                n._value = 0;
            } else {
                if (languages[currentLanguage].delimiters.decimal !== '.') {
                    string = string.replace(/\./g,'').replace(languages[currentLanguage].delimiters.decimal, '.');
                }

                // see if abbreviations are there so that we can multiply to the correct number
                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|( ?\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|( ?\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|( ?\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|( ?\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');

                // see if bytes are there so that we can multiply to the correct number
                for (power = 0; power <= suffixes.length; power++) {
                    bytesMultiplier = (string.indexOf(suffixes[power]) > -1) ? Math.pow(1024, power + 1) : false;

                    if (bytesMultiplier) {
                        break;
                    }
                }

                // do some math to create our number
                n._value = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * (((string.split('-').length + Math.min(string.split('(').length-1, string.split(')').length-1)) % 2)? 1: -1) * Number(string.replace(/[^0-9\.]+/g, ''));

                // round if we are talking about bytes
                n._value = (bytesMultiplier) ? Math.ceil(n._value) : n._value;
            }
        }
        return n._value;
    }

    function formatCurrency (n, currency, formatType, roundingFunction) {
        var lang = languages[currentLanguage],
            currencyExceptions = lang.currency.exceptions || defaultCurrencyExceptions,
            isNegative = n._value < 0,
            formattedNumber, output, currencyFormat, currencySymbol, format, formatTypeLookupKey;

        formatType = formatType || 'full';
        currencyFormat = lang.currency.format[formatType];
        formatTypeLookupKey = isNegative ? 'negative_' + formatType : formatType;

        if (isNegative && lang.currency.format[formatTypeLookupKey]) {
          currencyFormat = lang.currency.format[formatTypeLookupKey];
        }

        //if currency is an exception from default format
        if(lang.currency.format.exceptions && lang.currency.format.exceptions[currency] && lang.currency.format.exceptions[currency][formatTypeLookupKey]) {
          currencyFormat = lang.currency.format.exceptions[currency][formatTypeLookupKey];
        }

        format = currencyFormat.replace(/(?: ?\$ ? ?)|\-/g, '').replace(' ','').replace('\n','');
        if (!currency) {
            currencySymbol = lang.currency.symbol;
        } else if (defaultCurrencies.indexOf(currency) > -1) {
            if (currencyExceptions[currency]) {
                currencySymbol = currencyExceptions[currency];
            } else {
                currencySymbol = currency;
            }
        } else {
            throw new Error(currency + ' is not a valid currency');
        }
        // format the number
        formattedNumber = formatNumber(n._value, format, roundingFunction).replace(/[\(\-\)]/g,'');
        output = currencyFormat.replace(/(?:#[,\. ]##0[.,]00|0[,.]00 ?a|#[,. ]###|#[,\. ]##)/, formattedNumber);
        var dollarIndex = output.indexOf('$');
        if (dollarIndex > -1) {
            output = output.substring(0, dollarIndex) + currencySymbol + output.substring(dollarIndex + 1);
        }

        return output;
    }

    function formatPercentage (n, format, roundingFunction) {
        var space = '',
            output,
            value = n._value * 100;

        // check for space before %
        if (format.indexOf(' %') > -1) {
            space = ' ';
            format = format.replace(' %', '');
        } else {
            format = format.replace('%', '');
        }

        output = formatNumber(value, format, roundingFunction);

        if (output.indexOf(')') > -1 ) {
            output = output.split('');
            output.splice(-1, 0, space + '%');
            output = output.join('');
        } else {
            output = output + space + '%';
        }

        return output;
    }

    function formatTime (n) {
        var hours = Math.floor(n._value/60/60),
            minutes = Math.floor((n._value - (hours * 60 * 60))/60),
            seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));
        return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }

    function unformatTime (string) {
        var timeArray = string.split(':'),
            seconds = 0;
        // turn hours and minutes into seconds and add them all up
        if (timeArray.length === 3) {
            // hours
            seconds = seconds + (Number(timeArray[0]) * 60 * 60);
            // minutes
            seconds = seconds + (Number(timeArray[1]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[2]);
        } else if (timeArray.length === 2) {
            // minutes
            seconds = seconds + (Number(timeArray[0]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[1]);
        }
        return Number(seconds);
    }

    function formatNumber (value, format, roundingFunction) {
        var negP = false,
            signed = false,
            optDec = false,
            abbr = '',
            bytes = '',
            ord = '',
            abs = Math.abs(value),
            suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            min,
            max,
            power,
            w,
            precision,
            thousands,
            d = '',
            neg = false;

        // check if number is zero and a custom zero format has been set
        if (value === 0 && zeroFormat !== null) {
            return zeroFormat;
        } else {
            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (format.indexOf('(') > -1) {
                negP = true;
                format = format.slice(1, -1);
            } else if (format.indexOf('+') > -1) {
                signed = true;
                format = format.replace(/\+/g, '');
            }

            // see if abbreviation is wanted
            if (format.indexOf('a') > -1) {
                // check for space before abbreviation
                if (format.indexOf(' a') > -1) {
                    abbr = ' ';
                    format = format.replace(' a', '');
                } else {
                    format = format.replace('a', '');
                }

                if (abs >= Math.pow(10, 12)) {
                    // trillion
                    abbr = abbr + languages[currentLanguage].abbreviations.trillion;
                    value = value / Math.pow(10, 12);
                } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
                    // billion
                    abbr = abbr + languages[currentLanguage].abbreviations.billion;
                    value = value / Math.pow(10, 9);
                } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
                    // million
                    abbr = abbr + languages[currentLanguage].abbreviations.million;
                    value = value / Math.pow(10, 6);
                } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
                    // thousand
                    abbr = abbr + languages[currentLanguage].abbreviations.thousand;
                    value = value / Math.pow(10, 3);
                }
            }

            // see if we are formatting bytes
            if (format.indexOf('b') > -1) {
                // check for space before
                if (format.indexOf(' b') > -1) {
                    bytes = ' ';
                    format = format.replace(' b', '');
                } else {
                    format = format.replace('b', '');
                }

                for (power = 0; power <= suffixes.length; power++) {
                    min = Math.pow(1024, power);
                    max = Math.pow(1024, power+1);

                    if (value >= min && value < max) {
                        bytes = bytes + suffixes[power];
                        if (min > 0) {
                            value = value / min;
                        }
                        break;
                    }
                }
            }

            // see if ordinal is wanted
            if (format.indexOf('o') > -1) {
                // check for space before
                if (format.indexOf(' o') > -1) {
                    ord = ' ';
                    format = format.replace(' o', '');
                } else {
                    format = format.replace('o', '');
                }

                ord = ord + languages[currentLanguage].ordinal(value);
            }

            if (format.indexOf('[.]') > -1) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            w = value.toString().split('.')[0];


            precision = format.split('.')[1];
            thousands = format.indexOf(',');

            if (precision) {
                if (precision.indexOf('[') > -1) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    d = toFixed(value, precision.length, roundingFunction);
                }

                w = d.split('.')[0];

                if (d.split('.')[1].length) {
                    d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
                } else {
                    d = '';
                }

                if (optDec && Number(d.slice(1)) === 0) {
                    d = '';
                }
            } else {
                w = toFixed(value, null, roundingFunction);
            }

            // format number
            if (w.indexOf('-') > -1) {
                w = w.slice(1);
                neg = true;
            }

            if (thousands > -1) {
                w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                w = '';
            }

            return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
        }
    }

    /************************************
        Top Level Functions
    ************************************/

    numeral = function (input) {
        if (numeral.isNumeral(input)) {
            input = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            input = 0;
        } else if (!Number(input)) {
            input = numeral.fn.unformat(input);
        }

        return new Numeral(Number(input));
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function (obj) {
        return obj instanceof Numeral;
    };

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    numeral.language = function (key, values) {
        if (!key) {
            return currentLanguage;
        }

        if (key && !values) {
            if(!languages[key]) {
                throw new Error('Unknown language : ' + key);
            }
            currentLanguage = key;
        }

        if (values || !languages[key]) {
            loadLanguage(key, values);
        }

        return numeral;
    };
    
    // This function provides access to the loaded language data.  If
    // no arguments are passed in, it will simply return the current
    // global language object.
    numeral.languageData = function (key) {
        if (!key) {
            return languages[currentLanguage];
        }
        
        if (!languages[key]) {
            throw new Error('Unknown language : ' + key);
        }
        
        return languages[key];
    };

    numeral.language('en', {
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
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
            localCurrency: 'USD',
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
            symbol: '$'
        }
    });

    numeral.zeroFormat = function (format) {
        zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function (format) {
      defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    /************************************
        Helpers
    ************************************/

    function loadLanguage(key, values) {
        languages[key] = values;
    }

    /************************************
        Numeral Prototype
    ************************************/


    numeral.fn = Numeral.prototype = {

        clone : function () {
            return numeral(this);
        },

        format : function (inputString, roundingFunction, currency) {
            return formatNumeral(this,
                  inputString,
                  (roundingFunction !== undefined) ? roundingFunction : Math.round,
                  currency ? {currency: currency} : null
              );
        },

        unformat : function (inputString) {
            if (Object.prototype.toString.call(inputString) === '[object Number]') { 
                return inputString; 
            }
            return unformatNumeral(this, inputString ? inputString : defaultFormat);
        },

        formatCurrency : function (formatType, currency, roundingFunction) {
          return formatCurrency(this,
                  currency,
                  formatType,
                  (roundingFunction !== undefined) ? roundingFunction : Math.round
            );
        },

        value : function () {
            return this._value;
        },

        valueOf : function () {
            return this._value;
        },

        set : function (value) {
            this._value = Number(value);
            return this;
        },

        add : function (value) {
            this._value = this._value + Number(value);
            return this;
        },

        subtract : function (value) {
            this._value = this._value - Number(value);
            return this;
        },

        multiply : function (value) {
            this._value = this._value * Number(value);
            return this;
        },

        divide : function (value) {
            this._value = this._value / Number(value);
            return this;
        },

        difference : function (value) {
            var difference = this._value - Number(value);

            if (difference < 0) {
                difference = -difference;
            }

            return difference;
        }

    };

    /************************************
        Exposing Numeral
    ************************************/

    // CommonJS module is defined
    if (hasModule) {
        module.exports = numeral;
    }

    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `numeral` as a global object via a string identifier,
        // for Closure Compiler 'advanced' mode
        this['numeral'] = numeral;
    }
}).call(this);
