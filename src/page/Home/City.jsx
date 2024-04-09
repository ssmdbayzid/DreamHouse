import React, { useEffect, useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Loader from '../../hooks/Loader'
import getAllProperties from '../../hooks/getAllProperties'

// const propertiesData = [
//   {
//     "title": "Mountain View Retreat in Alpine",
//     "location": "222 Serenity Lane, Alpine, CA 91901",
//     "city": "Alpine",
//     "img": "https://example.com/mountain-retreat-image.jpg",
//     "description": "Escape to this peaceful mountain retreat featuring five bedrooms, a spacious deck, and stunning views of the surrounding natural beauty.",
//     "rent": 2800,
//     "postfix": "week",
//     "propertyType": "house",
//     "category": "house",
//     "status" : "For Sale",
//     "propertyAgent": "Daniel Walker",
//     "propertyDate": "5 years ago",
//     "bed": 5,
//     "kitchen": 3,
//     "garage": 2,
//     "sqFt": 700
//   },
//   {
//     "title": "Cozy Townhouse in Pacific Beach",
//     "location": "789 Shoreline Lane, Pacific Beach, CA 92108",
//     "city": "Pacific Beach",
//     "img": "https://example.com/townhouse-image.jpg",
//     "description": "Charming townhouse with a private patio, updated kitchen, and easy access to the vibrant Pacific Beach scene. Perfect for those seeking a relaxed coastal lifestyle.",
//     "rent": 2200,
//     "postfix": "week",
//     "propertyType": "townhouse",
//     "category": "townhouse",
//     "status" : "For Sale",
//     "propertyAgent": "Emily White",
//     "propertyDate": "6 years ago",
//     "bed": 2,
//     "kitchen": 1,
//     "garage": 1,
//     "sqFt": 600
//   },
//   {
//     "title": "Penthouse Living in Downtown San Diego",
//     "location": "555 Skyline Tower, San Diego, CA 92102",
//     "city": "San Diego",
//     "img": "https://example.com/penthouse-image.jpg",
//     "description": "Experience the epitome of luxury in this stunning penthouse with floor-to-ceiling windows, modern amenities, and breathtaking skyline views.",
//     "rent": 4500,
//     "postfix": "week",
//     "propertyType": "penthouse",
//     "category": "penthouse",
//     "status" : "For Sale",
//     "propertyAgent": "Carlos Martinez",
//     "propertyDate": "1 year ago",
//     "bed": 3,
//     "kitchen": 2,
//     "garage": 2,
//     "sqFt": 1000
//   },
//   {
//     "title": "Spacious Beachfront House in La Jolla",
//     "location": "101 Ocean Drive, La Jolla, CA 92037",
//     "city": "La Jolla",
//     "img": "https://example.com/beachfront-house-image.jpg",
//     "description": "Enjoy the ultimate coastal lifestyle in this spacious beachfront house. Panoramic ocean views, private beach access, and a gourmet kitchen make this home truly exceptional.",
//     "rent": 5000,
//     "postfix": "week",
//     "propertyType": "house",
//     "category": "house",
//     "status" : "For Rent",
//     "propertyAgent": "Olivia Garcia",
//     "propertyDate": "4 years ago",
//     "bed": 6,
//     "kitchen": 4,
//     "garage": 3,
//     "sqFt": 800
//   },
//   {
//     "title": "Modern Condo with City Views",
//     "location": "789 Urban Avenue, San Diego, CA 92104",
//     "city": "San Diego",
//     "img": "https://example.com/modern-condo-image.jpg",
//     "description": "Contemporary condo offering stunning city views, high-end appliances, and a luxurious living experience. Urban living at its finest.",
//     "rent": 2800,
//     "postfix": "week",
//     "propertyType": "condo",
//     "category": "condo",
//     "status" : "For Sale",
//     "propertyAgent": "Elena Rodriguez",
//     "propertyDate": "2 years ago",
//     "bed": 2,
//     "kitchen": 1,
//     "garage": 1,
//     "sqFt": 600
//   },
//   {
//     "title": "Charming Family Home in Downtown San Diego",
//     "location": "456 Downtown Street, San Diego, CA 92103",
//     "city": "San Diego",
//     "img": "https://example.com/charming-home-image.jpg",
//     "description": "Lovely family home featuring a cozy atmosphere, three bedrooms, and a spacious backyard. Perfect for creating lasting memories.",
//     "rent": 1800,
//     "postfix": "week",
//     "propertyType": "house",
//     "category": "house",
//     "status" : "For Sale",
//     "propertyAgent": "John Johnson",
//     "propertyDate": "3 years ago",
//     "bed": 3,
//     "kitchen": 2,
//     "garage": 1,
//     "sqFt": 400
//   },
//   {
//     "title": "Luxury Villa with Ocean View",
//     "location": "123 Oceanfront Drive, San Diego, CA 92101",
//     "city": "San Diego",
//     "img": "https://example.com/luxury-villa-image.jpg",
//     "description": "Experience luxury living in this exquisite villa overlooking the ocean. Spacious rooms, modern kitchen, and breathtaking views await you.",
//     "rent": 3500,
//     "postfix": "week",
//     "propertyType": "villa",
//     "category": "villa",
//     "status" : "For Rent",
//     "propertyAgent": "Grace Thompson",
//     "propertyDate": "5 years ago",
//     "bed": 4,
//     "kitchen": 2,
//     "garage": 3,
//     "sqFt": 700
//   },
//   {
//     "title": "Villa in 2639 Grand Ave San Diego",
//     "location": "2639 Grand Ave San Diego, CA 92109",
//     "city": "San Diego",
//     "img": "https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg",
//     "description": "Pantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer, Great Light.",
//     "rent": 2000,
//     "postfix": "week",
//     "propertyType": "villa",
//     "category": "villa",
//     "status" : "For Rent",
//     "propertyAgent": "Aye Magdy",
//     "propertyDate": "7 years ago",
//     "bed": 5,
//     "kitchen": 3,
//     "garage": 2,
//   }
// ]


const City = () => {

  const [propertiesCity, setPropertiesCity] = useState(null);
const { properties, loading } = getAllProperties();

useEffect(() => {  
  if (!loading && properties) {
    const cityPropertiesCount = properties.reduce((acc, property) => {
      acc[property.city] = (acc[property.city] || 0) + 1;
      return acc;
    }, {});

    // Sort the cities by their property count in descending order
    const sortedCities = Object.keys(cityPropertiesCount).sort((a, b) => cityPropertiesCount[b] - cityPropertiesCount[a]);
    const topCities = sortedCities.slice(0, 4);
    
    // Create an object with the top cities and their property counts
    const sliceObject = {};
    topCities.forEach(city => {
      sliceObject[city] = cityPropertiesCount[city];
    });

    setPropertiesCity(sliceObject);
  }
}, [loading, properties]);
  return (
    <section className="section bg-accent">
      <div className='container'>
 {loading ? <Loader /> :<> 
 <div className="flex lg:flex-row flex-col items-center gap-6 px-4">
    <div className="w-full  lg:w-1/5">
    <div className='text-center md:text-left '>
            <h1 className='heading'>Resident</h1> 
            <div className='flex w-28 mt-3 mb-10 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
           
            </div>
      <p className="font-light text-xl text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidi dunt
      </p>
    </div>
   {propertiesCity &&  <div className="w-full  flex lg:flex-row flex-col gap-3">
  {Object.entries(propertiesCity).map(([city, count])=>
    <Link key={city} to={`/properties?type=${(city).toLowerCase()}`} >
    <div className="relative h-full w-full">
      <img
        src="https://images.adsttc.com/media/images/5235/006a/e8e4/4eef/7900/002e/medium_jpg/empire.jpg?1379205215"
        className="h-full w-full object-cover hover:saturate-200"
        alt=""
        srcSet=""
      />
      <div className="absolute top-0 w-full bg-gradient-to-b from-black/10">
        <p className="pt-5 text-center font-light text-white">{count} Properties</p>
        <h3 className="text-center text-2xl font-light text-white">{city}</h3>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 px-10 pb-2">
        <p className="text-center text-lg font-light text-white">Details</p>
        <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>

      </div>
    </div>
    </Link>)}
    </div>}
  </div></>}
  </div>
</section>

  )
}

export default City