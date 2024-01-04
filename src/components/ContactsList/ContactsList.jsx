import { nanoid } from 'nanoid';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return <li key={nanoid()}>{item}</li>;
      })}
    </ul>
  );
};
