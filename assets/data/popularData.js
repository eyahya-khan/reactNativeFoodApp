const popularData = [
    {
      id: '1',
      image: require('../images/food1.jpg'),
      title: 'Biff Bhuna',
      weight: '300 gr',
      rating: '5.0',
      price: 110,
      sizeName: 'Medium',
      sizeNumber: 14,
      crust: 'Thin Crust',
      deliveryTime: 30,
      ingredients: [
        {
          id: '1',
          name: 'ham',
          image: require('../images/masala1.png'),
        },
        {
          id: '2',
          name: 'tomato',
          image: require('../images/tomato.png'),
        },
        {
          id: '3',
          name: 'cheese',
          image: require('../images/masala2.png'),
        },
        {
          id: '4',
          name: 'garlic',
          image: require('../images/garlic.png'),
        },
      ],
    },
    {
      id: '2',
      image: require('../images/food2.jpg'),
      title: 'Chicken Bhiryani',
      weight: '450 gr',
      rating: '4.0',
      price: 120,
      sizeName: 'Small',
      sizeNumber: 10,
      crust: 'Thick Crust',
      deliveryTime: 40,
      ingredients: [
        {
          id: '1',
          name: 'cheese',
          image: require('../images/masala2.png'),
        },
        {
          id: '2',
          name: 'garlic',
          image: require('../images/garlic.png'),
        },
      ],
    },
    {
      id: '3',
      image: require('../images/food3.jpg'),
      title: 'Mixed Thali',
      weight: '550 gr',
      rating: '5.0',
      price: 125,
      sizeName: 'Large',
      sizeNumber: 18,
      crust: 'Thin Crust',
      deliveryTime: 40,
      ingredients: [
        {
          id: '1',
          name: 'tomato',
          image: require('../images/tomato.png'),
        },
        {
          id: '2',
          name: 'cheese',
          image: require('../images/masala2.png'),
        },
      ],
    },
  ];
  
  export default popularData;