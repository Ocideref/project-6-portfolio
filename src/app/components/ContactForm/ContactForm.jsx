'use client';

import { Label, Select, TextInput, Textarea, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import React from 'react'


const ContactForm = () => {
  return (
    <>
        <form className="flex w-1/3 flex-col p-10 bg-zinc-950 mt-8">
         
            <div className="mb-1 block">
                <Label className='white'
                    htmlFor="name"
                    value="Full Name"
                    variant="standard"
                    color="gray"
                />
            </div>
            <TextInput className="mb-4" 
            id="name"
            sizing="sm"
            type="text"
            />
    
            <div className="mb-1 block">
                <Label className='white'
                    htmlFor="company"
                    value="Company"
                    color="gray"
                />
            </div>
            <TextInput className="mb-4" 
            id="company"
            sizing="sm"
            type="text"
            />

            <div className="mb-1 block">
                <Label className='white'
                    htmlFor="countries"
                    value="From where you write me?"
                    color="gray"
                />
            </div>
            <Select className="mb-4" 
                id="countries"
                required
            >
                <option>
                Argentina
                </option>
                <option>
                Chile
                </option>
                <option>
                Perú
                </option>
                <option>
                United States
                </option>
                <option>
                Canada
                </option>
                <option>
                Other
                </option>
            </Select>
    
            <div className="mb-1 block">
                <Label className='white'
                    htmlFor="email4"
                    value="Your email"
                    color="gray"
                />
            </div>
            <TextInput className="mb-4" 
                id="email4"
                placeholder="name@flowbite.com"
                required
                rightIcon={HiMail}
                type="email"
            />
    
            <div className="mb-1 block">
                <Label className='white'
                    htmlFor="message"
                    value="Message"
                    color="gray"
                />
            </div>
            <Textarea className="mb-4" 
            id="message"
            sizing="sm"
            type="text"
            />
             <Button type="submit">
                Submit
            </Button>
        </form>
    </>
  )
}

export default ContactForm
