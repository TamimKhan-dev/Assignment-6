const loadCategories = () => {
   fetch('https://openapi.programming-hero.com/api/categories')
     .then(res => res.json())
     .then(json => displayCategory(json.categories))
}

const displayCategory = (arr) => {
  const categoryContainer = document.getElementById('categoryContainer');
  arr.forEach((elm) => {
    categoryContainer.innerHTML += `
      <button class="btn btn-ghost text-sm font-normal active:bg-[#15803d] active:text-white">${elm.category_name}</button>
    `;
  });
}

const toggleHistory = () => {
  const historySec = document.getElementById('historySec');

  historySec.classList.toggle('hidden');
}

loadCategories();