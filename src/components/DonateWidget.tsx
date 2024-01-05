import { useEffect } from "react";

const DonateButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    if (!document.getElementById("buymeacoffee")) {
      console.warn("div named buymeacoffee not found");
      return;
    }

    const div = document.getElementById("buymeacoffee");
    script.setAttribute("data-name", "BMC-Widget");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "tommycdev");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "Buy me a coffee 😎");
    script.setAttribute("data-color", "#528D4D");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      var evt = new Event("DOMContentLoaded", { bubbles: false, cancelable: false });
      document.dispatchEvent(evt);
      window.dispatchEvent(evt);
    };
    if (div) {
      div.appendChild(script);
    }
  });

  return <div id="buymeacoffee"></div>;
};

export default DonateButton;
