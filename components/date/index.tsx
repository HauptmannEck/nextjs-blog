import { parseISO, format } from 'date-fns'
import React from "react";

interface IProps {
    dateString: string;
}

const Date: React.FC<IProps> = ({ dateString }) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
};

export default Date;
