function myFunction() {
 
    var d = new Date();
    var lastmonth =d.getMonth() + 1;
    var lastdate = d.getDate(); ;
    var lastyear = d.getFullYear(); ;
    var lasthr = document.getElementById('lasthr').value ;
    var lastmin = document.getElementById('lastmin').value ;
    var lastsec = document.getElementById('lastsec').value ;

    var timeentered = lastmonth + ' ' + lastdate + ', ' + lastyear + ' ' + lasthr + ':' + lastmin + ':' + lastsec

    var countDownDate = new Date(timeentered).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "+ minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TIME OVER!!";
    }
  }, 1000);
}