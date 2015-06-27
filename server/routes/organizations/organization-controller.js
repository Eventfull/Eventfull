var models = require('../../db/models');
var Organization = models.Organization;

var organizationController = {

  createOrganization: function (req, res){
    var name = req.body.name;
    var subscription = req.body.subscription;

    Organization.createOrganization(name, subscription, function (organization){
      res.send(organization);
    });
    console.log('creating organization', name);
  },

  getOrganizationInfo: function (req, res){
    var organizationId = req.params.organization_id;

    Organization.getOrganizationInfo(organizationId, function (organization) {
      res.send(organization);
    });
    console.log('getting info for organization ' + req.params.organization_id);
  },

  updateOrganizationInfo: function (req, res){
    var id = req.params.organization_id;
    var name = req.body.name;
    var subscription = req.body.subscription;

    // Sequelize will NOT update undefiend fields 
    Organization.updateOrganizationInfo(id, name, subscription, function (organization) {
      res.send(organization);
    });
    console.log('update for organization ' + req.params.organization_id);
  },

  removeOrganization: function (req, res) {
    var organizationId = req.organization_id;

    Organization.removeOrganization(organizationId, function (result) {
      //Temporary true/false. Will replace with robust error checking
      if ( result === true ) {
        res.send(204);
      } else {
        res.send(400);
      }
    });
    console.log('deleted organization ' + req.params.organization_id);
  },

  attachOrganizationIDtoRequest: function (req, res, next, organization_id){
    // need to check db that organization exists
    req.organization_id = organization_id;
    next();
  }

};

module.exports = organizationController;