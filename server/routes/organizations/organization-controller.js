var models = require('../../db/models');
var Organization = models.Organization;

var organizationController = {

  createOrganization: function (req, res){
    var organizationParams = {
      name: req.body.name,
      subscription: req.body.subscription
    };

    Organization.createOrganization(organizationParams).then(function (organization){
      res.send(organization);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('creating organization name: ', name);
  },

  getOrganizationInfo: function (req, res){
    var organizationId = req.params.organization_id;

    Organization.getOrganizationInfo(organizationId).then(function (organization) {
      res.send(organization);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('getting information for organization id: ' + req.params.organization_id);
  },

  updateOrganizationInfo: function (req, res){
    var id = req.params.organization_id;
    var organizationParams = {
      name: req.body.name,
      subscription: req.body.subscription
    };

    // Sequelize will NOT update undefiend fields 
    Organization.updateOrganizationInfo(id, organizationParams).then(function (organization) {
      res.send(organization);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('updating information for organization id: ' + req.params.organization_id);
  },

  removeOrganization: function (req, res) {
    var organizationId = req.organization_id;

    Organization.removeOrganization(organizationId).then(function (result) {
      res.sendStatus(204);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('deleting organization id: ' + req.params.organization_id);
  },

  attachOrganizationIDtoRequest: function (req, res, next, organization_id){
    // need to check db that organization exists
    req.organization_id = organization_id;
    next();
  }

};

module.exports = organizationController;