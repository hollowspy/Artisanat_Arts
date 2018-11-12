import React from 'react';
import './card-muriel.css'

const CardMuriel = () => {
    return (
        <div>
            <img
                className="card-img-top photoMuriel"
                src="http://localhost:4000/images/portrait_muriel/portrait.jpg"
                alt="Card Muriel"/>
            <div className="card-body">

                <h4 className="card-title">
                    <span>Présentation</span>
                </h4>
                <p className="card-text">Id adipisicing non velit magna elit irure reprehenderit.
                    Pariatur adipisicing et minim mollit officia nisi sit do labore. Sunt duis elit
                    anim voluptate proident commodo cillum duis irure excepteur pariatur ipsum.
                    Laborum excepteur laborum nulla deserunt laboris consectetur duis voluptate
                    proident. Cillum aliquip cillum nulla magna Lorem deserunt labore consequat
                    culpa consectetur quis cupidatat Lorem elit.</p>

            </div>

        </div>
    );
}

export default CardMuriel;