const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const limitMessage = document.querySelector('#limit-message');

button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (!chapter) {
        input.focus();
        return;
    }

    if (list.children.length >= 10) {
        limitMessage.textContent = 'You can only add up to 10 chapters.';
        limitMessage.hidden = false;
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.type = 'button';
    deleteButton.classList.add('delete');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
    deleteButton.addEventListener('click', () => {
        li.remove();
        limitMessage.hidden = true;
    });

    li.append(deleteButton);
    list.append(li);
    limitMessage.hidden = true;
    input.value = '';
    input.focus();
});