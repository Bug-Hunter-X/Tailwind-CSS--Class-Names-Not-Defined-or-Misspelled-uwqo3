# Uncommon Tailwind CSS Bug: Undefined or Misspelled Class Names

This repository demonstrates a common yet easily overlooked issue in Tailwind CSS projects: using a class name that isn't defined in your main stylesheet or has a typo.  This can lead to styles not being applied as expected.

## The Problem
The `bug.js` file shows a simple component that uses the class name `bg-weird-color`.  However, this class is not defined in the corresponding CSS file (`index.css`). This results in no background color being applied.

## The Solution
The `bugSolution.js` file demonstrates the fix: Ensure the class name (`bg-weird-color` in this case, but replace with your actual class name) exists and is correctly spelled within your main Tailwind CSS stylesheet (`index.css`). This could involve adding the class directly, or ensuring the correct Tailwind directives are included.

## How to Reproduce
1. Clone the repository.
2. Run a simple development server (e.g., using Vite or Webpack).  You'll need a Tailwind CSS setup.
3. Observe the missing background color in the `bug.js` example.
4. Modify `index.css` to add the `bg-weird-color` utility class.
5. Notice that the background color is now correctly applied in `bugSolution.js`.

## Lesson Learned
Always double-check your class names against your Tailwind CSS configuration and your main stylesheet to avoid this common pitfall. Use your IDE's auto-completion feature to help prevent typos.