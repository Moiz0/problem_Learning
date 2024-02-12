import React from "react";
 
import PrimarySearchAppBar from "./Bedbath/Navbar";
import CreateAccountForm from "./Bedbath/Account";
import NestedModal from "./Bedbath/Modal";
import MouseOverPopover from "./Bedbath/Popover";
import FakeApi from "./Bedbath/Apidata";

export default function App() {
  return (
    <div>
          <PrimarySearchAppBar /> 
          <FakeApi />
       
    </div>
  );
}
