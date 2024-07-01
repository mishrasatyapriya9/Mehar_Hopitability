import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import toast, { Toaster } from "react-hot-toast";
//to use toast notidication just import it and use container in the layout ,then just import the toast in the page code and use toast.success("successfull") like this

//FOR NOTIFICATION MODIFY USED REACT-HOT-TOAST ,USE DOCUMENTATION IN NPMJS/REACT-TOASTIFY
//FOR SEO FRIENDLY WE USE REACT-HELEMET
import { Helmet } from "react-helmet";
const Layout = ({ children, title, keywords, description, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
        <meta name="author" content="{author}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>

      <Header />
      <Toaster />

      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerece app-shop now",
  description: "Merns stackj project",
  keywords: "Mern ,react,node,mongodb",
  author: "satyapriya mishra",
};

export default Layout;
