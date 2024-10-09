[watch loom video - starting](https://www.loom.com/share/b0e9fd49126649f2b04ffddb1b2d739c?sid=f52a1e8f-d8b5-4ff7-9af6-f4de608e0968)


[watch loom video - working](https://www.loom.com/share/45d0f6ede94d4932afdee73a5a1f436c?sid=ae6778fd-e587-4507-942c-3fdca57dfacb)
# Polling dApp using Solana, NestJS, ReactJS, and TypeScript

This project is a decentralized polling application built using Solana blockchain for payments, NestJS for the backend, ReactJS with TypeScript for the frontend, and Amazon S3 for image storage. Users can create polls with images as options and pay Solana for the creation. Workers can vote on the polls and earn Solana for their participation.

## Features

- **User Poll Creation**: Users can create polls by providing a title, description, and image options. Poll creation requires a payment in Solana (SOL).
- **Image Storage**: Images used in the polls are stored securely in Amazon S3.
- **Worker Participation**: Workers can select any option from the poll and earn SOL as compensation for their work.
- **Solana Wallet Integration**: The application integrates with Solana wallets for secure and seamless payments.
- **NestJS Backend**: The backend is built using NestJS to handle API requests, Solana payment processing, and communication with S3.
- **React Frontend**: The frontend is developed with React and TypeScript, providing a responsive and interactive UI for users and workers.
- **DATABASE**: database used is postgres run using docker image , handled with prisma ORM.


## Tech Stack

- **Solana**: Blockchain for handling payments in SOL.
- **NestJS**: Backend framework for managing APIs and business logic.
- **ReactJS with TypeScript**: Frontend for a smooth and type-safe user experience.
- **Amazon S3**: Cloud storage for user-uploaded images.
- **TypeScript**: Used throughout the project for type safety and better development experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a **Solana wallet** like Phantom installed.
- You have a **Solana account** with some SOL to use for poll creation.
- You have **Node.js** and **npm** or **pnpm** installed.
- You have **AWS credentials** to access S3 for image storage.

## Getting Started

### Backend Setup (NestJS)

1. Clone the repository:

   ```bash
   git clone https://github.com/DupenSachdeva/Click-draw.git
   cd client 
   pnpm i

   cd worker-client
   pnpm i

2. configure env file variables:
   
   cd server
   npm run db:migrate
   npm run dev
