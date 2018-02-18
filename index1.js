
    var Monday = " <h3>Breakfast</h3><p>Chappathi,Meal Mutter Khorma</p><h3>Lunch</h3><p>Poori,White Peas Curry,Mix Veg Phulao,Kacha Aam ki Dal,Dry Fruit Kesari</p><h3>Snacks</h3><p>Fruit cake</p><h3>Dinner</h3><p>Chappathi,Subzi,Pulao,Dal Tadka,Rajma Aloo,Banana,Boiled Egg(1)or Egg Masala/Gobi 65</p>" ;
    var Tuesday = "<h3>Breakfast</h3><p>Poori,Aloo Jeera,Poha,Mint chutney</p><h3>Lunch</h3><p>Chappathi,Karamani khorma,Bagara Phulao,Dal makhani,Buttermilk,Somiya payasam</p><h3>Snacks</h3><p>Dahi wada,Mysore bonda</p><h3>Dinner</h3><p>Veg fried rice/ Veg noodles , Paratha, Mix veg manchurian gravy, Honey chlli potato dry,Seasonal fruit</p>" ;
    var Wednesday = "<h3>Breakfast</h3><p>Idly , Sambar , Chutney , Masala omelette</p><h3>Lunch</h3><p>Chappathi, Jeera pulao, Aloo gobhi , Dal palak, Buttermilk, Sakkara pongal</p><h3>Snacks</h3><p>Veg puffs/ Veg spring roll</p><h3>Dinner</h3><p>Chappathi, White rice, Moong dal, Chow chow curry,Banana,Veg(panner)/Non veg(chicken)</p> " ;
    var Thursday = "<h3>Breakfast</h3><p>Chappathi , Mix veg khorma</p><h3>Lunch</h3><p>Poori , Kashmiri pulao , Rajma dal , Aloo parwal masala , Buttermilk , Sweet boondhi</p><h3>Snacks</h3><p>Onion bonda / Secial mixture</p><h3>Dinner</h3><p>Aloo paratha , Nilgiri khurma , Curd , White rice , Dal pancharian , Seasonal fruit , Non veg gravy , Veg (french fry)/ Non veg (eggpodimas curry)</p>" ;
    var Friday = " <h3>Breakfast</h3><p>Methi chappathi , Gobhi mutter masala</p><h3>Lunch</h3><p>Chappathi , Meal maker khorma , Mysore dal , White rice , Curd rice , Raitha , Bread halwa</p><h3>Snacks</h3><p>Cutlet , Bajji</p><h3>Dinner</h3><p>Poori , Sabut channa masala , Jeera pulao , Dal lasooni , Ice cream , Banana , Nonveg gravy</p>" ;
    var Saturday = " <h3>Breakfast</h3><p>Aloo paratha , Curd , Pickle , Boiled egg</p><h3>Lunch</h3><p>Poori , Soyabean curry , Sulthana pulao , Kacha kela , Palak sabzi , Buttermilk , Paruppu payasam</p><h3>Snacks</h3><p>Sundal / Pav bhaji</p><h3>Dinner</h3><p>Diamond chappathi , Onion pulao , Gobhi capsicum masala , Dal makhani , Banana , Seasonal fruit , Nonveg gravy</p>" ;
    var Sunday = " <h3>Breakfast</h3><p>Chola poori , Chole Masala</p><h3>Lunch</h3><p>Chappathi , Aloo mirchi masala , White rice, Dal fry , Veg (panner), Nonveg (chicken) , Ice cream , Buttermilk</p><h3>Snacks</h3><p>Onion uthiri pakoda/Kera sev</p><h3>Dinner</h3><p>Atta paratha , Cashew mint Pulao , Dal tamatar subzi hyderabadi , Banana , Nonveg gravy</p>" ;

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
