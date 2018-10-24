  function createPostCard() {
    const body = document.querySelector("div")

    body.classList.add("one")

    const heading = document.createElement("h3");
    heading.textContent = "Post 1";
    body.prepend(heading);

    const clone = document.createElement("li");
    clone.textContent = "ajax";
    body.append(clone);

    const clone1 = document.createElement("li");
    clone1.textContent = "map";
    body.append(clone1);


  }

  createPostCard();
