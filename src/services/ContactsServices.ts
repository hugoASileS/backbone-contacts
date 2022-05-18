import { IContactList } from "./IContactList";
import { IApiError } from "./IApiError";
import { IContact } from "./IContact";

const api = process.env.REACT_APP_API;
interface IUrlParams {
  perPage?: number;
  page?: number;
  _sort?: string;
  _contains?: string;
}

export async function getAllContacts(
  queryString: IUrlParams
): Promise<IContactList | IApiError> {
  try {
    const urlParams = new URLSearchParams(Object.entries(queryString));
    const response = await fetch(`${api}/contacts?` + urlParams);
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(response);
  } catch (error) {
    console.info(error);
    throw error;
  }
}

export async function createContact(
  contact: IContact
): Promise<IContact | IApiError> {
  try {
    const response = await fetch(`${api}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(response);
  } catch (error) {
    throw error;
  }
}
export async function updateContact(
  contact: IContact
): Promise<IContact | IApiError> {
  try {
    const response = await fetch(`${api}/contacts`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(response);
  } catch (error) {
    throw error;
  }
}
export async function deleteContact(id: string): Promise<IContact | IApiError> {
  try {
    const response = await fetch(`${api}/contacts`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(response);
  } catch (error) {
    throw error;
  }
}
