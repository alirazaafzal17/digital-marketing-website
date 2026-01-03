function calculateTotal() {

  let days = document.getElementById("days").value;

  if (days === "" || days <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid number of days";
    return;
  }

  const prices = {
    content: 5,
    search: 8,
    google: 10,
    meta: 10,
    video: 7,
    post: 3,
    email: 7,
    social: 2,
    analytics: 10,
    media: 6
  };

  let totalPerDay = 0;

  if (document.getElementById("content").checked) totalPerDay += prices.content;
  if (document.getElementById("search").checked) totalPerDay += prices.search;
  if (document.getElementById("google").checked) totalPerDay += prices.google;
  if (document.getElementById("meta").checked) totalPerDay += prices.meta;
  if (document.getElementById("video").checked) totalPerDay += prices.video;
  if (document.getElementById("post").checked) totalPerDay += prices.post;
  if (document.getElementById("emaile").checked) totalPerDay += prices.emaile;
  if (document.getElementById("social").checked) totalPerDay += prices.social;
  if (document.getElementById("analytics").checked) totalPerDay += prices.analytics;
  if (document.getElementById("media").checked) totalPerDay += prices.media;

  let totalPrice = totalPerDay * days;

  document.getElementById("totalPrice").value =
  "$" + totalPrice;
}
