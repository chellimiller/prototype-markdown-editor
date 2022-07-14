// Ensure that the styles from index.css are included.
import './index.css';
import './markdown-editor';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener('load', registerServiceWorker);

/**
 * Retrieve the root element for the app.
 *
 * @see `/public/index.html`
 */
const app = document.getElementById('app');

/**
 * Header element that will contain the "Hello World!" text.
 */
const header = document.createElement('h1');
header.innerText = 'Hello World!';

const markdownEditor = document.createElement('markdown-editor');

app.append(header, markdownEditor);
