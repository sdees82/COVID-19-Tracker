import React from 'react';
import Card from 'react-bootstrap/Card'

import "./countryCard.style.css";


const CountryCard = ({country, 
                      activeCases, 
                      recoveredCases, 
                      todayCases, 
                      totalCases,
                      critical,
                      deaths,
                      todayDeaths,
                      imageSrc}) => {
    return ( 
        <div className="card-container">
        <Card border="none" style={{width: "18rem", margin: "1rem"}} bg="dark">
        <Card.Header>{country}</Card.Header>
        <img style={{width: "100px", margin: "auto"}} src={imageSrc} alt="Country Flag"/>
        <Card.Body>
          <Card.Text>
            Active Cases: {activeCases}
          </Card.Text>
          <Card.Text>
            Recovered Cases: {recoveredCases}
          </Card.Text>
          <Card.Text>
            New Cases: {todayCases}
          </Card.Text>
          <Card.Text>
            Total Cases: {totalCases}
          </Card.Text>
          <Card.Text>
           Critical condition: {critical}
          </Card.Text>
          <Card.Text style={{color: "red"}}>
           Today's Deaths: {todayDeaths}
          </Card.Text>
          <Card.Text style={{color: "red"}}>
            Total Deaths: {deaths}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} `}</Card.Footer>
      </Card>
        </div>
     );
}
 
export default CountryCard;