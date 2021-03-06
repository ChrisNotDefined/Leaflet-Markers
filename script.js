var btnAddMarker = document.getElementById("btnAddMarker");
var txtLat = document.getElementById("txtLat");
var txtLng = document.getElementById("txtLng");

var mymap = L.map("mapid").setView(
  [21.153574935487942, -101.71131319985462],
  15
);
L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20,
    ext: "png",
  }
).addTo(mymap);

btnAddMarker.addEventListener("click", (evt) => {
  evt.preventDefault();
  L.marker([parseFloat(txtLat.value), parseFloat(txtLng.value)]).addTo(mymap);
});
