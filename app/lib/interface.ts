export interface simpleBlogCard {
    title: string;
    author: string;
    category: string;   
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    date: string;
}

export interface fullBlogCard {
    title: string;
    author: string;
    category: string;   
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
    date: string;

    content: any;
}
