const appRoot = document.getElementById('app');

visible = false;

const toggleDetails = () => {
  visible = !visible;
  render();
}

const render = () => {
  const templateTwo = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {visible ? 'Hide Details' : 'Show Details'}
      </button>
      {visible && (<p> Here is a hidden message shhh don't tell anyone. </p>)}
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

render();