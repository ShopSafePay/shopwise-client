
import "@styles/global.css";

export const metadata = {
  title: "Shopwise",
  description: "online e-commerce",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
         
          {children}
      
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
