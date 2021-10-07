const company = "LATAM AIRLINES BRASIL";
const aux = db.resumoVoos.find({ empresa: company, natureza: "Doméstica" }).count();

db.resumoVoos.insertOne({
  "empresa.nome": company,
  totalVoosDomesticos: aux,
});

db.resumoVoos.findOne(
{ "empresa.nome": company }, 
{ _id: 0, 
  "empresa.nome": 1,
  totalVoosDomesticos: 1 },
);