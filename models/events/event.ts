export interface Event{
    name: EventName,
    description: EventDescription,
    url: string,
    start: EventStart,
    end: EventEnd,
    logo: Logo,
}

export interface EventsPaginated{
    pagination: Pagination,
    events: Event[]
}

export interface EventName{
    text: string,
    html: string,
}

export interface EventDescription{
    text: string,
    html: string,
}

export interface EventStart{
    local: string,
    utc: string,
}

export interface EventEnd{
    local: string,
    utc: string,
}

export interface Logo{
    url: string,
}

export interface Pagination{
    object_count: number,
    page_number: number,
    page_size: number,
    page_count: number,
    has_more_items: boolean,
}


