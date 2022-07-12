const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Context = React.createContext();

// Функция для рендеренга страниц + мидлварка
function renderComponent(ReactComponent, props, options = { doctype: true }) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Context.Provider value={{ ...this.app.locals, ...this.locals }}>
      <ReactComponent {...props} />
    </Context.Provider>,
  );

  if (options.doctype) this.write('<!DOCTYPE html>');
  this.end(html);
};

function reactSsrMiddleware(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = reactSsrMiddleware;
module.exports.Context = Context;
