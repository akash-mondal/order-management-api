
# Order Management API

This API provides a robust backend for managing orders, invoices, and payments. It's built with Node.js, Express, and MongoDB, and is designed for easy deployment on Vercel.

## Features

- Create and manage orders
- Generate invoices
- Process payments
- Custom 4-character IDs for orders and invoices
- Automatic status updates for orders and invoices upon payment

## API Endpoints

### Orders

- `POST /api/orders`: Create a new order
- `POST /api/orders/:id/cancel`: Cancel an order
- `GET /api/orders/:id/status`: Check order status

### Invoices

- `POST /api/invoices`: Create a new invoice
- `GET /api/invoices/:id`: View invoice details

### Payments

- `POST /api/payments`: Process a payment

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/order-management-api.git
   cd order-management-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```
   npm start
   ```

## Deployment

This API is configured for easy deployment on Vercel. Follow these steps:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

## Testing

Use the following JSON structures to test each endpoint:

### Create Order
```json
POST /api/orders
{
  "user_id": "string",
  "items": [
    {
      "product_id": "string",
      "quantity": "number",
      "price": "number"
    }
  ]
}
```

### Create Invoice
```json
POST /api/invoices
{
  "order_id": "string",
  "amount": "number"
}
```

### Process Payment
```json
POST /api/payments
{
  "invoice_id": "string",
  "order_id": "string",
  "amount": "number"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
