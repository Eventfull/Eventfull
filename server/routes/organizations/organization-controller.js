module.exports = function(app){

  var models = app.get('models');
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
      console.log('creating organization name: ', organizationParams.name);
    },

    getOrganizationInfo: function (req, res){
      var organizationId = req.params.organizationId;

      Organization.getOrganizationInfo(organizationId).then(function (organization) {
        res.send(organization);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting information for organization id: ' + req.params.organizationId);
    },

    updateOrganizationInfo: function (req, res){
      var id = req.params.organizationId;
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
      console.log('updating information for organization id: ' + req.params.organizationId);
    },

    removeOrganization: function (req, res) {
      var organizationId = req.organizationId;

      Organization.removeOrganization(organizationId).then(function (result) {
        res.sendStatus(204);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('deleting organization id: ' + req.params.organizationId);
    },

    attachOrganizationIDtoRequest: function (req, res, next, organizationId){
      // need to check db that organization exists
      req.organizationId = organizationId;
      next();
    }

  };

  return organizationController;

}