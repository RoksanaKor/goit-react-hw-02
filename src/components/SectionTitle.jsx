import React from "react";

export const SectionTitle = ({sectionTitle, children}) => {
 return (
  <>
   <h2>{sectionTitle}</h2>
   {children}
  </>
 )
}