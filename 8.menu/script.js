const menu = [
    {
      id: 1,
      title: "Ponganal with Chetney",
      category: "breakfast",
      price: 30.00,
      img: "https://www.shutterstock.com/image-photo/paniyaram-southindian-dish-made-fermented-260nw-2159069227.jpg",
      desc: `Gunta Ponganalu is one of the renowned breakfast in South India. It is a healthy breakfast which is also served as an evening snack with chai (tea).
      This light breakfast tastes delicious with any podi, allam pachadi (ginger chutney) or any coconut chutney.
       `,
    },
    {
      id: 2,
      title: "Full Meals",
      category: "lunch",
      price: 99.00,
      img: "https://thumbs.dreamstime.com/z/south-indian-meals-affair-average-90612903.jpg?ct=jpeg",
      desc: `Bhojanam is also used to refer to an Indian-style meal made up of a selection of various dishes which are served on a platter.Bhojanam is also used in south Asia for ceremonial purposes. `,
    },
    {
      id: 3,
      title: "Oninon Samosa",
      category: "snacks",
      price: 25.00,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA5swSrmThV69LTi3C343RrthIMpj_BB7tQ&s",
      desc: 'The samosa is prepared with an all-purpose flour  and stuffed with a filling, often  cooked or mashed boiled potato, onions,  ginger, spices and green chili. A samosa can be vegetarian or non-vegetarian',
    },
    {
      id: 4,
      title: "Idly Sambar",
      category: "breakfast",
      price: 15.00,
      img: "https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg",
      desc: `Idli is a type of steamed fluffy cake that is made of a batter of Urad Dal (black gram) and Rice. It is a very popular food in whole India and not only in India perhaps in other countries too. According to many people, `,
    },
    {
      id: 5,
      title: "Egg Biriyani",
      category: "lunch",
      price: 129.00,
      img: "https://static.toiimg.com/thumb/52397749.cms?imgsize=299414&width=800&height=800",
      desc: `Egg dum biryani recipe – Hyderabadi egg dum biryani made with basmati rice, spice. Biryani  had been loved across the globe for its unique aroma, flavor & taste. `,
    },
    {
      id: 6,
      title: "Mysore Bonda",
      category: "snacks",
      price: 35.00,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGSN5pHQfJfsNBMUQeoDjS1ZIkZGNZ0a3zw&s",
      desc: 'Mysore Bonda is made with.The taste and texture of these is good & fluffy even made with wheat Flour',
    },
    {
      id: 7,
      title: "Masala Dosa",
      category: "breakfast",
      price: 89.00,
      img: "https://www.flavourstreat.com/wp-content/uploads/2019/04/korralu-dosa-recipe.jpg",
      desc: `Masala Dosa is one of the most popular South Indian breakfast dishes served in restaurants and tiffin centres. Dosa is a crepe made using fermented rice and lentil batter. Masala Dosa is one that is crisp, and has a potato masala or spiced  potatoes stuffed in it. `,
    },
    {
      id: 8,
      title: "Lemon Rice",
      category: "lunch",
      price: 79.00,
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/lemon-rice-2.jpg",
      desc: `Lemon Rice (Chitranna) is a popular rice based dish in Karnataka. Chitranna is easy to make and widely available at reasonable prices. It is a great option if you’d like to cook something at a shorter time for lunch or dinner. `,
    },
    {
      id: 9,
      title: "Bajji",
      category: "snacks",
      price: 20.00,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4J4uK9IglU0CmAyyCLWIskuDPIsw7H9hoUg&s",
      desc: 'It is a perfect evening snack with a cup of tea or coffee, especially during monsoon or winter season. it is generally eaten as it is without any sides but tastes great with dips like green chutney, tomato sauce or schezwan chutney.',
    },
    {
      id: 10,
      title: "Chicken curry with ragi ball",
      category: "dinner",
      price: 149.00,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7godj3zYXFpCDNS1C68ZQ1ytIGi8TodK3pQ&s",
      desc: 'Ragi Mudde are gluten-free traditional balls made with finger millet flour. Finger millet is known as ragi in South India, and mudde is a Kannada word for soft ball. Ragi mudde are nutritious, healthy and a wholesome every day food of a large rural population in Karnataka..',
    },
    {
      id:11,
      title: "Roti",
      category: "dinner",
      price: 10.00,
      img:"https://irenecocoqueen.com/wp-content/uploads/2019/11/shutterstock_1019185939-1170x1514.jpg",
      desc:`No meal is complete without -Roti. An Indian flat bread made from scratch that I can only describe as a flaky, crispy bread that bubbles as soon as the soft dough hits the heat.  Listen to it sizzle on the pan, the bubbles bursting up like little mouths that want to speak. `
    },
    {
      id:12,
      title:"Curd Rice",
      category:"dinner",
      price:20.00,
      img:"https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2.jpg",
      desc:`Curd rice, also called yogurt rice, is a dish originating from India. The word "curd" in Indian English refers to unsweetened probiotic yogurt.`
    }
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }