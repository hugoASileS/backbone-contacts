import { Routes, Route, Outlet, useParams } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts" element={<ContactsContainer />}>
          <Route path="" element={<ListContact />} />
          <Route path=":contactId/update" element={<UpdateContact />} />
          <Route path="create" element={<CreateContact />} />
          <Route path=":contactId/delete" element={<DeleteContact />} />
        </Route>
        <Route path="/email" element={<h1>Email</h1>} />
        <Route path="/file" element={<h1>File</h1>} />
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/role" element={<h1>Role</h1>} />
      </Routes>
    </Dashboard>
  );
}

function ContactsContainer() {
  return (
    <div>
      <h1>Contacts</h1>
      <Outlet />
    </div>
  );
}

function ListContact() {
  return <h2>List Contact</h2>;
}

function UpdateContact() {
  let { contactId } = useParams();
  return <h1>Update contact {contactId}</h1>;
}

function CreateContact() {
  return <h1>Create contact</h1>;
}

function DeleteContact() {
  let { contactId } = useParams();
  return <h1>Delete contact {contactId}</h1>;
}
