//maps api key:  AIzaSyAvRy0Ri2tTfHzhzwpgS7RuNwVUiBuz3cQ

var map;
function initMap() {
const cityLoc= {lat:39.738449,lng:-104.984848}
const loc= {lat:39.788250,lng:-104.737490}
const map = new google.maps.Map(document.getElementById('map'), {
    center: cityLoc,
    zoom: 14
  });

  const marker = new google.maps.Marker({position:loc, map:map})
}

//Sticky Menu Background
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        $('#navbar').css('opacity',0.9);
    } else {
       $('#navbar').css('opacity',1);
    }
})

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(evt){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            //scrollTop: $(hash).offset().top -100
        },800);
    }
});
