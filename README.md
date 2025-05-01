# **Project Title: Dashboard**

## **Description**  
This project is a web application built using Next.js, designed to serve as a dashboard interface for maintaining an eCommerce website focused on blogs and products. It leverages modern web technologies, including Prisma and PostgreSQL, to provide a responsive and interactive user experience. The application is styled using ShadCN, Tailwind CSS, and Next Themes for a modern and customizable design. Access is restricted to admin users only. This project uses NextAuth v4 for session management and secure API routes.

**Getting Started**  
To get started with the project, follow these steps:

1. **Clone the Repository**  
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/samibentaiba/dashboard.git
   ```

2. **Navigate to the Project Directory**  
   Change into the project directory:
   ```bash
   cd dashboard
   ```

3. **Install Dependencies**  
   Install the required dependencies using npm, yarn, or bun:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

4. **Set Up PostgreSQL Database**  
   Ensure you have PostgreSQL installed and running. Create a new database for the application.

5. **Configure Environment Variables**  
   Copy the `.env.example` file to `.env` and update the database connection string and NextAuth configuration:
   ```plaintext
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your_secret_key"
   ```

6. **Run Prisma Migrations**  
   Use Prisma to set up your database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

7. **Run Local Database Scripts**  
   If you have scripts for creating a local database for testing, you can run them as follows:
   ```bash
   npm run create-local-db
   # or
   yarn create-local-db
   # or
   bun create-local-db
   ```

8. **Seed the Database**  
   To populate your database with initial data, run the seed script. The seed data is located in the `data` folder:
   ```bash
   bun run seed
   ```
   Ensure that your seed script is properly configured in your `package.json` or Prisma configuration.

9. **Visualize the Database with Prisma Studio**  
   To visualize your database and manage data, you can use Prisma Studio. Start it with the following command:
   ```bash
   npx prisma studio
   ```
   This will open Prisma Studio in your default web browser, allowing you to view and manipulate your database records.

10. **Run the Development Server**  
    Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    bun dev
    ```

11. **Access the Application**  
    Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

**Project Structure**  
The project contains the following key directories and files:

- **src/**: Contains the main application source code.
- **src/types/**: Contains type declarations to enhance the design system's clarity.
- **prisma/**: Contains the Prisma schema and migration files.
- **data/**: Contains seed data for populating the database.
- **public/**: Static files that can be served directly.
- **scripts/**: Custom scripts for creating a local database for testing.
- **types/**: Contains module declarations for TypeScript.
- **utils/**: Utility functions used throughout the application.
- **.env.example**: Example environment variables configuration.
- **README.md**: This file.

**Technologies Used**  
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Prisma**: An ORM for Node.js and TypeScript that simplifies database access.
- **PostgreSQL**: A powerful, open-source relational database system.
- **ShadCN**: A component library for building UI with Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Next Themes**: A library for managing themes in Next.js applications.
- **NextAuth v4**: For session management and secure API routes.
- **CSS**: For additional styling of the application.

**Deployment**  
For deployment, it is recommended to use Vercel, the platform created by the makers of Next.js. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Contributing