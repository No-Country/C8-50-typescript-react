import { NumericFormat } from 'react-number-format';
export function formatoMoney(money: any):any{
    return <NumericFormat value={money} displayType={'text'} thousandSeparator={true} prefix={'$'} />
}
