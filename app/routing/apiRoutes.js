var friendlist = require("../data/friends");
var path=require("path");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
            res.json(friendlist);
    });
    
app.post("/api/friends", function(req, res) {
    var scorediff = 0;
    var newEntry = req.body.score;
    var scorelog = [];
    var dreamfriend = 0;
    console.log(req.body.score);
    console.log(newEntry[2]);
    console.log(friendlist[1]);
    console.log("this is newentry" + typeof(newEntry));
    for(var i=0; i<friendlist.length; i++) {
        for(var j=0; j<newEntry.length; j++) {
    scorediff+=(newEntry[j]-friendlist[i].score[j]);}
    scorelog.push(Math.abs(scorediff));
    console.log("this is scorelog" + scorelog);
    scorediff = 0;
   
        }
        
       for (k=0; k<scorelog.length; k++) {
            if (scorelog[k] <= scorelog[dreamfriend]) {
                dreamfriend = k;
            }
       }
    
    var myDreamFriend = friendlist[dreamfriend];
    console.log("dream friend" + JSON.stringify(myDreamFriend));
    res.json(myDreamFriend);
    friendlist.push(req.body);

});


};






// . Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 