import { Formik, Form, Field } from 'formik';
import logo from '../../public/logodivine.png'
import svimg from '../../public/bgsvjp.png'
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'



const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});



const Adminlogin = () => {

    const router = useRouter();

    const onSubmit = async (values, { setSubmitting }) => {

        console.log("values : ", values)
        try {
            const response = await axios.post('/api/admincontroller', values);
            console.log(response.data);
            console.log(response.status);
            if (response.status == 200) {
                router.push('/admin/adminpanel')
            }
            // else{
            router.push('/admin')
            // }

        } catch (error) {
            console.log(error);
        }
    };



    return (
        <Formik initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <>
                    <Form>
                        <div>
                            <section class="text-gray-600 body-font min-h-screen relative">
                                <img className='mx-auto w-4/4  lg:w-1/4  py-8' src={logo} alt='' />
                                <div className=''>
                                    <div className='flex justify-center py-8 z-40 '>
                                        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 z-40">
                                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                                            <div class="relative mb-4">
                                                <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
                                                <Field type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div class="relative mb-4">
                                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                                <Field type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>

                                            <button type="submit" class="text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-800 rounded text-lg text-center">Login</button>
                                            <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                                        </div>
                                    </div>
                                </div>

                                <img className='mx-auto w-4/4  lg:w-4/4  absolute bottom-0  ' src={svimg} alt='' />

                            </section>
                        </div>
                    </Form>





                </>




            )}
        </Formik>
    )
};

export default Adminlogin;