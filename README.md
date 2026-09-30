# ByteSpace Landing Page

A responsive landing page for **ByteSpace**, built from the provided Figma design as part of a Jr. Software Engineer (Frontend) assessment.

**Live Demo:** [ADD_VERCEL_LINK_HERE](ADD_VERCEL_LINK_HERE)
**Design (Figma):** [ByteSpace New](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

## Features

- Full landing page implemented from the Figma design
- Register page (bonus): new users register first
- Login page (bonus): users log in after registering
- Protected home page: the landing page is only accessible after login
- Easy switching between Login and Register through clickable links, with each page reachable by its own URL
- Fully responsive (mobile, tablet, desktop)
- Reusable components (Navbar, etc.)
- Clean, well-structured code

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) (routing and protected routes)
- [Lucide React](https://lucide.dev/) (icons)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/jannatferdous-bd/bytespace-landing-page.git
cd bytespace-landing-page
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/        # Images, icons, fonts
├── components/    # Reusable UI components
├── pages/         # Home, Login, Register
├── utils/         # Helper functions
├── App.jsx
└── main.jsx
```

## Git Workflow

- Work was done on the `feature/landing-page` branch (not directly on `main`)
- Changes submitted through a Pull Request

## Notes for Reviewer

- Login/Register are bonus pages. There is no backend: authentication is simulated on the client side. The logged-in session is kept in `sessionStorage`, so it ends when the browser tab is closed.
- Users must register first, then log in. Without login, the home page redirects to the Register page.

## Author

**Jannatul Ferdous Ila**
GitHub: [@jannatferdous-bd](https://github.com/jannatferdous-bd)