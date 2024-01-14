// // Chatbot.js
// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     // Embed Kommunicate script when the component mounts
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.async = true;
//     script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    
//     // Append the script to the head of the document
//     document.head.appendChild(script);

//     // Clean up the script when the component is unmounted
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <div>
//       {/* Your chatbot UI or other components go here */}
//     </div>
//   );
// };

// export default Chatbot;


// Chatbot.js
// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     const loadKommunicateScript = () => {
//       // Remove any existing Kommunicate scripts
//       const existingScripts = document.querySelectorAll('script[src^="https://widget.kommunicate.io"]');
//       existingScripts.forEach((script) => {
//         document.head.removeChild(script);
//       });

//       // Create a script element
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.async = true;

//       // Assign the source URL for the Kommunicate script
//       script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

//       // Set up an event listener to handle script load errors
//       script.onerror = (error) => {
//         console.error('Error loading Kommunicate script:', error);
//       };

//       // Append the script to the head of the document
//       document.head.appendChild(script);

//       // Clean up the script when the component is unmounted
//       return () => {
//         document.head.removeChild(script);
//       };
//     };

//     if (document.readyState === 'loading') {
//       // If the document is still loading, wait for it to be fully loaded
//       document.addEventListener('DOMContentLoaded', loadKommunicateScript);
//     } else {
//       // If the document is already loaded, load the script immediately
//       loadKommunicateScript();
//     }
//   }, []);

//   return (
//     <div>
//       {/* Your chatbot UI or other components go here */}
//     </div>
//   );
// };

// export default Chatbot;



