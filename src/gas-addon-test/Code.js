'use strict'

/*
 * XXX Note that custom functions are not bound if you use this with
 * "Test as add-on;" you need to make a "real" add-on for them to bind.
 * This is a known issue:
 * https://code.google.com/p/google-apps-script-issues/issues/detail?id=5603
 */

/*
 * @customfunction
 */
function f() {
    Logger.log('add-on f()')
    return 'add-on'
}

/*
 * @customfunction
 */
function g() {
    Logger.log('add-on g()')
    return 'add-on g'
}

/*
 * @customfunction
 */
function hello(name) {
    return 'Hello, ' + name
}

function setB2Hello() {
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    ss.getSheets()[0].getRange(2, 2, 1, 1).setFormula('=hello(2)')
}

function onInstall(e) {
    onOpen(e)
}

function onOpen(e) {
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    ss.addMenu('Test Add-on!', [
        { name: 'g', functionName: 'g' },
        { name: 'setB2Hello', functionName: 'setB2Hello' }
    ])
}
