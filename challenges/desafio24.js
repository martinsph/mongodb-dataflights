db.voos.findOne({ 
  litrosCombustivel: { $lte: 600, $exists: 1, $nin: ["AZUL", "GOL"] } },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
    "empresa.nome": 1,
  });