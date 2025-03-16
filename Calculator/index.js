document.addEventListener('DOMContentLoaded', function () {
    const output = document.querySelector('.output input');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'AC') {
                output.value = '';
            } else if (value === 'DEL') {
                output.value = output.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    output.value = eval(output.value);
                } catch (e) {
                    output.value = 'Error';
                }
            } else {
                output.value += value;
            }
        });
    });
});
