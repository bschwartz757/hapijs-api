'use strict';

const instructorsData = require('../../../data/instructors');

module.exports = {
  method: 'GET',
  path: '/api/instructors/{slug}',
  config: {
    handler: (request, reply) => {
      // get the specified instructor
      const instructor = instructorsData.find(
        instructor => instructor.slug == request.params.slug
      );
      if (!instructor) {
        return reply({
          message: 'Instructor not found'
        });
      }
      // reply with the data
      reply(instructor);
    }
  }
};