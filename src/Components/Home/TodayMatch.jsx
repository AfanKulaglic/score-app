import React, {useEffect, useState} from 'react';
import {Col, Row, Container,Pagination} from "react-bootstrap";

function TodayMatch() {
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
        <div style={{border:'2px solid transparent',overflow:'hidden',marginLeft:'12%',marginRight:'12%'}}>
            <Row xs={1} md={3}>
                {liveScore.map((item,i) => (
                    <>
                    {i < 9 && page===1 &&
                        <Col style={{ overflow: 'hidden',height:'245px',marginTop:'50px'}}>
                            <iframe src={item.url} style={{marginTop: '-70px', height: '120%', width: '100%', overflow: 'visible'}}/>
                        </Col>
                    }
                    </>
                ))}
            </Row>
            <Pagination style={{display:'flex',justifyContent:'center',width:'100%'}}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active to='/1'>{1}</Pagination.Item>

                <Pagination.Item href='/1'>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}

export default TodayMatch;