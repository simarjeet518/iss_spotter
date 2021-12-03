const { fetchMyIP ,fetchCoordsByIP,fetchISSFlyOverTimes} = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
   return ip;
});
fetchCoordsByIP('96.48.137.12',(error,data)=>{
   
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coords are:' , data);

});
const Coords={ latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(Coords,(error,data)=>{
   
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyOver times   are:' , data);

});