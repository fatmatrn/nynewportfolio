import {Metadata}  from 'next'

const title = 'Fatma Turan';
const description = 'Personal portfolio website of Fatma Turan. Java Developer, Frontend Devaloper, Full Stack Developer and more...'

//https://fatmaturanportfolio.vercel.app\

export const sharedMetaData: Metadata = {
    title,
    description,
    openGraph:{
        title,
    description,
    type: "website",
    locale: "en_US",
    url: "https://fatmaturanportfolio.vercel.app"
    }
};