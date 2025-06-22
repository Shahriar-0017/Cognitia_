## 🔗 **Backend-Frontend Route Mapping**

### **Authentication (`src/routes/auth.js`)**

- **Frontend Pages:**

- `/login` - Login page with email/password
- `/register` - Registration with user details and interests



- **API Endpoints:**

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/refresh` - Refresh JWT token





---

### **Questions (`src/routes/questions.js`)**

- **Frontend Pages:**

- `/dashboard` - Main feed showing questions
- `/question/[id]` - Individual question view



- **API Endpoints:**

- `GET /api/questions` - List questions with filters
- `GET /api/questions/:id` - Get specific question
- `POST /api/questions` - Create new question
- `PUT /api/questions/:id` - Update question
- `DELETE /api/questions/:id` - Delete question
- `POST /api/questions/:id/vote` - Vote on question
- `PATCH /api/questions/:id/resolve` - Mark as resolved





---

### **Answers (`src/routes/answers.js`)**

- **Frontend Pages:**

- `/question/[id]` - Answer submission and display



- **API Endpoints:**

- `POST /api/answers` - Create new answer
- `PUT /api/answers/:id` - Update answer
- `DELETE /api/answers/:id` - Delete answer
- `POST /api/answers/:id/vote` - Vote on answer
- `PATCH /api/answers/:id/accept` - Accept answer





---

### **Notes (`src/routes/notes.js`)**

- **Frontend Pages:**

- `/notes` - Notes listing (My Notes & Global Notes tabs)
- `/notes/[id]` - Note viewer with file tree



- **API Endpoints:**

- `GET /api/notes` - List notes with visibility filters
- `GET /api/notes/:id` - Get specific note
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note
- `GET /api/notes/groups/all` - Get user's note groups
- `POST /api/notes/groups` - Create note group
- `POST /api/notes/:id/rate` - Rate public note





---

### **Tasks (`src/routes/tasks.js`)**

- **Frontend Pages:**

- `/study-plan` - Task management and study planning
- `/dashboard` - Today's tasks in right sidebar



- **API Endpoints:**

- `GET /api/tasks` - List user's tasks with filters
- `GET /api/tasks/:id` - Get specific task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/status` - Update task status
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats/overview` - Task statistics





---

### **Sessions (`src/routes/sessions.js`)**

- **Frontend Pages:**

- `/study-plan` - Study session scheduling and tracking



- **API Endpoints:**

- `GET /api/sessions` - List user's study sessions
- `GET /api/sessions/:id` - Get specific session
- `POST /api/sessions` - Create new session
- `PUT /api/sessions/:id` - Update session
- `PATCH /api/sessions/:id/end` - End active session
- `DELETE /api/sessions/:id` - Delete session
- `GET /api/sessions/stats/overview` - Session statistics





---

### **Contests (`src/routes/contests.js`)**

- **Frontend Pages:**

- `/contests` - Contest listing and filtering
- `/contests/[id]` - Contest details and participation
- `/contests/create` - Contest creation form



- **API Endpoints:**

- `GET /api/contests` - List contests with filters
- `GET /api/contests/:id` - Get specific contest
- `POST /api/contests/:id/register` - Register for contest
- `DELETE /api/contests/:id/register` - Unregister from contest
- `POST /api/contests` - Create new contest
- `GET /api/contests/user/registrations` - User's registrations





---

### **Model Tests (`src/routes/model-tests.js`)**

- **Frontend Pages:**

- `/model-test` - Test listing and custom test creation
- `/model-test/[id]` - Take test interface
- `/model-test/results/[id]` - Test results view
- `/model-test/history` - Test attempt history



- **API Endpoints:**

- `GET /api/model-tests` - List available tests
- `GET /api/model-tests/:id` - Get specific test
- `POST /api/model-tests/:id/start` - Start test attempt
- `POST /api/model-tests/attempts/:id/answer` - Submit answer
- `POST /api/model-tests/attempts/:id/finish` - Finish test
- `GET /api/model-tests/attempts/:id/results` - Get results
- `GET /api/model-tests/user/history` - User's test history
- `POST /api/model-tests/custom` - Create custom test





---

### **Users (`src/routes/users.js`)**

- **Frontend Pages:**

- `/profile` - Current user profile
- `/profile/[id]` - Public user profiles



- **API Endpoints:**

- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/:id/profile` - Get public profile
- `GET /api/users/search` - Search users
- `GET /api/users/:id/activity` - User activity feed





---

### **Notifications (`src/routes/notifications.js`)**

- **Frontend Components:**

- `Navbar` - Notification dropdown
- All pages - Real-time notifications



- **API Endpoints:**

- `GET /api/notifications` - List user notifications
- `PATCH /api/notifications/:id/read` - Mark as read
- `PATCH /api/notifications/read-all` - Mark all as read
- `DELETE /api/notifications/:id` - Delete notification





---

### **Settings (`src/routes/settings.js`)**

- **Frontend Pages:**

- `/settings` - Settings overview
- `/settings/account` - Account settings
- `/settings/profile` - Profile settings
- `/settings/notifications` - Notification preferences
- `/settings/privacy` - Privacy settings
- `/settings/security` - Security settings
- `/settings/appearance` - Theme and display
- `/settings/language` - Language preferences
- `/settings/saved-items` - Saved content
- `/settings/activity-log` - Activity history
- `/settings/support` - Support tickets



- **API Endpoints:**

- `GET /api/settings` - Get all user settings
- `PUT /api/settings` - Update settings
- `GET /api/settings/activity-log` - Activity history
- `POST /api/settings/support` - Create support ticket
- `GET /api/settings/support` - List support tickets





---

## 🔄 **Cross-Cutting Features**

### **Voting System**

- **Used in:** Questions, Answers
- **Data:** `lib/voting-data.ts`
- **Functions:** `vote()`, `getVoteCount()`, `getUserVote()`


### **Saved Items**

- **Used in:** Questions, Notes
- **Data:** `lib/saved-items-data.ts`
- **Functions:** `saveQuestion()`, `isItemSaved()`, `unsaveItem()`


### **File Management**

- **Used in:** Notes system
- **Features:** File tree, upload, download, version control


This mapping shows how each backend route corresponds to specific frontend pages and functionality, making it easy to understand the full-stack architecture