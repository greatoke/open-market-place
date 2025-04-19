# Open Marketplace

A full-stack eCommerce web application built with modern technologies.

## Features

- **Authentication**: Auth.js with Google, Apple, Facebook, and Credentials provider
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS with ShadCN UI components
- **Roles**: Admin, Seller, and Buyer with Role-Based Access Control

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

### Roles & Access

- **Admin**: 
  - Manage users, products, and orders
  - Access to analytics dashboard
- **Seller**:
  - Product CRUD operations
  - Sales dashboard
- **Buyer**:
  - Browse products
  - Authenticated checkout

### Technical Stack

- **Frontend**: Next.js with Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: SQLite with Prisma
- **Authentication**: Auth.js
- **Testing**: Jest & Playwright

## Development

We follow Agile methodology with CI/CD using GitHub Actions.

### Key Principles

- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- SOLID Principles
- Atomic Design for UI components

## API Endpoints

- Authentication (OAuth + credentials)
- Product listing
- User management
- Checkout (mock payment)

## Contributing

We welcome contributions! Please follow our coding standards and create a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
# open-market-place
