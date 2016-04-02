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

casper.thenOpen('http://blackboard.neu.edu/webapps/gradebook/do/student/viewCourses?returnUrl=/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1&tabId=_1_1&forwardUrl=index.jsp', function() {
//    this.captureSelector('capture.png', '.fl-theme-iphone');
    this.echo("home page hit");

});


casper.thenOpen('http://blackboard.neu.edu/webapps/streamViewer/streamViewer?cmd=view&streamName=mygrades_d', function() {
    this.echo("hit grade page");
    grades = this.evaluate(getGrades);

});

function getGrades() {
    this.echo("get grades function call");
    var grades = document.querySelectorAll(".grade-value");
     return Array.prototype.map.call(grades, function(e) {
         this.echo("grade data" + e.getInnerHTML());
         return e.getInnerHTML();
     });

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
