// const link2 = document.querySelectorAll(".link2")
// link2.forEach((elem, index) => {
//   elem.onclick = (e) => {
//     e.preventDefault()
//   }
// })


// Массив объектов с категориями
let obj = [
  {
    category: "Укладка",
    name: "Щипци",
    duration: "60",
    price1: "4000",
    price2: "10000",
  },
  {
    category: "Укладка",
    name: "Вечерняя прическа",
    duration: "25",
    price1: "10000",
    price2: "15000"
  },
  {
    category: "Укладка",
    name: "Свадебная прическа",
    duration: "20",
    price1: "15000",
    price2: "25000"
  },
  {
    category: "Укладка",
    name: "Кератиновое выравнивание",
    duration: "15",
    price1: "20000",
    price2: "50000"
  },
  {
    category: "Стрижка",
    name: "Стрижка волос",
    duration: "35",
    price1: "2000",
    price2: "4000"
  },
  {
    category: "Стрижка",
    name: "Фен",
    duration: "45",
    price1: "2000",
    price2: "5000"
  },
  {
    category: "Стрижка",
    name: "Смешанный фен",
    duration: "45",
    price1: "3000",
    price2: "6000"
  },
  {
    category: "Окрашивания",
    name: "Обесцвечивание окрашивание",
    duration: "15",
    price1: "10000",
    price2: "15000"
  },
  {
    category: "Окрашивания",
    name: "Осветление в технике (миллировка, шатуш, выметание)",
    duration: "15",
    price1: "15000",
    price2: "50000"
  },
  {
    category: "Окрашивания",
    name: "Окрашивание волос",
    duration: "15",
    price1: "5000",
    price2: "8000",
  },
];

// Контейнер для всех элементов
const container = document.querySelector(".bottom");

// Поиск
const search = document.getElementById("search");

// Функция для рендера элементов
function render(items) {
  // Очистить контейнер перед рендером
  container.innerHTML = "";

  // Создаем блоки .items2 для каждой категории
  const categories = [...new Set(items.map(item => item.category))]; // Получаем уникальные категории

  categories.forEach(category => {
    const divItems2 = document.createElement("div");
    divItems2.className = "items2";
    divItems2.setAttribute("data-category", category.toLowerCase()); // Добавляем атрибут с категорией для фильтрации

    const categoryHeader = document.createElement("h2");
    categoryHeader.className = "category-name";
    categoryHeader.textContent = category; // Заголовок категории
    divItems2.id = category.toLowerCase()

    divItems2.appendChild(categoryHeader); // Добавляем заголовок категории

    // Создаем элементы .items для каждой категории
    const categoryItems = items.filter(item => item.category === category); // Фильтруем элементы по категории

    categoryItems.forEach(item => {
      const divItem = document.createElement("div");
      const itemName = item.name.replace(item.name.charAt(0), item.name.charAt(0).toUpperCase())
      divItem.className = "items";
      const items2 = document.querySelectorAll(".items2")

      divItem.innerHTML = `
        <h3 class="name">${itemName}</h3>
        <span class="duration">${item.duration}мин</span>
        <p class="price">${item.price1}-${item.price2}դր</p>
    
      `;
      divItems2.appendChild(divItem); // Добавляем элемент в категорию
    });

    container.appendChild(divItems2); // Добавляем категорию в контейнер
  });
}

// Рендерим все элементы по умолчанию
render(obj);

// Фильтрация по вводу
search.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase(); // получаем значение из input
  const allCategories = document.querySelectorAll(".items2"); // все категории .items2

  allCategories.forEach(category => {
    const allItems = category.querySelectorAll(".items"); // все элементы .items в категории
    let hasVisibleItems = false; // Флаг, который проверяет, есть ли хотя бы один видимый элемент

    allItems.forEach(item => {
      const name = item.querySelector(".name").textContent.toLowerCase(); // получаем имя из .name
      if (value === "" || name.includes(value)) { // если пусто или совпадает с введенным значением
        item.style.display = "block"; // показываем элемент
        hasVisibleItems = true; // Обновляем флаг, если элемент видим
      } else {
        item.style.display = "none"; // скрываем элемент
      }
    });

    // Если в категории нет видимых элементов, скрываем всю категорию
    if (hasVisibleItems) {
      category.style.display = "flex";
    } else {
      category.style.display = "none";
    }
  });
});


