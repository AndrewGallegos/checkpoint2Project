var page
module.exports = {
    before: browser => page = browser.page.projPage(),
    beforeEach: browser => page.navigate(),
    after: browser => page.end(),

    'Evens and Odds': browser => {
        var data = {
            input: '1,2,3,4,5,6,7,8,9,0',
            evens: '2,4,6,8,0',
            odds: '1,3,5,7,9',

            badInput: 'e',
            badResult: 'null'
        }
        //enter valid info and check result
        page
            .setValue('@evenOddInput', data.input)
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain(data.evens)
        page
            .expect.element('@oddResults').text.to.contain(data.odds)
        //enter INVALID info and check result
        page
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput', data.badInput)
            .click('@evenOddButton')
            .expect.element('@oddResults').text.to.contain(data.badResult)
    },
    'Filter Object': browser => {
        var data = {
            input: 'age',
            object: '{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }'
        }
        //enter valid info and check result
        page
            .setValue('@objectFilterInput', data.input)
            .click('@objectFilterButton')
            .expect.element('@objectFilterResults').text.to.contain(data.object)
    },
    'Filter String': browser => {
        var data = {
            input: 'J',
            result: '"James"'
        }
        //enter valid info and check result
        page
            .setValue('@nameFilterInput', data.input)
            .click('@nameFilterButton')
            .expect.element('@nameFilterResults').text.to.contain(data.result)
    },
    'Palindrome': browser => {
        var data = {
            input: 'racecar',
            result: 'true',

            falseInput: 'orange',
            falseResult: 'false'
        }
        //enter valid info and check result
        page
            .setValue('@palindromeInput', data.input)
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain(data.result)
        //enter INVALID info and check result
        page
            .setValue('@palindromeInput', data.falseInput)
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain(data.falseResult)
    },
    'Sum': browser => {
        var data = {
            input1: '1024',
            input2: '2048',
            result: '3072',

            badInput: 'e',
            badResult: 'NaN'
        }
        //enter valid info and check result
        page
            .setValue('@sumInput1', data.input1)
            .setValue('@sumInput2', data.input2)
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain(data.result)
        //enter INVALID info and check result
        page
            .setValue('@sumInput1', data.badInput)
            .setValue('@sumInput2', data.badInput)
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain(data.badResult)
    }
}