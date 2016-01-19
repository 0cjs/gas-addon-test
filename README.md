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


Add-ons: Installed vs. Enabled
------------------------------

When [testing a script as an add-on][testaddon] you'll have to choose
an initial authorization state: installed, enabled, or both. The add-on
appears in the Add-ons menu in either state.

When installed, that means that a user has chosen the add-on in the
store and authorized it to access their Google data. The status switches
to enabled when anybody uses the add-on in the document. If two people
collaborate on a document, and one of them uses an add-on, it is
installed for the one user and enabled for the document.

Installed:
    * Applies to the user account
    * Is caused by getting an add-on from the store
    * The menu item for that add-in is visible only to that user account
    * opnOen(e) runs in AuthMode.NONE (when not also enabled)

Enabled:
    * Applies to a particular document (when any user is using it)
    * Is caused by getting an add-on from the store while using that document
      or by using a previously installed add-on in that document
    * The menu item for that add-in is visible to anybody using the document
    * onOpen(e) runs in AuthMode.LIMITED

[testaddon]: https://developers.google.com/apps-script/add-ons/test
[i.vs.e]: https://developers.google.com/apps-script/add-ons/lifecycle#installed_versus_enabled


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
