console.log('app.js is running');

const app = {
  title: 'The Decider',
  subtitle: 'Let me choose for you',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const renderIndecisionApp = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> {app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do</button>
      <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();