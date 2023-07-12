'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('room', [{
        roomid : 'room1',
        title : 'full',
        owner : 'room1'
      },
      {
        roomid : 'room2',
        title : 'full1',
        owner : 'room2'
      },
      {
        roomid : 'room3',
        title : 'full2',
        owner : 'room2'
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('room', null, {});
     
  }
};
