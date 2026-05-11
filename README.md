# Cloud File Upload App using AWS
## Project Overview

This project is a cloud-based file upload application built using AWS services.
Users can upload files through a web interface, and the files are stored securely in Amazon S3.
The backend server is hosted on Amazon EC2 using Node.js and Express.

## Features

- Upload files from browser
- Store files in Amazon S3
- Backend hosted on AWS EC2
- Secure AWS IAM integration
- Node.js and Express backend

## Architecture

```text
Browser
   ↓
EC2 Node.js Server
   ↓
Amazon S3 Bucket
```

## AWS Services Used

| Service | Purpose |
|---|---|
| EC2 | Host backend server |
| S3 | Store uploaded files |
| IAM | Manage permissions and security |

## Tech Stack

- Node.js
- Express.js
- Multer
- AWS SDK
- HTML
- CSS

## Setup Instructions

### 1. Clone Repository

```bash
git clone YOUR_REPO_LINK
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

```env
ACCESS_KEY=your_access_key
SECRET_KEY=your_secret_key
BUCKET_NAME=your_bucket_name
REGION=ap-south-1
```

### 4. Start Server

```bash
sudo node server.js
```


