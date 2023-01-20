import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import NavbarC from "../Components/NavbarC";
import Home from "./Home";
import {Col, Pagination, Row} from "react-bootstrap";

function LeagueMatch() {
    const {league} = useParams()
    const [liveScore,setLiveScore] = useState([])
    const [page,setPage] = useState(1)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65f8e28fc9msh740f5c710731f09p18f138jsn6eeb3143879e',
            'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com'
        }
    };

    fetch('https://free-football-soccer-videos1.p.rapidapi.com/v1/', options)
        .then(response => response.json())
        .then(response => {
            setLiveScore(response)
        })
        .catch(err => console.error(err));

    return (
        <div>
            <NavbarC />
            <div style={{border:'2px solid transparent',overflow:'hidden',marginLeft:'12%',marginRight:'12%'}}>
                <Row xs={1} md={3}>
                    {liveScore.map((item,i) => (
                        <>
                            {page===1 && item.competition.name === league &&
                                <Col style={{ overflow: 'hidden',height:'245px',marginTop:'50px'}}>
                                    <iframe src={item.url} style={{marginTop: '-70px', height: '120%', width: '100%', overflow: 'visible'}}/>
                                    <hr/>
                                </Col>
                            }
                        </>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default LeagueMatch;