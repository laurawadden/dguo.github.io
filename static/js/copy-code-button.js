/* global clipboard */

if (clipboard) {
    document.querySelectorAll('.highlight').forEach(function (codeBlock) {
        var button = document.createElement('button');

        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically, leaving the button
                   in a focused state */
                button.blur();

                button.innerText = 'Copied!';
                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function () {
                button.innerText = 'Error';
            });
        });

        codeBlock.parentNode.insertBefore(button, codeBlock);
    });
}
