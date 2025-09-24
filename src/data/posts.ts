export interface PostEntry {
	image: string;
	alt?: string;
	title: string;
	date: string;
	link: string;
}

export const posts: PostEntry[] = [
	{
		image: '/assets/img/58f67a7b4a832ef65d2c75a22be0c5ebff4aacde.png',
		alt: 'V Aniversario Porcelanosa 10 de 10',
		title: 'V Aniversario Porcelanosa 10 de 10',
		date: 'Enero 2025',
		link: '/actualidad/v-aniversario-porcelanosa-10-de-10'
	},
	{
		image: '/assets/img/e59bcf4d0c4b019ef1a7547b39d8bf05c087fa16.png',
		alt: 'Descubre los ganadores de la edición 2024',
		title: 'Descubre los ganadores de la edición 2024',
		date: 'Diciembre 2024',
		link: '/actualidad/ganadores-edicion-2024'
	},
	{
		image: '/assets/img/b4b1780089460b1bac32ff6841b7ff1641b61009.png',
		alt: 'Arquitectura en México: 10 de 10 2023',
		title: 'Arquitectura en México: 10 de 10 2023',
		date: 'Octubre 2023',
		link: '/actualidad/arquitectura-mexico-2023'
	}
];
