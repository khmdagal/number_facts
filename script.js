let facts = document.querySelector("#fact");
let factsText = document.querySelector("#factText");

let input = document.querySelector("#numberInput");
input.addEventListener("input",getFactAjax);

//getFactFetch
function getFactAjax() {
  let number = input.value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://numbersapi.com/${number}`);
    xhr.onload = function () {
      // http 200 status  means every thing is okay
        
        if (this.status == 200 && number != "") {
            facts.style.display = "block"
            factsText.innerText = this.responseText;
            console.log(this.responseText)
        }
    }
    
    xhr.send();
}

/*
function getFactFetch() {
  // we need to get data dynamically based on the number input
  let number = input.value;
  const url = `http://numbersapi.com/${number}`;
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      if (number != "") {
        facts.style.display = "block";
        factsText.innerText = data;
      }
    });
}
*/
