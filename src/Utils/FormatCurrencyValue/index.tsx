export const formatCurrencyValue = (value: string) => {
    const sanitizedValue = value.replace(/^-/, '');
    const numericValue = parseFloat(sanitizedValue.replace(',', '.'));

    const formattedValueWithSymbol = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(numericValue);

    const formattedValueWithoutSymbol = formattedValueWithSymbol.replace('R$', '').trim();

    return formattedValueWithoutSymbol;
};
