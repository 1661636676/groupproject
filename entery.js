import React from 'react' 

import ReactDOM from 'react-dom'
import Home from './components/home'

class App extends React.Component{
	render(){
		return(
			<div>hello<Home/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('out'))
//npm i webpack-dev-server -D
//npm i html-webpack-plugin -D
//热跟新启动：webpack-dev-server --inline --hot