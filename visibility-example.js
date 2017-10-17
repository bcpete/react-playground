class Visibility extends React.Component{
  constructor(props){
    super(props);

    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visible: false
    };
  };

  handleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  };

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && (<p> Here is a hidden message shhh don't tell anyone. </p>)}
      </div>
    );
  };
};

ReactDOM.render(<Visibility/>, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visible = false;

// const toggleDetails = () => {
//   visible = !visible;
//   render();
// }

// const render = () => {
//   const templateTwo = (
    // <div>
    //   <h1>Visibility Toggle</h1>
    //   <button onClick={toggleDetails}>
    //     {visible ? 'Hide Details' : 'Show Details'}
    //   </button>
    //   {visible && (<p> Here is a hidden message shhh don't tell anyone. </p>)}
    // </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// render();