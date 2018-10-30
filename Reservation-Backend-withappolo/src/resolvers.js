import Q from 'q'
import _ from 'lodash'

import Reservation from '../models/reservation';
import Hotel from '../models/hotel';

export const resolvers = {
  Query: {
    reservations: function(filter) {
      let filteredResults = _.reduce(filter, (result, value, key) => {
          if (value.length > 0) {
              result[key] = value;
          }
          return result;
      }, {});

        const deferred = Q.defer();

        Reservation.find(filteredResults, {
            __v: 0
        }, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        }).sort({
            created_at: 'desc'
        });
        return deferred.promise;
    },
    /**
     * Search Reservation By reservation Id
    */
    getReservationById: (root, input) => {
      const deferred = Q.defer();
      return Reservation.findOne({
          _id: input.id
      }, {
          __v: 0
      }, function (err, result) {
          if (err) {
              deferred.reject(err);
          } else {
              deferred.resolve(result);
          }
      });
      return deferred.promise;
    },
    /**
     * Search Reservation By reservation Id
    */
    hotels: function(filter) {
        let filteredResults = _.reduce(filter, (result, value, key) => {
            if (value.length > 0) {
                result[key] = value;
            }
            return result;
        }, {});

        const deferred = Q.defer();

        Hotel.find(filteredResults, {
            __v: 0
        }, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }
  },
  
  Mutation: {
    createReservation: (root, {input}) => {
      const deferred = Q.defer();
      const newReservation = new Reservation({
          name: input.name.trim(),
          hotelName: input.hotelName,
          arrivalDate: new Date(input.arrivalDate),
          departureDate: new Date(input.departureDate)
      });
      newReservation.save(function (err, result) {
          if (err) {
              deferred.reject(err.message);
          } else {
              deferred.resolve(result);
          }
      });
      return deferred.promise;
    },
  },
};


