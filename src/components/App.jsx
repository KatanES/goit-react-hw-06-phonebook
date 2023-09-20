import { PhoneForm } from './Phonebook/PhoneForm';
import { FormList } from './Phonebook/FormList.jsx';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <div>
        <PhoneForm />
        <FormList />
      </div>
    </Layout>
  );
};
