import express from 'express';
import Tag from '../models/tag';
import Product from '../models/product'

var app = express();
/**
*Get -> All of elements of products
*post-> Insert a new element of product
*Delete -> Delete all of elements of products
*/
app.route('/product')
  .get((req,res,next)=>{
    Product.find({},(err,docs)=>{
      if(err || docs == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      res.status(200).send(docs);
    });
  })
  .post(async(req,res,next)=>{
    var imgs = ['https://www.ecentime.com/static/brand/1706/29/595483841f124.jpg'];
    var product = new Product({name:req.body.name,imgs});
    await product.save(err=>{
      if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
    });
    res.status(200).send(product);
  })
  .delete(async(req,res,next)=>{
    await Product.remove({},err=>{
      if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
    });
    res.status(200).send();
  });

/**
*Get -> One element of products
*Put-> Update an element of product
*Delete -> Delete one element of products
*/

app.route('/product/id/:id')
  .get((req,res,next)=>{
    var id = req.params.id;
    Product.findOne({id},(err,doc)=>{
      if(err || doc == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      res.status(200).send(doc);
    });
  })
  .put((req,res,next)=>{
    var id = req.params.id;
    Product.findOne({id},async(err,doc)=>{
      if(err || doc == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      doc.name = req.body.name;
      doc.description = req.body.description;
      doc.valid = req.body.valid;
      doc.imgs = req.body.imgs;
      doc.tags = req.body.tags;
      await doc.save(err=>{
        if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      });
      res.status(200).send(doc);
    })
  })
  .delete(async(req,res,next)=>{
    var id = req.params.id;
    await Product.remove({id},err=>{
      if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
    });
    res.status(200).send();
  });

/**
*Get -> All of elements of tags
*post-> Insert a new element of tag
*Delete -> Delete all of elements of tag
*/

/**
var data = {name:qqq};
var xml = new XMLHttpRequest();
xml.open('post','http://37.139.22.6:3000/api/tag',false);
xml.setRequestHeader('Content-Type','application/json');
xml.send(JSON.stringify(data));
*/
/** example of ES7 async/await
async function sleep(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}
*/
app.route('/tag')
  .get(async(req,res,next)=>{
    await Tag.find({},(err,docs)=>{
      if(err || docs == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      res.status(200).send(docs);
    });

  })
  .post(async(req,res,next)=>{
    console.log(req.body);
    var tag = new Tag({name:req.body.name});
    await tag.save(err=>{
      if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
    });
    res.status(200).send(tag);
  })
  .delete(async(req,res,next)=>{
    await Tag.remove({},err=>{
       if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
    });
    console.log('collection removed.');
    res.status(200).send();
  });

/**
*Get-> Get a element of tags according condition of name
*Put-> Update a element of tags
*Delete -> Delete one element
*/
app.route('/tag/id/:id')
  .get((req,res,next)=>{
    var id = req.params.id;
    Tag.findOne({tagId:id},(err,doc)=>{
      if(err||doc == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      res.status(200).send({doc});
    });
  })
  .put((req,res,next)=>{
    console.log(req.body);
    var uName = req.body.name;
    var id = req.params.id;
    Tag.findOne({id},async(err,doc)=>{
      if(err||doc == null) {return res.status(404).send({msg:'SomeThing goes wrong.'});}
      console.log(err)
      doc.name = uName;
      await doc.save(err=>{ if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}});
      res.status(200).send({doc});
    });
  })
  .delete(async(req,res,next)=>{
    var id = req.params.id;
    await Tag.remove({id},err=>{ if(err) {return res.status(404).send({msg:'SomeThing goes wrong.'});}});
    res.status(200).send();
  });

module.exports = app;
