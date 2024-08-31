import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    return (
        <div className="w-full py-8 text-center">
            <Container>
                <div className="grid m-4 gap-4 sm:grid-cols-2">
                    <div className='flex flex-col justify-center'>
                        <div className='font-bold text-2xl mb-6'>Dive into a world of insightful articles made just for you.</div>
                        <div>Whether you're looking for the latest <b>trends</b>, or inspiring reads,</div>
                        <div className='mb-4'>we’ve got something for <b>everyone.</b></div>
                    </div>
                    <img src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.a04e2be1.png&w=3840&q=75" alt="" />
                </div>

                
            </Container>
        </div>
    );
}

export default Home;
