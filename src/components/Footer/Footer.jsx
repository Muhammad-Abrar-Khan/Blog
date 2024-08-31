import React from 'react'
import {Button,Logo} from '../index'
import { Link } from 'react-router-dom'
function Footer() {

  return (
    <footer className=" text-center text-surface">

        <form>
          <div className="grid justify-center gap-3">

            <Link to='/' className="mt-5 flex justify-center sm:mt-10">
              <Logo   />
            </Link>

            <div className='flex '>
              <input
              className='border-[1px]  border-black p-2 rounded-3xl'
                type="email"
                id="exampleFormControlInputEmail2" 
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInputEmail2"
              >
              </label>

              <Button type='submit' className='p-2  text-center ml-2'>Subscribe</Button>


            </div>
            <div className='mt-5 mb-8'>
              Copyright  ©  2024. All rights reserved.
              </div>
          </div>


        </form>

    </footer>
  );
};

export default Footer;
