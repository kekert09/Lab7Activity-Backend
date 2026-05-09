export const swaggerDocument = {
  "openapi": "3.0.0",
  "info": {
    "title": "Node.js Sign-up and Verification API",
    "version": "1.0.0",
    "description": "Node.js + MySQL - API with email sign-up, verification, authentication and forgot password"
  },
  "servers": [
    {
      "url": "https://lab7-activity-backend.vercel.app",
      "description": "Vercel Production server"
    },
    {
      "url": "http://localhost:4000",
      "description": "Local development server"
    }
  ],
  "paths": {
    "/accounts/authenticate": {
      "post": {
        "summary": "Authenticate account credentials and return a JWT token",
        "responses": { "200": { "description": "Authentication successful" } }
      }
    },
    "/accounts/register": {
      "post": {
        "summary": "Register a new user account",
        "responses": { "200": { "description": "Registration successful" } }
      }
    },
    "/accounts/verify-email": {
      "post": {
        "summary": "Verify a new account",
        "responses": { "200": { "description": "Email verified" } }
      }
    }
  }
};
