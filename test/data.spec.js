global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = 
  [{
  "Zyra": {
    "version": "6.24.1",
    "id": "Zyra",
    "key": "143",
    "name": "Zyra",
    "tags": ["Mage", "Support"],
}, "Garen": {
  "version": "6.24.1",
  "id": "Garen",
  "key": "86",
  "name": "Garen",
  "tags": ["Fighter", "Tank"]},
  "Nasus": {
    "version": "6.24.1",
    "id": "Nasus",
    "key": "75",
    "name": "Nasus",
    "tags": ["Fighter", "Tank"]}}];

describe('filterByTag', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.filterByTag, 'function');
  });


  it('debería retornar Garen , Nasus para filtrar por tipo "Tank"', () => {
    assert.deepEqual(window.filterByTag(data,"Tank"), [{
      "Garen": {
        "version": "6.24.1",
        "id": "Garen",
        "key": "86",
        "name": "Garen",
        "tags": ["Fighter", "Tank"]},
        "Nasus": {
          "version": "6.24.1",
          "id": "Nasus",
          "key": "75",
          "name": "Nasus",
          "tags": ["Fighter", "Tank"]}}]
          );
        })})

    describe('orderByName', () => {

      it('debería ser una función', () => {
        assert.equal(typeof window.orderByName, 'function');
      });
    
    
      it('debería retornar campeones de la z a la a ', () => {
        assert.deepEqual(window.orderByName(data, "za"),[{
        "Zyra": {
          "version": "6.24.1",
          "id": "Zyra",
          "key": "143",
          "name": "Zyra",
          "tags": ["Mage", "Support"]},
          "Nasus": {
            "version": "6.24.1",
            "id": "Nasus",
            "key": "75",
            "name": "Nasus",
            "tags": ["Fighter", "Tank"]},
            "Garen": {
              "version": "6.24.1",
              "id": "Garen",
              "key": "86",
              "name": "Garen",
              "tags": ["Fighter", "Tank"]}
      }]
          );
        })})
        it('debería retornar campeones de la z a la a ', () => {
          assert.deepEqual(window.orderByName(data, "az"),[{
            "Garen": {
              "version": "6.24.1",
              "id": "Garen",
              "key": "86",
              "name": "Garen",
              "tags": ["Fighter", "Tank"]},
              "Nasus": {
                "version": "6.24.1",
                "id": "Nasus",
                "key": "75",
                "name": "Nasus",
                "tags": ["Fighter", "Tank"]},
                "Zyra": {
                  "version": "6.24.1",
                  "id": "Zyra",
                  "key": "143",
                  "name": "Zyra",
                  "tags": ["Mage", "Support"]}
                }]
                );
              })
            