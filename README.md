Menu Management Backend
    A Node.js backend server for managing menu categories, subcategories, and items. Built with Express.js and MongoDB.

Running the Application
    Start the server in development mode: "npm run dev"
    The server will run at http://localhost:3000.

API Endpoints
  1) Categories
      Create: POST /api/category
      Get All: GET /api/category
      Get by ID: GET /api/category/id/:id
      Get by Name: GET /api/category/name/:name
      Edit: PUT /api/category/:id
  2) Subcategories
      Create: POST /api/subcategory
      Get All: GET /api/subcategory
      Get by Category ID: GET /api/subcategory/:categoryId
      Get by ID: GET /api/subcategory/id/:id
      Get by Name: GET /api/subcategory/name/:name
      Edit: PUT /api/subcategory/:id
  3) Items
      Create: POST /api/item
      Get All: GET /api/item
      Get by Category ID: GET /api/item/category/:categoryId
      Get by Subcategory ID: GET /api/item/subcategory/:subCategoryId
      Get by ID: GET /api/item/id/:id
      Get by Name: GET /api/item/name/:name
      Search by Name: GET /api/item/search/:name

