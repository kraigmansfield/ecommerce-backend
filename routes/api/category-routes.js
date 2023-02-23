const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        msg: 'an error occurred',
        err: err,
      })
    })
  // find all categories
  // be sure to include its associated Products
})

router.get('/:id', (req, res) => {
  try {
    Category.findByPk(
      req.params.id,

      {
        include: [
          {
            model: Product,
          },
        ],
      },
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: 'No category found' })
          return
        }
        res.json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  } catch (err) {
    console.log(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
})

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then(data=> req.json(data)).catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
})

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
})

module.exports = router
