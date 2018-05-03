
var path = require('path');

// Export for Node, routes to two html pages
module.exports = function(app) {
app.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname + '/../public/survey.html'))
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
});

}




