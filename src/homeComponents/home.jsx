import React, {Component} from 'react';
import Cards from "./cards";
import TextLoop from "react-text-loop";
import Footer from "./footer";
import "./style.css";
import {ReactComponent as Github} from "./images/github.svg";
import {ReactComponent as LinkedIn} from "./images/linkedin.svg";
import {ReactComponent as LogoIcon} from "./images/analytics.svg";

class Home extends Component {
    componentDidMount(){
        
        window.particlesJS('particles-js', {"particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#000000",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
          });
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="back">
                    <div id="particles-js"></div>
                    <div class="box title">
                    <div className="container-fluid solid" style={{textAlign: 'center'}}>
                        <ul className="links">
                            <li onClick={()=>window.open("https://github.com/erblinaberisha/Visualize-Algorithms/tree/main","_blank")}>
                                <i>
                                    <Github/>
                                </i>
                            </li>
                            <li onClick={()=>window.open("https://www.linkedin.com/in/erëblina-berisha-b6a109175/","_blank")}>
                                <i>
                                    <LinkedIn/>
                                </i>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                    
                <h1 className="main-title center">
                  <div className="logo">
                  <LogoIcon/>
                  </div>
                  ALGORITHM <strong style={{color:"#4175c4"}}><br></br>VISUALIZER</strong>
                </h1>
                <div className='welcome'>
                  <p className="quote">
                    <TextLoop interval={3800} springConfig={{ stiffness: 200 }} adjustingSpeed={300} >
                        <p className="quoteText">"An algorithm must be seen to be believed."</p>
                        <p className="quoteText">"Algorithms are central objects of study in Computer Science."</p>
                        <p className="quoteText">"Algorithm without humanity is digital barbarism."</p>
                        <p className="quoteText">"Algorithms are mathematics too, and often more interesting and more useful."</p>
                        <p className="quoteText">"An algorithm is like a recipe."</p>
                    </TextLoop>
                  </p>
                </div>
                <div style={{fontSize: "19px"}}>
                    <p className="description-title">
                    Algorithm Visualizer is a learning platform that might help you understand algorithms better by visualizing them.
                    Currently these include Pathfinding, Sorting, Recursive Sorting, Prime Numbers, ConvexHull and Binary Search Algorithms.
                    </p>
                </div>
                    <Cards/>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;