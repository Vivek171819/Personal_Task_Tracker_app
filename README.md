Tech Stack

Frontend: React.js (with Hooks)

State Management: useState, useEffect, useMemo

Styling: Plain CSS with gradient animations

Storage: Browser LocalStorage (persistent data)

Components: Modular architecture for scalability

✨ Features Implemented
🧩 Core Functionality

✅ Add, Edit, Delete tasks (full CRUD)

✅ Auto-refresh on adding a task — no reload needed

✅ Mark tasks as Completed / Active

✅ Categorize tasks (Work, Personal, Study, Other)

✅ Set Priority Levels (High / Medium / Low)

✅ Filter by category or completion status

✅ Search tasks by title or description

✅ Sort and manage easily with intuitive layout

🎨 UI & Design

🌗 Dark/Light Mode toggle with smooth transition

🌈 Animated gradient buttons and glowing hover effects

🪩 Priority badges (color-coded for High / Medium / Low)

📊 Animated progress bar showing task completion

⚡ Animated modals and toast notifications

💎 Clean, modern dashboard UI (fully responsive)

💾 Data Persistence

LocalStorage integration — all tasks remain saved after refresh.

📱 Responsive Layout

Works perfectly across desktop, tablet, and mobile screens.

🧠 Challenges Faced

Instant UI Updates:
Initially, new tasks didn’t appear immediately after adding them.
✅ Solution: Implemented a functional state update with setTasks(prev => [task, ...prev]) to trigger instant re-render.

Edit Modal Data Sync:
Editing tasks caused state mismatch issues.
✅ Solution: Synced modal form state using useEffect when task prop changes.

Theme Persistence:
Dark/light mode would reset on refresh.
✅ Solution: Stored theme preference in localStorage and applied via useEffect.

Animations Without Libraries:
Creating smooth hover, button, and modal animations without frameworks was challenging.
✅ Solution: Crafted custom keyframe animations using pure CSS (gradient motion, slide/fade effects).

Maintaining Clean Architecture:
Splitting all functionality into modular, reusable React components to ensure clarity and scalability.