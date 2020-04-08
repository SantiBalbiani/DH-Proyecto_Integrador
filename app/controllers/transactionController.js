const fs = require('fs');
const path = require('path');
const db = require ("../database/models/");
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;
const Trx = db.trx;
const Trxitem = db.trxitems;

const controller = {
    buyProd: (req, res) => {
        console.log(req.session.user);
        
        var trxitm = req.session.cart.map((prd) => {

           return  {  idProd: prd.id,
                cant: prd.cant
            };


        })

            var data = {
              idBuyer:  req.session.user.id,
              createdAt: new Date(),
              updatedAt: new Date()
            }
            Trx.create(
                {
                    idBuyer:  req.session.user.id,
              createdAt: new Date(),
              updatedAt: new Date()
                }

            )
            .then(trans => {
                req.session.cart.forEach( prod => {

                  var  data2 = {
                       idTrx: trans.id,
                       idProd: prod.id,
                       cant: prod.cant,
                       createdAt: new Date()
                      
                    }

                    Trxitem.create(data2)
                    .then( (item) => console.log(item)  )
                    .catch (error => res.send(console.log(error)));
                })
            })

        
        return res.render('index', {title2: 'SLC Componentes Electrónicos'} );
    },
    saveCart: (req, res) => {
        return res.render('index', {title2: 'SLC Componentes Electrónicos'} );
    },
};

module.exports = controller;