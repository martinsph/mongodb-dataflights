const company = "LATAM AIRLINES BRASIL";
const aux = db.voos.find({ 
  "empresa.nome": company, 
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: aux,
});

db.resumoVoos.findOne(
{ empresa: company }, 
{ _id: 0, 
  empresa: 1,
  totalVoosDomesticos: 1 },
);
