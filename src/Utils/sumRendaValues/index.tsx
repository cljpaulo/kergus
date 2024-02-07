type FinancialRecord = {
    date: string;
    description: string;
    id: string;
    type: string;
    value: string;
};

type MonthlyFinancialHistory = {
    monthlyFinancialHistory: FinancialRecord[];
};

export const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const sumRendaValues = (data: MonthlyFinancialHistory): string => {
    const totalRenda = data.monthlyFinancialHistory
        .filter(item => item.type === 'Renda')
        .reduce((acc, item) => acc + parseFloat(item.value.replace(',', '.')), 0);

    return formatCurrency(totalRenda);
};
