const form = document.querySelector(".top-banner form");

const input = document.querySelector(".top-banner input");

const msg = document.querySelector(".top-banner .msg");

const list = document.querySelector(".ajax-section .cities");

const inputVal = input.value;

const apiKey = "4ca0daafb2e318165dde995d26fe64ea";
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;

  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  //if cities from i/p key word are present
  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      
      if (inputVal.includes(",")) {
          
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
          
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return 0;
    }
  }
});