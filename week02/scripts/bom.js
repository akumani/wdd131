const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (!chapter) {
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
    deleteButton.addEventListener('click', () => li.remove());

    li.append(deleteButton);
    list.append(li);
    input.value = '';
    input.focus();
});