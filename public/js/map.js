
mapboxgl.accessToken = mapToken;

if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 12,
  });

  // Custom marker element
  const el = document.createElement("div");
  el.className = "custom-marker";
  el.innerHTML = `<i class="fa-solid fa-house"></i>`;

  const marker = new mapboxgl.Marker(el)
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p>Exact location provided after booking</p>`
      )
    )
    .addTo(map);
} else {
  document.getElementById("map").innerHTML = "<p>Location not available for this listing.</p>";
}
