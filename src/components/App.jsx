import { PhoneForm } from './Phonebook/PhoneForm';
import { FormList } from './Phonebook/FormList.jsx';
import { ContactFilter } from './Phonebook/ContactFilter';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <div>
        <PhoneForm />
        {/* <ContactFilter /> */}
        <FormList />
      </div>
    </Layout>
  );
};
