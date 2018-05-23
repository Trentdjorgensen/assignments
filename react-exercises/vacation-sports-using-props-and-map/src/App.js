import React from 'react';
import Cards from './Cards';

const App = () => {

    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          imgUrl: "http://www.tworvgypsies.us/!USA-trip-6-2013/photos-42-Bruneau_Dunes_SP/1-travel_to/2013-08-08_6_travel.jpg"
        },
        {
          place: "Cancun",
          price: 900,
          timeToGo: "Winter",
          imgUrl:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1503498115%2Fmexico-travel-warning-CANCUN0817.jpg%3Fitok%3DC19mnqV3&w=700&q=85"
        },
        {
          place: "China",
          price: 1200,
          timeToGo: "Fall",
          imgUrl:"http://www.cnto.org/wp-content/uploads/2014/05/slide1.jpg"
        },
        {
          place: "Russia",
          price: 1100,
          timeToGo: "Summer",
          imgUrl:"https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/russia/russia.jpg"
        },
        {  
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring",
          imgUrl:"https://www.worldatlas.com/r/w728-h425-c728x425/upload/9c/1f/60/shutterstock-536843191.jpg"
        }
      ];

      const mappedVacationSpots = vacationSpots.map((vacationSpots, i) => {
          return(
                <Cards key={ vacationSpots.place + 1}
                    place={ vacationSpots.place}
                    price={ vacationSpots.price}
                    timeToGo={vacationSpots.timeToGo}
                    imgUrl={vacationSpots.imgUrl}
                    />
          )
      })

    return(
        <div>
            {mappedVacationSpots}
        </div>
    )
}

export default App;