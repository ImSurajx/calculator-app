/**
 * MAIN CONTROLLER
 * ----------------
 * Responsibilities:
 * - Hold application state (expression, result, error state)
 * - Receive input from UI layer
 * - Call validation layer
 * - Call tokenizer
 * - Call evaluator
 * - Update UI
 */

// Import UI
import { updateDisplay } from "./ui/dom.js";

// Import Engine
import { tokenize } from "./engine/tokenizer.js";
import { evaluate } from "./engine/evaluator.js";

// Import Validation
import { validateInput } from "./validation/validateInput.js";

// ---------------------------
// Application State
// ---------------------------

// Expression string (Single source of truth)
let expression = "";

// ---------------------------
// Controller Logic Placeholder
// ---------------------------

// Future:
// function handleInput(input) {}
// function handleEqual() {}
// function handleClear() {}

console.log("Calculator Engine App Initialized");