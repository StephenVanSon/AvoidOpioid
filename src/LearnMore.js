<!DOCTYPE html>
<html>

<head>
  <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

  <style>

  </style>
</head>

<body>

  <div id="container">

  </div>

  <script type="text/babel">
    var destination = document.querySelector("#container");
    var App = React.createClass({
      render: function() {
        return (
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li>Home</li>
              <li>Stuff</li>
              <li>Contact</li>
            </ul>
            <div className="content">

            </div>
          </div>
        )
      }
    });

    ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.hashHistory}>
      <ReactRouter.Route path="/" component={App}>

      </ReactRouter.Route>
    </ReactRouter.Router>,
    destination
  );

  </script>
</body>

</html>
