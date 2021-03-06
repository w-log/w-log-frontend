import { GetStaticPropsContext } from 'next';
import { fetchAPI } from '@/lib/strapi/fetch';

import { IAbout } from '@/interface/About';
import { IGlobal } from '@/interface/Global';

import { IStrapiData } from '@/lib/strapi/types';
import { IPost, IPostCategory } from '@/interface/Post';

export const getStaticGlobalProps = async () => {
    const response = await fetchAPI<IStrapiData<IGlobal>>('/global', {
        populate: ['*', 'default_seo', 'default_seo.og_image', 'contact'],
    });

    return {
        props: {
            global: response.data,
        },
    };
};

export const getStaticPostListProps = async (ctx: GetStaticPropsContext) => {
    const currentCategory = ctx.params?.category?.[0] ?? '';
    const [categoryResponse, postListResponse] = await Promise.all([
        fetchAPI<IStrapiData<IPostCategory>[]>('/post-categories', {
            populate: '*',
        }),
        fetchAPI<IStrapiData<IPost>>('/posts', {
            sort: ['createdAt:desc'],
            populate: '*',
            filters: currentCategory
                ? {
                      post_categories: {
                          slug: currentCategory,
                      },
                  }
                : {},
        }),
    ]);

    return {
        props: {
            currentCategory,
            categories: categoryResponse.data,
            posts: postListResponse.data,
        },
    };
};

export const getStaticAboutProps = async () => {
    const [aboutRes, recentPostRes] = await Promise.all([
        fetchAPI<IStrapiData<IAbout>>('/about', {
            populate: '*',
        }),
        fetchAPI<IStrapiData<any>>('/posts', {
            sort: ['createdAt:desc'],
            populate: '*',
            pagination: {
                start: 0,
                limit: 2,
            },
        }),
    ]);

    return {
        props: {
            about: aboutRes.data,
            recentPosts: recentPostRes.data,
        },
    };
};
