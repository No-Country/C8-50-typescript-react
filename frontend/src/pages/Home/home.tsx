import HomeSearch from '../../components/HomeSearch/HomeSearch';
import InfoHome from '../../components/Info-home';
import CardsInfo from '../../components/Cards-info';
import Info from './Info';
import { useEffect} from 'react';
import { getState } from '../../redux/action/actionState';
import { useDispatch, useSelector } from 'react-redux';
import Realstate from './State';
import { RootState } from '../../redux/store';
import useBoolean from '../../hooks/useBoolean';
import { State } from '../../interface/state';


export default function Home(): any {
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
	return (
		<>
			<HomeSearch />
			<InfoHome />
			<CardsInfo />
			<Info />
			{ errors ? "Ubo un Error": null}
			{ loading ?"Cargando"  :  (<div>{Object.values(states).map((r:any)=><div key={r}><Realstate {...r} /></div>)} </div>)
			
	}
			
		</>
	);
}
