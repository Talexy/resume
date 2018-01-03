import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import axios from 'axios';

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      data:{}
    }
  }

  getText(){
    axios.get('http://localhost:3000/resumeData.json')
      .then((response) => {
        this.setState({data: response.data}, function(){
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount(){
      this.getText();
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Intro intro={this.state.data.intro} />
        <About about={this.state.data.about}/>
        <Resume resume={this.state.data.resume} education={this.state.data.education}/>
        <Portfolio portfolio={this.state.data.portfolio}/>
        <Testimonials testimonials={this.state.data.testimonials}/>
        <Contact contact={this.state.data.contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
