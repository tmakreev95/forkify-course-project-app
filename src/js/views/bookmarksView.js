import View from "./view";
import previewView from "./previewView";
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a recipe and bookmark it!';
    _message = '';

    _generateMarkup() {
        return this._data
            .map(bookmark => previewView.render(bookmark, false))
            .join('');
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
}

export default new BookmarksView();