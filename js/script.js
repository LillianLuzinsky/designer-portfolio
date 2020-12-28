  
  window.onscroll = function() {
    progressBar();
  };
  
  function progressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  //Get att the tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach(clickedTab => {
    //Add onClick event
    clickedTab.addEventListener('click', () => {
        //Remove the active class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })
        //Add the active class on the clicked tab
        clickedTab.classList.add('active');
    })
})
  
  console.log(
    "%cThank you for taking the time to look at my portfolio, I hope you enjoyed browsing through. Feel free to contact me, I would love to hear from your feedback. Have a good day :)",
    "font-size: 20px; color: #F037A5;"
  );