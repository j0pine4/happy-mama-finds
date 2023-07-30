import { Contact } from "~/models/contact/contact"

export const useContact = () => {

    const config = useRuntimeConfig()

    const CreateContactForm = async (contact: Contact) => {
        const { data, error } = await useFetch<Contact>(`${config.public.BASE_URL}/api/user/contact/`, {
            method: 'POST',
            body: contact
        })
        return { data, error }
    }

    return {
        CreateContactForm,
    }

}