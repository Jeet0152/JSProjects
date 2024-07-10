function changeColor() {
            document.body.classList.toggle("black");
            document.querySelector("nav").classList.toggle("nav-dark");
            document.querySelectorAll("button").forEach(el => {
                el.classList.toggle("dark-text");
                el.classList.toggle("light-text");
            });
        }