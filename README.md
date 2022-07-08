# Prototype: Markdown Editor

This is a prototype of a simple Markdown editor.

I enjoy writing in Markdown and wanted to see what would be involved for a basic editor.
Ideally, it will have a WYSIWYG mode, but realistically it will just have a preview.

## Scope

 - Parsing raw Markdown text
 - Publishing demo to GitHub pages

## Stretch Goals

 - WYSIWIG mode
 - Create `<markdown-editor>` web component

## Out-of-scope

 - Styling
 - Edge cases

## Scripts

### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

### Format: `npm run format`

To format the source code, run `npm run format`.

### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

To simulate a production environment, run `npm run start:production`.
Note that the `webpack-dev-server` is not intended for use in production environments.

### Test: `npm test`

To test the app, run `npm test`.

## Setting Up a Local Development Environment

### Pre-requisites

Before getting started, you will need [Git] and [Node.js].

#### [Git]

1. Open a terminal and run `git --version`
1. If Git is not installed, follow
   [the GitHub guide for setting up Git][github_docs_git]

#### [Node.js]

1. Open a terminal and run `node -v`
1. If Node.js is not installed or is not `v16.0.0` or above, follow
   [the official guide for installing Node.js][node_docs_install]

### Instructions

1. Clone the repository and open the root directory.
1. Install dependencies.\
   Run `npm install`
1. Serve app in development mode.\
   Run `npm start`

You are now ready to start coding!

[babel]: https://babeljs.io/
[generate]: https://github.com/utori-dev/template-vanilla-web-app/generate
[git]: https://git-scm.com/
[github_docs_git]: https://docs.github.com/en/get-started/quickstart/set-up-git
[node.js]: https://nodejs.org/
[node_docs_install]: https://nodejs.dev/learn/how-to-install-nodejs
