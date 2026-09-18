const state = { category: "Todas", search: "" };
const categoriesEl = document.querySelector("#categories");
const messagesEl = document.querySelector("#messages");
const searchEl = document.querySelector("#search");
const countEl = document.querySelector("#count");
const emptyEl = document.querySelector("#empty");
const themeBtn = document.querySelector("#themeBtn");

const categories = ["Todas", ...new Set(messages.map(m => m.category))];

function renderCategories() {
  categoriesEl.innerHTML = categories.map(c =>
    `<button class="category ${c === state.category ? "active" : ""}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`
  ).join("");
  categoriesEl.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      render();
    });
  });
}

function filtered() {
  const term = state.search.toLowerCase().trim();
  return messages.filter(m => {
    const catOk = state.category === "Todas" || m.category === state.category;
    const textOk = !term || `${m.title} ${m.text} ${m.category}`.toLowerCase().includes(term);
    return catOk && textOk;
  });
}

function renderMessages() {
  const list = filtered();
  countEl.textContent = `${list.length} mensagem${list.length === 1 ? "" : "s"}`;
  emptyEl.classList.toggle("hidden", list.length > 0);
  messagesEl.innerHTML = list.map((m, i) => `
    <article class="card">
      <div class="card-head">
        <h3>${escapeHtml(m.title)}</h3>
        <span class="tag">${escapeHtml(m.category)}</span>
      </div>
      <textarea id="msg-${i}" aria-label="${escapeHtml(m.title)}">${escapeHtml(m.text)}</textarea>
      <div class="actions">
        <button class="copy" data-index="${i}">📋 Copiar</button>
      </div>
    </article>
  `).join("");

  messagesEl.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      const textarea = messagesEl.querySelector(`#msg-${btn.dataset.index}`);
      try {
        await navigator.clipboard.writeText(textarea.value);
      } catch {
        textarea.select();
        document.execCommand("copy");
      }
      btn.textContent = "✓ Copiado!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = "📋 Copiar";
        btn.classList.remove("copied");
      }, 1400);
    });
  });
}

function render() {
  renderCategories();
  renderMessages();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[ch]));
}

searchEl.addEventListener("input", e => {
  state.search = e.target.value;
  renderMessages();
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

render();
