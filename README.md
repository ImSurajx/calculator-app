# 🧮 Calculator Engine App

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Architecture](https://img.shields.io/badge/Architecture-Modular-blue)
![Algorithm](https://img.shields.io/badge/Algorithm-Stack--Based-green)
![License](https://img.shields.io/badge/License-MIT-purple)

A modular JavaScript-based expression parsing and evaluation engine built from scratch using a stack-based algorithm with full operator precedence handling and bracket support.

This project focuses on mastering core JavaScript fundamentals, algorithm design, modular architecture, and hybrid Android packaging.

---

## 🚀 Why This Project Matters

This is **not** a simple calculator UI.

This project demonstrates:

- Custom expression parsing (no `eval()`)
- Two-stack evaluation algorithm
- Operator precedence handling
- Unary minus detection
- Bracket resolution
- Clean layered architecture
- ES Module usage
- Defensive error handling
- Hybrid Android packaging capability

---

## 🏗 Architecture Overview

The application follows a clean layered architecture:

```
+--------------------+
|       UI Layer     |
|       dom.js       |
+---------+----------+
          |
          v
+--------------------+
|   Controller Layer |
|       main.js      |
|  - Manages state   |
|  - Orchestrates    |
+---------+----------+
          |
          v
+--------------------+
|  Validation Layer  |
|  validateInput.js  |
+---------+----------+
          |
          v
+--------------------+
|     Tokenizer      |
|   tokenizer.js     |
|  String -> Tokens  |
+---------+----------+
          |
          v
+--------------------+
|     Evaluator      |
|   evaluator.js     |
|  Stack-Based Eval  |
+--------------------+
```

This separation ensures:

- Maintainability  
- Scalability  
- Testability  
- Clear responsibility boundaries  

---

## 📁 Folder Structure

```
calculator-engine-app/

├── index.html
├── README.md
├── LICENSE

├── src/
│   ├── main.js
│   │
│   ├── ui/
│   │   └── dom.js
│   │
│   ├── engine/
│   │   ├── tokenizer.js
│   │   ├── evaluator.js
│   │   └── operators.js
│   │
│   └── validation/
│       └── validateInput.js

└── assets/
    └── styles/
        └── style.scss
```

---

## 🧠 Core Concepts Implemented

### 1️⃣ Tokenization

- Converts infix expression string into structured token array
- Handles:
  - Multi-digit numbers
  - Decimal numbers
  - Unary minus
  - Nested brackets
- Throws structured syntax errors

---

### 2️⃣ Stack-Based Evaluation

Uses two stacks:

```
Numbers Stack     Operators Stack
--------------    ----------------
   2                  +
   3                  *
   4
```

Supports:

- Operator precedence  
- Left associativity  
- Bracket resolution  
- Division-by-zero detection  
- Final stack validation  

---

### 3️⃣ Defensive Validation Layer

Prevents:

- Consecutive invalid operators  
- Multiple decimals in a number  
- Improper bracket placement  
- Trailing operators  
- Invalid unary usage  

---

## 📐 Supported Expression Examples

```
2 + 3 * 4
(5 - 2) * 3
-4 + 6 / 2
(2 + 3) * (4 - 1)
```

---

## 📦 Hybrid Android Packaging (Planned)

The web application will be packaged into an Android APK using Capacitor.

Planned process:

1. Build web application  
2. Integrate Capacitor  
3. Generate Android project  
4. Build APK  
5. Publish APK in GitHub Releases  

---

## 🛠 Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![ES Modules](https://img.shields.io/badge/Modules-ESM-blue)
![Algorithm](https://img.shields.io/badge/Algorithm-Stack%20Based-green)
![Capacitor](https://img.shields.io/badge/Capacitor-Hybrid%20Android-purple)

---

## 📌 Current Status

Day 1 – Project Structure Setup  
Architecture finalized  
ES Modules configured  

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built as part of a focused JavaScript fundamentals and algorithm mastery journey.
