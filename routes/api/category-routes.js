const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include:Product})
  .then(get_cate=>{
    res.json(get_cate);
  });
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findAll({
    where:{
      id:req.params.id
    },
    include:Product
  }).
  then(get_cate=>res.json(get_cate));

});

router.post('/', (req, res) => {
  Category.create({
    category_name:req.body.category_name
  }).then(new_cat=>res.json(new_cat));
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
  }).then(update_Cate=> res.json(update_Cate))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id
    }
  }).then(dele_cat=>res.json(dele_cat));
});

module.exports = router;
