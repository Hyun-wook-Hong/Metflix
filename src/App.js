import React from 'react';
import { waitForDomChange } from '@testing-library/dom';

// class 컴포넌트
// return이 없다. 대신 render method를 갖고있다

// state: 여러 데이터를 갖고있는 object형 자료
// state는 직접 바꾸면 안되고 복사본을 만들어 데이터를 바꿔야한다
class App extends React.Component{
  state = {
    count: 0
  };
  
  add = () => {
    console.log("add");
    this.setState( current=>({ count: this.state.count + 1 }) );
  };
  minus = () => {
    console.log("minus");
    this.setState(current=>({ count: this.state.count - 1 }));
  };

  componentDidMount(){
    console.log("component rendered, Hello world")
  }

  componentDidUpdate(){
    console.log("I just updated")
  }

  componentWillUnmount(){
    console.log("Goodbye, cruel world!")
  }

  render(){
    console.log("I'm rendering");
    return (
          <div> 
          <h1> The number is { this.state.count } </h1>
          <button onClick={ this.add }>Add</button>
          <button onClick={ this.minus }>Minus</button>
          </div>
          )
  }
}

export default App;
