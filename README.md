# E-Library : 

A React-based  website designed for E-Library to simplify the process of Library works such as adding books,showing available books, or showing the books borrowed by a user .

- **Live Website Link**: [https://jolly-salmiakki-820fae.netlify.app/](https://jolly-salmiakki-820fae.netlify.app/)



## Key Features

1. **Filter data**: The user can get the required data according to their choice by filtering.
2. **Secure Data**: Sensitive data are protected by private route.
3. **Animation**: Using different beautiful animation is visible in the homepage.
4. **Personalize Section**: The user can see the books they have borrowed.
5. **Error Handling**: Includes a custom 404 error page for incorrect routes, enhancing navigation and usability.

6. **Simple and Intuitive User Interface**: The website's user interface is designed to be simple and intuitive, allowing users to interact easily.

7. **Modification & Deletion**: The website's user can modify or update data and also delete  or add data.


## npm-packages
I have used several npm packages, two of them are-

1. **animate.css**: Used to make beautiful animated image.
2. **Type-writer**: Used to bring animation in the homepage header.
3. **React-hot-toast**: Used to bring alerts in the crud operations.
3. **Rating-stars**: Used to show the ratings of different books.



# Local Installation

This guide provides step-by-step instructions on how to run the ScholarEase client-side project locally.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Download and install from [Node.js Official Website](https://nodejs.org/)
- **Git**: Download and install from [Git Official Website](https://git-scm.com/)

Verify installations by running:

```bash
node -v
npm -v
git --version
```

## Installation Steps

### 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/MHShiqder/E-Library-an-online-library-management-system-client-side.git
```

### 2. Navigate to the Project Directory

```bash
cd E-Library-an-online-library-management-system-client-side
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

VITE_apiKey=AIzaSyCvAGSEmlVtEwbVsKncRugFDnkDLzh9sZY
VITE_authDomain=assignment-11-ph-a1a3b.firebaseapp.com
VITE_projectId=assignment-11-ph-a1a3b
VITE_storageBucket=assignment-11-ph-a1a3b.firebasestorage.app
VITE_messagingSenderId=27078085784
VITE_appId=1:27078085784:web:4e4db9fd16a99aceae14ed

### 5. Start the Development Server

Run the following command to start the application:

```bash
npm run dev
```

The project should now be running locally.




