import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { ArrowRight } from '@components/icons';
import { Container } from '@components/layout/Container';

import { HomeMainSection } from '@components/home/HomeMainSection';
import { HomeTitleContent } from '@components/home/HomeTitle';
import { HomeContent } from '@components/home/HomeContent';
import { HomeImage } from '@components/home/HomeImage';
import { HomePostCard } from '@components/home/HomePostCard';
import { HomeWorkExperienceCard } from '@components/home/HomeWorkExperienceCard';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>W-log</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container
                className={`home-main w-100 flex flex-col px-8 sm:px-12 flex-column justify-between items-center`}
            >
                <HomeMainSection
                    title="I am Alive ✌🏼"
                    titleContent={<HomeTitleContent text="I am Alive ✌🏼" />}
                    description="안녕하세요 서울에서 프론트 엔지니어로 근무중인 김태웅입니다."
                />
                <HomeContent title="Recent Posts">
                    <HomePostCard
                        title="Strapi Serverless 구축하기"
                        description="wlog를 개발과정중에 문득 ssg방식으로 구축할건데
                            서버가 굳이 필요할까라는 결론을 내리게 되었고
                            serverless serverless... serverless..."
                        tags={['태그 1', '태그 2']}
                        href="asd"
                        createdAt="2022.06.13"
                    />
                    <HomePostCard
                        title="Strapi Serverless 구축하기"
                        description="wlog를 개발과정중에 문득 ssg방식으로 구축할건데
                            서버가 굳이 필요할까라는 결론을 내리게 되었고
                            serverless serverless... serverless..."
                        tags={['태그 1', '태그 2']}
                        href="asd"
                        createdAt="2022.06.13"
                    />
                    <Link href={'/'}>
                        <a className="inline-flex font-medium items-center text-primary-2 dark:text-sencondary">
                            {'View More'}
                            <ArrowRight className="ml-0.5 w-4 h-4" />
                        </a>
                    </Link>
                </HomeContent>
                <HomeContent title="Work Experience">
                    <HomeWorkExperienceCard
                        title="Gopizza Future Lab"
                        role="Front-end Developer"
                        workDate="2021.10 - current"
                    />
                    <HomeWorkExperienceCard
                        title="Weperson"
                        role="Front-end Developer"
                        workDate="2021.01 - 2021.03"
                    />
                    <HomeWorkExperienceCard
                        title="IICOMBINED IT Planning"
                        role="Web Developer"
                        workDate="2019.03 - 2020.12"
                    />
                    <HomeWorkExperienceCard
                        title="Studio HEYDEY"
                        role="Web Developer"
                        workDate="2017.04 - 2019.03"
                    />
                </HomeContent>
                <HomeContent title="About Me">
                    <p className="whitespace-pre-wrap font-medium text-primary-2 dark:text-sencondary">{`I’m currently a 4th year computer science major at CSUF.  My passion is to create beautiful products and experiences using web technologies.

I’m primarily a creative, and I first used code to help elevate the way I express myself.  Now, I use code to develop things on the web that help bring people closer together.

As I start to enter a full-time career in tech, I plan to shift my focus onto building apps and services that help people improve their relationships with tech.

When I’m not doing anything related to coding or designing, I’m spending time with friends and family, trying to survive college (lmao), playing my guitar, or making YouTube videos.`}</p>
                </HomeContent>
            </Container>
            <HomeImage
                src={
                    'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                }
                layout="fill"
            />
        </>
    );
};

export default Home;
