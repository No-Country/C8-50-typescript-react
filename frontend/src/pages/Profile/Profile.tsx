import {
	PageContainer,
	BasicInfo,
	UserAvatar,
	ImgAv,
	UserName,
	Personal,
	Info,
	DataUser,
	Edit,
	NavLink,
	Data,
	Saved,
	Buttons,
} from '../../styled-components/styled.profile';
import Avatar from '../../assets/img/default.png';

function Profile(): any {
	/*  let {} = useParams() */

	return (
		<Data>
			<PageContainer>
				<BasicInfo>
					<UserAvatar>
						<ImgAv src={Avatar} alt='user' />
					</UserAvatar>
					<UserName>Juan Carlos</UserName>
				</BasicInfo>
				<Info>
					<DataUser>
						<Personal>Datos Personales </Personal>
					</DataUser>

					<DataUser>
						<Personal>Email: --------</Personal>
					</DataUser>
					<DataUser>
						<Personal>Telefono: --------</Personal>
					</DataUser>
					<DataUser>
						<Personal>Direccion: --------</Personal>
					</DataUser>
					<DataUser>
						<Personal>Codigo Postal: --------</Personal>
					</DataUser>
					<DataUser>
						<Personal>Provincia: --------</Personal>
					</DataUser>
					<DataUser>
						<Personal>Localidad: --------</Personal>
					</DataUser>
				</Info>
				<Edit>
					<NavLink to='#'>Editar</NavLink>
				</Edit>
			</PageContainer>
			<Saved>
				<Buttons>Mis Busquedas</Buttons>
				<Buttons>Favoritos</Buttons>
				<Buttons>Mensajes</Buttons>
				<Buttons>Citas Programadas</Buttons>
			</Saved>
		</Data>
	);
}

export default Profile;
