var numeral = require('../../numeral'),
    language = require('../../languages/sv-se');

numeral.language('sv-se', language);

exports['language:sv-se'] = {
    setUp: function (callback) {
        numeral.language('sv-se');
        callback();
    },

    tearDown: function (callback) {
        numeral.language('en');
        callback();
    },

    format: function (test) {
        test.expect(14);

        var tests = [
            [10000,'0,0.0000','10 000,0000'],
            [10000.23,'0,0','10 000'],
            [-10000,'0,0.0','-10 000,0'],
            [10000.1234,'0.000','10000,123'],
            [-10000,'(0,0.0000)','(10 000,0000)'],
            [-0.23,'.00','-,23'],
            [-0.23,'(.00)','(,23)'],
            [0.23,'0.00000','0,23000'],
            [1230974,'0.0a','1,2mn'],
            [1430974124,'0.0a','1,4md'],
            [9123456789234,'0.0a','9,1bn'],
            [1460,'0a','1tn'],
            [-104000,'0a','-104tn'],
            [1,'0[.]0','1']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    currency: function (test) {
        test.expect(8);

        var tests = [
            [1000.234,'$0,0.00','full','1 000,23 kr'],
            [-1000.234,'($0,0)','rounded','(1 000 kr)'],
            [-1000.234,'$0.00','full','(1 000,23 kr)'],
            [1230974,'($0.00a)','abbr','1,23mn kr']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][3], tests[i][1]);
        }

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).formatCurrency(tests[i][2]), tests[i][3], tests[i][1]);
        }

        test.done();
    },

    percentages: function (test) {
        test.expect(4);

        var tests = [
            [1,'0%','100%'],
            [0.974878234,'0.000%','97,488%'],
            [-0.43,'0%','-43%'],
            [0.43,'(0.000%)','43,000%']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    unformat: function (test) {
        test.expect(9);

        var tests = [
            ['10 000,123',10000.123],
            ['(0,12345)',-0.12345],
            ['(kr 1,23 mn)',-1230000],
            ['10tn',10000],
            ['-10tn',-10000],
            ['23e',23],
            ['kr 10.000,00',10000],
            ['-76%',-0.76],
            ['2:23:57',8637]
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral().unformat(tests[i][0]), tests[i][1], tests[i][0]);
        }

        test.done();
    }
};
