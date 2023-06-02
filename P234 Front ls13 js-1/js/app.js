window.onload = function() {
  let now = new Date();
  let hour = now.getHours();
  
  if (hour >= 6 && hour < 12) {
    alert("Sabahiniz xeyir!");
    document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/FUacbnqXEAYjcQ_.jpg:large)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

} else if (hour >= 12 && hour < 18) {
    alert("Gün ortaniz xeyir!");
    document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/FUacbnqXEAYjcQ_.jpg:large)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

  } else {
    alert("Axsaminiz xeyir!");
    document.body.style.backgroundImage = "url(https://pbs.twimg.com/media/FUacbnqXEAYjcQ_.jpg:large)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center"}
}

