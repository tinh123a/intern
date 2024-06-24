import { useEffect } from "react";
import {
  Form, Link, NavLink, Outlet, useLoaderData,
  // existing code
  useNavigation,
  useSubmit,
} from "react-router-dom";


import { createContact, getContacts } from "../contacts";
export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData();
  const submit = useSubmit();

  const searching =
  navigation.location &&
  new URLSearchParams(navigation.location.search).has(
    "q"
  );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            
            <form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                    const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            
            <Form method="post">
            <button type="submit">New</button>
            </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }><Outlet/></div>
      </>
    );
  }