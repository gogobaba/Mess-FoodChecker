
    var Monday = " <h3>Breakfast</h3><p>Pongal , Wada , Sambar , coconut chutney</p><h3>lunch</h3><p>Poori,White Peas mochai Curry,Tomato rice,Sambar,Rice,Curd rice,Potato poriyal,Dry Fruit Kesari</p><h3>Snacks</h3><p>Fruit cake</p><h3>Dinner</h3><p>Idly,Sambar,Chutney,White rice,Rasam,Poriyal,Buttermilk,Banana,Boiled Egg(1)or Egg Masala/Gobi 65</p>" ;
    var Tuesday = "<h3>Breakfast</h3><p>Rava kitchidi,Sambar,Chutney,Poha,Mint chutney</p><h3>lunch</h3><p>Chappathi,Karamani khorma,Sambar,Aviyal,Buttermilk,Somiya payasam</p><h3>Snacks</h3><p>dahi wada,mysore bonda</p><h3>Dinner</h3><p>veg fried rice/ veg noodles ,Mix veg manchurian gravy,Honey chilli potato dry,Dosa,Chutney, Sambar, White rice, Rasam,Seasonal fruit</p>" ;
    var Wednesday = "<h3>Breakfast</h3><p>Idly , Sambar , Chutney ,Masala omelette</p><h3>lunch</h3><p>Chappathi, Kaikari chettinad, Keerai sambar , Raw banana,Banana stem poriyal, Buttermilk, Sakkara pongal</p><h3>Snacks</h3><p>Veg puffs/ veg spring roll</p><h3>Dinner</h3><p>chappathi,Nookkal pattani vellai khorma , white rice, Sambar, poriyal,Buttermilk,Banana,Veg(panner)/Non veg(chicken)</p> " ;
    var Thursday = "<h3>Breakfast</h3><p>Dosa , (Potato masala separate),Sambar,Chutney</p><h3>lunch</h3><p>poori , Carrot chow chow pattani khurma, More kulambu/Drumstick sambar ,Yam masala , Buttermilk , Sweet boondhi</p><h3>Snacks</h3><p>Onion bonda / Special mixture</p><h3>Dinner</h3><p>Aloo paratha, Nilgiri khurma, Curd,White rice, Sambar, Rasam, Poriyal, Frymes , Seasonal fruits , Banana , Veg (french fry)/ Nonveg (eggpodimas curry)</p>" ;
    var Friday = " <h3>Breakfast</h3><p>Idly,Sambar,Chutney</p><h3>lunch</h3><p>Chappathi , Meal maker khorma , Veg fried rice , Lemon rice/Coconut rice , Curd rice , Raitha , Bread halwa</p><h3>Snacks</h3><p>Cutlet , Bajji</p><h3>Dinner</h3><p>Poori , Sabut channa masala , White rice ,Sambar,Rasam, Potato poriyal,Buttermilk, Ice cream , Banana , Nonveg gravy</p>" ;
    var Saturday = " <h3>Breakfast</h3><p>Chutney,Sambar,Set dosa, Boiled egg</p><h3>lunch</h3><p>Poori , Potato masala ,Vathakulambu , Keerai kotu , Buttermilk , Paruppu payasam</p><h3>Snacks</h3><p>Sundal / Pav bhaji</p><h3>Dinner</h3><p>Idly,Chutney, White rice ,Sambar, Rasam , Poriyal ,Buttermilk , Seasonal fruit , Nonveg gravy</p>" ;
    var Sunday = " <h3>Breakfast</h3><p>Special upma,Sambar,Chutney</p><h3>Lunch</h3><p>Chappathi , Aloo mirchi masala ,Sambar ,Beetroot poriyal, Veg (panner), Nonveg (chicken) , Ice cream , Buttermilk</p><h3>Snacks</h3><p>Onion uthiri pakoda/Kera sev</p><h3>Dinner</h3><p>Atta paratha , White rice , Sambar, subzi hyderabadi ,Rasam,Curd rice, Poriyal, Banana , Nonveg gravy</p>" ;

    var insertion = document.getElementById('insertion');

    switch (new Date().getDay())
    {
    case 0 : insertion.innerHTML += Sunday;
    break;
    case 1 : insertion.innerHTML += Monday;
    break;
    case 2 : insertion.innerHTML += Tuesday;
    break;
    case 3 : insertion.innerHTML += Wednesday;
    break;
    case 4 : insertion.innerHTML += Thursday;
    break;
    case 5 : insertion.innerHTML += Friday;
    break;
    case 6 : insertion.innerHTML += Saturday;
    break;
  }
