import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/questions.js";
import answerRoutes from "./routes/answers.js";
import noteRoutes from "./routes/notes.js";
import taskRoutes from "./routes/tasks.js";
import sessionRoutes from "./routes/sessions.js";
import contestRoutes from "./routes/contests.js";
import modelTestRoutes from "./routes/model-tests.js";
import notificationRoutes from "./routes/notifications.js";
import settingsRoutes from "./routes/settings.js";
import profileRoutes from "./routes/profile.js";
import dashboardRoutes from "./routes/dashboard.js";
//import searchRoutes from "./routes/search.js"
import analyticsRoutes from "./routes/analytics.js";

import errorHandler from "./middleware/errorHandler.js";
import { authenticateToken } from "./middleware/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000", // Local development frontend
  "http://127.0.0.1:3000", // Another common localhost variant
  process.env.FRONTEND_URL, // Production frontend URL from env
  // Add your Azure VM frontend URL here, for example:
  "http://135.235.192.167:3000", // Azure VM frontend URL
  // "https://yourdomain.azurewebsites.net"
].filter(Boolean); // Remove any undefined/null values

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        console.log(`CORS blocked request from: ${origin}`);
        console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
        callback(null, true); // Allow all origins in development
        // In production, you might want to use: callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Add this before your API routes
app.options('*', cors()); // Enable preflight for all routes

// Logging
app.use(morgan("combined"));

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/tasks", authenticateToken, taskRoutes);
app.use("/api/sessions", authenticateToken, sessionRoutes);
app.use("/api/contests", contestRoutes);
app.use("/api/model-tests", authenticateToken, modelTestRoutes);
app.use("/api/notifications", authenticateToken, notificationRoutes);
app.use("/api/settings", authenticateToken, settingsRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", authenticateToken, dashboardRoutes);
//app.use("/api/search", authenticateToken, searchRoutes)
app.use("/api/analytics", authenticateToken, analyticsRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,});
    method: req.method,
  });
});

app.use(errorHandler);
.listen(PORT, "0.0.0.0", () => {
// Start server  console.log(`🚀 Server running on port ${PORT}`);
app.listen(PORT, "0.0.0.0", () => {ealth check: http://localhost:${PORT}/health`);
  console.log(`🚀 Server running on port ${PORT}`);  console.log(`🔗 API base URL: http://localhost:${PORT}/api`);






export default app;});  console.log(`🔗 API base URL: http://localhost:${PORT}/api`);  console.log(`📊 Health check: http://localhost:${PORT}/health`);});

export default app;
