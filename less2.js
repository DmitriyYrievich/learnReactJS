 

var CalcView =  React.createClass({
					getInitialState: function(){
						return{
							second: 0
						}
					},
					componentDidMount: function(){
						this.timer = setInterval(this.tick, 1000);
					},
					tick: function(){
						this.setState({second: this.state.second + 1})
					},
					componentWillUnmount: function(){
						clearInterval(this.timer);
					},
					render: function(){
						return(
							<div>
								прошло {this.state.second} секунд
							</div>
						)
					}
				});

				ReactDOM.render(<CalcView/>, document.getElementById("calc"));


				