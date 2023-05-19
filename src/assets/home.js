//content automatically will load as the user open the website in browser
function HomeContent() {
  document.getElementById("title").innerHTML = "Welcome to Catch Me Higher Apps Home";
  document.getElementById("deskPgButton").innerHTML = "Desktop Application";
  document.getElementById("mobilePgButton").innerHTML = "Mobile Application";
}
window.onload = HomeContent;

//direct to the page of Desktop Application
function DesktopApplicationPg() {
  window.location.href = "/desktop-page";
}

//directs to the page of Mobile Application
function MobileApplicationPg() {
  window.location.href = "/mobile-page";
}
