console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; // created an empty array
function addToCollection ( collection, title, artist, yearPublished ) { // defined my function
  let newAlbum = { // will create a new album in my array with these given properties
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push( newAlbum ); // add the new album to the end of the array
  return newAlbum; // returns the newly created object
}
let addedAlbum = addToCollection(myCollection, "Ctrl", "SZA", "2017" );
console.log( addedAlbum ); // this will log the new added album
console.log( myCollection ); // this will log out the entire collection of albums in my array

// adding 6 new albums to the array 
// Album 2
console.log(addToCollection(myCollection, "Bubba", "Kaytranada", "2019" ));
// Album 3
console.log(addToCollection(myCollection, "Sin Miedo (del Amor y Otros Demonios", "Kali Uchis", "2020" ));
// Album 4
console.log(addToCollection(myCollection, "M3LL155X", "FKA twigs", "2015" ));
// Album 5
console.log(addToCollection(myCollection, "Blonde", "Frank Ocean", "2016" ));
// Album 6
console.log(addToCollection(myCollection, "99.9%", "Kaytranada", "2016" ));
// Album 7
console.log(addToCollection(myCollection, "Renaissance", "Beyonce", "2022" ));
// Logging out the entire array
console.log( "My entire collection:", myCollection);

// looping through and displaying my entire collection
function showCollection( collection ) { // Defining the function
  for (let album of collection) { // Loop through the array using the for..of loop
    console.log(album.title + "by" + album.artist + ", published in" + album.yearPublished ); // Logging each albums info using the + operator
  }
}
showCollection(myCollection); // displays my entire collection in the console


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
