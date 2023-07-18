import Contacts from '@/components/Contacts/Contacts';

export default function Page() {
  const authKey = 'AIzaSyAiJeXyTEtchv8e2GTfUVl83zAcYb3C-M4';
  return <Contacts authKey={authKey} />;
}
