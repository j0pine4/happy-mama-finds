import { EventsPaginated } from "~/models/events/event"

export const useEvents = () => {

    const config = useRuntimeConfig()

    const fetchEvents = () => {
        const {data, error} = useFetch<EventsPaginated>('https://www.eventbriteapi.com/v3/organizations/1627205569163/events/', {
            query: {
                'page_size': 4,
                'status': 'live'
            },
            headers: {
                'Authorization': 'Bearer ON4PFJ3ERIRHU3YFVUUM'
            }
        })

        return { data, error }
    }

    return {
        fetchEvents
    }

}