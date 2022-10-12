import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <div className='m-10'>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email3"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email3"
                    type="email"
                    placeholder="name@flowbite.com"
                    required={true}
                    helperText={<React.Fragment>We’ll never share your details. Read our{' '}<Link to="/about" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</Link>.</React.Fragment>}
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                        value="Your message"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={4}
                />
            </div>
            <div className='mt-4'>
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Contact;