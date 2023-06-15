import React from "react";
import Card from 'react-bootstrap/Card';
import Oil_mug from '../images/oil_mug.png';
import '../styles/Sample.css';

const BespokeSample = () => {



    return ( 
  <>
  <h2 class="project-list-title" id="projects">
         Our Bespoke Samples</h2>    
    <div class="project-list" >  
    <div class="project" id="ifonly">
    <Card style={{ width: '23rem' }}>
    <Card.Body>
      <Card.Title className="text-center">Mug for E.G.</Card.Title>
      <div class="img5">
      <img src={Oil_mug} />
      </div>

   
      <Card.Text class="project-text">
       Requested: "A mug that produces oil"
        </Card.Text>


      </Card.Body>
    </Card>
    </div>
  </div>
  </>
     );
}
 
export default BespokeSample;