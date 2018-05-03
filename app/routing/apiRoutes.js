var friendlist = require("../data/friends");
var path=require("path");

// Node export
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
            res.json(friendlist);
    });
    


app.post("/api/friends", function(req, res) {
//Variables 
    var scorediff = 0;
    var newEntry = req.body.score;
    var scorelog = [];
    var dreamfriend = 0;
// Data checks
    console.log(req.body.score);
    console.log(newEntry[2]);
    console.log(friendlist[1]);
    console.log("this is newentry" + typeof(newEntry));

// Logic to match lowest score and find mydreamfriend
// Looping through the friendlist array
    for(var i=0; i<friendlist.length; i++) {
        // Looping through score array
        for(var j=0; j<newEntry.length; j++) {
            scorediff+=(newEntry[j] - friendlist[i].score[j]);}
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
    // Logging the dreamfriend result
    console.log("dream friend" + JSON.stringify(myDreamFriend));
    res.json(myDreamFriend);
    friendlist.push(req.body);

    });


};






