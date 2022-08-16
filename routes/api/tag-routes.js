const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include:Product})
  .then(all_tags=>{
    res.json(all_tags);
  })
});

router.get('/:id', (req, res) => {
  Tag.findAll({
    where:{
      id:req.params.id
    },
    include :Product
  }).then(get_tag=> res.json(get_tag));
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then(new_tag=>res.json(new_tag));
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  }).then(update_tag=> res.json(update_tag));
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{id:req.params.id}
  }).then(del_tag=>res.json(del_tag));
});

module.exports = router;
