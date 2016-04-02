var grades = [];

var casper = require('casper').create();

casper.start('http://blackboard.neu.edu', function() {
    this.echo(this.getTitle());
        var user = "duffy.tr";
        var pass = "higabe";
        this.echo("Function Starts");

        this.fill('form[id="fm1"]', {
            'username': user,
            'password': pass
        }, true);
});



casper.thenOpen('http://blackboard.neu.edu/webapps/streamViewer/streamViewer?cmd=view&streamName=mygrades_d', function() {
    this.echo("hit grade page");
    grades = document.querySelectorAll(".grade-value");
    this.echo(grades.toString());
});

function getGrades() {
    this.echo("get grades function call");


}

casper.then(function() {
    this.echo(grades);
    // aggregate results for the 'phantomjs' search
    grades = grades.concat(this.evaluate(getGrades));
    this.echo("concat function");

    this.echo(grades);
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(grades.length + ' links found:');
    this.echo(grades.toString());
    this.echo(' - ' + grades.join('\n - ')).exit();
});
