document.addEventListener("DOMContentLoaded", () => {
  // Select all articles and category links
  const articles = document.querySelectorAll("article");
  const categoryLinks = document.querySelectorAll(".category");

  // Add event listeners to category links
  categoryLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();  // Prevent default behavior of the link

      const selectedCategory = event.target.getAttribute("data-category");

      // Loop through all articles and filter based on category
      articles.forEach(article => {
        const articleCategories = article.getAttribute("data-category").split(" ");

        // Show articles that match the selected category or show all
        if (selectedCategory === "all" || articleCategories.includes(selectedCategory)) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    });
  });
});
