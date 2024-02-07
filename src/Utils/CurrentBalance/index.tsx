import { calculateTotalIncome } from '../CalculateTotalIncome';
import { calculateTotalOutputs } from '../CalculateTotalOutputs';

export function currentBalance(monthlyFinancialHistory: any[]): string {
    const totalRenda = calculateTotalIncome(monthlyFinancialHistory);
    const totalOthers = calculateTotalOutputs(monthlyFinancialHistory);

    const valueRenda = parseFloat(totalRenda.replace(/[^\d,]/g, '').replace(',', '.'));
    const valueOthers = parseFloat(totalOthers.replace(/[^\d,]/g, '').replace(',', '.'));

    const difference = valueRenda - valueOthers;

    const formattedDifference = difference.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formattedDifference;
}
