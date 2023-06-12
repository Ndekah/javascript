let country = "Guinea Bissau";
console.log("from", country);
country = country.replace(" ", "-");
console.log(country);

let city = " Sydney   ";
console.log("from", city);
city = city.trim();
console.log(city);

let place = "School";
console.log("from", place);
place = place.toUpperCase("school", "School");
console.log(place);

let attraction = "Opera House";
console.log("from", attraction);
attraction = attraction.toLowerCase("Opera House", "opera house");
console.log(attraction);

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);
