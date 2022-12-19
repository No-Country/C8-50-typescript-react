import { useEffect} from 'react';
import useBoolean from '../../hooks/useBoolean';
import { useDispatch, useSelector } from 'react-redux';
import { getState } from '../../redux/action/actionState';
import { RootState } from '../../redux/store';
import { State } from '../../interface/state';
import CardProducts from '../../components/CardProduct/CardProducts';
import { ProductList } from '../../styled-components/styled.cardsDetail';
function ShowState(): any{
    const dispatch = useDispatch();
	const states = useSelector<RootState, State>((state) => state.realstate.listaStates);
	const [loading, setLoading] = useBoolean(false)
	const [errors, setErrros] = useBoolean(false)
	useEffect(() => {
		setLoading.on()
		dispatch<any>(getState()).then((response:any)=> response)
		  .catch(()=> { setErrros.on()})
		  .finally(()=> setLoading.off())
		console.log(states)
		
	}, [dispatch]);
    return (<>
    { errors ? "Ubo un Error": null}
			{ loading ?"Cargando"  :  (<ProductList>{Object.values(states).map((r:any)=><div key={r.id}><CardProducts {...r} /></div>)} </ProductList>)}
    </>)
}

export default ShowState;