import React,{Component} from 'react';
import axios from 'axios';

class QuoteBox extends Component {

    constructor(props) {
        super(props);
        this.state ={
            quote:"",
            author: "ABC",
            isLoading:true,
            hasError:false,
        }
        this.NewQuoteClickHandler =this.NewQuoteClickHandler.bind(this);
        // this.TweetQuoteHandler=this.TweetQuoteHandler.bind(this);
    }
 
     componentDidMount()
     {
         axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
              .then((response)=>
               { 
                console.log(response);
                   this.setState(
                       {
                           
                        quote: response.data.quoteText,
                        author:response.data.quoteAuthor,
                           isLoading:false,
                       }
                   )
               })
 
               .catch((error)=>{
                this.setState(
                    {
                       isLoading:false,
                       hasError:true, 
                    }
                )
                })
     }
     NewQuoteClickHandler()
     {
         
        axios.get("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
               .then((response)=>
                { 
                    
                    console.log(response);
                    this.setState(
                        {
                            
                            quote: response.data.quoteText,
                            author:response.data.quoteAuthor,
                            isLoading:false,
                        }
                    )
                })
 
 
     }

    //  TweetQuoteHandler()
    //  {
        

    //     <a href="twitter.com/intent/tweet?text={this.state.quote} + {this.state.author}
    //  }
          

    render(){
        
        if(this.state.isLoading)
        {
            return(
                <p> Is Loading</p>
            )
        }
        else{
            return(
                <div>                   
                
                <p className="text"> <i className="fa fa-quote-left">&nbsp; </i> {this.state.quote} </p>
                <h3 className="author">- By {this.state.author}</h3>     
                <button className="btn btn-primary new-quote" onClick={this.NewQuoteClickHandler}>New Quote</button>          
                <a href= {`https://twitter.com/intent/tweet/?text="${this.state.quote} -By ${this.state.author}`}><button className="btn btn-highlight tweet-quote"><i className="fa fa-twitter"></i>Tweet Quote</button></a>
              </div>
            )

        }
    
}
}


export default QuoteBox;