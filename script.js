document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const query = document.getElementById("search").value.trim();
  if (query) alert("Qidiruv namunasi: " + query + "\nBu dizayn nusxasi haqiqiy Soliq portaliga ulanmagan.");
});
