export interface Comment {
	created_at: string;
	id: number;
	product: number;
	rate: number;
	text: string;
	created_by: Created[];
}

interface Created {
	id: number;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
}