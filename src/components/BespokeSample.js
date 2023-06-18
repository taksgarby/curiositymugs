import React from "react";
import Card from 'react-bootstrap/Card';
import Oil_mug from '../images/oil_mug.png';
import Wonderland_mug from '../images/wonderland_mug.png';
import Clock_mug from '../images/clock_mug.png';
import '../styles/Sample.css';


const BespokeSample = () => {



    return ( 
  <>
  <h2 class="project-list-title" id="projects">
         Our Bespoke Samples</h2>    
    <div class="project-list" > 

    <div class="project" id="oil">
    <Card style={{ width: '23rem' }}>
    <Card.Body>
      <Card.Title className="text-center">Mug for E.G.</Card.Title>
      <div class="img5">
      <img src={Oil_mug} alt="oil mug image"/>
      </div>
      <Card.Text class="project-text">
       Requested: "A mug that produces oil"
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div class="project" id="wonderland">
    <Card style={{ width: '23rem' }}>
    <Card.Body>
      <Card.Title className="text-center">Mug for S.Q.</Card.Title>
      <div class="img5">
      <img src={Wonderland_mug} alt="wonderland mug image"/>
      </div>
      <Card.Text class="project-text">
       Requested: "Alice in Wonderland Mug"
        </Card.Text>
      <Card.Text class="project-subtext">
       The rabbits are removable. 
       The saucer is attached to the mug - curiouser and curiouser!
      </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div class="project" id="clock">
    <Card style={{ width: '23rem' }}>
    <Card.Body>
      <Card.Title className="text-center">Mug for T.G.</Card.Title>
      <div class="img5">
      <img src={Clock_mug} alt="clock mug image"/>
      </div>
      <Card.Text class="project-text">
       Requested: "Mug with a clock"
        </Card.Text>
      <Card.Text class="project-subtext">
       Not suitable for dishwasher.
      </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
  </div>
  </>
     );
}
 
export default BespokeSample;