export function calculateTotalIncome(monthlyFinancialHistory: any[]): string {
    let total = 0;

    for (const item of monthlyFinancialHistory) {
        if (item.type === 'Renda') {
            const numericValue = parseFloat(item.value.replace(/[^\d,]/g, '').replace(',', '.'));

            total += numericValue;
        }
    }

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formattedTotal;
}
