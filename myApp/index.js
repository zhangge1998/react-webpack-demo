/**
 * Created by ubuntu on 5/7/18.
 */
import React from 'react';
import ReactDom from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement() {
        this.setState(function(prevState){
            return {
                number: prevState.number + 1
            }
        });
    }

    handleDecrement() {
        return(
            this.state.number > 0 && this.setState(function(prevState){
                return {
                    number: prevState.number - 1
                }
            })
        )

    }

    handleReset() {
        this.setState({number: 0});
    }
    render() {
        return (
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>

        )
    }
}
ReactDom.render(
    <Counter/>,
    document.getElementById('root')
);