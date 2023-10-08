interface Course {
    _id: string;
    platformType: string;
    title: string;
    description: string;
    seo: {
        keywords: string;
    };
    img: string;
    mode: string;
    categoryId: string;
    batches: any[]; // You can specify the type more precisely if needed
    createdAt: string;
    tags: string[]; // You can specify the type more precisely if needed
    courseMeta: {
        instructors: string[];
        overview: {
            language: string;
            learn: string[];
            requirements: string[];
            features: string[];
        };
    }[];
    instructorsDetails: {
        _id: string;
        name: string;
        social: {
            linkedin?: string;
            instagram?: string;
            github?: string;
        };
        description: string;
        img: {
            source: string;
            link: string;
        };
    }[];
    courseInOneNeuron: {
        bundleName: string;
        bundleId: string;
    };
    pricing: {
        IN: number;
        US: number;
        discount: number;
        isFree: boolean;
    };
}
