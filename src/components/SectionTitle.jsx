import React from "react";
import PropTypes from 'prop-types';

export const SectionTitle = ({sectionTitle, children}) => {
  return (
    <>
      <h2>{sectionTitle}</h2>
      {children}
    </>
  )
}

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.element
}