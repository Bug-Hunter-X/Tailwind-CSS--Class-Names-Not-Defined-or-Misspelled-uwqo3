```javascript
//In your main app.js or equivalent
import './index.css'; //This is your main stylesheet

//Then in your component you use a style that is defined in your main stylesheet
function MyComponent() {
  return (
    <div className="bg-blue-500">
      <h1>Hello world</h1>
    </div>
  );
}

//index.css
//@tailwind base;
//@tailwind components;
//@tailwind utilities;
```