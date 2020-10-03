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
  ]);
};
