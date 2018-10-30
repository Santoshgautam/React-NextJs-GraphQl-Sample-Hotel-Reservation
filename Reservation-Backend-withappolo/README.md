This application help you to find all available hotels and
help to book hotels and check your reservation

This is Backend code in express apollo grapqhl .
It supports both Restful APis as well as Graphql Apis



# Steps to setup app
```bash
mongod
mongo

use node-reservation
run command given on last line to insert hotel recoreds
```
``` another bash
npm install

npm start
```

# Below are list of restful APis
* GET /reservation/ID – Returns a single reservation with ID
* POST /reservation – Creates a new reservation, assigns an ID to it, and returns that ID
* GET /reservations – Returns all reservations

# Below are Graphql APis
just copy the below link and paste in url

Get all hotels:
http://localhost:7700/graphiql?query=%7B%0A%20%20hotels%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20available%0A%20%20%20%20city%0A%20%20%20%20cover%0A%20%20%7D%0A%7D

Get all reservations:
http://localhost:7700/graphiql?query=%7B%0A%20%20reservations%20%7B%0A%20%20%20%20_id%0A%20%20%20%20name%0A%20%20%20%20hotelName%0A%20%20%20%20arrivalDate%0A%20%20%20%20departureDate%0A%20%20%7D%0A%7D


Get Reservation By ID
http://localhost:7700/graphiql?query=%7B%0A%20%20getReservationById(id%3A%225ada21e625b133386a8cbe3f%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20name%0A%20%20%20%20hotelName%0A%20%20%20%20arrivalDate%0A%20%20%20%20departureDate%0A%20%20%7D%0A%7D


Create The reservation
http://localhost:7700/graphiql?query=mutation%20createReservation(%24input%3A%20ReservationInput)%7B%0A%20%20createReservation(input%3A%20%24input)%20%7B%0A%20%20%20%20hotelName%0A%20%20%20%20arrivalDate%0A%20%20%20%20name%0A%20%20%20%20departureDate%0A%20%20%20%20_id%0A%20%20%7D%0A%7D&operationName=createReservation&variables=%7B%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22arrivalDate%22%3A%20%222018-04-28T00%3A00%3A00.000Z%22%2C%0A%20%20%20%20%22departureDate%22%3A%20%222018-04-30T23%3A59%3A59.999Z%22%2C%0A%20%20%20%20%22hotelName%22%3A%20%22holidayInn%22%2C%0A%20%20%20%20%22name%22%3A%20%22aakash%22%0A%20%20%7D%0A%7D



db.hotels.insertMany([
    {
        "id": 1,
        "name": "Holiday Inn",
        "available": 5,
        "city": "New York",
        "cover": "https://image.ibb.co/gids7f/holiday-Inn-New-York.jpg"
    },
    {
        "id": 2,
        "name": "Country Inn",
        "available": 7,
        "city": "Florida",
        "cover": "https://image.ibb.co/dFQaA0/country-Florida.jpg"
    },
    {
        "id": 3,
        "name": "Crown Plaza",
        "available": 2,
        "city": "California",
        "cover": "https://image.ibb.co/dQpP3L/crown-Plaza-California.jpg"
    },
    {
        "id": 4,
        "name": "Holiday Inn",
        "available": 11,
        "city": "Bostan",
        "cover": "https://image.ibb.co/c9M6YL/holidayy-Inn-Boston.jpg"
    },
    {
        "id": 5,
        "name": "JW Marriott",
        "available": 4,
        "city": "New York",
        "cover": "https://image.ibb.co/kcy6Hf/jw-Newyork.jpg"
    },
    {
        "id": 6,
        "name": "JW Marriott",
        "available": 4,
        "city": "Las Vegus",
        "cover": "https://image.ibb.co/eXjkA0/jwvegus.jpgg"
    }
])
