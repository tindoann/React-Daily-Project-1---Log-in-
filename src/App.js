import React from 'react'; 
import './App.css'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Input extends React.Component () {
  render() {
    return (
      <div className='Input'>
              <input
                    id={this.props.id}
                    autoComplete='false'
                    required
                    type={this.props.type}
                    placeholder={this.props.placeholder}
              />
              <label htmlFor={this.props.id}></label>
      </div>
    ); 
  }
}; 

class Modal extends React.Component () {
  render() {
    return (
      <div className='Modal'>
        <form
              onSubmit={this.props.onSubmit}
              className='ModalForm'>
              <Input 
                      id='name'
                      type='text'
                      placeholder='John Oliver' />
              <Input 
                      id='username'
                      type='email'
                      placeholder='mroliver@gmail.com' />
              <Input   
                      id='password'
                      type='password'
                      placeholder='placeholder' />
              <button>
                      Log in<i className="fa fa-fw fa-chevron-right"></i>  
              </button> 
            </form>
      </div>

    ); 
  }
}

class App extends React.Component() {
  constructor() {
    super() 
    this.state = {
      mounted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
}

componentDidMount() {
  this.setState({
    mount: true
  })
}, 

handleSubmit(e) {
  alert('submit' + this.state.value); 
  e.preventDefault();  
}

