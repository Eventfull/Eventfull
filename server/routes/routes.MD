##API Routes

**_api/organizations/_**

  `post:` create org

**_api/organizations/:organizationId_**

  `get:` get org

  `post:` update org

  'delete:' delete organization

**_api/organizations/:organizationId/employees_**

  `get:` get all employees (can provide availability filters in params)

  `post:` add employee to org.

**_api/organizations/:organizationId/employees/:employeeId_**

  `get:` get employee info

  `post:` update employee info

  `delete:` remove employee from org

**_api/organizations/:organizationId/gigs_**

  `get:` get gigs (will accept params for day, week, month)

  `post:` create gig

**_api/organizations/:organizationId/gigs/:gigId_**

  `get:` get info for gig

  `post:` update gig info

  `delete:` remove gig from org

**_api/organizations/:organizationId/gigs/:gigId/staff_**

  `get:` get gig staff (all employees for the gig, approved and pending)

  `post:` update gig staff

**_api/organizations/:organizationId/gigs/:gigId/staff/:employeeId_**

  `get:` get gig status for employee

  `post:` update status (change admin_approved etc..)

  `delete:` remove staff from gig.