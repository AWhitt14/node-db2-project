
exports.seed = async function(knex) {
  await knex('cars').truncate()

  await knex('cars').insert([
        {vin: 'BUYB32498erw', make: 'honda', model: 'accord', mileage: 40000, transmissionStatus: 'salvage'},
        {vin: 'BFJHDB78SKJN', make: 'dodge', model: 'dakota', mileage: 10, transmissionStatus: 'clean'},
        {vin: 'HJBjkewned382479', make: 'BWM', model: '8 series convertible', mileage: 40000, },
      ]);
    
};
