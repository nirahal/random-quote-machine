import React, {Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import {quotes, mdColors} from "./constents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'




class Quote extends Component{
    constructor(props){
        super(props);
        this.state={
            quote:"Be yourself; everyone else is already taken.",
            author:"Oscar Wilde",
            color : '#F44336'
        };
        this.handleClick =this.handleClick.bind(this);
        
    }
    handleClick(){
        let randomIndex = Math.floor(Math.random()*quotes.length);
        this.setState({
            quote: quotes[randomIndex].quote,
            author: quotes[randomIndex].author,
            color: mdColors[randomIndex]
        });
    }
    
    render(){
        return(
            <div className="d-flex align-items-center justify-content-center height" style={{backgroundColor: this.state.color}}>
                <div id="quote-box" className="box p-5 pb-4 rounded">
                    <h3 id="text" style={{color: this.state.color}}><FontAwesomeIcon icon={faQuoteLeft} />{this.state.quote}</h3>
                    <p id="author" style={{color: this.state.color}} className="author pb-3">- {this.state.author}</p>
                    <p>
                        <a id="tweet-quote" style={{color: this.state.color}} href={"https://twitter.com/intent/tweet?text="+this.state.quote+" \n "+this.state.author}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a style={{color: this.state.color}} href="https://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                        <button id="new-quote" onClick={this.handleClick} className="btn btn-default mt-1" style={{backgroundColor: this.state.color}}>New quote</button>
                    </p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Quote/>, document.getElementById("root"))