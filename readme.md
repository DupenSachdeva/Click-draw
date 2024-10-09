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
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/server
   npm i
