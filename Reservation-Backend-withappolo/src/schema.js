import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `

    input ReservationInput {
      arrivalDate: String
      departureDate: String
      hotelName: String
      name: String
    }
    type Reservation {
      _id: ID!
      name: String,
      hotelName: String,
      arrivalDate: String,
      departureDate: String
    }
    type Hotel {
      id: String
      name: String
      available: String
      city: String
      cover: String
    }

    type Query {
      reservations(hotelName: String, arrivalDate: String,  departureDate: String,  name: String): [ Reservation ]
      getReservationById(id: String): Reservation
      hotels(id: String, name: String, available: String, city: String, cover: String): [Hotel]
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      createReservation(input: ReservationInput): Reservation
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
