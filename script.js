const loadCategories = () => {
   fetch('https://openapi.programming-hero.com/api/categories')
     .then(res => res.json())
     .then(json => displayCategory(json.categories))
}

const manageSpinner = (status) => {
  const spinner = document.getElementById('spinner');
  const cartsContainer = document.getElementById('cartsContainer');
   if (status === true) {
      spinner.classList.add('flex');
      spinner.classList.remove('hidden');
      cartsContainer.classList.add('hidden');
   } else {
      spinner.classList.remove('flex');
      spinner.classList.add('hidden');
      cartsContainer.classList.remove('hidden');
   }
}

const loadCarts = () => {
  manageSpinner(true)
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(json => displayCarts(json.plants))

}

const displayCarts = (arr) => {
   const cartsContainer = document.getElementById('cartsContainer');

   arr.forEach(elm => {
     cartsContainer.innerHTML += `
            <div class="bg-white p-2 lg:p-3 flex flex-col mx-auto rounded-md">
              <img src="${elm.image}" alt="" class="w-64 lg:w-72 h-72 self-center rounded-sm">
              <h3 onclick="loadWordDetail(${elm.id})" class="font-bold py-3 cursor-pointer">${elm.name}</h3>
              <p class="text-sm mb-3 w-72 text-[#1F2937]">${elm.description}</p>
              <div class="flex justify-between w-full mb-3">
                <p class="px-4 py-1 rounded-3xl bg-[#DCFCE7] text-[#15803D]">${elm.category}</p>
                <p class="font-semibold">$${elm.price}</p>
              </div>
              <button class="btn btn-block bg-[#15803d] text-white rounded-3xl cursor-pointer">Add to Cart</button>
            </div>
     `;
   });
   manageSpinner(false);
}

const removeActive = () => {
   const cateBtns = document.querySelectorAll('.cateBtns');
  //  console.log(cateBtns);

  cateBtns.forEach(elm => {
    elm.classList.remove('active');
  });
}

const loadLevelCart = (id) => {
  manageSpinner(true);
   const url = `https://openapi.programming-hero.com/api/category/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        removeActive();
        const clickedBtn = document.getElementById(`category-btn-${id}`);
        clickedBtn.classList.add('active');
        displayLevelCart(json.plants)
      })    
}

const loadWordDetail = (id) => {
   const url = `https://openapi.programming-hero.com/api/plant/${id}`;
   fetch(url)
     .then(res => res.json())
     .then(json => displayWordDetails(json.plants))
}

const displayWordDetails = (plant) => {
    const detailsBox = document.getElementById('details-container');
    detailsBox.innerHTML = `
          <div>
            <h2 class="text-xl font-bold mb-3">${plant.name}</h2>
            <img src="${plant.image}" alt="modal img" class="w-full max-h-96 rounded-lg mb-3">
            <p><span class="font-bold">Category: </span>${plant.category}</p>
            <p class="my-3"><span class="font-bold">Price: </span>$${plant.price}</p>
            <p><span class="font-bold">Description: </span>${plant.description}</p>
          </div>
    `;
    const modal = document.getElementById('my_modal_5').showModal();
}

const displayLevelCart = (arr) => {
    const cartsContainer = document.getElementById('cartsContainer');
    cartsContainer.innerHTML = '';

    arr.forEach(elm => {
      cartsContainer.innerHTML += `
            <div class="bg-white p-2 lg:p-3 flex flex-col mx-auto rounded-md">
              <img src="${elm.image}" alt="" class="w-64 lg:w-72 h-72 self-center rounded-sm">
              <h3 onclick="loadWordDetail(${elm.id})" class="font-bold py-3 cursor-pointer">${elm.name}</h3>
              <p class="text-sm mb-3 w-72 text-[#1F2937]">${elm.description}</p>
              <div class="flex justify-between w-full mb-3">
                <p class="px-4 py-1 rounded-3xl bg-[#DCFCE7] text-[#15803D]">${elm.category}</p>
                <p class="font-semibold">$${elm.price}</p>
              </div>
              <button class="btn btn-block bg-[#15803d] text-white rounded-3xl cursor-pointer">Add to Cart</button>
            </div>
     `;
    })
    manageSpinner(false);
}

const displayCategory = (arr) => {
  const categoryContainer = document.getElementById('categoryContainer');
  arr.forEach((elm) => {
    categoryContainer.innerHTML += `
      <button id="category-btn-${elm.id}" onclick="loadLevelCart(${elm.id})" class="btn btn-ghost cateBtns text-sm font-normal active:bg-[#15803d] active:text-white">${elm.category_name}</button>
    `;
  });
}

const loadAll = () => {
   const cartsContainer = document.getElementById('cartsContainer');
   cartsContainer.innerHTML = '';
   removeActive();
   const allBtn = document.getElementById('cart-btn-0');
   allBtn.classList.add('active');
   loadCarts();
}

const toggleHistory = () => {
  const historySec = document.getElementById('historySec');

  historySec.classList.toggle('hidden');
}

loadCarts()
loadCategories();