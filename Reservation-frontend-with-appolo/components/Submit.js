import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { allReservations } from './ReservationList'
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Link from 'next/link'

export default function Submit () {
  return (
    <ApolloConsumer>
      {client => (
        <div className="container">
        <div className="row">
        <div className="panel panel-login">
          <div>
            <form onSubmit={event => handleSubmit(event, client)}>
              <h1 className="panel-heading">
              <Link href="/">Available Hotel</Link> Create Reservation <Link href="/reservation">Your Reservation</Link>
              </h1>
              <FormGroup controlId="formControlsText">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter name" required />
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <label>Hotel name</label>
                <input type="text" name="hotelName" placeholder="Enter Hotel name" required />
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <label>Arrival Date</label>
                <input type="date" name="arrivalDate" placeholder="Enter Arrival date" required />
              </FormGroup>
              <FormGroup controlId="formControlsText">
                <label>Departure Date</label>
                <input type="date" name="departureDate" placeholder="Enter Departure date" required />
              </FormGroup>

              <input type="submit" />
    
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
            input[type=text] {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              display: inline-block;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
          }
          input[type=date] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
          input[type=submit] {
              width: 100%;
              background-color: #4CAF50;
              color: white;
              padding: 14px 20px;
              margin: 8px 0;
              border: none;
              border-radius: 4px;
              cursor: pointer;
          }
          
          input[type=submit]:hover {
              background-color: #45a049;
          }
          
          div {
              border-radius: 5px;
              background-color: #f2f2f2;
              padding: 20px;
          }
          `}</style>
          <br/>
        </div>
      )}
    </ApolloConsumer>
  )
}

function handleSubmit (event, client) {
  event.preventDefault()
  const form = event.target
  const formData = new window.FormData(form)

  const ReservationInput = {
    "input": {
      "arrivalDate": formData.get('arrivalDate'),
      "departureDate": formData.get('departureDate'),
      "hotelName": formData.get('hotelName'),
      "name": formData.get('name')
    }
  }

  form.reset()

  client.mutate({
    mutation: gql`
      mutation createReservation($input: ReservationInput){
        createReservation(input: $input) {
          hotelName
          arrivalDate
          name
          departureDate
          _id
        }
      }
    `,
    variables: ReservationInput,
    update: (proxy, { data: { createReservation } }) => {
      let data = proxy.readQuery({
        query: allReservations,
      })
      let reservations = data.reservations

      proxy.writeQuery({
        query: allReservations,
        data: {
          ...reservations,
          reservations: [ createReservation, ...data.reservations]
        }
      })
    }
  })

  this.props.history.push('/reservation');
}
