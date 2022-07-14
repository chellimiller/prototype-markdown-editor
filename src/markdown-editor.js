import { basicSetup, EditorView } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

const style = `
.markdown-editor-container {
  width: 100%;
}
`;

class MarkdownEditor extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;

    const containerElement = document.createElement('div');
    containerElement.classList.add('markdown-editor-container');

    shadowRoot.append(styleElement, containerElement);

    this.editorView = new EditorView({
      doc: '',
      extensions: [basicSetup, markdown({ codeLanguages: languages })],
      parent: containerElement,
    });
  }
}

customElements.define('markdown-editor', MarkdownEditor);
