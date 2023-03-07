Product Inventory API
This is a RESTful API that manages the inventory of a list of products. It allows you to add and remove quantities from inventory based on the given payload.

Tech Stack
Express.js
MongoDB
Installation
Clone this repository to your local machine
Install the required dependencies by running npm install
Start the server by running npm start
The server will be available at http://localhost:3000
API Usage
POST /api/updateInventory
Updates the inventory for multiple products based on the given payload.

Request
json
Copy code
{
  "payload": [
    {
      "productId": 123,
      "quantity": 10,
      "operation": "add"
    },
    {
      "productId": 143,
      "quantity": 14,
      "operation": "add"
    },
    {
      "productId": 193,
      "quantity": 17,
      "operation": "subtract"
    }
  ]
}
productId: The ID of the product to update
quantity: The quantity to add or subtract from the product's inventory
operation: The operation to perform on the product's inventory. Must be either "add" or "subtract"
Response
json
Copy code
[
  {
    "_id": "615ef9a824820834a4b70ec4",
    "productId": 123,
    "quantity": 10,
    "__v": 0
  },
  {
    "_id": "615ef9a824820834a4b70ec5",
    "productId": 143,
    "quantity": 14,
    "__v": 0
  },
  {
    "_id": "615ef9a824820834a4b70ec6",
    "productId": 193,
    "quantity": 3,
    "__v": 0
  }
]
productId: The ID of the updated product
quantity: The updated quantity for the product
License
This project is licensed under the MIT License.