'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
                                      //테이블 이름
      await queryInterface.bulkInsert('member', [{
        id : 'test',
        pw : '12345',
        nick : 'testnick'
      },{
        id : 'smhrd',
        pw : '11',
        nick : 'shmhrd'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('member', null, {});
      
     
  }
};
