gas-addon-test
==============

A bunch of code to test development of Google Apps Script Add-ons
(in this case, one for Google Sheets) using local source and testing
framework, with a target to upload the code to Google when done.

Requirements
------------

This project assumes that you have `gapps` in your path. You can get
a version with the `download` command from:

    https://github.com/cjs-cynic-net/node-google-apps-script


Notes on GAS
============

I don't know where these tricks related to GAS projects are documented
(if they even are), so I'm going to document them here, for the moment.


Two Different Levels of Permission to Access a Document
-------------------------------------------------------

From the Google example code:

    // For testing - broadens the OAuth scope to allow opening any
    // Spreadsheet on the current user's Drive
    /** @NotOnlyCurrentDoc */

This will ask for permission to "View and manage your spreadsheets in
Google Drive".

    // For production, this script will now only be able to act on
    // Spreadsheets that it is attached to via a user installing and
    // activating the add-on.
    /** @OnlyCurrentDoc */

This will ask for permission to "View and manage spreadsheets that this
application has been installed in".
