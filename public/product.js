export const menuList = ref([
    {name: 'Завтрак', code: 'breakfast'},
    {name: 'Пицца', code: 'pizza'},
    {name: 'Закуски', code: 'snack'},
    {name: 'Напитки', code: 'drink'},
    {name: 'Десерты', code: 'desert'},
    {name:'Соусы', code: 'sausage'}])

export const productList = [
    {
        name: 'Завтрак',
        code: 'breakfast',
        item: [
            {
                name: 'Сырники',
                description: 'Нежные сырники из печи с соусом на выбор',
                code: 'cheesecake',
                price: 500.00,
                image: 'product/breakfast/cheesecake.webp'
            },
            {
                name: 'Омлет',
                description: 'Легкий горячий завтрак - запеченный омлет с сыром Моцарелла и свежими томатами',
                code: 'omelette',
                price: 500.00,
                image: 'product/breakfast/omelette.webp'
            },
            {
                name: 'Омлет с беконом',
                description: 'Сытный завтрак - горячий омлет из печи с сочным куриным филе, томатами и сыром Моцарелла',
                code: 'omelette_bacon',
                price: 500.00,
                image: 'product/breakfast/omelette_bacon.webp'
            },
        ]
    },
    {
        name: 'Пицца',
        code: 'pizza',
        item: [
            {
                name: 'Альфредо',
                description: 'Пицца со сливочно-шпинатным соусом, Моцареллой, ветчиной, ароматным беконом, шампиньонами и сочными томатами',
                code: 'alfredo',
                price: 500.00,
                image: 'product/pizza/alfredo.webp',
                size: ['25 см', '30 см', '35 см']
            },
            {
                name: 'Чикен блю чиз',
                description: 'Идеальное сочетание: нежное куриное филе с кусочками сыра блю чиз, соусом Пармеджано, смесью итальянских сыров и сыром Моцарелла',
                code: 'cheese',
                price: 500.00,
                image: 'product/pizza/cheese.webp'
            },
            {
                name: 'Цыпленок Кордон Блю',
                description: 'Соус шпинатный, сыр моцарелла, грудка куриная, ветчина, смесь 3-х итальянских сыров',
                code: 'chicken',
                price: 500.00,
                image: 'product/pizza/chicken.webp'
            },
            {
                name: 'Итальянская',
                description: 'Традиционный рецепт с двумя видами сыра: тертый и мягкий сыр Моцарелла; пикантная пепперони, шампиньоны и смесь приправ',
                code: 'alfredo',
                price: 500.00,
                image: 'product/pizza/italy.webp'
            },
            {
                name: 'Мясная',
                description: 'Супермясная пицца с пикантной пепперони, ветчиной, беконом, ароматной свининой, говядиной, Моцареллой и фирменным томатным соусом',
                code: 'meat',
                price: 500.00,
                image: 'product/pizza/meat.webp'
            },
            {
                name: 'Мексиканская',
                description: 'Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким перцем и перцем "Халапеньо"',
                code: 'mexica',
                price: 500.00,
                image: 'product/pizza/mexica.webp'
            },
            {
                name: 'Чеддер Чизбургер',
                description: 'Яркий сыр Чеддер, Моцарелла, ароматный бекон, говядина, маринованные огурчики, томаты, соус 1000 островов',
                code: 'pepe',
                price: 500.00,
                image: 'product/pizza/pepe.webp'
            },
            {
                name: 'Пепперони с медом и халапеньо',
                description: '"The Bee Sting" пицца с пепперони, цветочным медом, острым халапеньо, сыром Моцарелла и фирменным томатным соусом',
                code: 'pepe',
                price: 500.00,
                image: 'product/pizza/pepper_hard.webp'
            },
            {
                name: 'Вестерн Барбекю',
                description: 'Сезон барбекю! Ароматная говядина, сочные томаты, лук с сыром Моцарелла и соусом барбекю',
                code: 'ranch',
                price: 500.00,
                image: 'product/pizza/ranch.webp'
            },
            {
                name: 'Сливочная с креветками',
                description: 'Сливочная с креветками: креветки в нежном сливочном сыре, с моцареллой и томатами, с ароматом итальянских трав и чеснока.',
                code: 'sea',
                price: 500.00,
                image: 'product/pizza/sea.webp'
            },
            {
                name: 'Вегетарианская',
                description: 'Лёгкая пицца с фирменным томатным соусом, Моцареллой, сладким перцем, шампиньонами, маслинами, луком и сочными томатами',
                code: 'veget',
                price: 500.00,
                image: 'product/pizza/veget.webp'
            },
        ]
    },
    {
        name: 'Закуски',
        code: 'snack',
        item: [
            {
                name: 'Наггетсы',
                description: 'Сочные кусочки куриного филе.',
                code: 'naggets',
                price: 500.00,
                image: 'product/snack/naggets.webp'
            },
            {
                name: 'Картофель фри',
                description: 'Картофельные брусочки из печи',
                code: 'potato',
                price: 500.00,
                image: 'product/snack/potato.webp'
            },
            {
                name: 'Шаверма с курицей',
                description: 'Ролл с куриным филе, томатами, луком, маринованными огурчиками и соусом 1000 островов, сыр "Моцарелла"',
                code: 'shaverm1',
                price: 500.00,
                image: 'product/snack/shaverm1.webp'
            },
            {
                name: 'Шаверма с говядиной',
                description: 'Сочная обжаренная на мангале говядина, с томатами, луком, маринованными огурчиками',
                code: 'shaverm2',
                price: 500.00,
                image: 'product/snack/shaverm2.webp'
            },
            {
                name: 'Шаверма с свининой',
                description: 'Сочная обжаренная на мангале свинина, с добавлением овощей и фирменного пикантного соуса',
                code: 'shaverm3',
                price: 500.00,
                image: 'product/snack/shaverm3.webp'
            },
            {
                name: 'Куриные крылышки Барбекю',
                description: 'Куриные крылышки с соусом "Барбекю"',
                code: 'meat',
                price: 500.00,
                image: 'product/snack/meat.webp'
            },

        ]
    },
    {
        name: 'Напитки',
        code: 'drink',
        item: [
            {
                name: 'Adrenaline Rush',
                code: 'adrenaline',
                price: 120.00,
                image: 'product/drink/adrenaline.webp'
            },
            {
                name: 'Aqua Minerale',
                code: 'aqua',
                price: 120.00,
                image: 'product/drink/aqua.webp'
            },
            {
                name: 'Evervess Coca-Cola',
                code: 'cola',
                price: 120.00,
                image: 'product/drink/cola.webp'
            },
            {
                name: 'Дюшес',
                code: 'dushes',
                price: 120.00,
                image: 'product/drink/dushes.webp'
            },
            {
                name: 'Frustle',
                code: 'frustle',
                price: 120.00,
                image: 'product/drink/frustle.webp'
            },
            {
                name: 'Сок J7',
                code: 'adrenaline',
                price: 120.00,
                image: 'product/drink/j7.webp'
            },
            {
                name: 'Чай Lipton',
                code: 'adrenaline',
                price: 120.00,
                image: 'product/drink/lipton.webp'
            },
        ]
    },
    {
        name: 'Десерты',
        code: 'desert',
        item: [
            {
                name: 'Пломбир Сэндвич',
                code: 'icecream1',
                price: 120.00,
                image: 'product/desert/icecream1.webp'
            },
            {
                name: 'Мороженное на палочке',
                code: 'icecream2',
                price: 120.00,
                image: 'product/desert/icecream2.webp'
            },
            {
                name: 'Манго',
                code: 'icecream3',
                price: 120.00,
                image: 'product/desert/icecream3.webp'
            },
            {
                name: 'Экzo Vegan',
                code: 'icecream4',
                price: 120.00,
                image: 'product/desert/icecream4.webp'
            },
            {
                name: 'Шоколадный трюфель',
                code: 'icecream5',
                price: 120.00,
                image: 'product/desert/icecream5.webp'
            },
        ]
    },
    {
        name: 'Соусы',
        code: 'sausage',
        item: [
            {
                name: 'Сырный Пармеджано',
                code: 'icecream5',
                price: 120.00,
                image: 'product/sausage/parmejano.webp'
            },
            {
                name: 'Перечный',
                code: 'icecream5',
                price: 120.00,
                image: 'product/sausage/pepper.webp'
            },
            {
                name: 'Ранч',
                code: 'icecream5',
                price: 120.00,
                image: 'product/sausage/ranch.webp'
            },
            {
                name: 'Терияки',
                code: 'icecream5',
                price: 120.00,
                image: 'product/sausage/terijaki.webp'
            },
            {
                name: 'Томатный',
                code: 'icecream5',
                price: 120.00,
                image: 'product/sausage/tomato.webp'
            },
        ]
    },
]