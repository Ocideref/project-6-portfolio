'use client';

import { Label, Select, TextInput } from 'flowbite-react';
import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="small"
                    value="Full Name"
                />
                </div>
                <TextInput
                id="small"
                sizing="sm"
                type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="small"
                    value="Company"
                />
                </div>
                <TextInput
                id="small"
                sizing="sm"
                type="text"
                />
            </div>


            <div
                className="max-w-md"
                id="select"
                >
                <div className="mb-2 block">
                    <Label
                    htmlFor="countries"
                    value="Select your country"
                    />
                </div>
                <Select
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
                </Select>
            </div>
        </div>
    </>
  )
}

export default ContactForm
