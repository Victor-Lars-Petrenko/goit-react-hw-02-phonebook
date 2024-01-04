import {
  Form,
  Label,
  FormInput,
  Button,
  InputWrap,
} from './FormToAddContact.styled';
import { nanoid } from 'nanoid';

const formNameId = nanoid();
const fornNumberId = nanoid();

export const FormToAddContact = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputWrap>
        <Label htmlFor={formNameId}>Name</Label>
        <FormInput id={formNameId} type="text" name="name" required />
      </InputWrap>
      <InputWrap>
        <Label htmlFor={fornNumberId}>Number</Label>
        <FormInput id={fornNumberId} type="tel" name="number" required />
      </InputWrap>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
