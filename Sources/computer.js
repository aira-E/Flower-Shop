document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("checkbox");
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");
    var checkbox5 = document.getElementById("checkbox5");
    var checkbox6 = document.getElementById("checkbox6");
    var checkbox7 = document.getElementById("checkbox7");
    var paragraph = document.getElementById("payment");
    var counter = 0

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        counter += 20
        paragraph.textContent = "$" + counter;
      } else {
        counter -= 20
        paragraph.textContent = "$" + counter;
      }
    });
    checkbox1.addEventListener("change", function() {
        if (checkbox1.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox2.addEventListener("change", function() {
        if (checkbox2.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox3.addEventListener("change", function() {
        if (checkbox3.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox4.addEventListener("change", function() {
        if (checkbox4.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox5.addEventListener("change", function() {
        if (checkbox5.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox6.addEventListener("change", function() {
        if (checkbox6.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
      checkbox7.addEventListener("change", function() {
        if (checkbox7.checked) {
          counter += 20
          paragraph.textContent = "$" + counter;
        } else {
            counter -= 20
            paragraph.textContent = "$" + counter;
        }
      });
  });
  