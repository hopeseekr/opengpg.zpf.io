import { GPGSpeaker } from './GPGSpeaker.js';  // Adjust the path as needed

$('#encryptButton').click(() => {
    const speaker = new GPGSpeaker();
    const $gpgTextBox = $('#gpgTextBox');
    const passkey = $('#passkey').val();

    speaker.symmetricalEncrypt($gpgTextBox.val(), passkey)
        .then((encrypted) => {
            $gpgTextBox.val(encrypted);
        });
});

$('#decryptButton').click(() => {
    const speaker = new GPGSpeaker();
    const $gpgTextBox = $('#gpgTextBox');
    const passkey = $('#passkey').val();

    speaker.symmetricalDecrypt($gpgTextBox.val(), passkey)
        .then((encrypted) => {
            $gpgTextBox.val(encrypted);
        });
});

// Select all text when inputs are clicked.
$(document).ready(function() {
    // Event handler for clicking on <textarea> and <input type="text">
    $('textarea, input[type="text"]').on('click', function() {
        var $this = $(this);
        $this.select(); // Select all text
    });
});
