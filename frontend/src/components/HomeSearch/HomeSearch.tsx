import {
	InputBtn,
	Form,
	ContainerDiv,
	WrapperDiv,
	Input,
	Select,
	Button,
	BgSearch,
} from '../../styled-components/styled.homeSearch';

function HomeSearch(): any {
	const handleChange = (e: any): void => {
		const val = e.target.value;
		console.log(val);
	};

	const handleSelect = (e: any): void => {
		const optionArr = Object.values(e.target.selectedOptions).map(
			(op: any) => op.value
		);
		console.log(optionArr[0]);
	};
	const handleClick = (e: any): void => {
		const form = e;
		console.log(form);
	};

	const handleSubmit = (e: any): void => {
		e.preventDefault();
	};

	return (
		<BgSearch>
			<Form onSubmit={handleSubmit} className='search'>
				<ContainerDiv>
					<InputBtn
						onClick={() => {
							handleClick('alquilar');
						}}
					>
						Quiero alquilar
					</InputBtn>

					<InputBtn
						onClick={() => {
							handleClick('comprar');
						}}
					>
						Quiero comprar
					</InputBtn>

					<InputBtn
						onClick={() => {
							handleClick('vender');
						}}
					>
						Quiero vender
					</InputBtn>
				</ContainerDiv>

				<ContainerDiv>
					<WrapperDiv>
						<Input
							type='text'
							placeholder='¿Donde queres mudarte?'
							autoComplete='off'
							spellCheck='false'
							name='keywords'
							onChange={handleChange}
						/>
					</WrapperDiv>
					<WrapperDiv>
						<Select onChange={handleSelect}>
							<option value='casa'>casa</option>
							<option value='depto'>depto</option>
							<option value='chakra'>chakra</option>
						</Select>
					</WrapperDiv>

					<Button type='submit'>IR</Button>
				</ContainerDiv>
			</Form>
		</BgSearch>
	);
}

export default HomeSearch;
