


export function useFindCollapsible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      console.log (content.style.display);
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("revealed");
        console.log (this.classList);
      } else {
        content.classList.remove('collapsed')
        content.style.display = "block";
        this.classList.add("revealed");
        console.log (this.classList);
      }
    });
  }
}

export function useFindSummaries() {
  var coll = document.getElementsByClassName("summary");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var text = this.innerHTML;
      var new_text = "";
      if (text.includes("+")) {
        new_text = text.replace("+", "-");
      } else {
        new_text = text.replace("-", "+");
      }
      this.innerHTML = new_text;
      // get nextElementSibling
      var content = this.nextElementSibling;
      // hide or show?
      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("summary-shown");
        this.classList.add("summary-hidden");
      } else {
        content.style.display = "block";
        this.classList.remove("summary-hidden");
        this.classList.add("summary-shown");
      }
    });
  }
}

// to show verses
export function usePopUp(field) {
  var content = document.getElementById(field);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
    //this.className= "revealed";
  }
}
