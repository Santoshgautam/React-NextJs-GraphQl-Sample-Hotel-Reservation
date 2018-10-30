import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import {FormControl, FormGroup, ControlLabel, Button, Modal} from 'react-bootstrap';

import ErrorMessage from './ErrorMessage'

export const allHotels = gql`
  query {
    hotels {
      id
      name
      available
      city
      cover
    }
  }
`

export default function HotelList () {  
    
    return(     
      <Query query={allHotels}>
        {({ loading, error, data }) => {
          if (error) return <ErrorMessage message='Error loading hotels.' />
          if (loading) return <div>Loading</div>
            return(
                <div className="container">
                <div className="row">
                <div className="panel panel-login">
                  <div>
                    <form>
                        <p className="marquee">
                        <img src="https://image.ibb.co/eeV0Sf/1.jpg" alt="1" border="1"/>.
                        <img src="https://image.ibb.co/eSiLSf/2.jpg" alt="2" border="0"/>.
                        <img src="https://image.ibb.co/fQW77f/3.jpg" alt="3" border="0"/>.
                        <img src="https://image.ibb.co/cLVjnf/4.jpg" alt="4" border="0"/>
                            
                        </p>
                      <h1 className="panel-heading">Available Hotels</h1>
                      <div className="panel-body">
                        {data.hotels.map((hotels, index) => (
                            <div className="card">
                                <img src={hotels.cover}
                                    className="card_img"/><br/>
                                <h2>{hotels.name}</h2>
                                <h3>{hotels.city}</h3>
                                <h2>Room Ava: {hotels.available}</h2>
                                <div className="btn-primary">
                                    <Link href='/booking' className="link-text">
                                            Book Hotel
                                    </Link>
                                </div>
                            </div>
                        ))}
                      </div>
                      
                    </form>
                  </div>
                </div>
                </div>
                <style jsx>{`
                    h1{
                        font-size:30px;
                    }
                    h2 {
                      font-size: 20px;
                    }
                    h3{
                        font-size: 15px; 
                    }
                    input {
                      display: block;
                      margin-bottom: 10px;
                    }
                    .panel-login {
                      border-color: grey;
                      width: 100%;
                      -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                      -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                      box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                      padding: 15px;
                    }
                    .panel-heading {
                      color: #00415d;
                      background-color: #fff;
                      border-color: #fff;
                      text-align:center;
                    }
                    .card{
                        border: 2px solid gray;
                        height:400px;
                        width:280px;
                        margin-left:7%;
                        text-align:center;
                        float:left;
                        margin-top:5%;
                        font-size:10px;
                    }
                    .card_img{
                        padding:20px
                        height:250px;
                        width:250px;
                        margin-top:10px;
                        margin-left:11px;
                    }
                    .btn-primary{
                        height:30px;
                        width:180px;
                        background:#49E4CF;
                        color:black;
                        font-size:15px;
                        border-radius:15px;
                        text-decoration:none;
                        margin-left:18%;

                    }
                    .link-text{
                        color:black;
                        font-size:15px;
                        text-decoration: none;
                    }
                    .container{
                        border-radius: 5px;
                        background-color: #f2f2f2;
                        padding: 20px;
                    }
                    .marquee {
                        background-color: #ddd;
                        width: 100%;
                        margin: 0 auto;
                        overflow: hidden;
                        white-space: nowrap;
                      }
                      .marquee img {
                        display: inline-block;
                        font-size: 20px;
                        position: relative;
                        left: 100%;
                        animation: marquee 8s linear infinite;
                      }
                      .marquee:hover img {
                        animation-play-state: paused;
                      }
                      
                      .marquee img:nth-child(1) {
                        animation-delay: 0s;
                      }
                      .marquee img:nth-child(2) {
                        animation-delay: 0.8s;
                      }
                      .marquee img:nth-child(3) {
                        animation-delay: 1.6s;
                      }
                      .marquee img:nth-child(4) {
                        animation-delay: 2.4s;
                      }
                      .marquee img:nth-child(5) {
                        animation-delay: 3.2s;
                      }
                      
                      @keyframes marquee {
                        0%   { left: 100%; }
                        100% { left: -100%; }
                      }
                  `}</style>
                  <br/>
                </div>
                );
        }}
      </Query>
    );
}