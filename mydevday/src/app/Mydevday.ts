export interface Mydevday {
    
    id?: number,
    title: string,
    text: string,
    image: string,
    created_at?: string,
    updated_at?: string,
    comments?: [{user_name: string; user_comment: string}];

}