var page = require('casper').create();



casper.start('http://blackboard.neu.edu', function(status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {



  console.log("Status: " + status);
    if(status !== "success") {
      console.log('Unable to access network');
    } else {


      var ua = page.evaluate(function() {
          var user = "duffy.tr";
          var pass = "higabe"

    //      document.getElementById('username').value="" + username;
          document.getElementById('username').value=user;
          document.getElementById('password').value=pass;
          document.getElementById("fm1").submit();
          this.echo("hi mom!");
    //     $('#btn-submit').click();

      });

      page.render('example.png');
  }
  phantom.exit();
});
});
