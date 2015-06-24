var organizationController = {

  createOrganization: function(req, res){
    // want to make db create call here.
    res.send('creating organization');
  },

  getOrganizationInfo: function(req, res){
    // want to make db query here.
    res.send('getting info for organization ' + req.params.organization_id);
  },

  updateOrganizationInfo: function(req, res){
    // want to update db here
    res.send('update for organization ' + req.params.organization_id);
  },

  attachOrganizationIDtoRequest: function(req, res, next, organization_id){
    // need to check db that organization exists
    req.organization_id = organization_id;
    next();
  }

};

module.exports = organizationController;