function switchmode() {
  var mode = document.getElementById("sw-btn").classList.contains("activedarkmode")? 0: 1;
  switch (mode) {
    case 0: //light to dark
      document.getElementById("avatar").className="border-white";
      document.getElementById("sw-btn").classList.remove("activedarkmode");
      document.getElementById("sw-btn").classList.add("darkmode");
      document.getElementById("apple-logo").className = "";
      document.getElementById("details").classList.add("bg-dark");
      document.getElementById("details").classList.add("text-white");
      document.getElementById("resume-icon").classList.add("icon-white");
      document.getElementById("mail-icon").classList.add("icon-white");
      document.getElementById("details").classList.remove("bg-light");
      document.getElementById("details").classList.remove("text-black");
      document.getElementById("tooltiptext").innerHTML = "Light Mode";
      document.getElementById("likendin-icon").classList.add("icon-white");
      document.getElementById("github-icon").classList.add("icon-white");
      document.getElementById("insta-icon").classList.add("icon-white");
      document.getElementById("tooltiptext").classList.add("bg-light");
      document.getElementById("tooltiptext").classList.remove("bg-dark");
      document.getElementById("tooltiptext").classList.remove("text-white");
      document.getElementById("tooltiptext").classList.add("text-black");
      break;
    case 1: //dark to light
      document.getElementById("avatar").className="border-black";
      document.getElementById("sw-btn").classList.remove("darkmode");
      document.getElementById("sw-btn").classList.add("activedarkmode");
      document.getElementById("tooltiptext").innerHTML = "Dark Mode";
      document.getElementById("details").classList.remove("bg-dark");
      document.getElementById("details").classList.remove("text-white");
      document.getElementById("tooltiptext").classList.remove("bg-light");
      document.getElementById("tooltiptext").classList.add("bg-dark");
      document.getElementById("tooltiptext").classList.add("text-white");
      document.getElementById("tooltiptext").classList.remove("text-black");
      document.getElementById("details").classList.add("bg-light");
      document.getElementById("details").classList.add("text-black");
      document.getElementById("resume-icon").classList.remove("icon-white");
      document.getElementById("mail-icon").classList.remove("icon-white");
      document.getElementById("likendin-icon").classList.remove("icon-white");
      document.getElementById("apple-logo").classList.add("icon-white");
      document.getElementById("github-icon").classList.remove("icon-white");
      document.getElementById("insta-icon").classList.remove("icon-white");
      break;
  }
}
