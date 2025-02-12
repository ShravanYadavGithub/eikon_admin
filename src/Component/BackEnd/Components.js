import BackAbout from './BackAbout';
import BackView from './BackView';
import BackAppointmentSuccess from './BackAppoinmentSuccess';
import BackServiceMapingEcommerce from './BackServiceMapingEcommerce';
import BackServiceMedical from './BackServiceMedical';
import BackFooter from './BackFooter';
import BackPatientReviews from './BackPatientReviews';
import BackHomePage from './BackHomePage';
import ImageUpload from './ImageUpload';

export const components = [
    {
    name:'About us',
    component:BackAbout
    },
    {
    name:'Enquiry List',
    component:BackView
    },
    {
    name:'Booked Appointments List',
    component:BackAppointmentSuccess
    },
    {
    name:'Medical Maping Ecommerce',
    component:BackServiceMapingEcommerce
    },
    {
    name:'Medical Service',
    component:BackServiceMedical
    },
    {
    name:'Footer page',
    component:BackFooter
    },
    {
    name:'Patient Review',
    component:BackPatientReviews
    },
    {
    name:'Home Banner',
    component:BackHomePage
    },
    {
    name:'Image Upload',
    component:ImageUpload
    },
]