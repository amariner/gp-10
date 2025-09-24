export interface ProjectEntry {
	image: string;
	alt: string;
	category: string;
	detail: string;
	title: string;
	year: number;
	url?: string;
}

const currentEditionProjects: ProjectEntry[] = [
	{
		image: '/assets/img/e3ece7b7b8f62425503debe77801c85ad4f776d2.png',
		alt: 'Imagen de Project blabla',
		category: 'A Estudio',
		detail: 'Boutique | 2024',
		title: 'Project blabla',
		year: 2024,
		url: '/proyecto-1'
	},
	{
		image: '/assets/img/5053d7d6175f8f7c138fa9e6a06aec108549c843.png',
		alt: 'Imagen de Project blabla',
		category: 'Arquify',
		detail: 'Boutique | 2024',
		title: 'Project blabla',
		year: 2024,
		url: '/proyecto-2'
	},
	{
		image: '/assets/img/55ec67c59da10488bbcd4650be232adaa0a6d386.png',
		alt: 'Imagen de Project blabla',
		category: 'Llave Maestra',
		detail: 'Boutique | 2024',
		title: 'Project blabla',
		year: 2024,
		url: '/proyecto-3'
	},
	{
		image: '/assets/img/9e38e88e74526b18e6b18b80305a5596f745ec82.png',
		alt: 'Imagen de Project phoenix',
		category: 'Innovatech',
		detail: 'Boutique | 2024',
		title: 'Project phoenix',
		year: 2024,
		url: '/proyecto-4'
	},
	{
		image: '/assets/img/c791e5f01c79702ed340a2e42cff261468a5c3a8.png',
		alt: 'Imagen de Project odyssey',
		category: 'DesignHub',
		detail: 'Boutique | 2024',
		title: 'Project odyssey',
		year: 2024,
		url: '/proyecto-5'
	},
	{
		image: '/assets/img/e85aa12860fc63574e64e92f3e9bbe70ffc5b2b1.png',
		alt: 'Imagen de Project horizon',
		category: 'Creative Minds',
		detail: 'Boutique | 2024',
		title: 'Project horizon',
		year: 2024,
		url: '/proyecto-6'
	},
	{
		image: '/assets/img/255f89d456012d16e1ab0debba26fd667a9c5290.png',
		alt: 'Imagen de Project nebula',
		category: 'Pixel Perfect',
		detail: 'Boutique | 2024',
		title: 'Project nebula',
		year: 2024,
		url: '/proyecto-7'
	},
	{
		image: '/assets/img/3e020396bc16debd7ff75a4fde90694977522c34.png',
		alt: 'Imagen de Project quantum',
		category: 'Future Designs',
		detail: 'Boutique | 2024',
		title: 'Project quantum',
		year: 2024,
		url: '/proyecto-8'
	},
	{
		image: '/assets/img/e59bcf4d0c4b019ef1a7547b39d8bf05c087fa16.png',
		alt: 'Imagen de Project nebula',
		category: 'Pixel Perfect',
		detail: 'Boutique | 2024',
		title: 'Project nebula',
		year: 2024,
		url: '/proyecto-9'
	},
	{
		image: '/assets/img/5049e4b2c3ab1d047033aa5d16cba7a6d8d83df0.png',
		alt: 'Imagen de Project quantum',
		category: 'Future Designs',
		detail: 'Boutique | 2024',
		title: 'Project quantum',
		year: 2024,
		url: '/proyecto-10'
	}
];

const previousEditionProjects: ProjectEntry[] = currentEditionProjects.map(({ year, detail, url, ...rest }) => ({
	...rest,
	detail: detail.replace('2024', '2023'),
	year: 2023
}));

export const projects: ProjectEntry[] = [
	...currentEditionProjects,
	...previousEditionProjects
];
