console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; // created an empty array
function addToCollection ( collection, title, artist, year ) { // defined my function
  let newAlbum = { // will create a new album in my array with these given properties
    title: "Bubba",
    artist: "SZA",
    yearPublished: 2019,
  };
  collection.push( newAlbum ); // add the new album to the end of the array
  return newAlbum; // returns the newly created object
}
let addedAlbum = addToCollection (myCollection, "Ctrl", "SZA", "2017" );
console.log( addedAlbum ); // this will log the new added album
console.log( myCollection ); // this will log out the entire collection of albums in my array






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
