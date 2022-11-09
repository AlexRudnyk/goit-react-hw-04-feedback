import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
