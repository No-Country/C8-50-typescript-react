import HomeSearch from '../../components/HomeSearch/HomeSearch';
import InfoHome from '../../components/Info-home';
import CardsInfo from '../../components/Cards-info';
import Info from './Info';


export default function Home(): any {

	return (
		<>
			<HomeSearch />
			<InfoHome />
			<CardsInfo />
			<Info />
		</>
	);
}
