# Credits, Notes, and Reference

## React

   + https://reactjs.org/
   + https://reactjs.org/docs/state-and-lifecycle.html
   + https://stackoverflow.com/a/39426846/670433
   + https://reactjs.org/docs/faq-functions.html
   + https://www.freecodecamp.org/news/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56/

Passing params onclick:

```js
<button onClick={this.handleClick.bind(this, id)} />
```

```js
handleChange = () => {
  // call this function from render
  // and this.whatever in here works fine.
};
```

## Create React App

   + https://github.com/facebook/create-react-app

```sh
npx create-react-app nhv-recycles # --typescript
```

  + https://create-react-app.dev/docs/folder-structure

For the project to build, these files must exist with exact filenames:

  + "public/index.html" is the page template
  + "src/index.js" is the JavaScript entry point

## Routing

  + https://reacttraining.com/blog/reach-react-router-future/

## Reach Router

  + https://github.com/reach/router
  + https://reach.tech/router

```sh
npm install --save @reach/router
```
