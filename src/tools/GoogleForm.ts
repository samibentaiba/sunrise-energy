import { useEffect } from "react";
import React, { ReactElement } from "react";



export const CustomGoogleForm = ({
  formId,
}: {
  formId: string;
}): ReactElement => {
  useEffect(() => {
    // Dynamically load the cgf.js script
    const script = document.createElement("script");
    script.src = "https://cdn.customgform.com/cgf.js"; // Path to the compiled cgf.js
    script.async = true;
    script.onload = () => {
      console.log("Custom Google Form script loaded");
    };
    document.body.appendChild(script);

    // Cleanup: Remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return React.createElement("div", { "data-customgform": formId });
};
