import { AppDevelopmentServices } from '@/components/AppDevelopmentServices'
import Count from '@/components/Count/Count'
import { CustomMobileApp } from '@/components/CustomMobileApp'
import { HomeBanner } from '@/components/HomeBanner'
import SolutionProvider from '@/components/SolutionProvider/SolutionProvider'
import TrustedClients from '@/components/TrustedClients/TrustedClients'
import { Weknow } from '@/components/WeKnow'
import { Fragment } from 'react'



export default function Home() {
  return (
    <>
      <Fragment>
        <HomeBanner
          BannerRightImg='/images/Group 169.png' 
          SubHeading='Award-winning Mobile App Development Agency' 
          Heading={[
            <>
              Invest In <b>Digital Transformation</b> With Confidence
            </>
          ]}
          Description='Our in-house team offers the best mobile app development services who will be able to create amazing mobile apps for your business.' 
          btn={false} 
          BtnText='start a new project'
        />
        <TrustedClients  Heading='TRUSTED BY THE BEST' />
        <CustomMobileApp 
          TopHeading={[
            <>
              Custom Mobile App <br /> Development Company
            </>
          ]} 
          Description='Our unique approach to understanding problems coupled with decades of experience allows us to create tailored mobile apps that meet your business needs. Not only are we able to work on complex projects, but thanks to our agile approach to design and development, we are able to meet tight deadlines at a very competitive cost. The goal of our mobile app development services is to help our clients create stunning iOS, Android or cross platforms solutions that will give true shape and form to their unique business ideas. AppVerticals ensures that our apps have amazing UI/UX, are fully functional, have robust backends and are secure to keep both our clients and end users safe from modern day digital threats.'
          ImgSrc='/images/CustomMobileAppImg.png'
        />
        <Weknow 
          Heading={[
            <>
              WE KNOW. <br /> WE WILL ROCK <br /> YOU.
            </>
          ]}
          ImgUrl='/images/Group3578.png'
          SubDescription='Not the average website, not the average team, not the average products'
          Description='Our unique approach to understanding problems coupled with decades of experience allows us to create tailored mobile apps that meet your business needs. Not only are we able to work on complex projects, but thanks to our agile approach to design and development. For your mobile app to be successfully released on the Apple App Store or Google Play Store,.'
        />
       <AppDevelopmentServices 
        Heading={[
          <>
          Custom Mobile <br/>App Development Services
          </>
        ]}
        Description='At AppVerticals, we provide custom mobile app development services to meet your business needs.'
        BgImageURL='./images/Group3622.png'
        />
        <Count
          TopHeading='We have driven results for over 100+ startup businesses in the past 7 years.'
        />
        <SolutionProvider
          SubHeading='Leading Innovative'
          Heading='Solution Providers Of The Industry'
          Description='Creating a mobile app needs multiple design and development technologies. Explore the best ones we work on to deliver amazing mobile apps.'
        />
 
        
      </Fragment>
    </>
  )
}
