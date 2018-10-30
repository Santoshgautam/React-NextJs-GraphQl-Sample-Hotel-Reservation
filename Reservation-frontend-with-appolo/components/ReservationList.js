import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import { Navbar,Nav,NavItem } from 'react-bootstrap';

import ErrorMessage from './ErrorMessage'

export const allReservations = gql`
  query {
    reservations {
      _id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export default function ReservationList () {  
  return(
    <Query query={allReservations}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message='Error loading reservations.' />
        if (loading) return <div>Loading</div>
          return(
            <div className="container">
                <div className="row">
                <div className="panel panel-login">
                  <div>
                    <form>
                      <h1 className="panel-heading">
                      <Link href="/booking">Book Hotel</Link> Your Reservations <Link href="/">Available Hotel</Link></h1> 
                      <div className="panel-body">
                      <br/>
                        
                        
                        {data.reservations.map((reservation, index) => (
                            <div className="card">
                                <img src="https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg"
                                    className="card_img"/><br/>
                                <h2>Hi {reservation.name}</h2>
                                <h3>Hotel Name:{reservation.hotelName }</h3>
                                <span><b>ChekIn:</b> {reservation.arrivalDate }</span>
                                <span><b>CheckOut:</b>{reservation.departureDate }</span><br/>
                                <button>Cancel</button>
                                <button>Modify</button>
                            </div>
                        ))}
                      </div>
                      
                    </form>
                  </div>
                </div>
                </div>
                <style jsx>{`
                    h1 {
                      font-size: 20px;
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
                        height:300px;
                        width:80%;
                        margin-left:10%;
                        text-align:center;
                        float:left;
                        margin-top:1%;
                        border-radius: 5px;
                        background-color: #f2f2f2;
                        padding: 20px;
                    }
                    .card_img{
                        padding:10px
                        height:100px;
                        width:100px;
                        margin-top:10px;
                    }
                    .btn-primary{
                        height:30px;
                        width:180px;
                        background:#F5F9C4;
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
                    .panel-body{
                      border-radius: 5px;
                      background-color: #f2f2f2;
                      padding: 20px;
                    }
                    span{
                      margin:1%
                    }
                    button{
                      height:50px;
                      width:150px;
                      border-radius:15px;
                      margin:2%;
                    }
                    
                  `}</style>
                  <br/>
                </div>
          );
      }}
    </Query>
  );
}
