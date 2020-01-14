const Dev = require('../models/Dev');

module.exports = {
   async index(request, response) {
      // Buscar todos os devs num raio de 10km
      // Filtrar por tecnologia
      console.log(request.query);

      return response.json({ devs: [] });
   }
}
