$(function () {
  $(document).scroll(function () {
    let $nav = $("navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top:
        targetElement.offsetTop -
        document.querySelector("#Navbar").offsetHeight,
      behavior: "smooth",
    });
  });
});
