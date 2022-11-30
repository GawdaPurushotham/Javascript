checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const KmPerPoint = 5;
    
    if(speed <= speedLimit + KmPerPoint)
    console.log("ok");
    else{
       let points =Math.floor((speed-speedLimit) / KmPerPoint);
       if (points>=12)
       console.log('license suspended');
       else
       console.log('points',points);
    }
}