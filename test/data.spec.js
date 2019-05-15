
global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data =
  [{
  "name": "Zyra",
    "tags": "Mage",
},{
  "name": "Garen",
  "tags": "Fighter"},
  {
    "name": "Nasus",
    "tags": "Tank"}];

describe('filterByTag', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.filterByTag, 'function');
  });


  it('debería retornar Zyra para filtrar por tipo "Mage"', () => {
    assert.deepEqual(window.filterByTag(data,"Mage"), [{

        "name": "Zyra",
        "tags": "Mage"
      }
    ]
        );
      })})

    describe('orderByName', () => {

      it('debería ser una función', () => {
        assert.equal(typeof window.orderByName, 'function');
      });


      it('debería retornar campeones de la z a la a ', () => {
        assert.deepEqual(window.orderByName(data,"name" ,"za"),
        [{ "name": "Zyra",
           "tags": "Mage"},
           {"name":"Nasus",
            "tags":"Tank"},
            {"name":"Garen",
              "tags":"Fighter"}]
          );
        });
      });
      describe('orderByName', () => {

        it('debería ser una función', () => {
          assert.equal(typeof window.orderByName, 'function');
        });
  
     it('debería retornar campeones de la z a la a ', () => {
          assert.deepEqual(window.orderByName(data,"name" ,"az"),
          [{name: "Garen", tags: "Fighter"},
          {name: "Nasus", tags: "Tank"},
           {name: "Zyra", tags: "Mage"}]
            );
          });
        });

   
