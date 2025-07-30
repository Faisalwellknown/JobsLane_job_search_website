💼 JobLane – Job Recruitment Platform

JobLane is a full-stack web application for streamlined job recruitment. It offers user role management, job applications, profile building, and powerful search/filter options for candidates, recruiters, and admins.

🌟 Key Features
🏠 General
Responsive and modern UI (built with Tailwind, Mantine, Material UI)

Clean role-based access: Admin, Recruiter, Candidate

Persistent login & JWT authentication

👤 Candidate
View & filter job listings by:

Category, salary range, company

Upload resume and manage profile

Save jobs and apply in one click

Application confirmation page with editable details

🏢 Recruiter / Admin
Post jobs, manage listings

View applications and candidate data

🚀 Tech Stack
Layer	Technologies
Frontend	React.js, Redux Toolkit, Tailwind CSS, Mantine UI, Material UI
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Storage	Cloudinary (image/resume uploads)

📸 UI Snapshots
🔹 Jobs Listing Page
Includes category/company filter, salary slider, pagination, and real-time search.


🔹 Apply to a Job
Application details auto-filled with resume link and confirmation checkbox.


🔹 Job Details Page
Shows in-depth job requirements with an "Apply" and "Save" feature.


🔹 User Profile
Contains image, personal info, resume link, and saved jobs.


🧪 Run Locally
⚙️ Backend

cd server
npm install
npm run dev

🖥️ Frontend

cd client
npm install
npm run dev


📄 Project Structure

JobLane/
├── client/           # React frontend
├── server/           # Express backend
├── .env              # Environment configs
└── README.md


👨‍💻 Developer
Faisal Shaikh
📧 faisalshaikhikjf@gmail.com