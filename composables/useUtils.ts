export const useUtils = () => {

    const convertDate = (dateStr: string | undefined) => {
        if(dateStr){
            const date = new Date(dateStr)
            return date.toDateString()
        }
    }

    const convertDateTime = (dateStr: string | undefined) => {
        if(dateStr){
            const date = new Date(dateStr).toLocaleDateString()
            const time = new Date(dateStr).toLocaleTimeString()
            return `${date} ${time}`
        }
    }

    return {
        convertDateTime,
        convertDate
    }

}