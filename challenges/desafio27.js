db.resumoVoos.insertOne({
  "empresa.nome": "PASSAREDO",
  totalVoosDomesticos: db.voos.find({ 
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }).count(),
});
db.resumoVoos.findOne({ "empresa.nome": "PASSAREDO" }, { 
  _id: 0,
  "empresa.nome": 1,
  totalVoosDomesticos: 1,
});
