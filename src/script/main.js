function main() {
    const baseUrl = 'https://notes-api.dicoding.dev/v2';

    const fetchApi = async (url, options = {}) => {
        try {
            const response = await fetch(url, options);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
                return null;
            }
            return responseJson;
        } catch (error) {
            showResponseMessage('Check your internet connection');
            return null;
        }
    };

    const getNote = async () => {
        const responseJson = await fetchApi(`${baseUrl}/notes`);
        if (responseJson) renderAllNotes(responseJson.data);
    };

    const createNote = async (note) => {
        const responseJson = await fetchApi(`${baseUrl}/notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note),
        });
        if (responseJson) {
            showResponseMessage(responseJson.message);
            if (!responseJson.error) {
                getNote();
                clearForm();
            }
        }
    };

    const deleteNote = async (noteId) => {
        const responseJson = await fetchApi(`${baseUrl}/notes/${noteId}`, { method: 'DELETE' });
        if (responseJson) {
            showResponseMessage(responseJson.message);
            getNote();
        }
    };

    const archiveNote = async (noteId) => {
        const responseJson = await fetchApi(`${baseUrl}/notes/${noteId}/archive`, { method: 'POST' });
        if (responseJson) {
            showResponseMessage(responseJson.message);
            getNote();
        }
    };

    const renderAllNotes = (notes) => {
        const listNoteElement = document.querySelector('#listNote');
        listNoteElement.innerHTML = notes.map(note => `
            <div class="note-item">
                <h5>${note.title}</h5>
                <p>${note.body}</p>
                <button type="button" class="button-delete" id="${note.id}">Hapus</button>
                <button type="button" class="button-archive" id="${note.id}">Archive</button>
            </div>
        `).join('');

        document.querySelectorAll('.button-delete').forEach(button => {
            button.addEventListener('click', () => handleButtonClick(deleteNote, button.id));
        });

        document.querySelectorAll('.button-archive').forEach(button => {
            button.addEventListener('click', () => handleButtonClick(archiveNote, button.id));
        });
    };

    const handleButtonClick = (action, noteId) => {
        showLoadingScreen();
        setTimeout(async () => {
            await action(noteId);
            hideLoadingScreen();
        }, 2000);
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    const clearForm = () => {
        document.querySelector('#title').value = '';
        document.querySelector('#note-text').value = '';
    };

    const showLoadingScreen = () => {
        document.getElementById('loading').style.display = 'block';
    };

    const hideLoadingScreen = () => {
        document.getElementById('loading').style.display = 'none';
    };

    document.addEventListener('DOMContentLoaded', () => {
        const inputNoteTitle = document.querySelector('#title');
        const inputNoteBody = document.querySelector('#note-text');
        const buttonSubmit = document.querySelector('#submit');

        buttonSubmit.addEventListener('click', async (event) => {
            event.preventDefault();

            const title = inputNoteTitle.value.trim();
            const body = inputNoteBody.value.trim();

            if (!title || !body) {
                showResponseMessage('Judul dan/atau Isi tidak boleh kosong');
                return;
            }

            const note = { title, body };
            showLoadingScreen();
            setTimeout(async () => {
                await createNote(note);
                hideLoadingScreen();
            }, 2000);
        });

        getNote();
    });
}

export default main;
