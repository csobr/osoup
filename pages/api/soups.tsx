export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: 'mushroom soup',
      image:
        'https://i2.wp.com/simple-veganista.com/wp-content/uploads/2019/10/best-vegan-mushroom-soup-4.jpg',
    },
    {
      id: 2,
      name: 'Gazpacho',
      image:
        'https://assets.bonappetit.com/photos/57aca0e0f1c801a1038bc671/master/pass/summer-gazpacho.jpg',
    },
    {
      id: 3,
      name: 'Pea soup',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwJB0rGXbF_lFTidWOu6NT6W4n6NvRJ3oKzw&usqp=CAU',
    },
    {
      id: 4,
      name: 'Lentil soup',
      image:
        'https://thecozyapron.com/wp-content/uploads/2018/03/lentil-soup_thecozyapron_5.jpg',
    },
    {
      id: 5,
      name: 'Ramen',
      image:
        'https://prods3.imgix.net/images/articles/2017_08/Non-feature-cold-summer-ramen-recipe-noodle-soup1.jpg',
    },
    {
      id: 6,
      name: 'Vegtable soup',
      image:
        'https://thecozyapron.com/wp-content/uploads/2018/07/vegetable-soup_thecozyapron_1.jpg',
    },
    {
      id: 7,
      name: 'Potato and leak soup',
      image:
        'https://pinchandswirl.com/wp-content/uploads/2015/10/Potato-Leek-Soup-served-in-white-bowls-square.jpg',
    },
    {
      id: 8,
      name: 'Spinach soup',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spinach-soup-horizontal-1545404273.jpg?crop=0.668xw:1.00xh;0.108xw,0&resize=480:*',
    },
  ]);
};
