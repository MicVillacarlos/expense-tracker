# Expense Tracker

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 23.7 recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/MicVillacarlos/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

### Running the Development Server
To start the development server, run:
```sh
npm run dev  # or yarn dev
```
This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser.


### Coding Explanation
During the development of this project, I encountered several challenges, particularly in choosing a UI library. I was torn between Ant Design (Antd) and Chakra UI. My current company’s tech stack uses Antd, so I am more familiar with it. However, I had previous experience with Chakra UI during my internship.

Given the time constraints, I opted for Chakra UI as it is a lighter UI package compared to Antd and much better suited for this project since it's a small-scale application. I also decided to use Styled Components because it improves code readability and works well with Chakra UI from my experience.

One challenge I faced was setting up Chakra UI v3.8, as it had some changes that caused compatibility issues with Styled Components. Previously, I had worked with version 2.8, so adjusting to the latest version took some time. Despite the difficulties, I pushed through and initially built the project without focusing on styling.

For date filtering, I used Moment.js to simplify date conversions.

Once all functionalities were completed, I proceeded with styling. I installed Styled Components and initially planned to implement a theme switcher for dark and light modes. However, with only 1 hour and 30 minutes remaining, I decided to stick with a single theme—dark mode.

### Areas for Improvement
If I had more time, I would:

1. Enhance the styling further and implement a theme switcher.
2. Add proper error handling using try-catch for CRUD operations, as I only implemented success messages but no error toasts.
3. Customize the favicon and update the tab title to "Expense Tracker" for better branding.

Additionally, I followed the Atomic Design methodology for structuring the components folder to keep the project well-organized. You might find a `chakra` folder inside the `components` folder. If given more time, I would move it outside, as it does not strictly follow the Atomic Design methodology.

### Assumptions

1. A lightweight UI framework like Chakra UI would be more suitable for a small-scale application with limited time for development.
2. Given the time limit, I prioritized functionality over styling, assuming that visual refinements were secondary. After all, aesthetics are meaningless if the app doesn’t function properly.
3. I assumed that error handling was not a primary requirement since no specific instructions were provided regarding how failures should be displayed.
4. Updating and deleting were not part of the instructions, but since it is a tracker app, I assumed it should include basic CRUD operations.
5. The instructions specified that the app should be mobile-friendly, but given the time constraints, I assumed that a fully optimized mobile experience was not the highest priority. I focused on ensuring a functional and responsive design while prioritizing the desktop and tablet experience first.

### Feedback

1. The test effectively evaluates a candidate's ability to work under pressure and meet time constraints. It also closely simulates real-life work scenarios, making it a strong take-home assessment.

### Live Link : https://luminous-biscochitos-bc4903.netlify.app/
