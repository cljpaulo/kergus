import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function getMonthYearString(): string {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMM/yyyy', { locale: ptBR });

    return formattedDate.toUpperCase();
}
