const request = require('request');

nextISSTimesForMyLocation =function(error,data){
  
}





const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',(error,response,body)=>{
    if (error) {
      callback(error,null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null,data.ip);
  });

};

const fetchCoordsByIP = function(ip,callback){
  request(`https://freegeoip.app/json/${ip}`,(error,response,body)=>{
    if (error) {
      callback(error,null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP address,  Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    const result  ={
      latitude: data.latitude,
      longitude: data.longitude
    }
    callback(null,result);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`,(error,response,body)=>{
    if (error) {
      callback(error,null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching flyover times with coordinates ,  Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    // const result =
    // {risetime: data.risetime,
    // duration: data.duration
    //  } 
    callback(null,data.response);
  });
};

module.exports = {fetchMyIP,fetchCoordsByIP, fetchISSFlyOverTimes};