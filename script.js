const header = document.querySelector("header");
const filterButtons = Array.from(document.querySelectorAll(".filter-item"));
const posts = Array.from(document.querySelectorAll(".post-box"));
const emptyMessage = document.querySelector("#empty-posts");
const yearElement = document.querySelector("#current-year");

function updateHeader() {
    header?.classList.toggle("shadow", window.scrollY > 0);
}

function filterPosts(category) {
    let visibleCount = 0;

    posts.forEach((post) => {
        const visible = category === "all" || post.classList.contains(category);
        post.hidden = !visible;
        if (visible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
        const active = button.dataset.filter === category;
        button.classList.toggle("active-filter", active);
        button.setAttribute("aria-pressed", String(active));
    });

    if (emptyMessage) {
        emptyMessage.hidden = visibleCount > 0;
    }
}

window.addEventListener("scroll", updateHeader, { passive: true });

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterPosts(button.dataset.filter || "all");
    });
});

if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
}

updateHeader();
filterPosts("all");
