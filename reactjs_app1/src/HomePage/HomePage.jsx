import React from 'react';
import Article from '../article/Article';


class HomePage extends React.Component {
    constructor(props) {  
          super(props);
          this.state = {
            words: ""
        }
      }
    componentDidMount() {
        const manyWords = this.handleGenerateText(30);
        this.setState({ words : manyWords });
      
    }    

    handleGenerateText = (numer_of_words) => {
      let word = '';
      for(let i=0; i<numer_of_words; i++) {
        word += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a cursus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In dapibus metus a diam dapibus blandit. Aliquam odio enim, pulvinar sit amet purus dictum, finibus euismod urna. Aenean suscipit diam tellus, rutrum vestibulum leo ultrices at. Praesent mattis est vitae consequat cursus. Vestibulum diam eros, blandit non dignissim ullamcorper, vehicula nec neque. ";
      }
      
      return word;
    }    


    render() {
      const wordsInDiv = (<div>{this.state.words}</div>);
      return  (
        <Article content={wordsInDiv} myclass={"homepage"} />
      );
    }
  }

  export default HomePage;