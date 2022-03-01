

function apod() {
  
 
  var xhttp = new XMLHttpRequest();
  var url = "https://api.nasa.gov/planetary/apod?api_key=9ANE9r5LlI2M3QNrymMKDKoz2HYqAMcqW4OF5wxc";
  
  var nasa = document.getElementById("nasa");
  var date =document.getElementById("date");
  
  url += "&date=" + date.value;
  console.log(url);
  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      
   
      nasa.src = JSON.parse(this.responseText).url;
      nasa.alt = JSON.parse(this.responseText).title
    }
    
  };
  
  xhttp.open("GET", url, true);
  xhttp.send();
}
