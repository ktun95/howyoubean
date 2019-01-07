import React, { Component } from 'react'

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            highscore: 0,
            bean: {
                position: [430, 150]
            }
        }
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const newX = Math.random() * 900
        const newY = Math.random() * 300

        this.setState( prevState => ({
            highscore: prevState.highscore + 1,
            bean: {
                position: [newX, newY]
            }
        }))
        console.log(this.state)
    }
    
    render() {
        
        const beanPosition = {
            position: 'fixed',
            left: `${this.state.bean.position[0]}px`,
            top: `${this.state.bean.position[1]}px`
        }

        return (
            <div>
                <div id="bean" onClick={this.handleClick} style={beanPosition}>
                    <img src="/carrot.jpeg" />               
                </div>
                <p>score: {this.state.highscore}</p>
            </div>
        )
    }
}