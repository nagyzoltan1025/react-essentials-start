import { CORE_CONCEPTS } from "../data.js";

export default const CoreConcepts = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
