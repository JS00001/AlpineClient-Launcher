interface File {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string;
			caption: string;
			ext: string;
			size: number;
			url: string;
			createdAt: string;
			updatedAt: string;
		};
	};
}

// GET - /api/changelogs
interface ChangelogSection {
	title: string;
	details: string;
}

interface Changelog {
	id: number;
	attributes: {
		title: string;
		description: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		thumbnail: File;
		sections: ChangelogSection[];
	};
}

// GET - /api/partners

interface PartnerVersions {
	id: number;
	v010710: boolean;
	v010809: boolean;
	v011202: boolean;
	v011605: boolean;
	v011802: boolean;
	v011902: boolean;
}

interface Partner {
	id: number;
	attributes: {
		title: string;
		ip: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		logo: File;
		versions: PartnerVersions;
	};
}
