export const customFormatCurrencyValue = (value: string): string => {
    if (/^\d{1,3}(\.\d{3})*,\d+$/.test(value)) {
        const numericValue = parseFloat(value.replace(/\./g, '').replace(',', '.'));

        const formattedValueWithSymbol = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(numericValue);

        const formattedValueWithoutSymbol = formattedValueWithSymbol.replace('R$', '').trim();

        return formattedValueWithoutSymbol;
    }

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
