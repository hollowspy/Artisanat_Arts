import React, {Component} from 'react';
import './colum-artisanat.css'

class ColumArtisanat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artisanat: ['A','R', 'T','I','S','A','N','A','T'],
            art: ['D\'', 'A', 'R', 'T']
        };
    }
    render() {
        return (
            <div>
                <div>
                <img src="http://localhost:4000/images/logoNavBar.jpg" alt="Logo" className="logoNavBar"/>
                </div>
                <div className="firstWord">
                    <ul>
                        {this.state.artisanat.map((letter, index) => 
                            <li className="letter" key={index}>{letter}</li>)}
                    </ul>
                </div>
                <div className="secondWord">
                    <ul>
                        {this.state.art.map((letter, index) => 
                            <li className="letter" key={index}>{letter}</li>)}
                    </ul>
                </div>
            </div>

        );
    }
}

export default ColumArtisanat;