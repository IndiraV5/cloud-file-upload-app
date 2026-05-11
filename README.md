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

## Screenshots
### 🟦 1. Application Home Page
This is the main web interface where users can select and upload files from their local system.

![Webpage]((https://github.com/IndiraV5/cloud-file-upload-app/blob/main/screenshots/webpage.png))

### 🟩 2. File Upload Success
After selecting a file and clicking upload, the system confirms that the upload was successful.

![Upload Success]((https://github.com/IndiraV5/cloud-file-upload-app/blob/main/screenshots/uploaded.png))

### 🟨 3. Amazon S3 Bucket Overview
This screenshot shows the S3 bucket where uploaded files are stored securely in AWS cloud storage.

![S3 Bucket]((https://github.com/IndiraV5/cloud-file-upload-app/blob/main/screenshots/s3.png))

### 🟧 4. File Stored Inside S3 Bucket
This confirms that the uploaded file is successfully saved inside the S3 bucket.
![File in S3]((https://github.com/IndiraV5/cloud-file-upload-app/blob/main/screenshots/inside%20S3%20bucket.png))

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/IndiraV5/cloud-file-upload-app.git
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
## What I Learned

- AWS EC2 deployment
- Amazon S3 storage integration
- IAM permission management
- Node.js backend deployment
- File upload handling
- Git and GitHub workflow
- Linux server management


