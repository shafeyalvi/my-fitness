# 🏋️ Fitness Tracker App

A React Native / Expo mobile application for tracking daily exercises.

## 📱 Screens

| Screen | Description |
|--------|-------------|
| **Home** | Lists all exercises with search, category filter, and progress tracking |
| **Exercise Detail** | Shows full exercise info: image, description, muscles, tips |
| **Add Exercise** | Form to create custom exercises |
| **Completed** | Shows completed exercises with calorie summary |
| **Motivation** | Motivational quotes fetched from ZenQuotes public API |

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your phone (Android/iOS)

### Installation

1. **Clone / Download the project**
   ```bash
   cd FitnessTrackerApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device**
   - Install **Expo Go** from App Store / Google Play
   - Scan the QR code shown in terminal or browser
   - OR press `a` for Android emulator / `i` for iOS simulator

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `expo` | Base Expo framework |
| `react-native` | Mobile UI framework |
| `@react-navigation/native` | Navigation container |
| `@react-navigation/native-stack` | Stack navigation |
| `@react-navigation/bottom-tabs` | Bottom tab navigation |
| `@react-native-async-storage/async-storage` | Persistent local storage |
| `@expo/vector-icons` | Icons (Ionicons) |
| `react-native-screens` | Native navigation screens |
| `react-native-safe-area-context` | Safe area handling |

## ✨ Features

- ✅ View a list of 8 default exercises
- ✅ Tap any exercise to view detailed information with image
- ✅ Add custom exercises with a form (name, category, difficulty, duration, calories, description, muscles, image URL)
- ✅ Mark exercises as complete / incomplete
- ✅ Filter exercises by category (Strength, Cardio, Core, HIIT, etc.)
- ✅ Search exercises by name
- ✅ View progress bar and stats on Home screen
- ✅ View all completed exercises in the Completed tab
- ✅ Motivational quotes fetched from ZenQuotes public API (with offline fallback)
- ✅ Share quotes via native share sheet
- ✅ All data persisted using AsyncStorage (survives app restarts)
- ✅ Delete exercises with confirmation

## 🏗️ Project Structure

```
FitnessTrackerApp/
├── App.js                          # Root component with navigation
├── app.json                        # Expo config
├── package.json                    # Dependencies
├── babel.config.js                 # Babel config
└── src/
    ├── screens/
    │   ├── HomeScreen.js           # Exercise list with stats
    │   ├── ExerciseDetailScreen.js # Exercise detail view
    │   ├── AddExerciseScreen.js    # Add custom exercise form
    │   ├── CompletedScreen.js      # Completed exercises
    │   └── QuotesScreen.js         # Motivational quotes
    ├── components/
    │   └── ExerciseCard.js         # Reusable exercise card
    ├── context/
    │   └── ExerciseContext.js      # Global state + AsyncStorage
    └── data/
        └── exercises.js            # Default exercise data
```

## 🎨 Design

- **Theme**: Dark mode with indigo accent color
- **Color Palette**: Slate dark backgrounds (`#0f172a`, `#1e293b`)
- **Accent**: Indigo (`#6366f1`) with semantic status colors
- **Icons**: Expo Vector Icons (Ionicons)

## 📡 API Used

- **ZenQuotes** – `https://zenquotes.io/api/quotes`
- Free, no API key required
- Falls back to local quotes if network is unavailable

---

**Student Assignment — Mobile Application Development**
