window.addEventListener('DOMContentLoaded', function() {

    let btn = document.querySelector('.js-menu-toggle');
    let container = document.querySelector('.js-menu-inner');

    if (btn && container) {
        btn.addEventListener('click', function () {
            if (!btn.classList.contains('--opened')) {
                container.classList.add('--opened');
                btn.classList.add('--opened');
            } else {
                container.classList.remove('--opened');
                btn.classList.remove('--opened');
            }
        });
    }

});