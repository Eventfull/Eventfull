##API Routes

**_api/organizations/_**

  `post:` create org

**_api/organizations/:organization_id_**

  `get:` get org

  `post:` update org

  'delete:' delete organization

**_api/organizations/:organization_id/employees_**

  `get:` get all employees (can provide availability filters in params)

  `post:` add employee to org.

**_api/organizations/:organization_id/employees/:employee_id_**

  `get:` get employee info

  `post:` update employee info

  `delete:` remove employee from org

**_api/organizations/:organization_id/gigs_**

  `get:` get gigs (will accept params for day, week, month)

  `post:` create gig

**_api/organizations/:organization_id/gigs/:gig_id_**

  `get:` get info for gig

  `post:` update gig info

  `delete:` remove gig from org

**_api/organizations/:organization_id/gigs/:gig_id/staff_**

  `get:` get gig staff (all employees for the gig, approved and pending)

  `post:` update gig staff

**_api/organizations/:organization_id/gigs/:gig_id/staff/:employee_id_**

  `get:` get gig status for employee

  `post:` update status (change admin_approved etc..)

  `delete:` remove staff from gig.